
import Link from "next/link";

export default function Home() {

  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        Todo Application
        <br />
        <Link className="text-md border m-2" href={"/signin"}>Sign In to Todo Application</Link>
        <br />
        <Link className="text-md border m-2" href={"/signup"}>Sign Up to Todo Application</Link>
      </div>
    </div>
  );
}
