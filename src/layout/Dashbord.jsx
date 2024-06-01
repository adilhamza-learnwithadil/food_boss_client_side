import { FaCalendar, FaHome, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { TbCalendarPlus } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LiaWalletSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { MdEmail, MdRestaurantMenu } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { BsMenuDown } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import '../index.css'
import useCart from "../hooks/useCart";
import { FaBookBookmark } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";


const Dashbord = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-[300px] bg-[#FFB600] h-screen p-9">
                <Link to='/' className="font-bold text-3xl text-[#fff]"><span className="text-[#200D0B]">Food</span> Boss</Link>
                {
                    isAdmin ?
                        <ul className="mt-8">
                            <li><NavLink to='/dashbord/admin_home' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashbord/add_items' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaUtensils />Add items</NavLink></li>
                            <li><NavLink to='/dashbord/manage_items' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><BsMenuDown />Manage items</NavLink></li>
                            <li><NavLink to='/dashbord/manage_bookings' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaBookBookmark />Manage bookings</NavLink></li>
                            <li><NavLink to='/dashbord/all_users' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><PiUsersThreeBold />All users</NavLink></li>
                        </ul>
                        :
                        <ul className="mt-8">
                            <li><NavLink to='/dashbord/home' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/dashbord/reservation' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                            <li><NavLink to='/dashbord/payment_history' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><LiaWalletSolid></LiaWalletSolid>Payment History</NavLink></li>
                            <li><NavLink to='/dashbord/cart' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to='/dashbord/add_review' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><VscFeedback />Add Review</NavLink></li>
                            <li><NavLink to='/dashbord/booking' className='p-2 py-1.5 rounded-xl flex items-center gap-2 font-semibold text-lg'><TbCalendarPlus />My Booking</NavLink></li>
                        </ul>
                }
                <div className="divider border-[#fff]"></div>
                <ul className="mt-5 space-y-3">
                    <li><NavLink to='/' className='px-2 flex items-center gap-2 font-semibold text-lg'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu' className='px-2 flex items-center gap-2 font-semibold text-lg'><MdRestaurantMenu />Menu</NavLink></li>
                    <li><NavLink to='/order_food/salad' className='px-2 flex items-center gap-2 font-semibold text-lg'><FaShoppingBasket />Order Food</NavLink></li>
                    <li><NavLink to='/contact' className='px-2 flex items-center gap-2 font-semibold text-lg'><MdEmail></MdEmail>Contact</NavLink></li>
                </ul>
            </div>
            <div className="w-full bg-[#f0f0f0]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;