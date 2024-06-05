import { CartCounter } from "@/app/shopping-cart/components";

export const metadata = {
    title: 'Shopping-Cart',
    description: 'Número de productos agregados a carrito de compra',
};

export default function CounterPage() {

    return (
        <section className=" flex flex-col justify-center items-center w-full h-full ">
            <span className="text-2xl" > Productos en carrito: </span>

            <CartCounter  />
        </section>
    );
}