
function Cards() {


    const backgroundImageUrl1 = "/images/pexels-jeshootscom-13861.jpg"
    const backgroundImageUrl2 = "/images/pexels-yan-krukau-8867434.jpg"
    const backgroundImageUrl3 = "/images/pexels-cottonbro-studio-4606338.jpg"


    return (
        <div>

            <div className="text-center flex justify-center  my-5 mt-16">
                <p className='font-bold flex text-blue-800 text-4xl'>Why Hey-Taxi ?</p>
            </div>

            <div className="flex flex-wrap justify-center w-10/12 mx-auto">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 relative">
                    <div className="bg-cover  text-center bg-center h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80 rounded-lg relative" style={{ backgroundImage: `url(${backgroundImageUrl3})` }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute bottom-0 text-white p-4">
                            <h1 className="font-bold text-xl mb-5">Safety</h1>
                            <p>At Hey-Taxi, we prioritize your safety above all else. Our cab booking service is designed to provide you with a secure and comfortable travel experience</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 relative">
                    <div className="bg-cover text-white text-center bg-center h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80 rounded-lg relative" style={{ backgroundImage: `url(${backgroundImageUrl1})` }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute bottom-0 text-white p-4">
                            <h1 className="font-bold text-xl mb-5">Unmatched Convenience</h1>
                            <p>Experience the ultimate convenience with Hey-Taxi. All our drivers undergo strict background checks. We offer a range of services tailored to meet the diverse needs of modern women on the move.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 relative">
                    <div className="bg-cover text-white text-center bg-center h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80 rounded-lg relative" style={{ backgroundImage: `url(${backgroundImageUrl2})` }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute bottom-0 text-white p-4">
                            <h1 className="font-bold text-xl mb-5">Dedicated Assistance</h1>
                            <p>At Hey-Taxi, we are committed to providing exceptional customer support. Our dedicated team is available round-the-clock to assist you with any queries or concerns you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards