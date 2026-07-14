import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Globe } from 'lucide-react';
import { ChatMessage } from '../types';
import { getGrowthTips } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou sua IA de crescimento. Pergunte-me sobre exercícios, nutrição ou dicas científicas para altura. Uso dados atualizados da web para responder.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await getGrowthTips(userText);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: response.text, 
        sources: response.sources 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro ao buscar informações.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-fade-in">
      <div className="mb-4 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-900/50 mb-2">
           <Sparkles size={14} className="text-red-500" />
           <span className="text-xs font-medium text-red-400">Powered by Gemini Search</span>
         </div>
         <h2 className="text-xl font-bold text-white">Assistente IA</h2>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div 
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-red-700 text-white rounded-tr-none' 
                  : 'bg-neutral-800 text-gray-200 rounded-tl-none border border-neutral-700'
              }`}
            >
              {msg.role === 'model' ? (
                 <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                 </div>
              ) : (
                msg.text
              )}
            </div>
            
            {/* Sources display for model messages */}
            {msg.role === 'model' && msg.sources && msg.sources.length > 0 && (
              <div className="mt-2 ml-1 max-w-[85%]">
                <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <Globe size={10} /> Fontes encontradas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {msg.sources.slice(0, 3).map((source, sIdx) => (
                    <a 
                      key={sIdx} 
                      href={source} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] bg-neutral-900 border border-neutral-800 text-blue-400 px-2 py-1 rounded-full truncate max-w-[150px] hover:border-blue-500 transition-colors"
                    >
                      {new URL(source).hostname.replace('www.', '')}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
           <div className="flex items-start">
             <div className="bg-neutral-800 p-4 rounded-2xl rounded-tl-none border border-neutral-700 flex gap-2">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
               <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
               <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Pergunte sobre crescimento, dieta..."
          className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl pl-4 pr-12 py-4 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all placeholder-gray-500"
        />
        <button 
          onClick={handleSend}
          disabled={!query.trim() || isLoading}
          className="absolute right-2 top-2 p-2 bg-red-700 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;