import { AiFillStar } from 'react-icons/ai';
import product_image from '../../../../../assets/images/450x300.jpg';
function Product() {
    return (
        <>
            <div className="sm:inline-block block sm:mx-[20px] border border-gray-300 rounded xl:w-[16rem] lg:w-[18rem] m-5 md:w-[22rem]">
                <div className=""><img className="block mx-auto" src={product_image} /></div>
                <div className="flex flex-col items-center mb-5">
                    <div className="text-[20px] font-bold">Fancy Product</div>
                    <div className="text-orange-400 flex">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className="">$40.00 - $80.00</div>
                </div>
                <button className="block mx-auto mb-6 bg-white border border-black px-3 py-1 rounded hover:bg-slate-500 hover:text-white transition-all">View options</button>
            </div>
        </>
    );
}
export default Product;