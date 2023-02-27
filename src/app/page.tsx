import Header from "@/components/Header"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home() {
  const user = await getUser()

  return (
    <>
      <Header user={user} />
			{user.email !== 'anonymous' || process.env.NODE_ENV === "development"
			?
			  // @ts-expect-error Server Component
        <MentatMind />
        : null}
    </>
  )
}
