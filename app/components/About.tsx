'use client'
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-pataxo-red">Minha Jornada</h2>
        <p className="text-xl text-pataxo-earth mb-4">
          Como membro da etnia Pataxó Hã-Hã-Hãe do extremo sul da Bahia, trago uma perspectiva única para o mundo do
          desenvolvimento de software.
        </p>
        <p className="text-xl text-pataxo-forest mb-4">
          Minha herança indígena me ensinou a importância do equilíbrio, da sustentabilidade e da comunidade - valores
          que aplico em cada linha de código que escrevo.
        </p>
        <p className="text-xl text-pataxo-river">
          Acredito que a tecnologia, quando desenvolvida com sabedoria e respeito, pode ser uma poderosa ferramenta para
          preservar culturas e criar um futuro mais inclusivo e sustentável.
        </p>
      </motion.div>
    </section>
  )
}

