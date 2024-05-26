
const SectionTitle = ({smallTitle, title}) => {
    return (
        <div>
            <div className="text-center w-[300px] mx-auto my-7">
                <p className='italic text-[#FFB600] mb-2'>{smallTitle}</p>
                <h2 className='text-3xl border-t-2 border-b-2 py-3'>{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;