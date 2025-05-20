

export default function AuthLayout ({children}: Readonly<{
  children: React.ReactNode;
}>){

    return <div>
        <div className="border-b text-3xl mb-5">NavBar</div>
        {children}
    </div>
}