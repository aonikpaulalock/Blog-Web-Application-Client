import { useEffect, useState } from "react"

const useData = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("Posts.json")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return [posts, setPosts]
}
export default useData;