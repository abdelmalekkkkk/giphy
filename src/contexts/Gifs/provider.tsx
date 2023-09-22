import { PropsWithChildren, useReducer } from "react";
import GifsContext from "./context";
import { reducer } from "./reducer";

const defaultState: SearchParams = {
    query: "",
    page: 1,
};

const GifsProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <GifsContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GifsContext.Provider>
    );
};

export default GifsProvider;
