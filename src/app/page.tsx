import Link from 'next/link'
import { getUser } from 'src/utils/auth'

export default async function Home() {
  const user = await getUser()

  return (
    <main>
      <div>
        {(user.email === 'anonymous'
          ? <Link href="/api/auth/login" target="_blank">Login</Link>
          : <Link href="/api/auth/logout">Logout</Link>)}
        <br />
        <br />
        {JSON.stringify(user)}
      </div>
    </main>
  )
}
