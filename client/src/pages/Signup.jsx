import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signUpService } from "../services/carServices";
import { NavLink } from "react-router-dom";

function Signup() {

    const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const validationSchema = Yup.object(
        {
            firstName: Yup.string()
                .required("Please enter your firstname"),
            lastName: Yup.string()
                .required("Please enter your lastname"),
            email: Yup.string()
                .email("Please enter a valid email")
                .required("Email is required"),
            password: Yup.string()
                .required("Password cannot be empty")
                .min(8, "Password must be at least 8 characters")
        }
    )

    const formik = useFormik(
        {
            initialValues: INITIAL_STATE,
            validationSchema: validationSchema,

            onSubmit: async (values) => {

                const name = `${values.firstName} ${values.lastName}`;
                setLoading(true)
                setError(null)


                try {
                    const data = await signUpService(name, values.email, values.password);
                    login(data.user, data.token);
                    navigate("/dashboard")
                }
                catch (error) {
                    setError(error.message || "Something went wrong")
                }
                finally {
                    setLoading(false)
                }
            }
        }
    )


    return (
        <div className="checkVIN bg-white min-h-screen flex gap-8 px-8 pt-8 items-start justify-between">

            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-4"> Create your account</h1>

                <p className="text-gray-500 text-lg">
                    Sign up to save cars and track your ownership history.
                </p>
            </div>

            <div className="w-1/2">
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={formik.handleSubmit}
                >

                    {/* <label htmlFor="vin"> Enter VIN </label> */}

                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter FirstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    />

                    {
                        formik.touched.firstName && formik.errors.firstName && (
                            <p> {formik.errors.firstName} </p>
                        )
                    }

                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter LastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    />

                    {
                        formik.touched.lastName && formik.errors.lastName && (
                            <p> {formik.errors.lastName} </p>
                        )
                    }

                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    />

                    {
                        formik.touched.email && formik.errors.email && (
                            <p> {formik.errors.email} </p>
                        )
                    }

                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    />

                    {
                        formik.touched.password && formik.errors.password && (
                            <p> {formik.errors.password} </p>
                        )
                    }

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
                    > Sign Up </button>

                    <p className="text-sm text-gray-500 text-center">
                        Already have an account?
                        <NavLink to="/login" className="text-purple-700 ml-1"> Login </NavLink>
                    </p>

                </form>

                {
                    loading && <p> Loading... </p>
                }

                {
                    error && <p> {error} </p>
                }
            </div>
        </div>

    )
}

export default Signup;