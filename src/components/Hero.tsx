import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Globe, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null; // Prevent SSR hydration issues
  
  return (
    <div className="relative min-h-screen flex items-center animated-background overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full inline-flex items-center">
                <Sparkles size={14} className="mr-1.5" />
                Next-generation AI technology
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Discover the Future with{' '}
              <span className="text-gradient from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                Exo-vision AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              An all-encompassing platform that brings advanced AI capabilities to your fingertips with a beautifully designed experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat">
                <Button size="lg" className="group">
                  Try Exo-vision AI
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/#features">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col space-y-2"
              >
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Zap size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base font-semibold">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge AI models for unparalleled performance
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col space-y-2"
              >
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Globe size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-base font-semibold">Versatile Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Chat, create, and collaborate with multiple capabilities
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col space-y-2"
              >
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Fingerprint size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-base font-semibold">Personalized</h3>
                <p className="text-sm text-muted-foreground">
                  Adapts to your preferences for a tailored experience
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 glassmorphism-dark rounded-2xl"></div>
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm font-medium text-foreground/70">
                    Exo-vision AI Chat
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col space-y-4 overflow-hidden">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                      E
                    </div>
                    <div className="bg-secondary/30 rounded-lg rounded-tl-none p-3 text-sm max-w-[80%]">
                      Hello! I'm Exo-vision AI. How can I assist you today?
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 self-end">
                    <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 text-sm max-w-[80%]">
                      I need to create a presentation for my team. Can you help me organize my thoughts?
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-xs font-medium">You</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                      E
                    </div>
                    <div className="bg-secondary/30 rounded-lg rounded-tl-none p-3 text-sm max-w-[80%]">
                      Absolutely! I'd suggest starting with these key sections:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Executive summary</li>
                        <li>Project objectives</li>
                        <li>Timeline and milestones</li>
                        <li>Resource allocation</li>
                        <li>Success metrics</li>
                      </ul>
                      Would you like me to help you develop any of these sections further?
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-auto">
                    <div className="flex-1">
                      <div className="h-10 bg-background/50 border border-border rounded-lg w-full"></div>
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-2xl rotate-12 glassmorphism-light animate-float"/>
            <div className="absolute -bottom-12 -left-8 h-24 w-24 rounded-2xl -rotate-12 glassmorphism-light animate-float" style={{ animationDelay: '1s' }}/>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
