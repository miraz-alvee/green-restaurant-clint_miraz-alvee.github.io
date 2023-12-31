import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin based on Data
    //const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink className='font-bold' to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink className='font-bold' to="/dashboard/additems"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink className='font-bold' to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink className='font-bold' to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink className='font-bold' to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink className='font-bold' to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li>
                                    <NavLink className='font-bold' to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink className='font-bold' to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink className='font-bold' to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink className='font-bold' to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;