// pages/admin/index.js
import Link from "next/link";
import Protected from "../protected";

export default function AdminPage() {
    return (
        <>
            <Protected />
            {/* <h2>Admin Page</h2>
            <p>Login to got to Admin Page</p>
            <Link href="/protected">Go to Protected Route</Link> */}
        </>
    );
}
