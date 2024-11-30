export default function PaginationComponent({
  postsPerPage,
  totalPosts,
  setCurrentPage,
}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => setCurrentPage(number)}
              // href="!#"
              style={{ cursor: "pointer" }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
