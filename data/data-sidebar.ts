import { IconType } from "react-icons";
import { RiHome5Fill, RiSearchLine } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiNewspaperLine } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiMoreFill } from "react-icons/ri";

interface Props {
    href: string;
    icon: IconType;
    name: string;
    selected?: boolean;
}

export const dataSidebar: Props[] = [
    {
        icon: RiHome5Fill,
        name: "Inicio",
        href: "/",
        selected: true,
    },
    {
        icon: RiSearchLine,
        name: "Explorar",
        href: "/",
    },
    {
        icon: RiNotification2Line,
        name: "Notificaciones",
        href: "/",
    },
    {
        icon: RiMailLine,
        name: "Mensajes",
        href: "/",
    },
    {
        icon: RiNewspaperLine,
        name: "Noticias",
        href: "/",
    },
    {
        icon: RiBookmarkLine,
        name: "Guardados",
        href: "/",
    },
    {
        icon: RiGroupLine,
        name: "Comunidades",
        href: "/",
    },
    {
        icon: RiTwitterXLine,
        name: "Premium",
        href: "/",
    },
    {
        icon: RiUser3Line,
        name: "Perfil",
        href: "/",
    },
    {
        icon: RiMoreFill,
        name: "Más opciones",
        href: "/",
    },
];
