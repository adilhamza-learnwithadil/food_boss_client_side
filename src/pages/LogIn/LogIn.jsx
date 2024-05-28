import '../../index.css'
import login from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';



const LogIn = () => {
    const {logInUser, user} = useContext(AuthContext)


    // const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(user){
            toast.error("You are alredy Loged In");
            return;
        }

        logInUser(email, password)
        .then(result => {
            toast.success('You are suxcessfully Loged In')
        })
        .catch(error => {
            toast.error(error);
        })
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div id="login_signup" className="flex flex-col items-center h-screen justify-center  ">
        <Helmet>
            <title>Food Boss | LogIn</title>
        </Helmet>
            <Link to='/' className="relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-medium text-[#FFB600] transition duration-300 ease-out border-2 border-[#FFB600] rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FFB600] group-hover:translate-x-0 ease">
                    <FaArrowLeft />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#FFB600] transition-all duration-300 transform group-hover:translate-x-full ease">Got To Home</span>
                <span className="relative invisible">Button Text</span>
            </Link>
            <div id="login_signup" className="hero min-h-[800px] max-w-7xl mx-auto rounded-3xl bg-base-20 shadow-2xl">
                <div className="hero-content w-full px-36   flex justify-between flex-col lg:flex-row">
                    <div className="text-center w-[500px] lg:text-left ">
                        <img src={login} className='w-[500px]' alt="" />
                    </div>
                    <div className="card shrink-0 w-96  max-w-sm ">
                        <h1 className="text-3xl text-center mt-5 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-0">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3 mb-0">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha" className='w-full' required />
                                </label>
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600] hover:border-[#fff]" type="submit" value="LogIn" />
                            </div>
                        </form>
                        <p className='text-center text-[#FFB600]'>New here? <Link to='/signup' className='font-bold'>Create a New Account</Link></p>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default LogIn;