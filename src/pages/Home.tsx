import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-[130px] pb-10 relative overflow-hidden">
      {/* Illustration area */}
      <div className="mb-[45px]">
        <img 
          src="./assets/images/illustration-home.svg" 
          alt="Welcome illustration" 
          className="w-full h-auto max-w-[315px]" 
        />
      </div>

      {/* Text area */}
      <div className="flex flex-col items-center gap-2 mb-auto w-full max-w-[320px]">
        <h1 className="text-[32px] font-bold font-['Poppins'] leading-[42px] text-black text-left self-start pl-4">
          Explore the app
        </h1>
        <p className="text-[17px] text-black/70 text-center leading-[21px]">
          Now your finances are in one place and always under control
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-[14px] w-full max-w-[353px]">
        <Button onClick={() => navigate('/login-1')}>Sign In</Button>
        <Button variant="secondary" onClick={() => navigate('/signup-1')}>Create account</Button>
      </div>
    </div>
  );
};