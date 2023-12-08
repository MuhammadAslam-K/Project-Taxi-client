import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast";

import userAxios from '../../../services/axios/userAxiosinterceptors';
import userApis from '../../../services/apis/userApis';

const BookingField = () => {


    const initialValues = {
        pickupLocation: '',
        dropLocation: '',
        time: '',
    };

    const validationSchema = Yup.object({
        pickupLocation: Yup.string().required('Enter Pickup location'),
        dropLocation: Yup.string().required('Enter Drop location'),
        time: Yup.string()
            .required('Time is required')
            .test('time-future', "Please choose a time slot that's beyond 30 minutes from the present moment.", function (value) {
                const today = new Date();
                const formattedValue = `${today.toISOString().slice(0, 10)}T${value}`;
                const selectedTime = new Date(formattedValue).getTime();
                const currentTime = today.getTime();
                const minTimeDifference = 30 * 60 * 1000

                if (selectedTime <= currentTime) {
                    return false
                }

                return selectedTime - currentTime >= minTimeDifference;
            })
    });


    const handleSubmit = async (values: { pickupLocation: string, dropLocation: string, time: string }) => {
        try {
            const response = await userAxios.post(userApis.booking, values)
            console.log(response)
            toast.success("Ride booked successfully")
        } catch (error) {
            console.log("Error in booking", error)
        }
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="flex justify-between p-4 bg-gray-100 rounded-md shadow-md m-20 gap-6">
                            <div className="w-1/3">
                                <label className="block text-gray-600 font-semibold">
                                    Pickup Location
                                </label>
                                <Field
                                    type="text"
                                    name="pickupLocation"
                                    placeholder="Enter pickup location"
                                    className="pl-2 outline-none border-b-4 w-full rounded-lg p-2.5"
                                />
                                <ErrorMessage
                                    name="pickupLocation"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>

                            <div className="w-1/3">
                                <label className="block text-gray-600 font-semibold">
                                    Drop Location
                                </label>
                                <Field
                                    type="text"
                                    name="dropLocation"
                                    placeholder="Enter drop location"
                                    className="pl-2 outline-none border-b-4 w-full rounded-lg p-2.5"
                                />
                                <ErrorMessage
                                    name="dropLocation"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>

                            <div className="w-1/3">
                                <label className="block text-gray-600 font-semibold">Time</label>
                                <Field
                                    type="time"
                                    name="time"
                                    placeholder="Select time"
                                    className="pl-2 outline-none border-b-4 w-full rounded-lg p-2.5"
                                />
                                <ErrorMessage
                                    name="time"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="max-h-14 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                {isSubmitting ? 'Submitting...' : 'Book Now'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default BookingField