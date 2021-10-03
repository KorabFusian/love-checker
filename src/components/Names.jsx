import { useState } from 'react'
import Calculator from './Calculator'
import Footer from './Footer'
import Header from './Header'

const Names = () => {
  const [name1, setname1] = useState('')
  const [name2, setname2] = useState('')
  const [seed, setseed] = useState('')

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-3 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div className="relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20 flex flex-col">
        <Header />
        <input
          value={name1}
          onInput={(e) => setname1(e.target.value)}
          type="text"
          placeholder="Name 1"
          className="block bg-pink-100 border-2 border-transparent hover:border-opacity-25 hover:border-pink-400 rounded-lg p-3 mt-6"
        />
        <input
          value={name2}
          onInput={(e) => setname2(e.target.value)}
          type="text"
          placeholder="Name 2"
          className="block bg-pink-100 border-2 border-transparent hover:border-opacity-25 hover:border-pink-400 rounded-lg p-3 mt-6"
        />
        <button
          className="mx-auto mt-4 py-3 sm:my-4 rounded-full px-5 hover:bg-red-600 bg-red-200"
          onClick={() => setseed(name1 + ' ' + name2)}
        >
          Check !
        </button>
        <Calculator seed={seed} />
        <Footer />
      </div>
    </div>
  )
}

export default Names
