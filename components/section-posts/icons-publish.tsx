"use client";
import { RiImage2Line } from "react-icons/ri";
import { RiFileGifLine } from "react-icons/ri";
import { RiListRadio } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { Input } from "../ui/input";
import { useRef } from "react";

interface Props {
    setImage: (image: any) => void;
}

export const IconsPublish = ({ setImage }: Props) => {
    const InputRef = useRef(null);

    const handleClick = (): void => {
        InputRef.current?.click();
    };

    const handleImageChange = () => {
        const file = InputRef.current?.files[0]; // Obtener el archivo seleccionado

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex gap-4 text-lg text-blue-500">
            <div className="" onClick={handleClick}>
                <RiImage2Line className="cursor-pointer" />
                <Input
                    ref={InputRef}
                    id="picture"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    multiple={false}
                />
            </div>
            <RiFileGifLine />
            <RiListRadio />
            <RiCalendarTodoLine />
            <RiMapPinLine />
        </div>
    );
};
