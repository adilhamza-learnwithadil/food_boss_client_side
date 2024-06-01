import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from './../../hooks/useAxiosPublic';

const Social = () => {
    const {createUserWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic()
    
    const navigate = useNavigate();
    const location = useLocation();

    
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        createUserWithGoogle()
        .then(result => {
            toast.success('You are suxcessfully Loged In')
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                navigate(from, {replace: true})

            })
        })

    }
    return (
        <div className="w-[100px] mx-auto mt-5">
            <div className="flex justify-between">
                <button onClick={handleGoogleSignIn} className="border-2 border-[#000] p-2 rounded-full hover:border-[#FFB600] hover:text-[#FFB600] duration-200">
                    <FaGoogle className=""></FaGoogle>
                </button>
                <button className="border-2 border-[#000] p-2 rounded-full hover:border-[#FFB600] hover:text-[#FFB600] duration-200">
                    <FaGithub className=""></FaGithub>
                </button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Social;