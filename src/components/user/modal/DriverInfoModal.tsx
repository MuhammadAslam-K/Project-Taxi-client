import { useEffect, useState } from 'react';
import userAxios from '../../../services/axios/userAxiosinterceptors';
import userApis from '../../../services/apis/userApis';


export interface Recipe {
    handleChangeTheDriverState: () => void
    driverModal: string;
}

export interface DriverInfo {
    name: string
    mobile: string
    email: string
}

const DriverInfoModal = (props: Recipe) => {

    const { handleChangeTheDriverState, driverModal } = props

    const [driverInfo, setdriverInfo] = useState<DriverInfo>()

    useEffect(() => {
        fetchDriverData()
    }, [])

    const fetchDriverData = async () => {
        try {
            const response = await userAxios.get(`${userApis.getDriverInfo}?driverId=${driverModal}`);
            setdriverInfo(response.data)
        } catch (error) {
            console.log("error in getting driver details (user)", error)
        }
    }
    return (

        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 w-1/4 rounded shadow-lg">
                <div className="receipt">
                    <h2 className="text-2xl text-center font-bold mb-4">Driver Info</h2>
                    <hr className="my-4" />
                    <p>Name: {driverInfo?.name}</p>
                    <p>Email: {driverInfo?.email}</p>
                    <p>Mobile No: {driverInfo?.mobile}</p>
                    <hr className="my-4" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleChangeTheDriverState()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DriverInfoModal