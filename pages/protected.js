// pages/protected.js
import { useSession, signIn, signOut } from "next-auth/react";
import DishAdmin from "@/components/DishAdmin";
import Image from "next/image";
import Link from "next/link";

export default function Protected() {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <div className="dish-list-container-admin">
                <div className="admin-navi">
                    <Image
                        src="/harissa_logo.svg"
                        alt="Harissa Logo"
                        width={180}
                        height={90}
                        priority
                    />
                    <p className="logged-in-message">
                        {session.user.name},<br />
                        you are successfully logged in!
                    </p>

                    <Image
                        src={session.user.image}
                        alt="github profile picture"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>

                <DishAdmin className="dish-list-container-admin" />
            </div>
        );
    }

    return (
        <div>
            <h1>Nah... just login, bro!</h1>
            <p>Please log in to view.</p>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    );
}
