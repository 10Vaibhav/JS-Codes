"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { sendVerificationEmail } from "@/actions/emailActions";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const [email, setEmail] = useState("");

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("logout successful");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const sendVerification = async () => {
        try {
            const result = await sendVerificationEmail(email, data);
            if (result.success) {
                toast.success("Verification email sent successfully!");
            } else {
                toast.error(result.message);
            }
            router.push("/verifyemail")
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    }

    useEffect(() => {
        const getMail = async () => {
            try {
                const res: any = await axios.get("/api/users/me");
                setEmail(res.data.data.email);
                setData(res.data.data._id);
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        }

        getMail();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <h1>Profile Page</h1>
            <hr />
            <h2 className="p-3 rounded bg-green-500">
                {data === "nothing" ? "nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2>
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
            <hr />
            <button
                onClick={getUserDetails}
                className="bg-orange-500 mt-4 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
                Get User Data
            </button>

            <button
                onClick={sendVerification}
                className="bg-orange-500 mt-4 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
                Verify User
            </button>
        </div>
    )
}