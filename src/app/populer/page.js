"use client"

import HeaderBanner from "../components/utilities/HeaderBanner"
import Pagination from "../components/utilities/Pagination"
import { useEffect, useState, Suspense } from "react"
import AnimeList from "../components/AnimeList"
import loading from "../loading"

export default function Page() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const baseurl = "https://api.jikan.moe/v4"

    const response = await fetch(`${baseurl}/top/anime?page=${page}`)
    const data = await response.json() // popular anime

    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
      <Suspense fallback={
        <div>{<loading/>}</div>
      }>
        <HeaderBanner title={`ANIME TERPOPULER #${page}`}/>
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </Suspense>
    </div>
  )
}