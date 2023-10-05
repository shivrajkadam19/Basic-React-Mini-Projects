import { useEffect, useState } from 'react'

function App() {
  const [color, setColor] = useState(localStorage.getItem('selectColor') || "olive")

  useEffect(() => {
    localStorage.setItem('selectColor',color)
  },[color])
  return (
    <div
      className="w-full h-screen flex flex-wrap duration-500"
      style={{ backgroundColor: color }}
    >
      <div
        className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'
      >
        <div
          className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
        >
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("red")}
            style={{ backgroundColor: "Red" }}
          >Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("cyan")}
            style={{ backgroundColor: "cyan" }}
          >Cyan</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
          >Orange</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("indigo")}
            style={{ backgroundColor: "indigo" }}
          >Indigo</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}
          >Indigo</button>
        </div>
      </div>

    </div>
  )
}

export default App
