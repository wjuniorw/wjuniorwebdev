'use client'
import { motion } from "framer-motion"

const projects = [
  {
    title: "Sistema de Gerenciamento de Estoque",
    description: "Aplicação fullstack com Node.js, React e MongoDB para gerenciamento eficiente de estoque.",
    tech: ["Node.js", "React", "MongoDB", "Express"],
  },
  {
    title: "App de Delivery Mobile",
    description: "Aplicativo móvel cross-platform para serviço de delivery, desenvolvido com React Native e GraphQL.",
    tech: ["React Native", "GraphQL", "Node.js", "PostgreSQL"],
  },
  {
    title: "Dashboard Analítico",
    description: "Dashboard interativo para visualização de dados em tempo real, utilizando Next.js e D3.js.",
    tech: ["Next.js", "D3.js", "Tailwind CSS", "REST API"],
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Projetos Destacados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-gray-700 rounded-full px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

