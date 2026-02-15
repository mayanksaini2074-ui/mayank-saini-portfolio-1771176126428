'use client';

import { ResumeData, ContactVariant, ColorPalette } from '@/types/portfolio';
import { getThemeColors } from '@/utils/theme';
import { CONTACT_VARIANTS } from '@/utils/constants';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3DCard';
import { SparklesCore } from '@/components/ui/SparklesCore';
import { GlowingStarsBackground, GlowingStarsCard } from '@/components/ui/GlowingStars';

interface ContactProps {
  data: ResumeData;
  theme: ReturnType<typeof getThemeColors>;
}


// Contact Card Component with 3D effect
const ContactCard3D = ({ 
  icon, 
  title, 
  value, 
  href, 
  theme 
}: { 
  icon: string; 
  title: string; 
  value: string; 
  href?: string;
  theme: ReturnType<typeof getThemeColors>;
}) => {
  const content = (
    <CardContainer containerClassName="py-2">
      <CardBody className="bg-slate-900/50 relative group/card border border-white/[0.1] w-full rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/[0.1] transition-all duration-300">
        <CardItem translateZ={50} className="text-2xl sm:text-3xl mb-2 sm:mb-3">
          {icon}
        </CardItem>
        <CardItem translateZ={60} className="text-xs sm:text-sm text-slate-400 mb-1">
          {title}
        </CardItem>
        <CardItem translateZ={70} className={`font-medium text-sm sm:text-base ${theme.primary} truncate max-w-full`}>
          {value}
        </CardItem>
      </CardBody>
    </CardContainer>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
        {content}
      </a>
    );
  }
  return content;
};


const FloatingContact = ({ data, theme }: ContactProps) => {
  const { personalInfo } = data;
  
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute bottom-5 sm:bottom-10 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-15 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-10 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Say Hello!
          </h2>
          <p className="text-base sm:text-xl text-slate-400">I&apos;d love to hear from you</p>
        </div>
        
        {/* Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {personalInfo.email && (
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-7 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">✉️</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 mb-1">Email</p>
                <p className="font-medium text-slate-200 text-sm sm:text-base truncate">{personalInfo.email}</p>
              </div>
            </a>
          )}
          {personalInfo.phone && (
            <a 
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-7 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">📱</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 mb-1">Phone</p>
                <p className="font-medium text-slate-200 text-sm sm:text-base">{personalInfo.phone}</p>
              </div>
            </a>
          )}
          {personalInfo.linkedin && (
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-7 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">💼</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 mb-1">LinkedIn</p>
                <p className="font-medium text-slate-200 text-sm sm:text-base">Connect with me</p>
              </div>
            </a>
          )}
          {personalInfo.github && (
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-7 bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">💻</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 mb-1">GitHub</p>
                <p className="font-medium text-slate-200 text-sm sm:text-base">View my projects</p>
              </div>
            </a>
          )}
        </div>
        
        <div className="text-center mt-10 sm:mt-16">
          <p className="text-slate-600 text-xs sm:text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};


interface ContactSectionProps {
  data: ResumeData;
  variant: ContactVariant;
  palette: ColorPalette;
}


export default function ContactSection({ data, variant, palette }: ContactSectionProps) {
  const theme = getThemeColors(palette);
  return <FloatingContact data={data} theme={theme} />;
}
