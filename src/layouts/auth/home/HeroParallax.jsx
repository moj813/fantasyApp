import React, { useRef, useState, useEffect } from "react";

const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotateX = 15 - 15 * scrollYProgress;
  const rotateZ = 20 - 20 * scrollYProgress;
  const translateY = -700 + 1200 * scrollYProgress;

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto perspective:1000px transform-style:preserve-3d"
    >
      <Header />
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`,
          opacity: scrollYProgress <= 0.2 ? 0.2 : 1,
        }}
        className=""
      >
        <div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={index * 200} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard product={product} translate={-index * 200} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={index * 200} key={product.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <div
      style={{
        transform: `translateX(${translate}px)`,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </div>
  );
};

export default HeroParallax;
