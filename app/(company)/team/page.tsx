import { delay } from '@/lib/utils'
import Image from 'next/image'
import logo from '../logo.png';
import Cardtm from '../team/cardtm/cardtm';



export default async function Page() {
  await delay(1000)
  return (
    <div>
      <h1 className='text-3xl font-bold'>Team</h1>
      <Image src={logo} width={120} height={70} alt="logo"/>
      <hr />
      <br />
      <Cardtm />
    </div>
  )
}
