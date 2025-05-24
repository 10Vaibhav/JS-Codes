"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const router = useRouter();

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try{
      setLoading(true);
      const response  = await axios.post("http://localhost:3000/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    }catch(error: any){
      console.log("Signup failed", error);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=> {

    if(user.email.length > 0 && user.password.length > 0 && user.username.length> 0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }

  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {loading ? "Processing" : "Signup"}
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-200 mb-3"
            >
              Username
            </label>
            <input
              id="username"
              value={user.username}
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 p-4 border border-white/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200 mb-3"
            >
              Email
            </label>
            <input
              id="email"
              value={user.email}
              type="text"
              placeholder="Enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 p-4 border border-white/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-200 mb-3"
            >
              Password
            </label>
            <input
              id="password"
              value={user.password}
              type="password"
              placeholder="Enter password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 p-4 border border-white/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
            />
          </div>

          <button
            onClick={onSignup}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400/30"
          >
            {buttonDisabled ? "No Signup": "Signup Here!"}
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium hover:underline"
          >
            Visit Login Page
          </Link>
        </div>
      </div>
    </div>
  );
}
