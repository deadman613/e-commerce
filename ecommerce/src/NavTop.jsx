import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import backimg from '../src/images/backimg.png';
// import { a } from "react-router-dom";

function NavTop() {
    return (
        <>
            <nav
                id="nav1"
                className="h-16 w-full rounded-2xl flex justify-between items-center py-3 my-1 bg-gray-800"
            >
                <h3 className="mx-5 text-2xl text-amber-50 font-bold">E-commerce Website</h3>
                <ul className="flex justify-end gap-5 mr-20 text-amber-50">
                    <li><a to="/">Home</a></li>
                    <li><a to="/Shop">Shop</a></li>
                    <li><a to="/Contact">Contact</a></li>
                    <li><a to="/About">About</a></li>
                    <li>
                        <a to="/">
                            <FaMagnifyingGlass className="h-8 w-5 cursor-pointer" />
                        </a>
                    </li>
                    <li className="flex gap-1 items-center">
                        <a to="/MyAccount" className="flex items-center gap-1">
                            My Account <CgProfile className="h-8 w-5 cursor-pointer" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="backimg">
                <img
                    src={backimg}
                    alt="Background Image"
                    className="w-full rounded-2xl opacity-75 h-[440px]"
                />
            </div>
        </>
    );
}

export default NavTop;