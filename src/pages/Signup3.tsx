import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';

export const Signup3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col pt-[60px]">
       <h1 className="text-[30px] font-bold font-['Poppins'] mb-8 text-left">Create account</h1>

        <div className="mb-8 relative">
            <img src="./assets/images/1-80.png" alt="Star" className="w-[46px] h-[44px]" />
        </div>

       <form className="flex flex-col gap-4 mb-8">
         <Input label="Username" type="text" placeholder="username" />
         <Input label="Email" type="email" placeholder="example@email.com" />
         <Input label="Password" type="password" placeholder="••••••••" />
         
         <div className="my-2">
            <Checkbox label={<span className="text-gray-500">I accept the <span className="text-black font-semibold underline">terms</span> and <span className="text-black font-semibold underline">privacy policy</span></span>} />
         </div>

         <Button className="mt-4">Sign Up</Button>
       </form>

       <div className="mt-auto text-center text-sm text-gray-600">
         Already have an account? <button onClick={() => navigate('/login-1')} className="text-black font-semibold underline decoration-solid">Log in</button>
       </div>
    </div>
  );
};
