import { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
function Navbar() {
    let [openedNavbar,setOpenedNavbar] = useState(false);
    return (
        <>
            <div className="flex bg-slate-400 lg:justify-center justify-center lg:bg-slate-400 py-2 select-none">
                <div className="mx-5 w-[30rem] sm:w-[42rem] lg:w-[60rem] lg:flex lg:justify-between xl:w-[70rem] h-[40px] items-center justify-center overflow-hidden transition-all" style={{height: openedNavbar ? '170px' : '40px'}}>
                    <div className="text-[16px] sm:text-[22px] font-semibold flex justify-between">
                        <div className="cursor-pointer">Online Shopping</div>
                        <button className="visible lg:hidden px-4 py-2 border rounded" onClick={()=>setOpenedNavbar(!openedNavbar)}><FaBars /></button>
                    </div>
                    <ul className="lg:flex justify-start my-2">
                        <li className="lg:mx-3 my-2 text-[14px] cursor-pointer">Home</li>
                        <li className="lg:mx-3 my-2 text-[14px] cursor-pointer">About</li>
                        <li className="lg:mx-3 my-2 text-[14px] cursor-pointer">Shop</li>
                    </ul>
                    <button className="text-[14px] flex items-center bg-slate-500 px-4 py-2 rounded">
                        <BsFillCartFill />
                        <span className="mx-1">Cart</span>
                        <span className="mx-1 bg-white px-[5px] rounded-[100%] font-bold">0</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Navbar;