const reducer = (state: SearchParams, action: Action): SearchParams => {
    switch (action.type) {
        case "SEARCH":
            return {
                ...state,
                query: action.payload
            };
        case "NAVIGATE":
            return {
                ...state,
                page: action.payload
            };
    }
}

export {
    reducer
};
