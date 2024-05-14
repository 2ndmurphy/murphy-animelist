"use client"

import { useEffect, useState, Suspense } from "react"
import { getAnimeResponse } from "../libs/api"
import HeaderBanner from "../components/utilities/HeaderBanner"
import Pagination from "../components/utilities/Pagination"
import AnimeList from "../components/AnimeList"
import Loading from "../loading"


export default function Page() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(popularAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
      <Suspense fallback={
        <div>{<Loading/>}</div>
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