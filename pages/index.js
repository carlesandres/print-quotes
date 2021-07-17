import Head from 'next/head'
import QuoteEditor from 'components/QuoteEditor';
import { Listbox } from '@headlessui/react'
import { useState } from 'react';

const layouts = [
  { id: 1, name: 'Just the one', unavailable: false },
  { id: 2, name: '2 x 2', unavailable: false },
];

export default function Home() {
  const [ selectedLayout, setSelectedlayout ] = useState(layouts[0]);

  const oneEditor = <QuoteEditor key="1-1" />;

  const grid2Editors = (
    <div className="grid grid-rows-2 grid-cols-2">
      <QuoteEditor key="1-1" />
      <QuoteEditor key="1-2" />
      <QuoteEditor key="2-1" />
      <QuoteEditor key="2-2" />
    </div>
  );

  const content = selectedLayout === 1 ? oneEditor : grid2Editors;

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Print quote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Listbox as="div" className="w-40" value={selectedLayout} onChange={setSelectedlayout}>
          <Listbox.Button className="text-center mx-auto w-full p-2 mb-2 border  ">{selectedLayout.name}</Listbox.Button>
          <Listbox.Options className="p-2 bg-gray-100 space-y-2">
            {layouts.map((layout) => (
              <Listbox.Option
                className="bg-white p-1 cursor-pointer hover:bg-yellow-50 hover:text-gray-500"
                key={layout.id}
                value={layout}
                disabled={layout.unavailable}
              >
                {layout.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 ">
        {content}
      </main>
    </div>
  )
}
