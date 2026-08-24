function VinResult({ results }) {

    return (
        <div className="vinResult">

            <div className="vinResult-vehicleOverview">
                <h3> Vehicle Overview </h3>

                <p> Make: {results.make || "Not Available"} </p>
                <p> Model: {results.model || "Not Available"} </p>
                <p> Year: {results.modelYear || "Not Available"} </p>
                <p> Trim: {results.trim || "Not Available"} </p>
            </div>

            <div className="vinResult-body">
                <h3> Body </h3>

                <p> Vehicle Type: {results.vehicleType || "Not Available"} </p>
                <p> Body Class: {results.bodyClass || "Not Available"} </p>
                <p> Doors: {results.doors || "Not Available"} </p>
            </div>

            <div className="vinResult-engine">
                <h3> Engine </h3>

                <p> Cylinders: {results.engineCylinders || "Not Available"} </p>
                <p> Displacement: {results.engineDisplacement ? `${parseFloat(results.engineDisplacement).toFixed(1)}L` : "Not Available"} </p>
                <p> Fuel Type: {results.fuelType || "Not Available"} </p>
                <p> Horsepower: {results.horsepower ? `${results.horsepower} hp` : "Not Available"} </p>
            </div>

            <div className="vinResult-drivetrain">
                <h3> Drivetrain </h3>

                <p> Transmission: {results.transmission || "Not Available"} </p>
                <p> Drive Type: {results.driveType || "Not Available"} </p>
            </div>

            <div className="vinResult-manufacturing">
                <h3> Manufacturing </h3>

                <p> Manufacturer: {results.manufacturer || "Not Available"} </p>
                <p> Plant Country: {results.plantCountry || "Not Available"} </p>
            </div>

        </div>
    )
}

export default VinResult