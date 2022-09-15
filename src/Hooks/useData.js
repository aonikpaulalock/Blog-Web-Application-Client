import { useEffect, useState } from "react"

const useData = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:4200/posts")
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setPosts(data)
      })
  }, [])
  return [posts, setPosts]
}
export default useData;