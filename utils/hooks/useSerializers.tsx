import Link from 'next/link';
import { CodeBlock } from 'components';

interface ISerialProps {
  node: {
    code: string
    language: string
    filename: string
    highlightedLines: number[]
  }
}

interface ILinkProps {
  children: [string]
  mark: { [key: string]: any }
}

const useSerializers = () => {
  /* Here we tell React how to render internal links and links
  with attr target='_blank' and also code blocks */
  const serializers = {
    marks: {
      internalLink: ({ children, mark }: ILinkProps) => (
        <Link href={mark.url}>{children[0]}</Link>
      ),
      link: ({ children, mark }: ILinkProps) => (mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children[0]}
        </a>
      ) : (
        <a href={mark.href}>{children[0]}</a>
      )),
    },
    types: {
      // eslint-disable-next-line react/jsx-props-no-spreading
      code: (props: ISerialProps) => <CodeBlock {...props} />,
    },
  };

  return serializers;
};

export default useSerializers;
