import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from "react-router-dom"
import driverAxios from '../../../services/axios/driverAxiosinterceptors';
import driverApis from '../../../services/apis/driverApis';
import driverEndpoints from '../../../constance/routeConstants/driverEndpoints';
import { driverLogin } from '../../../store/slice/driverSlice';
import { useDispatch } from 'react-redux';




function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please Enter a valid Email")
                .required("Please Enter value"),
            password: Yup.string()
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            handleSubmit(values)
        },
    });

    const handleSubmit = async (values: { email: string, password: string }) => {
        try {
            const response = await driverAxios.post(driverApis.login, values)
            dispatch(driverLogin());
            localStorage.setItem('driverToken', response.data);
            navigate('/driver/dashboard')

        } catch (error) {
            console.log("Error in driver login", error)
        }
    };


    const without_error_class = "pl-2 outline-none border-b-4 w-full rounded-lg p-2.5 sm:text-sm";
    const with_error_class = "pl-2 outline-none border-b border-red-400 w-full rounded-lg p-2.5 sm:text-sm";

    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100" >
                <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl sm:flex justify-center">
                    <div className="w-full ">
                        <div className="p-8">
                            <h1 className="text-3xl font-black text-blue">Sign In</h1>
                            <form className="mt-8" onSubmit={formik.handleSubmit}>

                                <div className='mb-6'>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.touched.email && formik.errors.email
                                                ? with_error_class
                                                : without_error_class
                                        }
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500 text-xs">{formik.errors.email}</div>
                                    )}
                                </div>

                                <div className='mb-6'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        required
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.touched.password && formik.errors.password
                                                ? with_error_class
                                                : without_error_class
                                        }
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="text-red-500 text-xs">{formik.errors.password}</div>
                                    )}
                                </div>

                                <div className="flex justify-between">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="showPassword"
                                            onChange={() => setShowPassword(!showPassword)}
                                            className="mr-2"
                                        />
                                        <label htmlFor="showPassword">Show Password</label>
                                    </div>
                                </div>

                                <button className="mt-3 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type='submit'>
                                    Submit
                                </button>

                            </form>
                            <div className="mt-1 text-center">
                                <p className="text-sm text-gray-600">create an account? <Link to={driverEndpoints.signup} className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login