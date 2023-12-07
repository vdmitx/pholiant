import { delay } from '@/lib/utils'
import React from 'react';
// import { Divider } from 'antd';
import Image from 'next/image'
import mobile from '../mobile/mobile.png';
import mobile2 from '../mobile/mobile2.png';

export default async function Page() {
  await delay(1000)

  return (
    <div>
        <h1 className='text-3xl font-bold'>MobileDev</h1>
      <div className='flex m-10'>
        <Image className='rounded m-10' src={mobile} width={500} height={200} alt="logo"/>
      </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <div className='flex m-10'>
        <Image className='rounded m-10' src={mobile2} width={400} height={200} alt="logo"/>
        </div>
        <p>Example</p>
    </div>
  )
}

