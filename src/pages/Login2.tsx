import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { SocialButton } from '../components/ui/SocialButton';

export const Login2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col pt-[60px]">
       <h1 className="text-[30px] font-bold font-['Poppins'] mb-8 text-left">Hi, Welcome!</h1>

        <div className="mb-8 relative">
            <img src="./assets/images/1-80.png" alt="Star" className="w-[46px] h-[44px]" />
        </div>

       <form className="flex flex-col gap-4 mb-8">
         <Input label="Email address" type="email" placeholder="example@email.com" />
         <Input label="Password" type="password" placeholder="••••••••" />
         
         <div className="flex justify-between items-center my-2">
            <Checkbox label="Remember me" />
            <button type="button" className="text-[#E64646] text-sm font-medium">Forgot password?</button>
         </div>

         <Button className="mt-4">Log in</Button>
       </form>

       <div className="flex flex-col gap-6 mb-8">
         <div className="relative text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative bg-white px-2 text-sm text-gray-500">Or with</span>
         </div>
         <div className="grid grid-cols-2 gap-4">
            <SocialButton iconName="google" />
            <SocialButton iconName="facebook" />
         </div>
       </div>

       <div className="mt-auto text-center text-sm text-gray-600">
         Don’t have an account? <button onClick={() => navigate('/signup-1')} className="text-black font-semibold underline decoration-solid">Sign up</button>
       </div>
    </div>
  );
};
