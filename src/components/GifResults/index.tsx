import { useSearchState } from "../../contexts/Gifs/hooks";
import { useGifs } from "../../api/hooks";
import Gif from "../Gif";
import Pagination from "../Pagination";

const GifsResults = () => {
    const { query, page } = useSearchState();
    const { data, isLoading, isError, isSuccess } = useGifs({ query, page });

    if (data == undefined) {
        return null;
    }

    if (isError) {
        return (
            <div className="text-sm text-red-800 mt-10">
                An unexpected error occured while fetching the Gifs. Please try
                again later.
            </div>
        );
    }

    return (
        <>
            {isSuccess && data.gifs.length == 0 && (
                <div className="text-sm text-gray-500 text-center w-full">
                    No results found.
                </div>
            )}

            {isLoading && <div>
                </div>}

            <div className="columns-1 sm:columns-2 md:columns-4 gap-4 w-full">
                {data.gifs.map((gif) => (
                    <Gif className="mb-4" key={gif.id} {...gif} />
                ))}
            </div>
            <div className="mt-4 flex justify-center">
            <Pagination page={page} pages={data.pages / 24} />
            </div>
        </>
    );
};

export default GifsResults;
