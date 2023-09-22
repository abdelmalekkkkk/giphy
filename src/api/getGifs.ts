import Client from "./client";

const getGifs = async ({
    query,
    page,
}: {
    query: string;
    page: number;
}): Promise<GifsData> => {
    if (query.length < 3) {
        return {
            gifs: [],
            pages: 0,
        };
    }

    const params = {
        q: query,
        limit: 24,
        offset: page < 1 ? 0 : (page - 1) * 24,
        rating: "g",
        lang: "en",
    };

    const { data } = await Client.get<GiphyResponse>("search", { params });

    const gifs: Gif[] = data.data.map((gif) => ({
        id: gif.id,
        url: gif.images.original.url,
        preview_url: gif.images.preview_webp.url,
        width: gif.images.original.width,
        height: gif.images.original.height,
    }));
    const pages = data.pagination.total_count;

    return {
        gifs,
        pages,
    };
};

export { getGifs };
