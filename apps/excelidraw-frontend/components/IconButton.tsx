/*import { ReactNode } from "react";

export function IconButton({
    icon, onClick, activated
}: {
    icon: ReactNode,
    onClick: () => void,
    activated: boolean
}) {
    return <div className={`m-2 pointer rounded-full border p-2 bg-black hover:bg-gray ${activated ? "text-red-400" : "text-white"}`} onClick={onClick}>
        {icon}
    </div>
}*/

import { ReactNode } from "react";

export function IconButton({
    icon, onClick, activated
}: {
    icon: ReactNode,
    onClick: () => void,
    activated: boolean
}) {
    return (
        <button
            className={`m-2 flex items-center justify-center rounded-xl border-2 p-3 shadow-lg transition-all duration-300 w-14 h-14
            ${activated ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl" : "bg-gray-900 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-xl"}`}
            onClick={onClick}
            aria-label="Icon button"
        >
            <span className="h-6 w-6 flex items-center justify-center scale-110">{icon}</span>
        </button>
    );
}


