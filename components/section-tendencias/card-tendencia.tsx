import { PropsTendencias } from "@/data/data-tendencias";
import { RiMoreFill } from "react-icons/ri";

export const CardTendencia = ({ ...props }: PropsTendencias) => {
    const { CountryTrend, subtext, title } = props;

    return (
        <div className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-600/10 dark:text-white dark:hover:bg-[#1a1d20]">
            <div>
                <p className="text-sm text-gray-500">{CountryTrend}</p>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{subtext}</p>
            </div>
            <RiMoreFill className="text-lg text-gray-500" />
        </div>
    );
};
