function VinResult({ results }) {

    return (
        <div className="vinResult mt-6 flex-col gap-4">

            <div className="divide-y divide-gray-100 rounder-lg p-5 shadow-sm">

                <h3 className="text-purple-700 font-semibold text-sm uppercase tracking-wide mb-3"> Vehicle Overview </h3>

                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-500 text-sm">Make</p>
                    <p className="text-gray-900 text-sm font-medium">{results.make || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Model</p>
                    <p className="text-gray-900 text-sm font-medium">{results.model || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Year</p>
                    <p className="text-gray-900 text-sm font-medium">{results.modelYear || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Trim</p>
                    <p className="text-gray-900 text-sm font-medium">{results.trim || "Not Available"}</p>
                </div>
            </div>

            <div className="divide-y divide-gray-100 rounder-lg p-5 shadow-sm">

                <h3 className="text-purple-700 font-semibold text-sm uppercase tracking-wide mb-3">Body</h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-500 text-sm">Vehicle Type</p>
                    <p className="text-gray-900 text-sm font-medium">{results.vehicleType || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Body Class</p>
                    <p className="text-gray-900 text-sm font-medium">{results.bodyClass || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Doors</p>
                    <p className="text-gray-900 text-sm font-medium">{results.doors || "Not Available"}</p>
                </div>

            </div>

            <div className="divide-y divide-gray-100 rounder-lg p-5 shadow-sm">

                <h3 className="text-purple-700 font-semibold text-sm uppercase tracking-wide mb-3">Engine</h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-500 text-sm">Cylinders</p>
                    <p className="text-gray-900 text-sm font-medium">{results.engineCylinders || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Displacement</p>
                    <p className="text-gray-900 text-sm font-medium">{results.engineDisplacement ? `${parseFloat(results.engineDisplacement).toFixed(1)}L` : "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Fuel Type</p>
                    <p className="text-gray-900 text-sm font-medium">{results.fuelType || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Horsepower</p>
                    <p className="text-gray-900 text-sm font-medium">{results.horsepower ? `${results.horsepower} hp` : "Not Available"}</p>
                </div>

            </div>

            <div className="divide-y divide-gray-100 rounder-lg p-5 shadow-sm">

                <h3 className="text-purple-700 font-semibold text-sm uppercase tracking-wide mb-3">Drivetrain</h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-500 text-sm">Transmission</p>
                    <p className="text-gray-900 text-sm font-medium">{results.transmission || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Drive Type</p>
                    <p className="text-gray-900 text-sm font-medium">{results.driveType || "Not Available"}</p>
                </div>

            </div>

            <div className="divide-y divide-gray-100 rounder-lg p-5 shadow-sm">

                <h3 className="text-purple-700 font-semibold text-sm uppercase tracking-wide mb-3">Manufacturing</h3>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-500 text-sm">Manufacturer</p>
                    <p className="text-gray-900 text-sm font-medium">{results.manufacturer || "Not Available"}</p>
                    <p className="text-gray-500 text-sm">Plant Country</p>
                    <p className="text-gray-900 text-sm font-medium">{results.plantCountry || "Not Available"}</p>
                </div>

            </div>

        </div>
    )
}

export default VinResult