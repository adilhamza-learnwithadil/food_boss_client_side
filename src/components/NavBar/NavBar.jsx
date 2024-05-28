import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('You are suxcessfully logout')
            })
            .catch(error => {
                toast.error(error);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order_food/salad'>Order Food</NavLink></li>
        {
            user ?
                <><li><button onClick={handleLogOut}><a className="btn bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600]">LogOut</a></button></li></>
                :
                <><li><Link to='/login'><a className="btn bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600]">LogIn</a></Link></li></>
        }
    </>

    return (
        <div className=" fixed z-10 w-full bg-[#15151579]">
            <div className="navbar max-w-7xl py-5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-3xl text-[#fff]"><span className="text-[#FFB600]">Food</span> Boss</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex mr-5">
                        <ul className="menu menu-horizontal px-1 py-0 font-semibold text-white items-center">
                            {
                                links
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default NavBar;