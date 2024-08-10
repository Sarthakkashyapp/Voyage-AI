import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {
  const [user, setUser] = useState(null); // Use useState for user
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Get user from localStorage
    setUser(storedUser); // Set user state
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data); // Update user state
      setOpenDialog(false);
      window.location.reload();
    });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null); // Clear user state
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 bg-gray-200 gap-2'>
      <img src='/Orange.png' className='h-[40px] w-[140px] object-cover rounded-md'/>
      <div >
        { user? (// Conditional rendering based on user state
          <div className='flex items-center gap-1'>
          <a href='/create-trip'>
            <Button variant="outline"
              className="rounded-full">+ Create Trip</Button>
          </a>
          <a href='/my-trips'>
            <Button variant="outline"
              className="rounded-full">My Trips</Button>
          </a>
          <Popover>
            <PopoverTrigger>
              <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' />
            </PopoverTrigger>
            <PopoverContent>
              <h2 className='cursor-pointer' onClick={handleLogout}>Logout</h2> {/* Call handleLogout */}
            </PopoverContent>
          </Popover>
          </div>
         ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}> {/* Added onOpenChange */}
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/Orange.png" className='h-[40px] w-[150px] object-cover rounded-md'/>
              <h2 className='font-bold text-lg mt-7 text-gray-800'>Sign In with Google</h2>
              <p className='text-gray-600'>Sign In to the app with Google Authentication securely</p>
              <Button onClick={login}
                className="w-full mt-5 flex gap-4 items-center">
                <FcGoogle className='h-7 w-7' />
                Sign In with Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header;
