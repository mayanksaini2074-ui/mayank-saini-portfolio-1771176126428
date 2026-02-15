'use client';

import { getThemeColors } from '@/utils/theme';
import { ABOUT_VARIANTS } from '@/utils/constants';
import { AboutProps, AboutSectionProps } from '@/types/IAboutSection';
import { MacTerminal } from '@/components/ui/MacTerminal';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { motion } from 'framer-motion';


const SplitAbout = ({ data, theme }: AboutProps) => {
  const { personalInfo } = data;
  
  // Terminal lines with just description text, fast typing
  const terminalLines = [
    { type: "output" as const, text: personalInfo.summary, delay: 5 },
  ];

  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">About Me</h2>
        </div>
        <MacTerminal 
          title={personalInfo.name}
          lines={terminalLines}
        />
      </div>
    </section>
  );
};


export default function AboutSection({ data, variant, palette }: AboutSectionProps) {
  const theme = getThemeColors(palette);
  return <SplitAbout data={data} theme={theme} />;
}
