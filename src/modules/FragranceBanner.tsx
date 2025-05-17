'use client';

import Image from "next/image";


const FragranceBanner = () => {
    return (
        <section className="w-full py-8 px-4">
            <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                    src="/image.jpeg"
                    alt="Fragrance Banner"
                    width={1200}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                />
            </div>
        </section>
    );
};

export default FragranceBanner;
