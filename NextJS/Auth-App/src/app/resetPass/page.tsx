"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassPage() {
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/updatePass", { token, newPass });
      setLoading(false);
      router.push("/profile");
    } catch (error: any) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {loading ? "Processing" : "Update Password"}
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200 mb-3"
            >
              New Password
            </label>
            <input
              id="newPass"
              value={newPass}
              type="text"
              placeholder="Enter New Password"
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 p-4 border border-white/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
            />
          </div>

          <div>
            <button
              onClick={onSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400/30"
            >
              {loading ? "Updating.." : "No Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
