import React from 'react'

const Pricing = () => {
    return (
        <div className="bg-white w-full min-h-screen">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 p-6 gap-4 md:grid-cols-3 md:items-center md:p-4 md:gap-8">

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-slate-100">
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-gray-900">
                                Single User
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 149$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-gray-700 text-center"> 10 users included </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">

                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-lg border-indigo-600 bg-[#00df9a] px-12 py-3 text-center text-sm font-bold text-black hover:ring-1 hover:text-[#00df9a] hover:bg-black focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Start Trial
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-slate-100">
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-gray-900">
                                Partnership
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 199$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> 10 users included </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-lg border-indigo-600 bg-black px-12 py-3 text-center text-sm font-bold text-[#00df9a] hover:ring-1 hover:text-black hover:bg-[#00df9a] focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Start Trial
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-slate-100">
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-gray-900">
                                Group Account
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 299$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> 10 users included </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-lg border-indigo-600 bg-[#00df9a] px-12 py-3 text-center text-sm font-bold text-black hover:ring-1 hover:text-[#00df9a] hover:bg-black focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Start Trial
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing

