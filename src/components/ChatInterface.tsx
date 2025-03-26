import { useState, useRef, useEffect } from 'react';
import { ArrowUp, Paperclip, Mic, Image as ImageIcon, Upload, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for demo purposes
const exampleMessages = [
  {
    role: 'assistant',
    content: 'Hello! I\'m Exo-vision AI. How can I assist you today?',
    timestamp: new Date().toISOString(),
  },
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(exampleMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);
  
  // Focus input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response (would be replaced with actual API call)
    setTimeout(() => {
      const responses = [
        "I'll analyze that for you right away. Based on the information provided, here are some insights you might find helpful...",
        "That's an interesting question. Let me process that and provide you with a comprehensive response...",
        "I've reviewed your request and here's what I can tell you. The data suggests several approaches...",
        "Thank you for sharing that information. I've processed it and can offer the following recommendations...",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg border glassmorphism shadow-glass">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            E
          </div>
          <div>
            <h3 className="font-medium">Exo-vision AI</h3>
            <p className="text-xs text-muted-foreground">Advanced AI assistant</p>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              > 
                <div className={`flex items-start max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <Avatar className={`h-8 w-8 ${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
                    {message.role === 'assistant' ? (
                      <div className="h-full w-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        E
                      </div>
                    ) : (
                      <div className="h-full w-full bg-secondary flex items-center justify-center">
                        <span className="text-xs font-medium">You</span>
                      </div>
                    )}
                  </Avatar>
                  
                  <div 
                    className={`p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-primary/10 rounded-tr-none' 
                        : 'bg-secondary/30 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <div className="mt-1 text-right">
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <div className="flex items-start max-w-[80%]">
                  <Avatar className="h-8 w-8 mr-2">
                    <div className="h-full w-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      E
                    </div>
                  </Avatar>
                  
                  <div className="p-3 rounded-lg bg-secondary/30 rounded-tl-none">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-foreground/40 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Paperclip size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Attach files</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ImageIcon size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate image</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mic size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Voice input</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div className="flex-1 relative">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="pr-10 py-6"
            />
            {inputValue && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground"
                onClick={() => setInputValue('')}
              >
                <X size={16} />
              </Button>
            )}
          </div>
          
          <Button 
            onClick={handleSendMessage} 
            size="icon" 
            className="rounded-full h-10 w-10 bg-primary text-primary-foreground"
            disabled={!inputValue.trim() || isLoading}
          >
            {isLoading ? (
              <RefreshCw size={18} className="animate-spin" />
            ) : (
              <ArrowUp size={18} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
      }
