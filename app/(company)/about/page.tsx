import { delay } from '@/lib/utils'

export default async function Page() {
  await delay(1000)

  return (
    <div>
      <h1 className='text-1xl font-bold'>Who we are?</h1>
      <p>Hey, we are a full-stack developers from the many contries, with a passion for ReactJS.</p>
      <p>We are an enthusiastic and hardworking developer, driven by a desire to learn and explore ideas.</p>
    </div>
  )
}
