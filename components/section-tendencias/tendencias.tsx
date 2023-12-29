import { DataTendencias } from "@/data/data-tendencias";
import { CardTendencia } from "./card-tendencia";

export const Tendencias = () => {
    return (
        <div className="w-full rounded-xl py-3 dark:bg-[#202327]">
            <h3 className="mb-2 px-3 text-start text-xl font-bold">Tendencias para ti</h3>
            {DataTendencias.map((item) => (
                <CardTendencia key={item.id} {...item} />
            ))}
        </div>
    );
};
