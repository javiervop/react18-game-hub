import { useEffect, useState } from "react";
import { Game } from "./useGames";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {

    interface Genre {
        id: Number;
        name: String;
    }

    interface FetchGenresResponse {
        count: number;
        results: Genre[];
    }

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading]= useState(false);  

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                if (err instanceof CanceledError) {
                    setError('')
                } else {
                    setError(err.message)
                };
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading}


};

export default useGenres;
