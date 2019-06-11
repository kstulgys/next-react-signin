import { withRouter } from "next/router"
import { Button } from "shards-react"
import { useEffect } from "react"

function ActiveLink({ router, href, children }) {
  // ;(function prefetchPages() {
  //   router.prefetch(router.pathname)
  // })()
  // useEffect(() => {
  //   router.prefetch("/signin")
  // })

  function handleClick(e) {
    e.preventDefault()
    router.push(href)
  }

  const isCurrentPath = router.pathname === href || router.asPath === href

  return (
    <Button
      theme="dark"
      outline={isCurrentPath ? false : true}
      onClick={handleClick}>
      {children}
    </Button>
  )
}

export default withRouter(ActiveLink)
