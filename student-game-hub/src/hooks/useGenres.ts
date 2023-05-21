import useData from "./useData";

export interface Genre {
    id: Number;
    name: String;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
