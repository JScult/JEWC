export const dynamic = 'force-static'; // Isolate this layout from the root layout

console.log("Admin layout applied");

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}