export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full text-white">
      <div className="flex h-20 items-center border-y border-gray-600 px-4">
        <h2 className="text-4xl font-bold">CrossMeasure</h2>
      </div>
      {children}
    </main>
  );
}
