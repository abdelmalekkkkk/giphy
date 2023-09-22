import { LazyLoadImage } from "react-lazy-load-image-component";

const Gif = ({
    url,
    preview_url,
    width,
    height,
    className,
}: Gif & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={className}>
            <LazyLoadImage
                wrapperClassName="w-full bg-gray-100"
                className="w-full rounded-lg"
                src={url}
                width={width}
                height={height}
                placeholderSrc={preview_url}
            />
        </div>
    );
};

export default Gif;
