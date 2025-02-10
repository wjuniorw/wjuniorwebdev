import pataxoPattern from '/public/pataxo_pattern.svg'

export default function PataxoBackground() {
  return (
    <div className='fixed inset-0 z-[-1]'>
      <div
        className='absolute inset-0 bg-repeat opacity-5 dark:opacity-10 dark:invert dark:hue-rotate-180'
        style={{
          backgroundImage: `url(${pataxoPattern.src})`,
          backgroundSize: '200px', // Ajuste este valor conforme necessário
        }}></div>
      <div className='absolute inset-0 bg-gradient-to-br from-pataxo-earth to-pataxo-forest opacity-30'></div>
    </div>
  )
}

// export default function PataxoBackground() {
//   return (
//     <div className='fixed inset-0 z-[-1] opacity-11'>
//       <div className='absolute inset-0 bg-pataxo-pattern bg-repeat'></div>
//       <div className='absolute inset-0 bg-gradient-to-br from-pataxo-earth to-pataxo-forest opacity-50'></div>
//     </div>
//   )
// }
