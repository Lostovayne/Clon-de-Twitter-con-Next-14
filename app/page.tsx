import { InitialLoading } from "@/components/loading";

export default function HomePage() {
    return (
        <div className="relative mx-auto max-w-7xl transition-all">
            <div className="relative mx-auto">
                <InitialLoading />
            </div>
        </div>
    );
}
