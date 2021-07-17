import Head from 'next/head'
import EditableQuote from 'components/EditableQuote';
import TailwindClasses from 'components/TailwindClasses';
import { useState } from 'react';

const defaultStyle = 'font-bold text-6xl';

export default function Home() {
  const [ classes, setClasses ] = useState(defaultStyle);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Print quote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <TailwindClasses onChange={setClasses} classes={classes} />
        <EditableQuote classes={classes}/>
      </main>
    </div>
  )
}
