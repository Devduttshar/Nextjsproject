
import { useRouter } from "next/router";
const pageNumber= () => {
    const router = useRouter();
    const pageNumber = router.query.pageNumber;
  return (
  <>
  <h1> Hello and Welcome to {pageNumber}</h1>

  </>
  )
}

export default pageNumber;