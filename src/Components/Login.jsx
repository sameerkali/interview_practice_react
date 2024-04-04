import React from "react";

const Login = () => {
  return (
    <div className="max-w-[20rem] max-h-[40rem] mx-auto p-4  shadow-md rounded-md mt-40 w-1/2">
      <div className="mb-4 flex flex-col">
        <span className="text-4xl font-semibold">Welcome</span>
        <span className="text-4xl font-semibold">Back!</span>
      </div>
      <div className="mb-4">
        <div className="flex justify-center items-center  border border-gray-300 rounded-md">
          <p>X</p>
          <input type="text" className="block w-full p-2" />
        </div>
        <div className="flex justify-center items-center  border border-gray-300 rounded-md mt-5">
          <p>X</p>
          <input type="password" className="block w-full p-2 " />
          <p>X</p>
        </div>
      </div>
      <span className="text-sm text-gray-500 flex flex-row-reverse">Forgot password?</span>
      <button className="w-full mt-4 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Login
      </button>
      <div className="mt-4 mb-2 flex items-center justify-center">
        <span className="text-sm text-gray-500 mt-10">- or continue with -</span>
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md mr-2 hover:bg-red-600">
          Google
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          Google
        </button>
      </div>
      <p className="mt-4 text-center mb-10">
        Create An Account{" "}
        <a className="underline  " href="#">
          SignUp
        </a>
      </p>
    </div>
  );
};

export default Login;
