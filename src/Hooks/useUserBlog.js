import { useEffect, useState } from "react"

const useUserBlog = (user) => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch(`https://web-app-server.vercel.app/post?email=${user?.email}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setBlogs(result)
      })
  }, [user?.email])
  return [blogs, setBlogs]
}
export default useUserBlog;