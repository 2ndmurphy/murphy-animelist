"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef, useEffect } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  useEffect(() => {
    const storedKeyword = sessionStorage.getItem("searchKeyword");
    if (storedKeyword) {
      searchRef.current.value = storedKeyword;
    }
  }, []);
  
  const handleSearch = (event) => {

    const keyword = searchRef.current.value;
    if(!keyword || keyword.length < 3) return;

    if (event.key == "Enter" || event.type == "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Cari anime..." 
          className="w-full p-2 rounded"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button 
          className="absolute top-1.5 end-2"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={25}/>
        </button>
      </div>
    </>
  )
}

export default InputSearch;
