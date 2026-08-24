import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { decodeVIN } from "../services/carServices";
import VinResult from "./VinResult";
import SaveCarModal from "./SaveCarModal";
import { useEffect } from "react";

function CheckVin() {

    const INITIAL_STATE = {
        vin: ""
    }

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!result) return;

        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, [result])

    function handleCloseModal() {
        setIsModalOpen(false);
    }

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
        <div className="checkVIN bg-white min-h-screen flex gap-8 px-8 pt-8 items-start justify-between">

            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-4"> Know exactly about what you're buying </h1>

                <p className="text-gray-500 text-lg">
                    Enter any VIN and get a full breakdown of the vehicle, recalls, engine specs, and everything a
                    buyer needs to know.
                </p>
            </div>

            <div className="w-1/2">
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={formik.handleSubmit}
                >

                    {/* <label htmlFor="vin"> Enter VIN </label> */}
                    <input
                        id="vin"
                        type="text"
                        name="vin"
                        placeholder="Enter VIN"
                        value={formik.values.vin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                    />

                    {
                        formik.touched.vin && formik.errors.vin && (
                            <p> {formik.errors.vin} </p>
                        )
                    }

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
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

                {
                    result && (
                        <button
                            className="mt-4 bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition-colors"
                            onClick={() => setIsModalOpen(true)}> Save this car </button>
                    )
                }

                <SaveCarModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>

    )
}

export default CheckVin;