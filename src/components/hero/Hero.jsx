import './hero.css'
import Speech from './Speech'
import { motion } from 'motion/react'

const awardVarients = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
}
const followVarients = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hSection hero-left'>
        {/* TITLE */}
        <motion.h1
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className='hero-title'
        >
          Hey there,
          <br />
          <span>I&apos;m Danny!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVarients}
          initial='initial'
          animate='animate'
          className='awards'
        >
          <motion.h2 variants={awardVarients} className='hero-subtitle'>
            Top rated Designer
          </motion.h2>
          <motion.p variants={awardVarients} className='hero-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
          <motion.div variants={awardVarients} className='awardsList'>
            <motion.img
              variants={awardVarients}
              src='/award1.png'
              alt='Award 1'
            />
            <motion.img
              variants={awardVarients}
              src='/award2.png'
              alt='Award 2'
            />
            <motion.img
              variants={awardVarients}
              src='/award3.png'
              alt='Award 3'
            />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          href='#services'
          className='scroll'
        >
          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
              d='M12 5V8'
              stroke='white'
              strokeWidth='1'
              strokeLinecap='round'
            />
          </svg>
        </motion.a>
      </div>

      <div className='hSection hero-right'>
        {/* follow */}
        <motion.div
          variants={followVarients}
          initial='initial'
          animate='animate'
          className='follow'
        >
          <motion.a variants={followVarients} href='/'>
            <img src='/instagram.png' alt='' />
          </motion.a>
          <motion.a variants={followVarients} href='/'>
            <img src='/facebook.png' alt='' />
          </motion.a>
          <motion.a variants={followVarients} href='/'>
            <img src='/youtube.png' alt='' />
          </motion.a>

          <motion.div variants={followVarients} className='followTextContainer'>
            <div className='followText'>Follow Me</div>
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CERTOFOCATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className='certificate'
        >
          <img src='/certificate.png' alt='Certificate' />
          LMA CERTIFIED <br />
          PROFESSIONAL <br />
          UI DESIGNER
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href='#contact'
          className='contactLink'
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className='contactButton'
          >
            <svg viewBox='0 0 200 200' width='150' height='150'>
              <circle cx='100' cy='100' r='90' fill='pink' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text className='circleText'>
                <textPath href='#innerCirclePath'>Hire Now •</textPath>
              </text>
              <text className='circleText'>
                <textPath href='#innerCirclePath' startOffset='44%'>
                  Contact Me •
                </textPath>
              </text>
            </svg>
            {/* ARROW */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              fill='none'
              stroke='black'
              strokeWidth='2'
              className='arrow'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        {/* 3d */}
        <div className='hImg'>
          <img src='/me-profile.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
