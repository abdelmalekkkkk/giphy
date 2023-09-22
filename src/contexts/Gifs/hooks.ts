import { useContext } from "react";
import GifsContext from "./context";

const useSearchState = () => {
    const context = useContext(GifsContext);

    if (context == null) {
        throw new Error("GifsProvider has not been initialized");
    }

    return { query: context.query, page: context.page }
}

const useDispatch = () => {
    const context = useContext(GifsContext);

    if (context == null) {
        throw new Error("GifsProvider has not been initialized");
    }
    
    return context.dispatch;
}

export {
    useSearchState,
    useDispatch,
};
