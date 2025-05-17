'use client'
import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const SearchBar = ({ onClose }: { onClose: () => void }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="fixed inset-0 bg-opacity-60 z-50 flex items-start justify-center pt-24">
      <div className="bg-white w-full max-w-xl mx-auto p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-lg">
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Search Products</h2>
        <input
          type="text"
          placeholder="Search attars, perfumes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />
      </div>
    </div>
  )
}

export default SearchBar
