import Banner from "../../../components/user/home/Banner"
import Cards from "../../../components/user/home/Cards"
import BookingField from "../../../components/user/home/BookingField"
import UserNavbar from "../../../components/user/common/Navbar"
import UserFooter from "../../../components/user/common/Footer"

function UserHomePage() {
    return (
        <div>
            <UserNavbar />
            <Banner />
            <BookingField />
            <Cards />
            <UserFooter />
        </div>
    )
}

export default UserHomePage