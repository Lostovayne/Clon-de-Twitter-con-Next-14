interface User {
    name: string;
    image?: string;
}

export interface PropsPosts {
    user: User;
    description: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    id: number;
}

export const getPosts = (): PropsPosts[] => [
    {
        user: {
            name: "Eysler Jimenez",
            image: "https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg?w=1380&t=st=1703914837~exp=1703915437~hmac=7756c737bf65d36ad4b334d142fd3aa85b2ddc20e88d9cf99954e9a6c0c6bc95",
        },
        description:
            "Estoy en un crucero y una mamá dejó que su niño dejara la mesa así después de comer… ¿a ustedes qué les parece esto?",
        image: "https://pbs.twimg.com/media/GCgUdgNX0AEB5xH?format=jpg&name=small",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Miguel Jimenez",
            image: "https://img.freepik.com/foto-gratis/vista-frontal-concepto-perro-lindo-divertido_23-2148786514.jpg?w=996&t=st=1703913520~exp=1703914120~hmac=58c6cbe3b582add6d72c3fa2755dff67ee9a4f4c5e24fb5e23303b4231d06e3c",
        },
        description:
            "Viendo Instagram me salió un vídeo de esos de my day as a software engineer y como me frustran esos vídeos porque yo no soy ni un cuarto de productiva de lo que es esa gente. Termino pensando que soy una vaga que realmente no trabaja y solo se distrae y se atrasa con todo",
        image: "https://img.freepik.com/free-photo/vertical-shot-huilo-huilo-waterfall-southern-chile_181624-34864.jpg?w=360&t=st=1703914778~exp=1703915378~hmac=a687cf4fcfd9790d34b24da852104795a89f6a04d9190f870876cdb554888b62",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Greg Bergé",
            image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg?w=2000",
        },
        description:
            "🎉 New release of twc! You can now specify transient props for a specific component.",
        image: "https://pbs.twimg.com/media/GCiIFXRbwAAC97_?format=jpg&name=large",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Greg Bergé",
            image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg?w=2000",
        },
        description:
            "🎉 New release of twc! You can now specify transient props for a specific component.",
        image: "https://pbs.twimg.com/media/GCiIFXRbwAAC97_?format=jpg&name=large",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Greg Bergé",
            image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg?w=2000",
        },
        description:
            "🎉 New release of twc! You can now specify transient props for a specific component.",
        image: "https://pbs.twimg.com/media/GCiIFXRbwAAC97_?format=jpg&name=large",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Greg Bergé",
            image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg?w=2000",
        },
        description:
            "🎉 New release of twc! You can now specify transient props for a specific component.",
        image: "https://pbs.twimg.com/media/GCiIFXRbwAAC97_?format=jpg&name=large",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
    {
        user: {
            name: "Greg Bergé",
            image: "https://img.freepik.com/free-photo/handsome-bearded-man-sunglasses-sitting-grass-palms-summer-vacation_231208-11209.jpg?w=2000",
        },
        description:
            "🎉 New release of twc! You can now specify transient props for a specific component.",
        image: "https://pbs.twimg.com/media/GCiIFXRbwAAC97_?format=jpg&name=large",
        likes: 10,
        comments: 5,
        shares: 2,
        id: 1,
    },
];
