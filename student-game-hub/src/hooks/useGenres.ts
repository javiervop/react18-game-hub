// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: Number;
    name: String;
    image_background: string;
}

// wheh data rarerly changes, one could add that data to the deployment
// to avoid another network call
// const useGenres = () => useData<Genre>('/genres');

const useGenres = () => ({ data: genres, isLoading: false, error: null})

export default useGenres;
