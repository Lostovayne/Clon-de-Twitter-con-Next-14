"use client";
import { dataSidebar } from "@/data/data-sidebar";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { DialogPost } from "./components/postear-dialog";

export const Sidebar = () => {
    return (
        <aside className="flex min-h-screen flex-col items-start border-r border-gray-500/20 pl-3 pr-6 pt-4">
            <div className="mb-2 ml-2 cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-200/60 dark:hover:bg-gray-800">
                <RiTwitterXFill className="border-none text-3xl" />
            </div>
            <nav>
                {dataSidebar.map((item) => (
                    <li
                        key={item.name}
                        className={`flex  items-center w-max cursor-pointer list-none hover:bg-gray-300/30  dark:hover:bg-gray-500/20 text-xl  gap-5 pl-4 pr-5 py-2.5 rounded-3xl transition-all ${
                            item.selected ? "font-semibold" : ""
                        }`}
                    >
                        <item.icon className="text-2xl" />
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}

                <DialogPost />
            </nav>
        </aside>
    );
};
