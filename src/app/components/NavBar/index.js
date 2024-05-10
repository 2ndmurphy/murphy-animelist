"use client"

import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-4">
        <Link href="/" className="font-bold text-white text-2xl">CUYANIMELIST</Link>
        <InputSearch/>
      </div>
    </header>
  )
}

export default Navbar