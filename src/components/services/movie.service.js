import axios from "axios"
import { axiosWithToken } from "../../api/api";

export const MovieService = {
    async getMovieList() {
        try {
            const res = await axiosWithToken.get('discover/movie');
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}