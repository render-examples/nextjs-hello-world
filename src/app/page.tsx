import { getUser } from 'src/utils/auth'

export default async function Home() {
  const user = await getUser()

  return (
    <main>
      <div>
        {(user.email === 'anonymous' ? <a href="/api/auth/login">Login</a> : <a href="/api/auth/logout">Logout</a>)}
        <br/>
        <br/>
        {JSON.stringify(user)}
      </div>
    </main>
  )
}
