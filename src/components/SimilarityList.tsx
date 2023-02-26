import Link from "next/link";

export default async function SimilarityList() {
  return (
    <ul className="menu w-56 flex-none rounded-box">
      <li className="menu-title">
        <span>Relevent Notes</span>
      </li>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
      <li><Link href='/api/auth/logout'>Logout</Link></li>
    </ul>
  )
}
