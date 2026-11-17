import { motion } from 'motion/react';
import { ShieldCheck, CalendarClock, Award, Wrench } from 'lucide-react';

const TRUST_BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Betrouwbaar',
    description: 'Heldere afspraken, vaste gezichten op locatie en volledige transparantie vooraf.',
  },
  {
    icon: CalendarClock,
    title: 'Flexibele planning',
    description: 'Uitvoering afgestemd op uw agenda, werktijden en seizoensonderhoud.',
  },
  {
    icon: Award,
    title: 'Hoogwaardige kwaliteit',
    description: 'Zuiver osmosewater en duurzame middelen voor een streeploos resultaat.',
  },
  {
    icon: Wrench,
    title: 'Professionele werkwijze',
    description: 'Veilig werken op hoogte met modern materieel en zorg voor elk detail.',
  },
];

export function TrustBenefitsSection() {
  return (
    <section
      className="border-b border-[#0B1D33]/10 bg-white py-14 md:py-16"
      aria-label="Waarom kiezen voor ADK Cleaning"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {TRUST_BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-start gap-4 ${
                  idx > 0 ? 'lg:border-l lg:border-[#0B1D33]/10 lg:pl-8' : ''
                } ${idx < TRUST_BENEFITS.length - 1 ? 'lg:pr-8' : ''}`}
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#00C8D4]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[#0B1D33]">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#52657A]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
