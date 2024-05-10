import Link from "next/link"
import inpSearch from "./inpSearch"

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-4">
        <Link href="/" className="font-bold text-white text-2xl">CUYANIMELIST</Link>
        <input type="text" placeholder="Cari anime..." className="p-2"/>
        <inpSearch/>
      </div>
    </header>
  )
}

export default Navbar