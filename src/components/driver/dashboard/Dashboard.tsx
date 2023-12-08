import { useState } from "react";
import driverAxios from "../../../services/axios/driverAxiosinterceptors";
import driverApis from "../../../services/apis/driverApis";
import toast from "react-hot-toast";

function Dashboard() {
    const [searchText, setSearchText] = useState("");
    const [ridesData, setRidesData] = useState([]);
    const [ridePrice, setRidePrice] = useState("");


    const handleSearch = async () => {
        try {
            console.log(searchText)
            const response = await driverAxios.get(`${driverApis.searchRides}?value=${searchText}`)
            console.log(response)
            setRidesData(response.data)
        } catch (error) {
            console.log("Error in search (Driver)", error)
        }
    };

    const handleAcceptRide = async (rideId: string, price: string) => {
        try {
            if (Number(price) > 0 && !isNaN(Number(price))) {
                const response = await driverAxios.patch(`${driverApis.acceptRide}?price=${price}&rideId=${rideId}`);
                console.log(response)
                handleSearch()
            } else {
                toast.error('Please enter a valid price.');
            }
        } catch (error) {
            console.log("Error in driver accepting the ride", error)
        }
    };

    return (
        <div className="h-screen bg-gray-200">
            <div className="flex justify-center">
                <div className="bg-white shadow-md mt-10 rounded-lg p-6 w-3/4">
                    <div className="flex items-center border border-gray-300 rounded-md mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-4 px-4 focus:outline-none focus:border-blue-500 bg-gray-100 rounded-l-md"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white py-4 px-6 rounded-r-md hover:bg-blue-600 focus:outline-none"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    <div>
                        {ridesData.map((ride: any) => (
                            <div key={ride._id} className="flex items-center border-b py-4">
                                <div className="flex-1">
                                    <strong>Pickup Location:</strong>
                                    <p>{ride.pickupLocation}</p>
                                </div>
                                <div className="flex-1">
                                    <strong>Drop Location:</strong>
                                    <p>{ride.dropLocation}</p>
                                </div>
                                <div className="flex-1 flex items-center">
                                    <input
                                        type="number"
                                        placeholder="Enter Price"
                                        onChange={(e) => setRidePrice(e.target.value)}
                                        className="mr-2 py-2 px-3 border rounded focus:outline-none"
                                    />
                                    <button className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none"
                                        onClick={() => handleAcceptRide(ride._id, ridePrice)}
                                    >
                                        Accept Ride
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Dashboard;
