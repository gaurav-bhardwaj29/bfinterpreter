import React, { useState } from 'react';
import { Terminal, Play, AlertCircle } from 'lucide-react';
import { BrainfuckInterpreter } from './lib/interpreter';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const runCode = () => {
    try {
      setError(null);
      const interpreter = new BrainfuckInterpreter(code);
      const result = interpreter.execute();
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#F0F0F0] p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-[#61AFEF]" />
          <h1 className="text-2xl font-mono">Brainfuck Interpreter</h1>
        </header>

        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">
            Enter your Brainfuck code below. Valid commands: {'><+-.,[]'}
          </p>
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 bg-[#2D2D2D] text-[#F0F0F0] p-4 rounded border border-gray-700 font-mono focus:outline-none focus:border-[#61AFEF] focus:ring-1 focus:ring-[#61AFEF]"
              placeholder="++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
            />
            <button
              onClick={runCode}
              className="absolute bottom-4 right-4 bg-[#61AFEF] text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-[#7DBEFF] transition-colors"
            >
              <Play className="w-4 h-4" />
              Run
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-900/20 border border-red-700 rounded p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-400 font-mono text-sm">{error}</p>
          </div>
        )}

        <div className="bg-[#2D2D2D] rounded border border-gray-700 p-4">
          <h2 className="text-sm text-gray-400 mb-2">Output:</h2>
          <pre className="font-mono whitespace-pre-wrap break-all">{output || 'No output yet...'}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;