import React, { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

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
            title: "Transportation",
            description: "Streamline your supply chain with our reliable resource transportation services, specializing in metals and industrial materials.",
            image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070"
        },
        {
            title: "Cement",
            description: "Refine your construction processes with our high-quality cement, ensuring optimal performance and durability.",
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
        <motion.div 
            className="w-full h-full flex flex-col justify-center px-2 sm:px-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-5xl mx-auto -mt-3 px-2 sm:px-6 py-3 sm:py-20">
                <motion.div 
                    className="text-center mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-5xl font-bold text-white -mt-8 mb-2">Our Services</h2>
                    <p className="text-lg sm:text-2xl text-gray-300">Discover what we can do for you</p>
                </motion.div>

                <motion.div 
                    className="relative mt-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="overflow-hidden rounded-xl relative" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex-[0_0_100%] min-w-0 pl-4"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden rounded-xl">
                                        <motion.div 
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                                        <div className="relative h-full flex flex-col justify-end p-4 sm:p-12">
                                            <motion.h3 
                                                className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-6"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                            >
                                                {service.title}
                                            </motion.h3>
                                            <motion.p 
                                                className="text-sm sm:text-xl text-gray-200 max-w-2xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 0.4, delay: 0.3 }}
                                            >
                                                {service.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <motion.button
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-200 ${prevBtnEnabled ? 'text-white hover:bg-white/30 active:bg-white/40' : 'text-gray-500 cursor-not-allowed opacity-50'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                        </motion.button>
                        
                        <motion.button
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-200 ${nextBtnEnabled ? 'text-white hover:bg-white/30 active:bg-white/40' : 'text-gray-500 cursor-not-allowed opacity-50'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                        </motion.button>
                    </div>

                    {/* Progress Bar */}
                    <motion.div 
                        className="relative mt-4 h-1 bg-gray-600/30 rounded-full overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <div 
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-200 ease-out rounded-full"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Service;

