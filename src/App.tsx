import { QueryClient, QueryClientProvider } from "react-query";
import GifsResults from "./components/GifResults";
import Search from "./components/Search";
import GifsProvider from "./contexts/Gifs/provider";

// It's important to set staleTime to a value > 0 to enable caching
const queryClient = new QueryClient({
    defaultOptions: { 
        queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false, refetchOnMount: false},
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GifsProvider>
                <div className="flex justify-center items-center flex-col py-10 px-4">
                    <Search />
                    <div className="mt-10 max-w-full">
                    <GifsResults />
                    </div>
                </div>
            </GifsProvider>
        </QueryClientProvider>
    );
}

export default App;
