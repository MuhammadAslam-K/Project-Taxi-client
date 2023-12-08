import UserFooter from "../../components/user/common/Footer"
import UserNavbar from "../../components/user/common/Navbar"
import RideDetails from "../../components/user/ride/RideDetails"

function RideDetailsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <UserNavbar />
            <RideDetails />
            <div className="flex-grow"></div>
            <div className="mt-auto">
                <UserFooter />
            </div>
        </div>

    )
}

export default RideDetailsPage