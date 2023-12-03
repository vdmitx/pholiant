import { delay } from '@/lib/utils'
// npm i react-syntax-highlighter
// npm install prismjs
// npm i highlight.js
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/night-owl.css';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default async function Page() {
  await delay(1000)

  return (
    <div>
      <h1 className='text-3xl font-bold'>FrontEnd</h1>
      <br />
      <h2 className='text-2xl font-bold'>How to import images in Next.js</h2>
      <br />
      <p>Images are a common part of many websites. It’s important that you learn how to use the images properly in NextJS to make use of all of the optimizations that the framework developers have provided for us.</p>
      <br />
      <hr />
      <h2 className='text-2xl font-bold'>How to Style Images in Next.js</h2>
      <br />
      <p>Next.js provides a built-in Image component, which provides benefits like lazy loading, 
        and improved performance. You get all these benefits for free just from using the Image 
        component to display your images, but one issue with the component is its slightly convoluted 
        approach to styling.</p>
      <p>In this article, I’ll explain what works, and what you might need to work around when styling 
        your component.</p>
      <br />
      <h2 className='text-1xl font-bold'>Image Component</h2>
      <p>Next.js allows you to pass styles directly to the component through props. 
        You can use either the style prop or the classNames prop. This works with most styling, 
        but you may run into issues with sizing. Next.js provides its own method for how your 
        image will size itself, which can override your styling. If you have a simple image with 
        a fixed width and height in pixels, you can use the fixed layout option, and simply provide 
        the width and height as props. For more advanced options, however, you may have to pick a 
        different layout option.</p>
      <br />
      <p>And here’s our code, which uses some simple styling from TailwindCSS:</p>
      <br />

      <pre className='overflow-clip rounded bg-neutral-900 text-white shadow'>{`
        export default function Images() {
          return (
              <div className="flex h-screen items-center justify-center bg-neutral-900">
                  <div className="m-auto w-72 overflow-clip rounded bg-neutral-900 text-white shadow">
                      <div className="relative flex aspect-square w-full flex-col items-center justify-center">
                          <Image
                              src={backgroundImg}
                              layout="fill"
                              className="absolute brightness-50"
                          />
      
                          <div className="aspect-square w-1/2 overflow-clip rounded-full">
                      <div className="aspect-square w-1/2 overflow-clip rounded-full">
                              <Image src={profileImg} />
                          </div>
                          </div>
                          <div className="z-10 flex flex-col items-center justify-center">
                              <div className="font-bold">Omari Thompson-Edwards</div>
                              <div>React Developer</div>
                          </div>
                      </div>
                  </div>
              </div>
          );
      }
      `}</pre>
      <pre><code className="js">
        {`
        fetch('{url}')
        .then(response => console.log(response));
        `}
      </code></pre>
    </div>

  )
}
