import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const ForgotPasswordCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col pt-[60px]">
       <div className="flex justify-between items-center mb-4">
         <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
           ←
         </button>
         <div className="w-10" />
       </div>

       <h1 className="text-[30px] font-bold font-['Poppins'] mb-2 text-left">Please check your email</h1>
       <p className="text-[16px] text-gray-500 mb-8 leading-relaxed">
         We’ve sent a code to <span className="text-black font-medium">helloworld@gmail.com</span>
       </p>

       <div className="flex gap-4 justify-center mb-8">
         {otp.map((data, index) => (
            <input
              className="w-[77px] h-[77px] border border-gray-200 rounded-[15px] text-center text-[32px] font-medium focus:border-black focus:outline-none transition-colors"
              type="text"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          ))}
       </div>

       <div className="flex justify-center items-center gap-2 mb-8 text-[16px]">
         <button className="text-black font-semibold underline decoration-solid">Send code again</button>
         <span className="text-gray-500">00:20</span>
       </div>

       <Button onClick={() => navigate('/reset-password')}>Verify</Button>
    </div>
  );
};
