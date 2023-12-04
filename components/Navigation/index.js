import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <Link href="/">Welcome</Link>
            <Link href="/dishes">Dishes</Link>
            <Link href="/drinks">Drinks</Link>
            <Link href="/about">About</Link>
            <Link href="/imprint">Imprint</Link>
            {/* <Link href="#">DE</Link> / <Link href="#">EN</Link> */}
        </>
    );
}
