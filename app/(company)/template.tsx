'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../images/logo.png';

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href='/about'>About</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/team'>Team</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/contact'>Contact</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/frontend'>FrontEnd</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/backend'>BackEnd</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/gamedev'>GameDev</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href='/devops'>DevOps</Link>
              </motion.div>
            </ul>
          </nav>
        </div>

        <main className='ml-12 grow bg-gray-50 p-6'>{children}</main>
      </div>
    </section>
  )
}

export default CompanyLayout
