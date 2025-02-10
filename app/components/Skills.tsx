'use client'
import { motion } from 'framer-motion'

const skills = [
  'Node.js',
  'TypeScript',
  'Express',
  'NestJS',
  'MongoDB',
  'SQLite',
  'Rust',
  'Tauri',
  'Next.js',
  'React',
  'React Native',
  'Redux',
  'Zustand',
  'Styled Components',
  'Tailwind CSS',
  'Tamagui',
  'Unistyles',
  'REST',
  'GraphQL',
  'Clean Architecture',
  'SOLID',
  'Docker',
  'Agile',
]

export default function Skills() {
  return (
    <section className='py-20 px-4 overflow-hidden'>
      <h2 className='text-4xl font-bold text-center mb-10'>Habilidades Técnicas</h2>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-gray-700 rounded-full px-4 py-2 text-sm'>
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
