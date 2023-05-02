export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-2xl'>Common</h1>
        {children}
      </main>
    )
  }