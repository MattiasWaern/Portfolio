import Footer from "../components/Footer";
import Header from "../components/Header";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";


function HomePage() {

  return (
    <>
        <Header/>

        <main>
            <section className="relative h-[500px] w-full overflow-hidden">
                <FlickeringGrid
                    className="absolute inset-0 z-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.5}
                    flickerChance={0.1}
                />
            </section>
        </main>


         <Footer/> 
    </>
  )
}

export default HomePage;