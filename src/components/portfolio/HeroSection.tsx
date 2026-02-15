'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getThemeColors } from '@/utils/theme';
import { HERO_VARIANTS } from '@/utils/constants';
import { IHeroProps, IHeroSectionProps } from '@/types/IHeroSection';

interface ElegantShapeProps {
	className?: string;
	delay?: number;
	rotate?: number;
	gradient?: string;
	size?: string;
}


const ElegantShape = ({
	className,
	delay = 0,
	rotate = 0,
	gradient = 'from-white/[0.08]',
	size,
}: ElegantShapeProps) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn('absolute', className)}
		>
			<motion.div
				animate={{
					y: [0, 65, 0],
				}}
				transition={{
					duration: 9,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className="relative"
			>
				<div
					className={cn(
						'h-24 w-[300px]',
						'absolute inset-0 rounded-full',
						size,
						'bg-gradient-to-r to-transparent',
						gradient,
						'backdrop-blur-[2px] border-2 border-white/[0.15]',
						'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
						"after:absolute after:inset-0 after:rounded-full",
						"after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
					)}
				/>
			</motion.div>
		</motion.div>
	);
};


// Background boxes component for interactive grid effect
interface BackgroundBoxesProps {
	width?: number;
	height?: number;
	gapX?: number;
	gapY?: number;
	grid?: [number, number];
	className?: string;
	rectClassName?: string;
	borderRadius?: number;
	hoverColor?: string;
}


const BackgroundBoxes = ({
	width = 80,
	height = 140,
	gapX = 10,
	gapY = 10,
	grid = [42, 5],
	className,
	borderRadius = 8,
}: BackgroundBoxesProps) => {
	const [columns, rows] = grid;
	const [hoveredRect, setHoveredRect] = useState<number | null>(null);

	const totalWidth = columns * (width + gapX);
	const totalHeight = rows * (height + gapY);

	return (
		<svg
			width={totalWidth}
			height={totalHeight}
			className={cn(
				'absolute inset-0 h-full w-full',
				className
			)}
		>
			{Array.from({ length: columns * rows }).map((_, index) => {
				const col = index % columns;
				const row = Math.floor(index / columns);
				const x = col * (width + gapX);
				const y = row * (height + gapY);

				return (
					<g
						key={index}
						transform={`translate(${x}, ${y}) skewX(-15)`}
						onMouseEnter={() => setHoveredRect(index)}
						onMouseLeave={() => setHoveredRect(null)}
						style={{ cursor: 'pointer' }}
					>
						<rect
							x={0}
							y={0}
							width={width}
							height={height}
							rx={borderRadius}
							ry={borderRadius}
							style={{
								fill: hoveredRect === index ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
								stroke: 'rgba(255, 255, 255, 0.2)',
								transition: hoveredRect === index ? 'fill 0.15s ease-out' : 'fill 0.8s ease-out',
							}}
						/>
					</g>
				);
			})}
		</svg>
	);
};


// Snowflake type for falling snow effect
interface Snowflake {
	id: number;
	x: number;
	size: number;
	opacity: number;
	color: string;
	drift: number;
	duration: number;
}


// Falling snow component for animated snowflakes
interface FallingSnowProps {
	duration?: number;
	theme: ReturnType<typeof getThemeColors>;
}


const FallingSnow = ({ duration = 150, theme }: FallingSnowProps) => {
	const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
	
	// Theme-based colors
	const getColors = () => {
		if (theme.gradient.includes('blue')) {
			return ['#E0F4FF', '#B8E6FF', '#C9E9FF', '#93C5FD', '#FFFFFF', '#BFDBFE'];
		} else if (theme.gradient.includes('purple')) {
			return ['#F3E8FF', '#E9D5FF', '#D8B4FE', '#C4B5FD', '#FFFFFF', '#DDD6FE'];
		} else if (theme.gradient.includes('emerald') || theme.gradient.includes('teal')) {
			return ['#D1FAE5', '#A7F3D0', '#6EE7B7', '#99F6E4', '#FFFFFF', '#CCFBF1'];
		} else if (theme.gradient.includes('rose') || theme.gradient.includes('pink')) {
			return ['#FFE4E6', '#FECDD3', '#FDA4AF', '#FB7185', '#FFFFFF', '#FFF1F2'];
		} else if (theme.gradient.includes('amber') || theme.gradient.includes('orange')) {
			return ['#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#FFFFFF', '#FFFBEB'];
		} else if (theme.gradient.includes('cyan')) {
			return ['#CFFAFE', '#A5F3FC', '#67E8F9', '#22D3EE', '#FFFFFF', '#ECFEFF'];
		} else if (theme.gradient.includes('indigo')) {
			return ['#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8', '#FFFFFF', '#EEF2FF'];
		} else if (theme.gradient.includes('slate')) {
			return ['#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8', '#FFFFFF', '#F8FAFC'];
		} else {
			return ['#E0F4FF', '#B8E6FF', '#C9E9FF', '#93C5FD', '#FFFFFF', '#BFDBFE'];
		}
	};

	const colors = getColors();

	useEffect(() => {
		const sizes = [12, 16, 20, 24];
		const opacities = [0.6, 0.7, 0.8, 0.9, 1];

		const addSnowflake = () => {
			const newSnowflake: Snowflake = {
				id: Date.now() + Math.random(),
				x: Math.random() * 100,
				size: sizes[Math.floor(Math.random() * sizes.length)],
				opacity: opacities[Math.floor(Math.random() * opacities.length)],
				color: colors[Math.floor(Math.random() * colors.length)],
				drift: (Math.random() - 0.5) * 50,
				duration: 8 + Math.random() * 4,
			};
			setSnowflakes((prev) => [...prev, newSnowflake]);
		};

		const interval = setInterval(addSnowflake, duration);
		return () => clearInterval(interval);
	}, [duration, colors]);

	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden">
			{snowflakes.map((flake) => (
				<motion.svg
					key={flake.id}
					xmlns="http://www.w3.org/2000/svg"
					className="absolute"
					width={flake.size}
					height={flake.size}
					viewBox="0 0 24 24"
					fill="none"
					stroke={flake.color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ filter: 'blur(1px)' }}
					initial={{
						top: '-5%',
						left: `${flake.x}%`,
						opacity: flake.opacity,
						rotate: 0,
					}}
					animate={{
						top: '105%',
						left: `${flake.x + flake.drift}%`,
						rotate: 360,
						opacity: [flake.opacity, flake.opacity, flake.opacity * 0.7, 0],
					}}
					transition={{
						duration: flake.duration,
						ease: 'linear',
						rotate: {
							duration: flake.duration * 0.5,
							repeat: Infinity,
							ease: 'linear',
						},
					}}
					onAnimationComplete={() => {
						setSnowflakes((prev) => prev.filter((s) => s.id !== flake.id));
					}}
				>
					<path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6" />
				</motion.svg>
			))}
		</div>
	);
};


const SVG_PATTERN =
	"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";


const SplitHero = ({ data, theme }: IHeroProps) => {
	const { personalInfo } = data;
	const [mousePosition, setMousePosition] = useState({ x: 400, y: 300 });
	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				setMousePosition({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				});
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (container) {
				container.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, []);

	// Get spotlight color based on theme
	const getSpotlightColor = () => {
		if (theme.gradient.includes('blue')) return { r: 59, g: 130, b: 246 };
		if (theme.gradient.includes('purple')) return { r: 147, g: 51, b: 234 };
		if (theme.gradient.includes('emerald')) return { r: 16, g: 185, b: 129 };
		if (theme.gradient.includes('rose')) return { r: 244, g: 63, b: 94 };
		if (theme.gradient.includes('amber')) return { r: 245, g: 158, b: 11 };
		if (theme.gradient.includes('cyan')) return { r: 6, g: 182, b: 212 };
		if (theme.gradient.includes('indigo')) return { r: 99, g: 102, b: 241 };
		if (theme.gradient.includes('orange')) return { r: 249, g: 115, b: 22 };
		if (theme.gradient.includes('teal')) return { r: 20, g: 184, b: 166 };
		if (theme.gradient.includes('slate')) return { r: 100, g: 116, b: 139 };
		return { r: 59, g: 130, b: 246 };
	};

	const spotColor = getSpotlightColor();

	return (
		<section 
			ref={containerRef}
			className={`min-h-screen flex flex-col md:flex-row bg-slate-950 cursor-none relative overflow-hidden`}
		>
			{/* Theme gradient background */}
			<div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-20`}></div>
			
			{/* Spotlight effect layer */}
			<div 
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `
						radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${spotColor.r}, ${spotColor.g}, ${spotColor.b}, 0.15) 0%, rgba(${spotColor.r}, ${spotColor.g}, ${spotColor.b}, 0.05) 200px, transparent 350px),
						radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${spotColor.r}, ${spotColor.g}, ${spotColor.b}, 0.08) 0%, rgba(${spotColor.r}, ${spotColor.g}, ${spotColor.b}, 0.02) 150px, transparent 280px)
					`,
					backgroundSize: '100% 100%, 100% 100%',
				}}
			></div>
			
			{/* Dot pattern */}
			<div 
				className="absolute inset-0 pointer-events-none opacity-30"
				style={{
					backgroundImage: `radial-gradient(circle, rgba(${spotColor.r}, ${spotColor.g}, ${spotColor.b}, 0.3) 1px, transparent 1px)`,
					backgroundSize: '24px 24px',
				}}
			></div>

			<div className="w-full min-h-screen text-white flex items-center justify-center p-6 sm:p-12 relative z-10">
				<div className="max-w-lg">
					<motion.p 
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className={`font-mono mb-2 text-sm sm:text-base bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
					>
						Hello, I&apos;m
					</motion.p>
					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
					>
						{personalInfo.name}
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="text-lg sm:text-2xl text-slate-300 mb-4 sm:mb-6"
					>
						{personalInfo.title}
					</motion.p>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-md"
					>
						{personalInfo.summary}
					</motion.p>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="flex gap-3 sm:gap-4 flex-wrap"
					>
						<a
							href={`mailto:${personalInfo.email}`}
							className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-lg font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300`}>
							Get in Touch
						</a>
						<a
							href="#projects"
							className="px-4 sm:px-6 py-2 sm:py-3 border border-slate-600 rounded-lg font-semibold text-sm sm:text-base hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-300">
							View Work
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};


export default function HeroSection({ data, variant, palette }: IHeroSectionProps) {
  const theme = getThemeColors(palette);
  return <SplitHero data={data} theme={theme} />;
}
