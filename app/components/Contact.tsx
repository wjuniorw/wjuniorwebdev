'use client'
import { useState } from 'react'
import { event } from '@/lib/gtag'
import { motion } from 'framer-motion'
export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) throw new Error('Erro ao enviar')

      event({
        action: 'contact_form_submission',
        category: 'conversion',
        label: 'Contato',
      })

      setSuccess(true)
    } catch (err) {
      setError('Falha ao enviar mensagem. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='py-20 px-4'>
      <h2 className='text-4xl font-bold text-center mb-10'>Entre em Contato</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='max-w-md mx-auto bg-gray-800 rounded-lg p-8 shadow-lg'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-300 mb-2'>
              Nome
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-700 rounded px-3 py-2 text-white'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-700 rounded px-3 py-2 text-white'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-300 mb-2'>
              Mensagem
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='w-full bg-gray-700 rounded px-3 py-2 text-white'
              required></textarea>
          </div>
          {success && <p>Mensagem enviada com sucesso!</p>}
          {error && <p>{error}</p>}
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'>
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </section>
  )
}
