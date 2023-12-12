export default function AdminNaviContainer() {
    return (
        <>
            <div>
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
            </div>
            ;
        </>
    );
}
