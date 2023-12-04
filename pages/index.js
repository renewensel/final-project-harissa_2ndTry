import DishList from "@/components/DishList";
import DrinkList from "@/components/DrinkList";
import Header from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-12">
                <Header />
                <div className="min-h-screen flex flex-col items-center justify-center">
                    bla bla carousel
                    <h1 className="text-4xl font-bold mb-4">
                        Next.js Tailwind Carousel
                    </h1>
                </div>

                <div className="relative flex place-items-center">
                    <h1>Hello there!</h1>
                    <Image
                        src="http://renewensel.com/fphar/images/dishes_01.png"
                        width={500}
                        height={500}
                        alt="Picture dish 1 of 4"
                        priority
                    />
                </div>
                <h2>Just Fetching ALL STUFF</h2>

                <DrinkList />
                <DishList />
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    Footer
                </div>
            </main>
        </>
    );
}
