import { delay } from '@/lib/utils'
import Image from 'next/image'
import logo from '../logo.png';
import TeamOne from './cardtm/teamone';
import TeamTwo from './cardtm/teamtwo';

{/* <Image src={logo} width={120} height={70} alt="logo"/> */}


export default async function Page() {
  await delay(1000)
  return (
    <div>
      <h2 className='text-3xl font-bold shadow-xl m-10 opacity-50'>Team One</h2>
      <TeamOne />
      <h2 className='text-3xl font-bold shadow-xl m-10 opacity-50'>Team Two</h2>
      <TeamTwo />
    </div>
  )
}
