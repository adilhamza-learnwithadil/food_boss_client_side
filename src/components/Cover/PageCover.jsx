import '../../index.css';


const PageCover = ({bgId, title}) => {
    return (
        <div id={bgId} className='mb-20 bg-fixed'>
            <div className='max-w-7xl mx-auto pt-48 pb-32'>
                <div className="bg-[#15151579] text-white text-center p-32 rounded-3xl">
                    <h2 className="text-7xl font-bold uppercase">{title ? title : 'OUR MENU'}</h2>
                    <h5 className="text-xl mt-2 uppercase">Would you like to try a dish?</h5>
                </div>
            </div>
        </div>
    );
};

export default PageCover;