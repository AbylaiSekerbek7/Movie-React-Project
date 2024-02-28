import axios from 'axios';
export const URL = "https://api.themoviedb.org/3/";
export const authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJlYjJkMzQ2NDZlNTc5NzFiOGJmMTI5MGMxMzQ2NyIsInN1YiI6IjY1ZDhiMDdkYTI4NGViMDE2Mjg3ZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFDNovEat4jUxdB9hOUzXZk8XLiWAwpC4JXlmltVWFo";

export const axiosWithToken = axios.create({
    baseURL: URL,
    headers: {
        Authorization: authorization,
    },
});

const axiosWithoutToken = axios.create({
    baseURL: URL,
});

// API Key -  6a2eb2d34646e57971b8bf1290c13467