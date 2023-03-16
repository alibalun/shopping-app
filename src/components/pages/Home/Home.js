import Header from "./Header/Header";
import ProductsSection from "./ProdutsSection/ProductsSection";

function Home() {
    return (
        <>
            <div className="min-h-[37rem]">
                <Header />
                <ProductsSection />
            </div>
        </>
    );
}
export default Home;