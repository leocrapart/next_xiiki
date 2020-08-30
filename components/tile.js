

export default function Tile({ imgSrc, title, href}) {
    return (
        <div className="flex px-2 py-5 md:px-5">
            <div className="bg-gray-300 border-2 border-gray-500 rounded ">
                <a href={href}>
                    <img src={imgSrc} className="w-full"></img>
                    <div className="py-2 text-center">
                        <div>{title}</div>
                    </div>
                </a>
            </div>
        </div>
    )
}