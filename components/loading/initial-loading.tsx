"use client";

import { useState } from "react";
import { ModeToggle } from "../conmutador";
import { Sidebar } from "../sidebar";
import { RiLoader2Line } from "react-icons/ri";
import { HeaderPosts } from "../section-posts/header-posts";
import { PublishPosts } from "../section-posts/publish-posts";
import { Suscripcion } from "../section-tendencias/suscripcion";
import { Article } from "../section-tendencias/article";
import { CardTendencia } from "../section-tendencias/card-tendencia";
import { Tendencias } from "../section-tendencias/tendencias";
import PostBoard from "../section-posts/post-board";
import { Input } from "../ui/input";
import { RiSearchLine } from "react-icons/ri";
import { PropsPosts, getPosts } from "@/data/data-post";

export const InitialLoading = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PropsPosts[]>(getPosts);

    // todo:  Loading de carga principal
    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return loading ? (
        <div className="grid min-h-svh w-full place-items-center">
            <RiLoader2Line className="animate-spin text-4xl" />
        </div>
    ) : (
        <div
            className={` relative xl:mr-3 grid grid-cols-2 md:grid-cols-4 min-h-screen  animate-in fade-in transition-opacity  items-start justify-between ${
                !loading && " opacity-100 "
            }`}
        >
            <section className="top-0 col-span-1 hidden md:sticky md:block">
                <Sidebar />
            </section>

            <section className="col-span-2 min-h-svh w-full border-r border-gray-500/20 xl:min-h-screen">
                <HeaderPosts />
                <PublishPosts />
                <PostBoard posts={posts} setPosts={setPosts} />
            </section>

            <section className="sticky -top-64 bottom-0 col-span-1 hidden min-h-svh items-end pl-5 pt-4 md:flex md:flex-col xl:max-h-screen xl:min-w-64">
                <Article className="flex w-full flex-col items-end gap-6">
                    <div className="flex w-full items-center gap-3">
                        <form className="flex-1 rounded-full border-none px-2 dark:bg-[#202327]">
                            <div className="relative">
                                <RiSearchLine className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search" className="border-none pl-8" />
                            </div>
                        </form>
                        <ModeToggle />
                    </div>
                    <Suscripcion />
                    <Tendencias />
                </Article>
            </section>
        </div>
    );
};
