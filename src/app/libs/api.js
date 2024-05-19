export const getAnimeResponse = async(resource, query) => {
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}