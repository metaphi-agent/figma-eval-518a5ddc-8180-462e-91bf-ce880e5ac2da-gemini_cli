import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Signup2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
       <div className="flex justify-between items-center mb-4">
         <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
           ←
         </button>
         <div className="w-10" />
       </div>

       <h1 className="text-[30px] font-bold font-['Poppins'] mb-6 text-left">Create account</h1>

        <div className="mb-6 flex justify-center">
            <img src="./assets/images/1-219.png" alt="Illustration" className="w-auto h-[200px] object-contain" />
        </div>

       <form className="flex flex-col gap-4 mb-8">
         <Input label="Name" type="text" placeholder="John Doe" />
         <Input label="Email" type="email" placeholder="example@email.com" />
         <Input label="Password" type="password" placeholder="••••••••" />
         
         <Button className="mt-4" onClick={() => navigate('/signup-3')}>Create account</Button>
       </form>

       <div className="mt-auto text-center text-xs text-gray-500 max-w-[260px] mx-auto leading-relaxed">
         By creating an account or signing you agree to our <span className="text-black font-semibold underline">Terms and Conditions</span>
       </div>
    </div>
  );
};
