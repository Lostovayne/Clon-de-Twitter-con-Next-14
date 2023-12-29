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

export const InitialLoading = () => {
    const [loading, setLoading] = useState(true);

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
            className={` xl:mr-3 grid grid-cols-2 md:grid-cols-4 min-h-screen  animate-in fade-in transition-opacity  items-start justify-between ${
                !loading && " opacity-100 "
            }`}
        >
            <section className="col-span-1 hidden md:block">
                <Sidebar />
            </section>

            <section className="col-span-2 min-h-svh w-full border-r border-gray-500/20 xl:min-h-screen">
                <HeaderPosts />
                <PublishPosts />
            </section>

            <section className="col-span-1 hidden min-h-svh items-end pl-5 pt-4 md:flex md:flex-col xl:min-h-screen xl:min-w-64">
                <Article className="flex w-full flex-col items-end gap-6">
                    <ModeToggle />
                    <Suscripcion />
                    <Tendencias />
                </Article>
            </section>
        </div>
    );
};
