import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto font-mono text-sm">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            aria-label="Copy code"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
        </div>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}