import Navigation from "../Navigation";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="flex flex-row gap-8 sticky top-0">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
                        <Image
                            src="/harissa_logo.svg"
                            alt="Harissa Logo"
                            width={150}
                            height={75}
                            priority
                        />
                    </div>
                    <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                        <Navigation />
                    </div>
                </div>
            </div>
        </>
    );
}
