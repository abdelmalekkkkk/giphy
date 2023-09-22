import { ChangeEvent, useRef } from "react";
import { useDispatch } from "../../contexts/Gifs/hooks";

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const DEBOUNCE_TIME = 250;

const Search = () => {
    const dispatch = useDispatch();
    const debounce = useRef<number>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (debounce.current != undefined) {
            clearTimeout(debounce.current);
        }

        debounce.current = setTimeout(dispatch, DEBOUNCE_TIME, {
            type: "SEARCH",
            payload: e.target.value.trim(),
        });
    };

    return (
        <div className="relative sm:w-96 w-full">
            <MagnifyingGlassIcon className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400" />
            <input
            className="py-2 px-2 border rounded w-full text-sm pl-8"
            type="text"
            placeholder="Search for something cute"
            onChange={handleChange}
        />
        </div>
    );
};

export default Search;
