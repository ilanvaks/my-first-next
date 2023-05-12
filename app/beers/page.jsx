async function getData() {
  const res = await fetch("https://https://lacetalk-iv.web.app/sneaker")
  if(!res.ok) {
    throw new Error('Failed to fetch data from SampleAPIs')
  }
  return res.json()
} 

export default async function Page () {
  const data = await getData()
  return (
    <main className="p-8">
      <h1 className="text-blue-500 text-6xl font-extrabold text-center">The Beers</h1>
      {sneakers.map(element => (
        <div> key={element._id}
          <h2>{element.title}</h2>
        </div>
      ))}
    </main>
  )
}