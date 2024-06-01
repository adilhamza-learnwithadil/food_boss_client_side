import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const Card = ({ food }) => {
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    
    const handleAddToCard = () => {
        if(user && user.email){
            const cartItem = {
                UserEmail: user.email,
                FoodName: food.name,
                FoodId: food._id,
                FoodImg: food.image,
                Price: food.price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    toast.success(`${food.name} addeded to the cart`);
                    refetch()
                }
            })
        }else{
            navigate('/login', {state: {from: location}})
            toast.error("Please Log In");
        }
    }



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={food.image} alt="Food Image" className="w-full h-[250px]" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title">{food.name}</h2>
                <h2 className="font-bold text-[#FFf] bg-[#FFB600] px-3 rounded-full py-1">${food.price}</h2>
                <p className="h-[80px]">{food.recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCard} className='btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 mt-5 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>Order Food</button>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Card;