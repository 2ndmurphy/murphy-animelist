"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"

const inpSearch = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Cari anime..." className="p-2"/>
        <button>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  )
}

export default inpSearch