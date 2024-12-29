import React, { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Service: FC = () => {
    const services = [
        {
            title: "Interlock",
            description: "Transform your outdoor spaces with our premium interlock solutions, designed for durability and aesthetic appeal.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
        },
        {
            title: "Hollow Bricks",
            description: "Build stronger, more efficient structures with our eco-friendly hollow bricks, engineered for superior insulation and strength.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
        },
        {
            title: "Tranportation",
            description: "Streamline your supply chain with our reliable resource transportation services, specializing in metals and industrial materials.",
            image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070"
        },
        {
            title: "Natural Tiling",
            description: "Coming soon....",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
        }
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        onScroll();
        emblaApi.on('select', onSelect);
        emblaApi.on('scroll', onScroll);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect, onScroll]);

    return (
        <div className="min-h-screen relative px-5">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
                <div className="text-center mb-3">
                    <h2 className="text-5xl font-bold text-white mb-2">Our Services</h2>
                    <p className="text-2xl text-gray-300">Discover what we can do for you</p>
                </div>

                <div className="relative mt-12">
                    <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <div 
                                    key={index} 
                                    className="flex-[0_0_100%] min-w-0 pl-4"
                                >
                                    <div className="relative h-[70vh] overflow-hidden rounded-xl">
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                                        <div className="relative h-full flex flex-col justify-end p-12">
                                            <h3 className="text-4xl font-bold text-white mb-6">{service.title}</h3>
                                            <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mt-4 h-1 bg-gray-600/30 rounded-full overflow-hidden">
                        <div 
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-200 ease-out rounded-full"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>

                    <button
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-all z-10 ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-all z-10 ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;