import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";


const imgHostKey = import.meta.env.VITE_HOST_IMG_KEY;
const imgHostApi = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
        const imgFile = {image : data.image[0]}
        const res = await axiosPublic.post(imgHostApi, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data.success){

            const menuItem = {
                name : data.name,
                recipe : data.recipe,
                image: res.data.data.display_url,
                category : data.category,
                price : parseFloat(data.price),

            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            if(menuRes.data.insertedId){
                reset()
                toast.success('Suxcessfully added new food')
            }
        }
    }
    return (
        <div>
            <div className="my-10">
                <SectionTitle smallTitle="---What's new?---" title='ADD AN ITEM'></SectionTitle>

                <div className="w-[1000px] h-[720px] mx-auto p-10 bg-[#fff] rounded-3xl px-14">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full max-w-full">
                            <div className="label">
                                <span className="label-text font-bold">Name*</span>
                            </div>
                            <input {...register("name", { required: true})} type="text" placeholder="Food Name" className="input input-bordered w-full max-w-full" />
                        </label>
                        <div className="flex justify-between gap-5 my-5">
                            <label className="form-control w-full max-w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Category*</span>
                                </div>
                                <select {...register("category", { required: true})} className="select select-bordered w-full max-w-full">
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soups">Soup</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </label>

                            <label className="form-control w-full max-w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Price*</span>
                                </div>
                                <input {...register("price", { required: true})} type="text" placeholder="Food Price" className="input input-bordered w-full max-w-full" />
                            </label>
                        </div>
                        <label className="form-control w-full max-w-full">
                            <div className="label">
                                <span className="label-text font-bold">Recipe Details*</span>
                            </div>
                            <textarea {...register("recipe", { required: true})} className="textarea textarea-bordered h-[250px] max-h-[250px] resize-none" placeholder="Recipe Details"></textarea>
                        </label>
                        <input {...register("image", { required: true})} type="file" className="file-input w-full max-w-xs block my-5" />
                        <div className="w-full flex justify-center">
                            <button><a className="btn bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600]">Add Item <FaUtensils /></a></button>
                        </div>
                    </form>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddItems;