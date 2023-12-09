import { RideDetails } from '../../../interfaces/common';


export interface Recipe {
    handleChangeTheRecipeState: () => void
    recipeModal: RideDetails;
}

const ReceiptModal = (props: Recipe) => {

    const { handleChangeTheRecipeState, recipeModal } = props

    return (

        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 w-1/4 rounded shadow-lg">
                <div className="receipt">
                    <h2 className="text-2xl text-center font-bold mb-4">Receipt</h2>
                    <hr className="my-4" />
                    <p>Pickup Location: {recipeModal.pickupLocation}</p>
                    <p>Droop Location: {recipeModal.dropLocation}</p>
                    <p>Total: {recipeModal.price}</p>
                    <hr className="my-4" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleChangeTheRecipeState()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReceiptModal;
