
const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div>
            <div className="flex items-center">
                <div className="">
                    <img src={image} className="w-[110px] h-[100px] rounded-tr-full rounded-br-full rounded-bl-full object-cover" alt="" />
                </div>
                <div className="ml-3 w-[500px]">
                    <div className="flex justify-between">
                        <h1 className="uppercase text-lg text-[#000]">{name} ------------</h1>
                        <p className="text-lg font-semibold text-[#FFB600]">${price}</p>
                    </div>
                    <p className=" text-[#5c5c5c]">{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;