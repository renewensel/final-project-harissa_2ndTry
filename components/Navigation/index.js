import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    return (
        <>
            <Image
                src="/harissa_logo.svg"
                alt="Harissa Logo"
                width={150}
                height={75}
                priority
            />
            <Link href="/">Welcome</Link>
            <Link href="/dishes">Dishes</Link>
            <Link href="/drinks">Drinks</Link>
            <Link href="/about">About</Link>
            <Link href="/imprint">Imprint</Link>
            {/* <Link href="#">DE</Link> / <Link href="#">EN</Link> */}
        </>
    );
}
