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

export const loginService = async (email, password) => {
    try {
        const response = await axios.post("/api/auth/login", { email, password });
        return response.data
    }
    catch (error) {
        throw new Error(error);
    }
}

export const signUpService = async (name, email, password) => {
    try {
        const response = await axios.post("/api/auth/signup", { name, email, password });
        return response.data;
    }
    catch (error) {
        throw new Error(error);
    }
}