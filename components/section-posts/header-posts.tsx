import { RiSettings3Line } from "react-icons/ri";
import { Button } from "../ui/button";

export const HeaderPosts = () => {
    return (
        <div className="flex w-full border-b border-gray-500/20">
            <Button
                className="flex-grow border-none hover:bg-gray-300/60 xl:py-7 xl:text-base xl:font-medium dark:hover:bg-gray-500/20"
                variant="outline"
            >
                Para ti
            </Button>
            <Button
                className="flex-grow border-none hover:bg-gray-300/60 xl:py-7 xl:text-base xl:font-medium dark:hover:bg-gray-500/20"
                variant="outline"
            >
                Siguiente
            </Button>
            {/* <Button
                variant="outline"
                size="icon"
                className="h-full w-16 border-none px-3 py-3 hover:bg-gray-600/30"
            >
                <RiSettings5Line className="h-full xl:text-3xl" />
            </Button> */}
            <button className="grid w-14 place-items-center hover:bg-gray-300/60 dark:hover:bg-gray-500/20">
                <RiSettings3Line className="h-full text-gray-700 xl:text-3xl dark:text-white" />
            </button>
        </div>
    );
};
