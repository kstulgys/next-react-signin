import Link from "next/link"
import { useState, useEffect } from "react"
import { getUserProfile } from "../lib/auth"

export default function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserProfile().then(u => setUser(u))
  }, [])

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
