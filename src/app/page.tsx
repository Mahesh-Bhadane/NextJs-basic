

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello',{next:{
    revalidate:60
  }});
  const data = await res.json();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-2xl'>Home</h1>
      {data && JSON.stringify(data, null, 6)}
    </main>
  )
}
