import { Button } from "../ui/button";
import { CardTendencia } from "./card-tendencia";
import { Tendencias } from "./tendencias";

export const Suscripcion = () => {
    return (
        <article className="mb-1 rounded-2xl py-4 pl-4 pr-2 dark:bg-[#202327]">
            <h3 className="mb-2 text-xl font-bold">Suscríbete a Premium</h3>
            <p className="mb-3 text-sm font-normal dark:text-slate-200">
                Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de
                cuota de ingresos por anuncios.
            </p>
            <Button
                variant="default"
                className="rounded-full bg-[#1D9BF0] font-bold text-white hover:bg-[#1D9BF0]/90"
            >
                Suscribirse
            </Button>
        </article>
    );
};
