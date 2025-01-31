import { DataCollection, Footer, Navbar } from "@/ui/organisms";

export default function CollectionTemplate(){
    return (
        <div>
            <Navbar />
            <main>
                <DataCollection />
            </main>
            <Footer />
        </div>
    )
}