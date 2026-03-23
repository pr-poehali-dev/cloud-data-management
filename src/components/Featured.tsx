import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Lock",
    title: "Локальное шифрование",
    desc: "Все данные шифруются на вашем устройстве. Мастер-пароль никогда не покидает компьютер.",
  },
  {
    icon: "KeyRound",
    title: "Генератор паролей",
    desc: "Создавайте сложные уникальные пароли одним кликом — длина, символы, цифры по вашему выбору.",
  },
  {
    icon: "ShieldAlert",
    title: "Проверка утечек",
    desc: "Узнайте, не скомпрометированы ли ваши пароли, с помощью встроенной проверки по базам утечек.",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 bg-neutral-950 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="text-8xl mb-6">🔒</div>
          <div className="space-y-3">
            {["github.com••••••••", "gmail••••••••", "bank••••••••"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-neutral-800 rounded px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-neutral-300 text-sm font-mono">{item}</span>
                <Icon name="Copy" size={14} className="text-neutral-500 ml-auto" />
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-xs mt-6 uppercase tracking-widest">Зашифровано · AES-256</p>
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Всё под контролем</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Один мастер-пароль — и все ваши аккаунты в безопасности. Без облаков, без передачи данных, без риска.
        </p>
        <div className="space-y-6 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Icon name={f.icon} size={20} className="text-neutral-800" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">{f.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Скачать SafeVault
        </button>
      </div>
    </div>
  );
}
