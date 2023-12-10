import Link from "next/link";

export default function AdminPage() {
    return (
        <>
            <h2>Admin Page</h2>
            <p>Login to got to Admin Page</p>
            <Link href="/protected">Go to Protected Route</Link>
        </>
    );
}
