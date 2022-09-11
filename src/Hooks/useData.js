import { useEffect, useState } from "react"

const useData = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://localhost:4200/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return [posts, setPosts]
}
export default useData;