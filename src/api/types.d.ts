type Gif = {
    id: string;
    url: string;
    preview_url: string;
    width: number;
    height: number;
};

type GifsData = {
    pages: number;
    gifs: Gif[];
};

type GiphyImage = {
    url: string;
    width: number;
    height: number;
};

type GiphyImages = {
    original: GiphyImage;
    preview_webp: GiphyImage;
};

type GiphySingle = {
    id: string;
    images: GiphyImages;
};

type GiphyPagination = {
    total_count: number;
}

type GiphyResponse = {
    data: GiphySingle[];
    pagination: GiphyPagination;
};