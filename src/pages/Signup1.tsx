import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Signup1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-[130px] pb-10 relative overflow-hidden">
      {/* Illustration area - same as Home */}
      <div className="mb-[45px]">
        <img 
          src="./assets/images/illustration-home.svg" 
          alt="Illustration" 
          className="w-full h-auto max-w-[315px]" 
        />
      </div>

      {/* Text area */}
      <div className="flex flex-col items-center gap-2 mb-8 w-full max-w-[320px]">
        <h1 className="text-[30px] font-bold font-['Poppins'] leading-[39px] text-black text-left self-start">
          Explore the app
        </h1>
        <p className="text-[16px] text-black/70 text-center leading-[20px]">
          Now your finances are in one place and always under control
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-[10px] w-full max-w-[353px] mb-auto">
        <Button 
            variant="outline" 
            className="bg-white border-gray-200 justify-start px-6 font-normal text-black"
            icon={<img src="./assets/icons/google.svg" alt="" className="w-5 h-5" />}
        >
            Continue with Google
        </Button>
        <Button 
            variant="outline" 
            className="bg-white border-gray-200 justify-start px-6 font-normal text-black"
            icon={<img src="./assets/icons/apple.svg" alt="" className="w-5 h-5" />}
        >
            Continue with Apple
        </Button>
        <Button 
            variant="primary" 
            className="justify-start px-6 font-semibold"
            icon={<img src="./assets/icons/mail.svg" alt="" className="w-5 h-5 invert" />}
            onClick={() => navigate('/signup-2')}
        >
            Sign up with Email
        </Button>
      </div>

       <div className="mt-auto text-center text-sm text-gray-600">
         Already have an account? <button onClick={() => navigate('/login-1')} className="text-black font-semibold underline decoration-solid">Log in</button>
       </div>
    </div>
  );
};
