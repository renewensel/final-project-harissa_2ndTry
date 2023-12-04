import Image from "next/image";
import Navigation from "@/components/Navigation";
import Page from "@/components/page";

export default function Home() {
    return (
        <Page>
            <div className="container-styles">
                <Navigation />
            </div>

            <div>
                <h1>Hello there!</h1>
                <Image
                    src="http://renewensel.com/fphar/images/dishes_01.png"
                    width={500}
                    height={500}
                    alt="Picture dish 1 of 4"
                    priority
                />
            </div>

            <div>Footer</div>
        </Page>
    );
}
