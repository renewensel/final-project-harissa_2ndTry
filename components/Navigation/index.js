import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
    const router = useRouter();

    return (
        <>
            <nav className="nav-style">
                <div>
                    <Link href="/">
                        <Image
                            src="/harissa_logo.svg"
                            alt="Harissa Logo"
                            width={180}
                            height={90}
                            priority
                        />
                    </Link>
                </div>
                <div className="nav-links-style">
                    <Link
                        href="/"
                        className={router.pathname === "/" ? "active" : ""}
                    >
                        Welcome
                    </Link>
                    <Link
                        href="/dishes"
                        className={
                            router.pathname === "/dishes" ? "active" : ""
                        }
                    >
                        Dishes
                    </Link>
                    <Link
                        href="/drinks"
                        className={
                            router.pathname === "/drinks" ? "active" : ""
                        }
                    >
                        Drinks
                    </Link>
                    <Link
                        href="/about"
                        className={router.pathname === "/about" ? "active" : ""}
                    >
                        About
                    </Link>
                    <Link
                        href="/imprint"
                        className={
                            router.pathname === "/imprint" ? "active" : ""
                        }
                    >
                        Imprint
                    </Link>
                    {/* <Link href="#">DE</Link> / <Link href="#">EN</Link> */}
                </div>
                <div>
                    <Link className="hidden" href="#">
                        DE / EN
                    </Link>
                </div>
            </nav>
        </>
    );
}
