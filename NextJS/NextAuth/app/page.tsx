// "use client";

import { getServerSession } from "next-auth"

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


export default async function OtherHome(){

  const session = await getServerSession();

  return <div>
    {JSON.stringify(session)}
  </div>
}


// export default function Home() {
//   return <SessionProvider>
//     <RealHome/>
//   </SessionProvider>
// }

// function RealHome(){

//   const session = useSession();

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

//     {session.status == "authenticated" ? <button onClick={() => signOut()}>Logout</button> : <button onClick={()=> signIn()}>SignIn</button>}
//     <br />
//     {JSON.stringify(session)}

//     </div>
//   );
// }

