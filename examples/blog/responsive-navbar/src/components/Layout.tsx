import { useMenu, LayoutProps, useRouterContext } from "@pankod/refine-core";
import React from "react";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { menuItems } = useMenu();

    const { Link } = useRouterContext();

    return (
        <div className="flex min-h-screen flex-col">
            <div className="mb-2 md:border-b py-2">
                <div className="container mx-auto">
                    <div className="flex justify-between gap-2">
                        <img
                            src="https://refine.dev/img/refine_logo.png"
                            alt="Logo"
                        />
                        <ul className="hidden md:flex">
                            {menuItems.map(({ name, route }) => (
                                <li key={name} className="float-left">
                                    <Link
                                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize
                                    decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"
                                        to={name}
                                    >
                                        <span className="text-green-500">
                                            {name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:hidden border-b pl-3">
                {menuItems.map(({ name, route }) => (
                    <Link
                        key={name}
                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize
                                    decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"
                        to={name}
                    >
                        <span className="text-green-500">{name}</span>
                    </Link>
                ))}
            </div>
            <div className="bg-white">{children}</div>
        </div>
    );
};
