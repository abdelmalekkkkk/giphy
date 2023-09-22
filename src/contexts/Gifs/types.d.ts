type SearchParams = {
    query: string;
    page: number;
}

interface SearchContext extends SearchParams {
    dispatch: Dispatch<Action>;
}

type SearchAction = {
    type: "SEARCH";
    payload: string;
}

type NavigateAction = {
    type: "NAVIGATE";
    payload: number;
}

type Action = SearchAction | NavigateAction;
