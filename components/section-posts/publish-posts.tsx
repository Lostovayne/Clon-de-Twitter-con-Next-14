"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { IconsPublish } from "./icons-publish";
import { useState } from "react";

export const PublishPosts = () => {
    const [image, setImage] = useState(null);

    return (
        <header className="border border-gray-600/10">
            <section className="flex w-full items-start gap-3 p-4">
                <Image
                    src="https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg"
                    width={50}
                    priority
                    height={50}
                    alt="logo"
                    className="h-10 w-10 rounded-full border"
                />
                <div className="flex-1 pb-4">
                    <Textarea
                        className="min-h-20 resize-none border-none text-base placeholder:text-xl placeholder:text-gray-500/80"
                        placeholder="¿Qué estás pensando?"
                        aria-label="¿Que estas pensando?"
                    />

                    {image && (
                        <div className="relative">
                            <Image
                                src={image}
                                alt="logo"
                                width={400}
                                height={400}
                                className="rounded-md object-cover max-xl:w-52"
                            />
                        </div>
                    )}

                    <div className="flex items-end justify-between">
                        <IconsPublish setImage={setImage} />
                        <Button
                            variant="default"
                            className="rounded-full bg-[#1D9BF0] font-bold text-white hover:bg-[#1D9BF0]/90"
                        >
                            Postear
                        </Button>
                    </div>
                </div>
            </section>
        </header>
    );
};
