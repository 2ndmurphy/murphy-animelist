"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      HandleSearchInput(e)
    }
  }
  const HandleSearchInput = (e) => {
    e.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  }
  return (
    <>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Cari anime..." 
          className="w-full p-2 rounded"
          ref={searchRef}
          onKeyPress={handleKeyPress}
        />
        <button 
        className="absolute top-1.5 end-2"
        onClick={HandleSearchInput}
        >
          <MagnifyingGlass size={25}/>
        </button>
      </div>
    </>
  )
}

export default InputSearch