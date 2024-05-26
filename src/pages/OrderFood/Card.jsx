
const Card = ({ food }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={food.image} alt="Food Image" className="w-full h-[250px]" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title">{food.name}</h2>
                <h2 className="font-bold text-[#FFf] bg-[#FFB600] px-3 rounded-full py-1">${food.price}</h2>
                <p className="h-[80px]">{food.recipe}</p>
                <div className="card-actions justify-end">
                    <button className='btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 mt-5 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>Order Food</button>
                </div>
            </div>
        </div>
    );
};

export default Card;