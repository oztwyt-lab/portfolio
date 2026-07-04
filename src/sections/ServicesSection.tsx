import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Product Analytics',
    description:
      'End-to-end customer journey and funnel analysis for products serving millions of users — mapping drop-off points and root causes that directly inform feature prioritization.',
  },
  {
    number: '02',
    name: 'A/B Testing',
    description:
      'Design and execution of experimentation programs on product and UX changes, translating statistical results into clear go/no-go recommendations for stakeholders.',
  },
  {
    number: '03',
    name: 'BI Dashboards',
    description:
      'Dashboard implementations in Tableau, Power BI, and QuickSight tailored to real decision-making workflows — replacing manual reporting with self-service analytics.',
  },
  {
    number: '04',
    name: 'Data Modeling',
    description:
      'Modeling and transforming raw, unexplored data into unified, reliable assets that become the single source of truth across an entire organization.',
  },
  {
    number: '05',
    name: 'Fraud Detection',
    description:
      'Deep-dive investigations into user-level data that surface abnormal patterns and fraud schemes, protecting revenue from fraudulent payouts.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:gap-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
