import React from 'react'
import { cn } from "../../lib/utils";
import BackgroundEffect2 from '../../components/background2.js'
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid.js";
import { Stack, Avatar } from '@mui/material'
import {
  sourcelist1,
  sourcelist2,
  sourcelist3,
  sourcelist4,
  sourcelist5,
  sourcelist6,
  sourcelist7,
  sourcelist8,
  sourcelist9,
  sourcelist10,
  sourcelist11,
  sourcelist12
} from './components/sourcelist'

const page = () => {
  const Skeleton = ({ sources = [] }) => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-2">
      <Stack direction="row" justifyContent="center" alignItems="center" gap={1.5} flexWrap="wrap">
        {sources.map((source, index) => {
          const imgSrc = typeof source === 'string' ? source : source?.src;
          const IconComponent = typeof source === 'function' ? source : null;

          return (
            <Avatar
              variant="rounded"
              key={index}
              src={imgSrc}
              imgProps={{ style: { objectFit: 'contain' } }}
              sx={{
                width: sources.length > 2 ? 56 : 70,
                height: sources.length > 2 ? 56 : 70,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                p: 0.5
              }}
            >
              {IconComponent && <IconComponent className="w-full h-full object-contain" />}
            </Avatar>
          );
        })}
      </Stack>
    </div>
  );

  const items = [
    {
      title: "JavaScript",
      description: "5 Years Experience",
      header: <Skeleton sources={sourcelist1} />,
    },
    {
      title: "React & Next.js",
      description: "5 Years Experience",
      header: <Skeleton sources={sourcelist2} />,
    },
    {
      title: "Styling & UI",
      description: "CSS, Tailwind CSS, Material UI, Aceternity UI",
      header: <Skeleton sources={sourcelist3} />,
    },
    {
      title: "BackEnd",
      description: "Express & Node.JS",
      header: <Skeleton sources={sourcelist4} />,
    },
    {
      title: "Database",
      description: "MongoDB, SQL, MySQL, Mongoose",
      header: <Skeleton sources={sourcelist5} />,
    },
    {
      title: "Python",
      description: "8 Years Experience",
      header: <Skeleton sources={sourcelist6} />,
    },
    {
      title: "AI Frameworks & Libraries",
      description: "PyTorch, TensorFlow, Scikit-Learn, Keras",
      header: <Skeleton sources={sourcelist7} />,
    },
    {
      title: "LLM & GenAI Tools",
      description: "LangChain, Hugging Face, OpenAI API",
      header: <Skeleton sources={sourcelist8} />,
    },
    {
      title: "Vector DBs & Graph DBs",
      description: "Weaviate, Neo4j Vector Search",
      header: <Skeleton sources={sourcelist9} />,
    },
    {
      title: "AI MLOps & Infrastructure",
      description: "Docker, DeepLearning.AI Specializations",
      header: <Skeleton sources={sourcelist10} />,
    },
    {
      title: "C++",
      description: "3 Years Experience",
      header: <Skeleton sources={sourcelist11} />,
    },
    {
      title: "Java",
      description: "1 Year Experience",
      header: <Skeleton sources={sourcelist12} />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundEffect2 />
      </div>
      <div className="relative z-10 pt-24 md:pt-32 pb-24 text-white flex flex-col justify-center items-center w-full px-4">
        <p className="text-center text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Technical Stack
        </p>
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[18rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default page;