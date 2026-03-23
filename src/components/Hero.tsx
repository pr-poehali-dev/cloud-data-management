import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/files/1d8bdd5e-0859-46ba-900e-df4be3bc36f8.png"
          alt="SafeVault — экран входа"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        <img
          src="https://cdn.poehali.dev/projects/99f566e7-af68-446d-aca0-5fb84574cd45/bucket/82e7a2b4-2685-49bd-b4f4-c0bbe5356e4f.png"
          alt="SafeVault icon"
          className="w-16 h-16 md:w-20 md:h-20 mb-4 rounded-2xl shadow-2xl"
        />
        <p className="text-xs md:text-sm uppercase tracking-widest mb-4 opacity-70">Версия 1.0 · Windows 10/11 · Бесплатно</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          SAFEVAULT
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Безопасное хранилище паролей. Храните всё в одном зашифрованном месте — локально, без передачи данных.
        </p>
        <a
          href="https://disk.yandex.ru/d/sdQYJEtMWBDSPQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Скачать бесплатно
        </a>
      </div>
    </div>
  );
}