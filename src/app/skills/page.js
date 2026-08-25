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
  sourcelist9
} from './components/sourcelist'

const page = () => {
  const Skeleton = ({ sources = [] }) => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-2">
      <Stack direction="row" justifyContent="center" alignItems="center" gap={1.5} flexWrap="wrap">
        {sources.map((source, index) => {
          const imgSrc = typeof source === 'string' ? source : source?.src;
          const IconComponent = typeof source === 'function' ? source : null;

          const isPyTorch = imgSrc?.includes('pytorch');
          const isHuggingFace = imgSrc?.includes('huggingface');
          const isAWS = imgSrc?.includes('aws');
          const isMLflow = imgSrc?.includes('mlflow');
          const isLangChain = imgSrc?.includes('langchain');

          let avatarSize = sources.length > 3 ? 54 : (sources.length > 2 ? 66 : 76);
          let padding = '4px';
          let scale = 1;

          if (isPyTorch) {
            scale = 1.15;
            padding = '2px';
          } else if (isHuggingFace) {
            scale = 1.15;
            padding = '2px';
          } else if (isLangChain) {
            scale = 1.1;
            padding = '2px';
          } else if (isAWS || isMLflow) {
            avatarSize = sources.length > 2 ? 68 : 78;
            padding = '4px';
          }

          let avatarBg = '#333333';

          return (
            <Avatar
              variant="rounded"
              key={index}
              src={imgSrc}
              imgProps={{
                style: {
                  objectFit: 'contain',
                  transform: `scale(${scale})`
                }
              }}
              sx={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: '50%',
                bgcolor: avatarBg,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                p: padding
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
      title: "Programming Languages",
      description: "Python (8 Yrs), JavaScript (5 Yrs), C++ (3 Yrs), Java (1 Yr)",
      header: <Skeleton sources={sourcelist5} />,
    },
    {
      title: "React & Next.js",
      description: "5 Years Experience",
      header: <Skeleton sources={sourcelist1} />,
    },
    {
      title: "Styling & UI",
      description: "CSS, Tailwind CSS, Material UI, Aceternity UI",
      header: <Skeleton sources={sourcelist2} />,
    },
    {
      title: "BackEnd",
      description: "Express & Node.JS",
      header: <Skeleton sources={sourcelist3} />,
    },
    {
      title: "Database",
      description: "MongoDB, SQL, MySQL",
      header: <Skeleton sources={sourcelist4} />,
    },
    {
      title: "AI Frameworks & Libraries",
      description: "PyTorch, TensorFlow, Scikit-Learn",
      header: <Skeleton sources={sourcelist6} />,
    },
    {
      title: "LLM & GenAI Tools",
      description: "LangChain, Hugging Face",
      header: <Skeleton sources={sourcelist7} />,
    },
    {
      title: "Vector DBs & Graph DBs",
      description: "Weaviate, Neo4j Vector Search",
      header: <Skeleton sources={sourcelist8} />,
    },
    {
      title: "Cloud & MLOps Infrastructure",
      description: "AWS, Docker, MLflow",
      header: <Skeleton sources={sourcelist9} />,
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