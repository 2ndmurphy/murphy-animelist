import { Suspense } from "react"
import { getAnimeResponse } from "../libs/api"
import HeaderBanner from "../components/utilities/HeaderBanner"
import Loading from "../loading"
import RecommendList from "../components/RecommenList"


export default async function Page() {
  const recommendAnime = await getAnimeResponse("anime/1/recommendations")
  
  return (
    <div>
      <HeaderBanner title="RECOMMENDATIONS"/>
      <Suspense fallback={
        <div>{<Loading/>}</div>
      }>
        <RecommendList api={recommendAnime}/>
      </Suspense>
    </div>
  )
}