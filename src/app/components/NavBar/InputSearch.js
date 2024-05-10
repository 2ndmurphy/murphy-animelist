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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchInput(e);
    }
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;
    sessionStorage.setItem("searchKeyword", keyword);
    router.push(`/search/${keyword}`);
  };

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
          onClick={handleSearchInput}
        >
          <MagnifyingGlass size={25}/>
        </button>
      </div>
    </>
  )
}

export default InputSearch;
