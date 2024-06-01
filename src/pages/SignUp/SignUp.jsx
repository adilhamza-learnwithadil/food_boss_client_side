import '../../index.css'
import login from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Social from '../LogIn/Social';


const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => { 

                toast.success('You are suxcessfully signed up')
                updateUser(data.name, data.photo)
                .then(() => {
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId){
                            navigate('/')
                        }
                    })


                    reset()
                })
                .catch(error => {
                    toast.error(error);
                })
            })
            .catch(error => {
                toast.error(error);
            })
    }

    return (
        <div id="login_signup" className="flex flex-col items-center h-screen justify-center  ">
            <Helmet>
                <title>Food Boss | SignUp</title>
            </Helmet>
            <Link to='/' className="relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-medium text-[#FFB600] transition duration-300 ease-out border-2 border-[#FFB600] rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FFB600] group-hover:translate-x-0 ease">
                    <FaArrowLeft />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-[#FFB600] transition-all duration-300 transform group-hover:translate-x-full ease">Got To Home</span>
                <span className="relative invisible">Button Text</span>
            </Link>
            <div id="login_signup" className="hero min-h-[800px] max-w-7xl mx-auto rounded-3xl bg-base-20 shadow-2xl">
                <div className="hero-content w-full px-36   flex justify-between flex-col lg:flex-row-reverse">
                    <div className="text-center w-[500px] lg:text-left ">
                        <img src={login} className='w-[500px]' alt="" />
                    </div>
                    <div className="card shrink-0 w-96  max-w-sm ">
                        <h1 className="text-3xl text-center mt-5 font-bold">SignUp now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600 mt-2'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photo", { required: true })} name='photo' placeholder="Your Photo" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600 mt-2'>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-2'>Email is required</span>}
                            </div>
                            <div className="form-control mt-0">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/ })} name='password' placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600 mt-2'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600 mt-2'>Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600 mt-2'>Password must be 6 characters, cappital later, small later and number</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600] hover:border-[#fff]" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className='text-center text-[#FFB600]'>Already registered? <Link to='/login' className='font-bold'>Go to log in</Link></p>
                        <Social></Social>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;