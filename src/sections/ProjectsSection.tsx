import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  col1Images: [string, string];
  col2Image: string;
}

const BASE = import.meta.env.BASE_URL;

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Grimor',
    category: 'Personal — Mobile App',
    col1Images: [`${BASE}projects/art1.webp`, `${BASE}projects/art2.webp`],
    col2Image: `${BASE}projects/art3.webp`,
  },
  {
    number: '02',
    name: 'Prastos',
    category: 'Client — Mobile App',
    col1Images: [`${BASE}projects/prastos-1.webp`, `${BASE}projects/prastos-2.webp`],
    col2Image: `${BASE}projects/prastos-3.webp`,
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.div
          className="relative rounded-[40px] border-2 border-[#D7E2EA] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
          style={{ scale, top: index * 28, background: '#0C0C0C' }}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <img
                src={project.col1Images[0]}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1Images[1]}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-[60%]">
              <img
                src={project.col2Image}
                alt={`${project.name} main preview`}
                loading="lazy"
                className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
