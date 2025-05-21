export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
}
