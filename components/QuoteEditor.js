import { useState } from 'react';
import EditableQuote from 'components/EditableQuote';
import TailwindClasses from 'components/TailwindClasses';

const defaultStyle = 'font-bold text-6xl';

const QuoteEditor = () => {
  const [ classes, setClasses ] = useState(defaultStyle);

  return (
    <div className="flex flex-col">
        <TailwindClasses onChange={setClasses} classes={classes} />
        <EditableQuote classes={classes}/>
    </div>
  );
};

export default QuoteEditor;
