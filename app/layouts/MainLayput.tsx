import { NavBar } from "../components/ui/NavBar";

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section className=" flex flex-col justify-center items-center content-center w-8/12" >
            <NavBar />
            { children }
        </section>
    );
}