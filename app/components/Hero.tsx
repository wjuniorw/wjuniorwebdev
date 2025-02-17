'use client'
import Image from 'next/image'
import { event } from '@/lib/gtag'
import { motion } from 'framer-motion'
import { Github, Gitlab, Linkedin, Twitter, FileDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className='min-h-screen pt-16 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className='mb-6 inline-block'>
          <Image
            src='/profile.jpg?height=150&width=150'
            alt='Wilson Junior'
            width={150}
            height={150}
            className='rounded-full border-4 border-pataxo-earth'
          />
        </motion.div>
        <h1 className='text-5xl font-bold mb-4 text-pataxo-red'>Wilson Junior</h1>
        <h2 className='text-3xl text-pataxo-earth mb-2'>
          Desenvolvedor Fullstack
          {/* Sênior */}
        </h2>
        <p className='text-xl text-pataxo-forest mb-6'>
          Pataxó Hã-Hã-Hãe do Extremo Sul da Bahia
        </p>
        <p className='text-xl text-gray-50 max-w-2xl mx-auto mb-8'>
          Especialista em criar soluções robustas e escaláveis, unindo tecnologia moderna
          com sabedoria ancestral.
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://github.com/wjuniorw'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pataxo-river hover:text-white transition-colors'>
            <Github size={24} />
          </a>
          <a
            href='https://gitlab.com/wjunior'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pataxo-river hover:text-white transition-colors'>
            <Gitlab size={24} />
          </a>
          <a
            href='https://linkedin.com/in/wjuniorw'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pataxo-river hover:text-white transition-colors'>
            <Linkedin size={24} />
          </a>
          <a
            href='https://twitter.com/wfs_junior'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pataxo-river hover:text-white transition-colors'>
            <Twitter size={24} />
          </a>
        </div>
        <motion.a
          href='/wjunior_cv.pdf'
          download
          className='mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pataxo-red hover:bg-pataxo-earth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pataxo-river transition-colors duration-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() =>
            event({
              action: 'download_cv',
              category: 'conversion',
              label: 'Download CV',
            })
          }>
          <FileDown className='mr-2 h-4 w-4' />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  )
}
