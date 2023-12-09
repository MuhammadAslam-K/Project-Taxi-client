import { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useNavigate, Link } from "react-router-dom"
import userAxios from '../../../services/axios/userAxiosinterceptors'
import userEndpoints from '../../../constance/routeConstants/userEndpoints'
import userApis from '../../../services/apis/userApis'




function SignUp() {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            re_password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Type a valid Name")
                .required("Please Enter the value"),
            email: Yup.string()
                .email("Please Enter a valid Email")
                .required("Please Enter value"),
            mobile: Yup.string()
                .length(10, "Please Enter a valid number")
                .required("Please Enter value"),
            password: Yup.string()
                .min(8, "Minimum 8 Character required")
                .matches(/^(?=.*[A-Z])/, "Must include One uppercase letter")
                .matches(/^(?=.*\d)/, "Must include one digit")
                .required("Password is required"),
            re_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password must match")
                .required("Please re-enter the password"),
        }),
        onSubmit: () => {
            submitSignUpForm()
        },
    });

    const submitSignUpForm = async () => {
        try {
            await userAxios.post(userApis.signup, formik.values)
            navigate(userEndpoints.login)
        } catch (error) {
            console.log("Error in user signup", error)
        }
    }


    const without_error_class = "pl-2 outline-none border-b-4 w-full rounded-lg p-2.5 sm:text-sm";
    const with_error_class = "pl-2 outline-none border-b border-red-400 w-full rounded-lg p-2.5 sm:text-sm";


    return (
        <>

            <div className="flex h-screen items-center justify-center bg-gray-100" >
                <div className="w-full max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-2xl sm:flex justify-center">
                    <div className="w-full ">
                        <div className="p-8">
                            <h1 className="text-3xl font-black text-blue mb-3">Sign up</h1>
                            <form className="" onSubmit={formik.handleSubmit}>

                                <div className='mb-4'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        required
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.touched.name && formik.errors.name
                                                ? with_error_class
                                                : without_error_class
                                        }
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="text-red-500 text-xs">{formik.errors.name}</div>
                                    )}
                                </div>

                                <div className='mb-4'>
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

                                <div className='mb-4'>
                                    <input
                                        type="text"
                                        name="mobile"
                                        placeholder='Mobile No'
                                        required
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.touched.mobile && formik.errors.mobile
                                                ? with_error_class
                                                : without_error_class
                                        }
                                    />
                                    {formik.touched.mobile && formik.errors.mobile && (
                                        <div className="text-red-500 text-xs">{formik.errors.mobile}</div>
                                    )}

                                </div>

                                <div className='mb-4'>
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

                                <div className='mb-4'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="re_password"
                                        placeholder="Password"
                                        required
                                        value={formik.values.re_password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.touched.re_password && formik.errors.re_password
                                                ? with_error_class
                                                : without_error_class
                                        }
                                    />
                                    {formik.touched.re_password && formik.errors.re_password && (
                                        <div className="text-red-500 text-xs">{formik.errors.re_password}</div>
                                    )}
                                </div>

                                <div className="mb-4 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="showPassword"
                                        onChange={() => setShowPassword(!showPassword)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="showPassword">Show Password</label>
                                </div>


                                <button className=" w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type='submit'>
                                    Submit
                                </button>

                            </form>

                            <div className="mt-2 text-center">
                                <p className="text-sm text-gray-600">Already have an account? <Link to={userEndpoints.login} className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SignUp