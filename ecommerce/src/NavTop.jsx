
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavTop() {
    return (
        <>
            <nav className=" h-10 w-full border-2">
                <ul className="text-black flex justify-end  gap-8 mr-20  py-1">
                    <li>Home </li>
                    <li>Shop</li>
                    <li>My Account <i className="fa-solid fa-circle-user"></i></li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li>About</li>
                </ul>
            </nav>
        </>
    );

}
export default NavTop