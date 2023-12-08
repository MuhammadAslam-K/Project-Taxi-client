import Banner from "../../../components/user/home/Banner"
import Cards from "../../../components/user/home/Cards"
import BookingField from "../../../components/user/home/BookingField"

function UserHomePage() {
    return (
        <div>
            <Banner />
            <BookingField />
            <Cards />
        </div>
    )
}

export default UserHomePage