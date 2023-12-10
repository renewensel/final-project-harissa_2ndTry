// pages/protected.js
import { useSession, signIn, signOut } from "next-auth/react";
import DishAdmin from "@/components/DishAdmin";

export default function Protected() {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <div className="container-styles">
                <p>
                    Congratulations, {session.user.name}, you are successfully
                    logged in!
                </p>
                <img src="session.user.image" alt="github profile picture" />
                <DishAdmin />
                <button onClick={() => signOut()}>Sign Out</button>
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
