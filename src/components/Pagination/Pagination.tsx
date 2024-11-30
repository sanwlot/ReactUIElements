import { useEffect, useState } from "react"
import axios from "axios"
import Posts from "./components/Posts/Posts"
import PaginationComponent from "./components/PaginationComponent/PaginationComponent"

export default function Pagination() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <section style={{ height: "100vh" }} className="container">
      <h1 className="mb-3">Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </section>
  )
}
