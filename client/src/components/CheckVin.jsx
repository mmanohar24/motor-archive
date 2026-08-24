import { useFormik } from "formik";
import * as Yup from "yup";

import "../CSS/CheckVin.css"
import { useState } from "react";
import { decodeVIN } from "../services/carServices";
import VinResult from "./VinResult";

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

            onSubmit: async (values) => {
                setLoading(true)
                setError(null)

                try {
                    const data = await decodeVIN(values.vin);
                    setResult(data);
                }
                catch (error) {
                    setError(error.message || 'Something went wrong')
                }
                finally {
                    setLoading(false)
                }
            }
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
                // result && <p> {result.make} {result.model} {result.modelYear} </p>

                result && <VinResult results={result} />
            }
        </div>
    )
}

export default CheckVin;