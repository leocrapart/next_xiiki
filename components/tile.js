

export default function Tile({ imgSrc, title, href}) {
    return (
        <div className="p-5">
            <div className="bg-gray-300 border-2 border-gray-500 rounded ">
                <a href={href}>
                    <img src={imgSrc} className="max-w-xs"></img>
                    <div className="py-2 text-center">
                        <div>{title}</div>
                    </div>
                </a>
            </div>
        </div>
    )
}