import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {

    const INITIAL_STATE = {
        email: "",
        password: ""
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const validationSchema = Yup.object(
        {
            email: Yup.string()
                .required("Please enter your username"),

            password: Yup.string()
                .required("Password cannot be empty")
        }
    )

    const formik = useFormik(
        {
            initialValues: INITIAL_STATE,
            validationSchema: validationSchema,

            onSubmit: async (values) => {
                setLoading(true)
                setError(null)


                try {
                    console.log()
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
                <h1 className="text-4xl font-bold mb-4"> Welcome Back </h1>

                <p className="text-gray-500 text-lg">
                    Login to access your saved cars and ownership history.
                </p>
            </div>

            <div className="w-1/2">
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={formik.handleSubmit}
                >

                    {/* <label htmlFor="vin"> Enter VIN </label> */}
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
                    > Login </button>

                    <p className="text-sm text-gray-500 text-center">
                        Don't have an account?
                        <NavLink to="/signup" className="text-purple-700 ml-1"> Sign Up </NavLink>
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

export default Login;