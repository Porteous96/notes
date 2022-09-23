import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview = ({markdown}: MarkdownPreviewProps) => {

  const generateMarkdownPreview = (markdown: string) => <ReactMarkdown>{markdown}</ReactMarkdown>;

  return (
    <div>
      {generateMarkdownPreview(markdown)}
    </div>
  );
};

export default MarkdownPreview;