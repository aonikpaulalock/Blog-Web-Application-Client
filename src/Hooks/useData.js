import { useEffect, useState } from "react"

const useData = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://web-app-server.vercel.app/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return [posts, setPosts]
}
export default useData;