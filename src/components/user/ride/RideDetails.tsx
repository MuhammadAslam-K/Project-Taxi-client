import { Suspense, useEffect, useState } from "react";
import userAxios from "../../../services/axios/userAxiosinterceptors";
import userApis from "../../../services/apis/userApis";
import DataTable from "react-data-table-component";
import { RideDetails } from "../../../interfaces/common";
import ChatModal from "../../chat/Chat";
import ReceiptModal from "../modal/ReceiptModal";
import DriverInfoModal from "../modal/DriverInfoModal";

function RideDetails() {
    const [driverApprovedRide, setDriverApprovedRide] = useState<RideDetails[]>([]);
    const [driverUnApprovedRide, setDriverUnApprovedRide] = useState<RideDetails[]>([]);
    const [completedRide, setCompletedRide] = useState<RideDetails[]>([]);

    const [activeTab, setActiveTab] = useState("approved")
    const [rideId, SetrideId] = useState("")

    const [chat, SetChat] = useState(false)

    const [driverModal, SetdriverModal] = useState<string | null>(null)
    const [recipeModal, SetrecipeModal] = useState<RideDetails | null>(null)


    useEffect(() => {
        fetchUserRide();
    }, []);

    const fetchUserRide = async () => {
        try {
            const response = await userAxios.get(userApis.rides);
            console.log(response);
            setDriverApprovedRide(response.data.approved);
            setDriverUnApprovedRide(response.data.unApproved);
            setCompletedRide(response.data.completed);
        } catch (error) {
            console.log("Error in user ride", error);
        }
    };


    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };


    let filteredData: RideDetails[] = [];
    if (activeTab === "approved") {
        filteredData = driverApprovedRide;
    } else if (activeTab === "unapproved") {
        filteredData = driverUnApprovedRide;
    } else if (activeTab === "pending") {
        filteredData = completedRide;
    }

    const renderChatCell = (rideId: string) => {
        return (
            <button className="bg-blue-500 text-white py-1 px-3 p-3 rounded" onClick={() => { SetrideId(rideId), SetChat(true) }}>
                Open Chat
            </button>
        );
    };
    const renderDriverCell = (driverId: string) => {
        return (
            <button className="bg-blue-500 text-white py-1 px-3 p-3 rounded" onClick={() => { SetdriverModal(driverId) }}>
                Driver
            </button>
        );
    };
    const renderRecipeCell = (row: RideDetails) => {
        return (
            <button className="bg-blue-500 text-white py-1 px-3 p-3 rounded" onClick={() => {
                SetrideId(rideId)
                SetrecipeModal(row);
            }}>
                Open Reciept
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
    ];


    if (activeTab === "approved") {
        columns.push(
            {
                name: "Price",
                selector: (row: RideDetails) => row.price,
            },
            {
                name: "Driver Info",
                cell: (row: RideDetails) => renderDriverCell(row.driver_id)
            },
            {
                name: "Recipe",
                cell: (row: RideDetails) => renderRecipeCell(row)
            },
            {
                name: "Chat",
                cell: (row: RideDetails) => renderChatCell(row._id)
            },
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

    const handleChangeTheChatState = () => {
        SetChat(!chat)
    }
    const handleChangeTheRecipeState = () => {
        SetrecipeModal(null)
    }
    const handleChangeTheDriverState = () => {
        SetdriverModal(null)
    }

    return (
        <>

            {chat && rideId &&
                <Suspense fallback="loading please wait.....">
                    <ChatModal rideId={rideId} role={"user"} handleChangeTheChatState={handleChangeTheChatState} />
                </Suspense>
            }

            {recipeModal &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                    <div className="modal-content bg-white p-6 rounded-lg shadow-lg z-50">
                        <Suspense fallback="loading please wait.....">
                            <ReceiptModal handleChangeTheRecipeState={handleChangeTheRecipeState} recipeModal={recipeModal} />
                        </Suspense>
                    </div>
                </div>
            }

            {driverModal &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                    <div className="modal-content bg-white p-6 rounded-lg shadow-lg z-50">
                        <Suspense fallback="loading please wait.....">
                            <DriverInfoModal handleChangeTheDriverState={handleChangeTheDriverState} driverModal={driverModal} />
                        </Suspense>
                    </div>
                </div>
            }

            <div className="mt-10 w-10/12 lg:ms-32 ms-6 bg-white p-6 rounded-3xl shadow-2xl justify-center">
                <div className="flex justify-center mb-4">
                    {/* Tabs for different ride statuses */}
                    <button
                        className={`mx-2 py-2 px-4 rounded ${activeTab === "unapproved" ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        onClick={() => handleTabChange("unapproved")}
                    >
                        Unapproved
                    </button>
                    <button
                        className={`mx-2 py-2 px-4 rounded ${activeTab === "approved" ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        onClick={() => handleTabChange("approved")}
                    >
                        Approved
                    </button>
                    <button
                        className={`mx-2 py-2 px-4 rounded ${activeTab === "History" ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                        onClick={() => handleTabChange("History")}
                    >
                        History
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
        </>
    );
}

export default RideDetails;
