import {
  FC, useState, useRef, useId,
} from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import sass from 'react-syntax-highlighter/dist/cjs/languages/prism/sass';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';

import { CopyIcon, CopiedIcon } from 'components';

interface IProps {
  node: {
    code: string
    language: string
    filename: string
    highlightedLines: number[]
  }
}

const CodeBlock: FC<IProps> = ({
  node: {
    language, code, filename = './index.js', highlightedLines = [],
  },
}) => {
  const id = useId();
  const ref = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  SyntaxHighlighter.registerLanguage('jsx', jsx);
  SyntaxHighlighter.registerLanguage('tsx', tsx);
  SyntaxHighlighter.registerLanguage('sass', sass);
  SyntaxHighlighter.registerLanguage('css', css);

  const handleStyleLine = (lineNumber: number) => {
    const style = {
      display: 'block',
      width: 'fit-content',
      backgroundColor: 'transparent',
    };
    highlightedLines.forEach((highlightedLine) => {
      if (highlightedLine === lineNumber) {
        style.backgroundColor = '#6ea6ff44';
      }
    });
    return { style };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="snippet relative flex flex-col rounded-md bg-black">
      <span className="snippet__tab p-2 text-center text-[#fff]">
        {filename}
      </span>
      <button
        className="snippet__copy-btn absolute top-11 right-0 z-10 flex h-10 w-11 items-center justify-center text-[#fff]"
        type="button"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <CopiedIcon width="20px" height="20px" />
        ) : (
          <CopyIcon width="20px" height="20px" />
        )}
      </button>
      <textarea id={id} ref={ref} className="hidden h-0" defaultValue={code} />

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLongLines
        showLineNumbers
        customStyle={{
          margin: '0',
          borderTopLeftRadius: '0',
          borderTopRightRadius: '0',
        }}
        lineNumberStyle={{
          // padding: '0 10px 0 0',
          fontSize: 14,
          // borderRight: '1.5px solid whitesmoke',
          // marginRight: '10px',
        }}
        lineProps={handleStyleLine}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
