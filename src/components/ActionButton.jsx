const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    gray: "bg-gray-600 hover:bg-gray-700",
}

function ActionButton({ color = "blue", label, onclick = () => { } }) {
    return (
        <button
            onClick={onclick}
            className={`px-5 py-2 mx-1 text-white rounded-md cursor-pointer transition-colors ${colorClasses[color]}`}
        >
            {label}
        </button>
    )
}
export default ActionButton