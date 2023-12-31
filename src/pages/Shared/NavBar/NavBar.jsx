import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
//import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    //const [isAdmin] = useAdmin();
    // console.log(isAdmin)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link className="text-xl font-bold" to="/">Home</Link></li>
        <li><Link className="text-xl font-bold" to="/menu">Our Menu</Link></li>
        <li><Link className="text-xl font-bold" to="/order/salad">Order Food</Link></li>

        <li><Link className="text-xl font-bold" to="/dashboard/adminhome">Admin <br></br>Dashboard</Link></li><li><Link className="text-xl font-bold" to="/dashboard/userhome">User<br></br>Dashboard</Link></li>

        <li>
            <Link to="/dashboard/mycart"><button className="btn gap-3">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button></Link>
        </li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <h1 className="text-5xl font-bold">Green Restaurant</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-ghost text-2xl font-bold">LogOut</button>
                            </>
                            :
                            <>
                                <Link className="px-10" to="/login"> <button className="text-2xl font-bold btn btn-ghost">Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;