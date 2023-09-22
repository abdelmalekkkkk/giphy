import { useQuery } from "react-query";
import { getGifs } from "./getGifs";

const useGifs = ({ query, page }: SearchParams) => {
    return useQuery<GifsData>({
        queryKey: ["gifs", query, page], 
        queryFn: () => getGifs({ query, page }),
        keepPreviousData: true,
    });
};

export { useGifs };
