import type { Metadata } from "next";
import MainLayout from "../layouts/MainLayput";



export const metadata: Metadata = {
    title: 'Home | Portafolio Edgar Joaquin Flores',
    description: 'Home page',
    keywords: ["Home", "HomePage", "Página principal",]
};


export default function HomePage() {
    return (
    <MainLayout>
        <section className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className="text-sm text-red-600 md:text-3xl md:text-blue-400 lg:text-9xl lg:text-green-400">Home Page</span>
        </section>
    </MainLayout>
    )
}