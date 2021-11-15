import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
      say hi
    </Link>
  </div>
)
export default Index;
