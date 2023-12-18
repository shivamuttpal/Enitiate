import { useState } from 'react';


const Web = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    if (email && password && agreed) {
      alert(`Logging in with Email: ${email}, Password: ${password}`);
      // Replace the alert with your actual authentication logic
    } else {
      alert('Please fill in all fields and agree to the Terms & Conditions.');
    }
  }; 

  return (
    <div className="relative bg-gradient-to-b from-[#79f2ec] to-[#14518e] w-full min-h-screen overflow-hidden text-left text-white font-poppins">

      <div className="absolute top-[10%] left-[5%] md:left-[10%] lg:left-[15%] rounded-16xl bg-gradient-to-b from-[#080d0d] to-[#173b4d] w-[90%] md:w-[80%] lg:w-[70%] min-h-1/2 md:min-h-[60%] lg:min-h-[70%] py-5 flex flex-col md:flex-row">
        <div className=" top-0 left-0 w-full md:w-1/2 h-auto   p-7">

          <div className="flex">
            <img
              className="w-[70px] md:w-[70px] h-[70px] mt-4 md:mt-0"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className="ml-3">Logo</h2>
          </div>
          <div className="hidden md:block m-20"> {/* Hide on small screens */}
            <img
              src="/main.png"
              alt=""
              className="him w-full md:w-[70%] h-[70%] object-cover rounded-full"
            />
          </div>
        </div>


        {/* Login Section */}
        <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center mt-4 md:mt-0">
          {/* Your login logic here */}
          <h2>Login to your account</h2>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md p-2 m-2 w-[80%] md:w-[60%] bg-black text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 m-2 w-[80%] md:w-[60%] bg-black text-white"
          />
          <div className='flex items-center'>
            <input type="checkbox" className="checkbox" />
            <p className="text-white ml-2">I agree to terms and conditions</p>
          </div>
          <button className="bg-blue-500 text-white p-2 pointer rounded-md w-[80%] md:w-[60%]">Login</button>
        </div>

      </div>


    </div>
  );
};

export default Web;
