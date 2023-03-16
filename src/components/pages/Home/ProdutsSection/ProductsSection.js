import Product from "./Product/Product";

function ProductsSection() {
    return (
        <>
            <div className="xl:w-[74rem] sm:w-[30rem] lg:w-[62rem] block md:w-[49rem] mx-auto p-6 sm:p-0">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    );
}
export default ProductsSection;