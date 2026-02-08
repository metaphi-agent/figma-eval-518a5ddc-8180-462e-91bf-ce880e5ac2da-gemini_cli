import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center text-center">
       <div className="mb-8 relative flex justify-center items-center">
            {/* Composition of stars */}
            <div className="relative w-[100px] h-[100px]">
                <img src="./assets/images/1-80.png" alt="Star" className="absolute top-0 left-0 w-[60px] h-[60px]" />
                <img src="./assets/images/1-546.png" alt="Star Small" className="absolute bottom-0 right-0 w-[40px] h-[40px]" />
            </div>
        </div>

       <h1 className="text-[30px] font-bold font-['Poppins'] mb-4">Password changed</h1>
       <p className="text-[16px] text-gray-500 mb-12 max-w-[260px] leading-relaxed">
         Your password has been changed succesfully
       </p>

       <div className="w-full max-w-[353px]">
         <Button onClick={() => navigate('/login-1')}>Back to login</Button>
       </div>
    </div>
  );
};
