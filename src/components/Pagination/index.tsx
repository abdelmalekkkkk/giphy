import { useDispatch } from "../../contexts/Gifs/hooks";
import ReactPaginate from "react-paginate";

type PaginationProps = {
    page: number;
    pages: number;
};

const className =
    "relative inline-flex items-center  px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0";

const Pagination = ({ page, pages }: PaginationProps) => {
    const dispatch = useDispatch();

    const updatePage = ({ selected }: { selected: number }) => {
        dispatch({
            type: "NAVIGATE",
            payload: selected,
        });
    };

    return (
        <ReactPaginate
            breakLabel="..."
            onPageChange={updatePage}
            forcePage={page}
            pageCount={pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            activeClassName=" bg-indigo-700 text-white hover:bg-indigo-700 bg:text-white"
            breakClassName={`${className} px-4 hidden sm:block`}
            pageClassName={`${className} px-4 hidden sm:block`}
            previousClassName={`${className} rounded-l-md`}
            nextClassName={`${className} rounded-r-md`}
            containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
