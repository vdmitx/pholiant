import { delay } from '@/lib/utils'
import Image from 'next/image'
import logo from '../logo.png';
import TeamOne from './cardtm/teamone';
import TeamTwo from './cardtm/teamtwo';
import LeaderOne from './cardtm/leaderone';
import LeaderTwo from './cardtm/leadertwo';
import Link from 'next/link'

{/* <Image src={logo} width={120} height={70} alt="logo"/> */}


export default async function Page() {
  await delay(1000)
  return (
    <div>
      <ul className='flex'>
        <li className='text-3xl font-bold shadow-xl m-10 opacity-50'><Link href="/cardtm/leadertwo">Team</Link></li>
        <li className='text-3xl font-bold shadow-xl m-10 opacity-50'>Team</li>
        <li className='text-3xl font-bold shadow-xl m-10 opacity-50'>Team</li>
      </ul>
      <LeaderOne/>
      <TeamOne />
      <LeaderTwo/>
      <TeamTwo />
    </div>
  )
}
