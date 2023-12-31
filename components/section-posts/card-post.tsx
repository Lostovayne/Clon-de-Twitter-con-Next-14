"use client";
import Image from "next/image";
import { RiMoreFill } from "react-icons/ri";

export const CardPost = ({ post, setPosts }: any) => {
    // console.log(post.image.toString());
    return (
        <div className="border border-gray-500/20 p-5 transition-all">
            <header className="">
                <div className="flex items-start gap-5">
                    <div>
                        <Image
                            src={post.user.image}
                            width={50}
                            height={50}
                            alt="logo"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    </div>
                    <section className="flex-1">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <h2 className="text-sm font-bold xl:text-base dark:text-slate-300">
                                    {post.user.name}
                                </h2>
                                <p className="text-base text-gray-500">@username</p>
                                <span className="text-base text-gray-500">2h</span>
                            </div>
                            <RiMoreFill className="text-lg text-gray-500" />
                        </div>

                        <p className="text-wrap">{post.description}</p>
                    </section>
                </div>
            </header>

            {
                // todo:  Imagen
                !post.image.toString().includes("localhost") && post.image !== "" ? (
                    <div className="cursor-pointer">
                        <Image
                            src={post.image}
                            alt=""
                            width={400}
                            height={400}
                            className="ml-14 mt-2 max-xl:max-w-48"
                        />
                    </div>
                ) : (
                    " "
                )
            }

            <footer></footer>
        </div>
    );
};
