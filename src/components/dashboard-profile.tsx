"use client"
import React from "react"
import { useRouter } from "next/navigation"

const DashboardProfile = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push("/profile")
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className="px-6 py-2 rounded-2xl
                   text-black font-medium shadow-lg hover:scale-105 hover:shadow-xl hover:bg-amber-500">
                Profile
            </button>
        </div>
    )
}

export default DashboardProfile
