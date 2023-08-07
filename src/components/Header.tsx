import Link from "next/link";

export default function Header() {
  return (
    <header>
      BRAND
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
