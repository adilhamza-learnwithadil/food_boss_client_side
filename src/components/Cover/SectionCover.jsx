import '../../index.css'
const SectionCover = ({title, des, id}) => {
    return (
        <div id={id} className='mb-20'>
            <div className='max-w-7xl mx-auto py-32'>
                <div className="bg-[#15151579] text-white text-center px-48 py-28 rounded-3xl">
                    <h2 className="text-4xl font-semibold uppercase">{title}</h2>
                    <h5 className="mt-2">{des}</h5>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;