"use client";

import axios from "axios";
import { useState } from "react";

export default function Forgot() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onSend = async () => {
    if(email.length > 0){
      try {
        setLoading(true);
        const response = await axios.post("/api/users/forgot",{email: email});
        console.log(response.data);
      } catch (error: any) {
        console.log(error.message);
      }finally{
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {loading ? "Processing" : "Enter Email"}
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200 mb-3"
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              type="text"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 p-4 border border-white/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
            />
          </div>

          <div>
            <button
              onClick={onSend}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400/30"
            >
              {loading ? "Sending Mail..": "Fill Email Box"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
