import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import DishToggle from "@/components/DishToggle"; // Add this line
import DishAdminCard from "@/components/DishAdminCard";
import DishAdmin from "@/components/DishAdmin";

export default function Protected() {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <div className="dish-list-container-admin">
                <Image
                    src="/harissa_logo.svg"
                    alt="Harissa Logo"
                    width={180}
                    height={90}
                    priority
                />
                <div className="admin-navi">
                    <div className="admin-navi-logo-message">
                        <p className="logged-in-message">
                            <span className="logged-in-message-name">
                                {session.user.name}
                            </span>
                            ,<br />
                            you are successfully logged in!
                        </p>
                    </div>

                    <div className="profile-pic_sign-out">
                        <Image
                            src={session.user.image}
                            alt="github profile picture"
                            width={100}
                            height={100}
                            style={{ borderRadius: "50%" }}
                        />
                        <button onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
                <DishAdmin className="dish-list-container-admin" />

                {/* <DishToggle className="dish-list-container-admin" /> */}

                {/* <DishAdminCard className="dish-list-container-admin" /> */}
                {/* Integrate DishToggle component here */}
            </div>
        );
    }

    return (
        <>
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
            <div className="log-in-bro">
                <h3>log in, bro!</h3>
                <button className="log-in-bro-button" onClick={() => signIn()}>
                    Sign in
                </button>
            </div>
        </>
    );
}
