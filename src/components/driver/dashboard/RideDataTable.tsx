import { useEffect, useState } from 'react'
import driverAxios from '../../../services/axios/driverAxiosinterceptors'
import driverApis from '../../../services/apis/driverApis'
import DataTable from 'react-data-table-component'
import { RideDetails } from '../../../interfaces/common'

function RideDataTable() {

    const [completedRides, setcompletedRides] = useState([])
    const [pendingRides, setpendingRides] = useState([])
    const [activeTab, setActiveTab] = useState("Pending")


    useEffect(() => {
        fetchRidesByDriverId()
    }, [])

    const fetchRidesByDriverId = async () => {
        try {
            const response = await driverAxios.get(driverApis.getRides)
            setcompletedRides(response.data.completedRides)
            setpendingRides(response.data.pendingRides)
            console.log(response)
        } catch (error) {
            console.log("Error while getting the rides (driver)", error)
        }
    }

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };


    let filteredData: RideDetails[] = [];
    if (activeTab === "Pending") {
        filteredData = pendingRides;
    } else if (activeTab === "completed") {
        filteredData = completedRides;
    }

    const renderChatCell = () => {
        return (
            <button className="mx-2 py-2 px-4 rounded bg-blue-500 text-white">
                Open Chat
            </button>
        );
    };

    const columns = [
        {
            name: "Date",
            selector: (row: RideDetails) => formatDate(row.date),
        },
        {
            name: "Pickup Location",
            selector: (row: RideDetails) => row.pickupLocation,
        },
        {
            name: "Drop Location",
            selector: (row: RideDetails) => row.dropLocation,
        },
        {
            name: "Pickup Time",
            selector: (row: RideDetails) => row.time,
        },
        {
            name: "Price",
            selector: (row: RideDetails) => row.price,
        },
    ];

    if (activeTab === "Pending") {
        columns.push(
            {
                name: "Chat",
                cell: () => renderChatCell()
            }
        );
    }


    function formatDate(dateString: string | number | Date) {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const date = new Date(dateString);

        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US');

        return `${formattedDate} ${formattedTime}`;
    }

    return (
        <div className="mt-10 w-10/12 lg:ms-32 ms-6 bg-white p-6 rounded-3xl shadow-2xl justify-center">
            <div className="flex justify-center mb-4">
                {/* Tabs for different ride statuses */}
                <button
                    className={`mx-2 py-2 px-4 rounded ${activeTab === "Pending" ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                    onClick={() => handleTabChange("Pending")}
                >
                    Pending
                </button>
                <button
                    className={`mx-2 py-2 px-4 rounded ${activeTab === "completed" ? "bg-blue-500 text-white" : "bg-gray-300"
                        }`}
                    onClick={() => handleTabChange("completed")}
                >
                    Completed
                </button>
            </div>

            <DataTable
                style={{ zIndex: "-1" }}
                columns={columns}
                data={filteredData}
                fixedHeader
                highlightOnHover
                pagination
            />
        </div>
    )
}

export default RideDataTable