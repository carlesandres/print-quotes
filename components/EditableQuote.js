import { useState } from 'react';

const EditableQuote = ({classes}) => {
  const [ quote, setQuote ] = useState('Sample quote you can edit');

  console.log('classes', classes);

  const change = event => {
    setQuote(event.target.value);
  };

  const className = `${classes} editable border p-4 print:border-none`;

  return (
    <>
    <div contentEditable className={className} onChange={change}
      dangerouslySetInnerHTML = {{__html: quote}} />
      <style jsx>{`
        .editable > * {
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default EditableQuote;
