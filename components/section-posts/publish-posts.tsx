"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { IconsPublish } from "./icons-publish";
import { useState } from "react";
import { getPosts } from "@/data/data-post";
import { useRouter } from "next/navigation";

export const PublishPosts = () => {
    const [image, setImage] = useState("");
    const [dataForm, setDataForm] = useState({
        textArea: "",
        imagen: "",
    });

    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (image === "") {
            setImage("");
        }
        dataForm.imagen = image;

        const newPost = {
            id: Math.random(),
            user: {
                name: "Eysler Jimenez",
                image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg",
            },

            description: dataForm.textArea,
            image: dataForm.imagen,
            likes: 0,
            comments: 0,
            shares: 0,
        };

        getPosts.push(newPost);
        console.log(getPosts);
        setDataForm({ textArea: "", imagen: "" });
        setImage("");
        router.refresh();
    };

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
                <form className="flex-1 pb-4">
                    <Textarea
                        name="textArea"
                        onChange={(e) => setDataForm({ ...dataForm, textArea: e.target.value })}
                        value={dataForm.textArea || ""}
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
                            onClick={handleSubmit}
                            type={"submit"}
                            variant="default"
                            className="rounded-full bg-[#1D9BF0] font-bold text-white hover:bg-[#1D9BF0]/90"
                        >
                            Postear
                        </Button>
                    </div>
                </form>
            </section>
        </header>
    );
};
