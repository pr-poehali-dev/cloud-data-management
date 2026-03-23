const faq = [
  { q: "🔒 Как защищены мои данные?", a: "Все данные шифруются локально. Мастер-пароль никогда не передаётся." },
  { q: "💻 Версия только для Windows?", a: "Да, пока только для Windows 10/11. Версии для Mac и Linux в разработке." },
  { q: "💰 Сколько стоит?", a: "SafeVault полностью бесплатен! Навсегда." },
  { q: "📱 Будет версия для телефонов?", a: "В разработке! Следите за обновлениями." },
];

export default function Footer() {
  return (
    <div
      id="faq"
      className="relative h-[600px] sm:h-[700px] lg:h-[900px] max-h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] sm:h-[calc(100vh+700px)] lg:h-[calc(100vh+900px)] -top-[100vh]">
        <div className="h-[600px] sm:h-[700px] lg:h-[900px] sticky top-[calc(100vh-600px)] sm:top-[calc(100vh-700px)] lg:top-[calc(100vh-900px)]">
          <div className="bg-neutral-900 py-8 sm:py-10 lg:py-12 px-6 sm:px-8 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="flex flex-col gap-2 shrink-0">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Навигация</h3>
                <a href="#features" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Функции</a>
                <a href="#faq" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">FAQ</a>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 uppercase text-neutral-400 text-xs sm:text-sm">Часто задаваемые вопросы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {faq.map((item) => (
                    <div key={item.q} className="bg-neutral-800 rounded p-4">
                      <p className="text-white font-semibold text-sm mb-1">{item.q}</p>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mt-6">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] text-white font-bold tracking-tight">
                SAFEVAULT
              </h1>
              <p className="text-neutral-500 text-sm sm:text-base shrink-0">{new Date().getFullYear()} SafeVault · Бесплатно навсегда</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
