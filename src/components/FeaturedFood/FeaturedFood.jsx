import '../../index.css'
const FeaturedFood = () => {
    return (
        <div id="featured_food" className='my-20 bg-fixed'>
            <div className='max-w-7xl mx-auto py-28'>
                <div className="text-center w-[300px] mx-auto mb-14">
                    <p className='italic text-[#FFB600] mb-2'>---Check it out---</p>
                    <h2 className='text-3xl border-t-2 border-b-2 py-3 text-white'>FROM OUR MENU</h2>
                </div>
                <div className="lg:flex items-center justify-between">
                    <div className="w-[600px]">
                        <img src="https://i.ibb.co/JvTPxxK/Rectangle-14.png" className='rounded-2xl' alt="" />
                    </div>
                    <div className="text-white w-[600px]">
                        <h4 className='text-lg mb-2'>March 20, 2023</h4>
                        <h4 className='text-lg mb-2'>WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn bg-[#fff0] border-b-2 border-l-0 border-r-0 border-t-0 mt-5 text-white hover:bg-[#FFB600] hover:border-[#FFB600]'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;