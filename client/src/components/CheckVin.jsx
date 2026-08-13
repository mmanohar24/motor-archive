import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "../CSS/CheckVin.css"
import { useState } from "react";



function CheckVin() {

    const INITIAL_STATE = {
        vin: ""
    }

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const validateSchema = Yup.object(
        {
            vin: Yup.string()
                .required("VIN Number is required")
                .length(17, "VIN must be exactly 17 characters")
                .matches(/^[A-HJ-NPR-Z0-9]{17}$/i, "VIN cannot include letters I, O, or Q")
        }
    )

    const formik = useFormik(
        {
            initialValues: INITIAL_STATE,
            validationSchema: validateSchema,
            // onSubmit: (values => { console.log(values) })

            onSubmit: (
                (async (values) => {
                    setLoading(true)

                    try {
                        const response = await axios.post(`/api/cars/decode`, { VIN: values.vin })
                        const results = response.data;
                        setResult(results);
                        setLoading(false)
                    }
                    catch (error) {
                        setError(error.response?.data?.message || 'Something went wrong')
                        setLoading(false)
                    }
                }
                )
            )
        }
    )

    return (
        <div className="checkVIN">
            <h1> Welcome to VIN Check page </h1>

            <form
                className="checkVINForm"
                onSubmit={formik.handleSubmit}
            >

                <label htmlFor="vin"> Enter VIN </label>
                <input
                    id="vin"
                    type="text"
                    name="vin"
                    placeholder="Enter VIN"
                    value={formik.values.vin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {
                    formik.touched.vin && formik.errors.vin && (
                        <p> {formik.errors.vin} </p>
                    )
                }

                <button
                    className="checkVINForm-btn"
                    type="submit"
                > Check VIN </button>

            </form>

            {
                loading && <p> Loading... </p>
            }

            {
                error && <p> {error} </p>
            }

            {
                result && <p> {result.make} {result.model} {result.modelYear} </p>
            }
        </div>
    )
}

export default CheckVin;