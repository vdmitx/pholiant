import { delay } from '@/lib/utils'

export default async function Page() {
  await delay(1000)

  return (
    <div>
      <h1 className='text-3xl font-bold'>FrontEnd</h1>
    </div>
  )
}
