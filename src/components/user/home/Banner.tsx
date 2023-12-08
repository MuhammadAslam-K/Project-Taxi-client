import React from 'react'



const backgroundImageUrl = "/images/pexels-ketut-subiyanto-4429505.jpg"


const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '35rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImageUrl})`
};

function Banner() {
    return (
        <>
            <div className="w-full bg-cover bg-center" style={containerStyle}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Arrive On Time, Skip the Waiting
                            <p className="underline text-white">Hey-taxi's Here!</p>
                        </h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner