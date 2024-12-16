import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className='bubbleContainer'
    >
      <div className='bubble'>
        <TypeAnimation
          sequence={[
            // Same substring at the start
            'Same substring at the start ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Another piece of text here',
            1000,
          ]}
          wrapper='span'
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src='/man.png' alt='' />
    </motion.div>
  )
}

export default Speech
