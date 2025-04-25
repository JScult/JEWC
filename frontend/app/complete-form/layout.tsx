export const dynamic = 'force-static'; // Isolate this layout from the root layout

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>; // Render only the children without applying the root layout
}