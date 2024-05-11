"use client"

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Fungsi untuk menetapkan status isSticky
  const handleScroll = () => {
    if (window.pageYOffset > 100) { // Ganti 100 dengan tinggi tertentu saat Anda ingin Navbar menjadi sticky
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Menambahkan event listener saat komponen dimuat
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-indigo-500 ${isSticky ? "sticky top-0 z-50" : ""}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-4">
        <Link href="/" className="font-bold text-white text-2xl">MURPHYNIME</Link>
        <InputSearch/>
      </div>
    </header>
  );
};

export default Navbar;
