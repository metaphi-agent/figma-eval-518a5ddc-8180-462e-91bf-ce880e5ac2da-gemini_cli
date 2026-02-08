import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col pt-[60px]">
       <div className="flex justify-between items-center mb-4">
         <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
           ←
         </button>
         <div className="w-10" />
       </div>

       <h1 className="text-[30px] font-bold font-['Poppins'] mb-2 text-left">Forgot password?</h1>
       <p className="text-[16px] text-gray-500 mb-8 leading-relaxed">
         Don’t worry! It happens. Please enter the email associated with your account.
       </p>

        <div className="mb-8 relative">
            <img src="./assets/images/1-80.png" alt="Star" className="w-[46px] h-[44px]" />
        </div>

       <form className="flex flex-col gap-4 mb-8">
         <Input label="Email address" type="email" placeholder="example@email.com" />
         
         <Button className="mt-4" onClick={() => navigate('/forgot-password-code')}>Send code</Button>
       </form>

       <div className="mt-auto text-center text-sm text-gray-600">
         Remember password? <button onClick={() => navigate('/login-1')} className="text-black font-semibold underline decoration-solid">Log in</button>
       </div>
    </div>
  );
};
