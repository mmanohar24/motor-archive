import axios from "axios";

export const decodeVIN = async (vin) => {
    try {
        const response = await axios.post(`/api/cars/decode`, { VIN: vin })
        const results = response.data;
        return results;

    }
    catch (error) {
        throw new Error(error)
    }

}