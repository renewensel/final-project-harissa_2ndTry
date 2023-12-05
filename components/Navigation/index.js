import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <>
            <Link href="/">
                <Image
                    src="/harissa_logo.svg"
                    alt="Harissa Logo"
                    width={180}
                    height={90}
                    priority
                />
            </Link>
            <Link href="/">Welcome</Link>
            <Link href="/dishes">Dishes</Link>
            <Link href="/drinks">Drinks</Link>
            <Link href="/about">About</Link>
            <Link href="/imprint">Imprint</Link>
            {/* <Link href="#">DE</Link> / <Link href="#">EN</Link> */}
        </>
    );
}
