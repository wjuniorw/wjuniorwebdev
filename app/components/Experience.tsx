'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Tezton',
    role: 'Desenvolvedor Fullstack',
    period: '2024 - Presente',
    description:
      'Liderança técnica em projetos de grande escala, implementando soluções inovadoras.',
  },
  {
    company: 'GOK',
    role: 'Desenvolvedor Fullstack',
    period: '2019 - 2024',
    description:
      'Desenvolvimento de sistemas web e móveis com foco em performance e usabilidade.',
  },
  {
    company: 'Energisa',
    role: 'Desenvolvedor Mobile',
    period: 'GOK - 2020',
    description: 'Implementação de aplicativo movel para o setor energético.',
  },
  {
    company: 'Drogaraia/Drogasil',
    role: 'Desenvolvedor Fullstack',
    period: 'GOK - 2021',
    description: 'Desenvolvimento de sistemas críticos para o setor farmacêutico.',
  },
  {
    company: 'Pernambucanas',
    role: 'Desenvolvedor Frontend e Mobile',
    period: 'GOK - 23/24',
    description:
      'Criação de interfaces responsivas e otimizadas para e-commerce. Consultoria e sustentação de aplicativo multitenant da area bancaria.',
  },
]

export default function Experience() {
  return (
    <section className='py-20 px-4'>
      <h2 className='text-4xl font-bold text-center mb-10'>Experiência Profissional</h2>
      <div className='max-w-3xl mx-auto'>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='mb-8 bg-gray-800 rounded-lg p-6 shadow-lg'>
            <h3 className='text-2xl font-semibold'>{exp.company}</h3>
            <h4 className='text-xl text-gray-300 mb-2'>{exp.role}</h4>
            <p className='text-gray-400 mb-2'>{exp.period}</p>
            <p className='text-gray-300'>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
