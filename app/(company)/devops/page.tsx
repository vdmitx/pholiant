import { delay } from '@/lib/utils'
import React from 'react';
// import { Divider } from 'antd';

export default async function Page() {
  await delay(1000)

  return (
    <div>
        <h1 className='text-3xl font-bold'>DevOps</h1>
        <p>YAML</p>
        <p>Example</p>
        <pre>{`
            #YAML
            Imaro:
            author: Charles R. Saunders
            language: English
            publication-year: 1981
            pages: 224
        `}</pre>
        <p>JSON</p>
        <p>Example</p>
        <pre>{`
           {
                "Imaro": {
                "author": "Charles R. Saunders",
                "language": "English",
                "publication-year": "1981",
                "pages": 224
                }
            }
        `}</pre>
        <h3></h3>
        <p>Example</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
    </div>
    
  )
}

