import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World. I'm Tony.{" "}
      <Link href="/about">
        About Tony's Career.
      </Link>
    </div>
  );
}
