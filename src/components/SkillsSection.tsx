import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Palette, 
  Code, 
  Layers, 
  Zap, 
  Monitor, 
  Smartphone,
  Globe,
  Lightbulb,
  Target,
  Award
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'tools';
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Full‑Stack Development",
    icon: Code,
    description: "End‑to‑end web engineering across client and server",
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 93, category: "development" },
      { name: "TypeScript", level: 90, category: "development" },
      { name: "Node.js / Express", level: 86, category: "development" },
      { name: "REST & GraphQL", level: 84, category: "development" },
      { name: "PostgreSQL / MongoDB", level: 82, category: "development" }
    ]
  },
  {
    title: "App Development (Flutter)",
    icon: Smartphone,
    description: "Beautiful cross‑platform apps with smooth animations",
    color: "secondary",
    skills: [
      { name: "Flutter / Dart", level: 92, category: "development" },
      { name: "State Mgmt (Bloc / Riverpod)", level: 88, category: "development" },
      { name: "Firebase / Supabase", level: 86, category: "development" },
      { name: "Native Integrations", level: 80, category: "development" },
      { name: "CI/CD & Play Store", level: 78, category: "development" }
    ]
  },
  {
    title: "Vibe Coding & UI Craft",
    icon: Zap,
    description: "Design‑driven coding: motion, polish, and delightful UX",
    color: "accent",
    skills: [
      { name: "Tailwind CSS", level: 95, category: "development" },
      { name: "Framer Motion / Animations", level: 90, category: "development" },
      { name: "Accessibility (a11y)", level: 85, category: "tools" },
      { name: "Design Systems", level: 88, category: "design" },
      { name: "Performance Tuning", level: 84, category: "development" }
    ]
  }
];

// Tech Stack Icons Component
const TechIcon = ({ name, className = "w-6 h-6" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    'React': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.37 1.95c-1.47-.84-1.63-3.05-1.01-5.63C.98 14.93-0.85 13.69-0.85 12s1.83-2.93 4.37-3.68C3.15 5.74 3.31 3.53 4.78 2.69c1.46-.84 3.45.12 5.37 1.95c1.92-1.83 3.91-2.79 5.37-1.95zM17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26z"/>
      </svg>
    ),
    'Next.js': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.756 4.824 16.548 2.185 12.24.346a19.76 19.76 0 0 0-.364-.033A20.68 20.68 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
    'TypeScript': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
    'Tailwind CSS': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    'Node.js': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
    'Express': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 .002 11.576zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
      </svg>
    ),
    'PostgreSQL': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.111 5.866c-.461-.33-1.297-.54-1.297-.54s.677-3.615-.705-4.795C19.341-1.048 16.962.766 16.962.766s-2.464-1.803-4.843-.424c-1.382 1.18-.705 4.795-.705 4.795s-.836.21-1.297.54c-1.932 1.386-2.54 4.99-2.54 4.99s.608 2.117 2.54 3.503c.461.33 1.297.54 1.297.54s-.677 3.615.705 4.795c1.768 1.519 4.147-.295 4.147-.295s2.464 1.803 4.843.424c1.382-1.18.705-4.795.705-4.795s.836-.21 1.297-.54c1.932-1.386 2.54-4.99 2.54-4.99s-.608-2.117-2.54-3.503zM12 20.5c-4.691 0-8.5-3.809-8.5-8.5S7.309 3.5 12 3.5s8.5 3.809 8.5 8.5-3.809 8.5-8.5 8.5z"/>
      </svg>
    ),
    'MongoDB': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    ),
    'GraphQL': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.08 12.16l1.57.91-.78 1.35-1.57-.91c-.39-.22-.52-.72-.3-1.11.22-.39.72-.52 1.11-.3l-.03.06zm6.92-9.16c.78 0 1.41.63 1.41 1.41s-.63 1.41-1.41 1.41c-.78 0-1.41-.63-1.41-1.41S11.22 3 12 3zm0 15c-.78 0-1.41.63-1.41 1.41S11.22 21 12 21s1.41-.63 1.41-1.41S12.78 18 12 18zM5.64 6.64c.39-.39 1.02-.39 1.41 0l4.24 4.24c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L5.64 8.05c-.39-.39-.39-1.02 0-1.41zm8.48 8.48l4.24 4.24c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-4.24-4.24c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0zM18.36 6.64c.39.39.39 1.02 0 1.41l-4.24 4.24c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l4.24-4.24c.39-.39 1.02-.39 1.41 0zM9.88 13.29l-4.24 4.24c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l4.24-4.24c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z"/>
      </svg>
    ),
    'Flutter': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    ),
    'Dart': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9.47-9.47s-.435-.94-.435-2.15c.047-.679.435-1.618.435-1.618l3.786-6.657z"/>
      </svg>
    ),
    'Firebase': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.229 4.137L3.178 8.24l2.051 1.97 4.414-6.073c.585-.805 1.502-.805 2.087 0L16.143 12l-2.051 1.97L9.678 4.137c-.585-.805-1.502-.805-2.087 0l-2.362 3.237zm13.542 8.863l-2.051-1.97-4.414 6.073c-.585.805-1.502.805-2.087 0L5.806 9.24l2.051-1.97 4.414 6.073c.585.805 1.502.805 2.087 0l4.413-6.073zM12 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
    ),
    'Supabase': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
      </svg>
    ),
    'Framer Motion': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16l-8 12 8 12H4l8-12z"/>
      </svg>
    ),
    'Git': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189L10.929 23.55c.603.604 1.582.604 2.188 0l10.430-10.43c.6-.603.6-1.582-.001-2.187"/>
      </svg>
    ),
    'GitHub': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    'Vercel': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="m12 0 12 21H0L12 0Z"/>
      </svg>
    ),
    'Python': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
    'Docker': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.324-2.232-1.993-2.349-2.088-2.357l-.438-.043-.174.405c-.521 1.262-.302 2.577.41 3.582-1.298.701-2.503.683-2.566.683H.5l-.049.209c-.31 1.609-.31 3.467.442 4.742.56.952 1.42 1.701 2.557 2.228C5.993 19.459 9.688 19 9.688 19c.5.006 1.003-.034 1.5-.12 4.062-.705 6.288-1.725 8.312-4.429C21.524 14.556 24 14.434 24 9.89v-.123l-.237.123"/>
      </svg>
    ),
    'AWS': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.914 10.779a.501.501 0 0 0-.491.41l-.93 4.648a.501.501 0 0 0 .491.592h1.648a.501.501 0 0 0 .491-.41l.93-4.648a.501.501 0 0 0-.491-.592H6.914zm3.595 0a.501.501 0 0 0-.491.41L9.95 13.87h1.195l-.068-1.681a.501.501 0 0 0-.568-.41zm5.491 0a.501.501 0 0 0-.491.41l-.837 4.185a.501.501 0 0 0 .491.592h1.648a.501.501 0 0 0 .491-.41l.837-4.185a.501.501 0 0 0-.491-.592H16zm-5.491 4.242l.068 1.681H9.382l.127-.592.068-.502.068-.587zm5.491-4.242h1.648a.501.501 0 0 1 .491.592l-.837 4.185a.501.501 0 0 1-.491.41H16a.501.501 0 0 1-.491-.592l.837-4.185a.501.501 0 0 1 .491-.41zm-5.491 0h1.195a.501.501 0 0 1 .568.41l.068 1.681H9.95l.068-1.681a.501.501 0 0 1 .491-.41z"/>
      </svg>
    ),
    'Figma': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.355 3.019 3.019 3.019 1.665 0 3.019-1.355 3.019-3.019v-3.019H8.148z"/>
      </svg>
    ),
    'VS Code': (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    )
  };
  
  return icons[name] || (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

// Icon-only stack for a clean, real look (names as title tooltips)
const techStackIcons = [
  { label: 'React', icon: 'React' },
  { label: 'Next.js', icon: 'Next.js' },
  { label: 'TypeScript', icon: 'TypeScript' },
  { label: 'Tailwind CSS', icon: 'Tailwind CSS' },
  { label: 'Node.js', icon: 'Node.js' },
  { label: 'Express', icon: 'Express' },
  { label: 'PostgreSQL', icon: 'PostgreSQL' },
  { label: 'MongoDB', icon: 'MongoDB' },
  { label: 'GraphQL', icon: 'GraphQL' },
  { label: 'Flutter', icon: 'Flutter' },
  { label: 'Dart', icon: 'Dart' },
  { label: 'Firebase', icon: 'Firebase' },
  { label: 'Supabase', icon: 'Supabase' },
  { label: 'Framer Motion', icon: 'Framer Motion' },
  { label: 'Python', icon: 'Python' },
  { label: 'Docker', icon: 'Docker' },
  { label: 'AWS', icon: 'AWS' },
  { label: 'Git', icon: 'Git' },
  { label: 'GitHub', icon: 'GitHub' },
  { label: 'VS Code', icon: 'VS Code' },
  { label: 'Figma', icon: 'Figma' },
  { label: 'Vercel', icon: 'Vercel' }
];

const SkillCard = ({ category, index, isCenterCard = false }: { category: SkillCategory; index: number; isCenterCard?: boolean }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isCenterCard ? 30 : 50, scale: isCenterCard ? 0.95 : 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className={`group ${isCenterCard ? 'z-10' : 'z-5'}`}
    >
      <div className={`timeline-card skill-card h-full transition-all duration-300 ${
        isCenterCard 
          ? 'skill-card-center' 
          : 'skill-card-side'
      }`}>
        <div>
          <div className={`flex items-center ${isCenterCard ? 'mb-6' : 'mb-6'}`}>
            <div className={`${
              isCenterCard ? 'p-3' : 'p-3'
            } rounded-xl bg-${category.color}/10 border border-${category.color}/20 mr-4 transition-all duration-300`}>
              <Icon className={`${isCenterCard ? 'w-7 h-7' : 'w-6 h-6'} text-${category.color}`} />
            </div>
            <div>
              <h3 className={`${
                isCenterCard ? 'text-xl' : 'text-xl'
              } font-bold text-gradient-primary group-hover:text-gradient-hero transition-all duration-300`}>
                {category.title}
              </h3>
              <p className={`text-foreground-subtle ${
                isCenterCard ? 'text-sm' : 'text-sm'
              }`}>
                {category.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => {
              const statusColors = {
                95: 'bg-green-500/10 text-green-500 border-green-500/30', // Expert
                90: 'bg-blue-500/10 text-blue-500 border-blue-500/30',    // Comfortable
                85: 'bg-orange-500/10 text-orange-500 border-orange-500/30', // Learning
              };
              
              const getStatus = (level: number) => {
                if (level >= 90) return { 
                  color: 'text-emerald-400', 
                  bgColor: 'bg-emerald-500/20', 
                  borderColor: 'border-emerald-500/40',
                  label: 'Expert',
                  progress: level 
                };
                if (level >= 85) return { 
                  color: 'text-blue-400', 
                  bgColor: 'bg-blue-500/20', 
                  borderColor: 'border-blue-500/40',
                  label: 'Skilled',
                  progress: level 
                };
                return { 
                  color: 'text-amber-400', 
                  bgColor: 'bg-amber-500/20', 
                  borderColor: 'border-amber-500/40',
                  label: 'Growing',
                  progress: level 
                };
              };
              
              const skillStatus = getStatus(skill.level);
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between ${
                    isCenterCard ? 'p-4' : 'p-3'
                  } rounded-lg bg-muted/10 hover:bg-white/10 transition-colors group`}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground group-hover:text-white transition-colors">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-foreground-subtle">
                        {skill.level >= 90 ? '2+ years' : skill.level >= 85 ? '1+ year' : '6+ months'}
                      </span>
                      <span className="text-xs text-foreground-subtle">•</span>
                      <span className="text-xs text-foreground-subtle">
                        {Math.floor(skill.level / 20)} projects
                      </span>
                    </div>
                  </div>
                  {/* Creative Progress Indicator */}
                  <div className="flex flex-col items-end space-y-2">
                    {/* Progress Bar */}
                    <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                      <motion.div 
                        className={`h-full ${skillStatus.bgColor.replace('/20', '')} rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillStatus.progress}%` }}
                        transition={{ duration: 1.2, delay: (index * 0.2) + (skillIndex * 0.15), ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    {/* Label */}
                    <div className={`flex items-center px-2 py-1 rounded-md ${skillStatus.bgColor} ${skillStatus.borderColor} border text-xs ${skillStatus.color}`}>
                      <span className="font-medium">{skillStatus.label}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="glass border-border-subtle hover:border-primary/30 transition-all duration-300 hover-lift text-center">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gradient-primary">
                {achievement.title}
              </h4>
              <p className="text-foreground-subtle text-sm">
                {achievement.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-secondary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full liquid-glass-3d mb-6"
          >
            <span className="text-primary font-medium">Expertise</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Skills &{' '}
            <span className="text-gradient-primary">Technologies</span>
          </h2>
          
          <p className="text-xl text-foreground-subtle max-w-3xl mx-auto">
            A comprehensive toolkit of cutting-edge technologies and creative skills, 
            honed through years of professional experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Showcase - Dynamic Center Focus Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20 px-4">
          {/* Left Card - Smaller */}
          <div className="flex-1 max-w-sm lg:max-w-xs xl:max-w-sm transform lg:-rotate-1 lg:scale-95">
            <SkillCard 
              key={skillCategories[0].title} 
              category={skillCategories[0]} 
              index={0}
              isCenterCard={false}
            />
          </div>
          
          {/* Center Card - Larger/Focal */}
          <div className="flex-1 max-w-lg lg:max-w-sm xl:max-w-md transform lg:scale-105 lg:-translate-y-2 shadow-2xl relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-2xl blur-xl scale-110 opacity-60"></div>
            <SkillCard 
              key={skillCategories[1].title} 
              category={skillCategories[1]} 
              index={1}
              isCenterCard={true}
            />
          </div>
          
          {/* Right Card - Smaller */}
          <div className="flex-1 max-w-sm lg:max-w-xs xl:max-w-sm transform lg:rotate-1 lg:scale-95">
            <SkillCard 
              key={skillCategories[2].title} 
              category={skillCategories[2]} 
              index={2}
              isCenterCard={false}
            />
          </div>
        </div>

        {/* Compact Tech Stack Icons (looping marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Card className="glass border-border-subtle">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gradient-primary">Tools I Love</h3>
                <span className="text-foreground-subtle text-sm">Focused, modern, production‑ready</span>
              </div>
              <div className="overflow-hidden relative">
                <div className="flex gap-4 animate-marquee will-change-transform">
                  {[...techStackIcons, ...techStackIcons].map((tool, idx) => (
                    <div
                      key={`${tool.label}-${idx}`}
                      title={tool.label}
                      className="h-10 w-10 shrink-0 rounded-full bg-muted/40 border border-border-subtle flex items-center justify-center hover:bg-white/90 hover:text-black transition-colors"
                    >
                      <TechIcon name={tool.icon} className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;