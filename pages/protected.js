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
            </div>
        );
    }

    return (
        <div className="log-in-bro">
            <h3>log in, bro!</h3>
            <button className="log-in-bro-button" onClick={() => signIn()}>
                Sign in
            </button>
        </div>
    );
}
