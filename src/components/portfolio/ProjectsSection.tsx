'use client';

import { ResumeData, ProjectsVariant, ColorPalette } from '@/types/portfolio';
import { getThemeColors } from '@/utils/theme';
import { PROJECTS_VARIANTS } from '@/utils/constants';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3DCard';
import { motion } from 'framer-motion';

interface ProjectsProps {
  data: ResumeData;
  theme: ReturnType<typeof getThemeColors>;
}


// Responsive grid wrapper for consistent layout across all variants
const ProjectsGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
    {children}
  </div>
);


// Featured Projects - Premium Bento-style with spotlight effect
const FeaturedProjects = ({ data, theme }: ProjectsProps) => {
  const { projects } = data;
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-800 ${theme.primary} mb-4`}>
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Handpicked Projects</h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Each project represents a unique challenge and creative solution
          </p>
        </motion.div>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm group"
            >
              <div className="relative h-full rounded-2xl bg-slate-900 border border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-slate-900/60 transition-all duration-500 overflow-hidden">
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-20`} />
                </div>
                
                {/* Image area with gradient overlay */}
                <div className="relative">
                  <div className={`aspect-[16/10] bg-gradient-to-br ${theme.gradient} flex items-center justify-center overflow-hidden`}>
                    <span className="text-5xl sm:text-6xl text-white/80 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">🖥️</span>
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm rounded-full shadow-sm">
                      <span className={`${theme.primary} text-xs font-bold tracking-wider`}>FEATURED</span>
                    </div>
                  </div>
                  {/* Gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative p-5 sm:p-6 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-slate-300 transition-colors">{project.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className={`px-3 py-1.5 bg-slate-800 ${theme.primary} text-xs font-medium rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                         className={`flex-1 text-center px-4 py-3 bg-gradient-to-r ${theme.gradient} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-slate-900`}>
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="flex-1 text-center px-4 py-3 bg-slate-800 text-slate-200 text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </ProjectsGrid>
      </div>
    </section>
  );
};


interface ProjectsSectionProps {
  data: ResumeData;
  variant: ProjectsVariant;
  palette: ColorPalette;
}


export default function ProjectsSection({ data, variant, palette }: ProjectsSectionProps) {
  const theme = getThemeColors(palette);
  return <FeaturedProjects data={data} theme={theme} />;
}
