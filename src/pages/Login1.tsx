import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { SocialButton } from '../components/ui/SocialButton';

export const Login1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
       <div className="flex justify-between items-center mb-8">
         <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
           ←
         </button>
         <span className="text-[18px] font-semibold">Sign In</span>
         <div className="w-10" />
       </div>

       <h1 className="text-[32px] font-bold font-['Poppins'] mb-8 text-center">Welcome Back</h1>

       <form className="flex flex-col gap-4 mb-8">
         <Input label="Email" type="email" placeholder="example@email.com" />
         <Input label="Password" type="password" placeholder="••••••••" />
         <div className="text-right">
           <button type="button" className="text-[#E64646] text-sm font-medium">Forgot Password?</button>
         </div>
         <Button className="mt-4">Log In</Button>
       </form>

       <div className="flex flex-col gap-4">
         <div className="relative text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative bg-white px-2 text-sm text-gray-500">Or sign in with</span>
         </div>
         <div className="grid grid-cols-2 gap-4">
            <SocialButton iconName="google" />
            <SocialButton iconName="facebook" />
         </div>
       </div>

       <div className="mt-auto text-center text-sm text-gray-600">
         Don't have an account? <button onClick={() => navigate('/signup-1')} className="text-black font-semibold">Sign Up</button>
       </div>
    </div>
  );
};