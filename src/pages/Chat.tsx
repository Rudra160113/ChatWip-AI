import { Navbar } from '@/components/Navbar';
import { ChatInterface } from '@/components/ChatInterface';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Exo-vision AI Chat
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of our advanced AI assistant. Ask questions, generate content, and explore new ideas.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto h-[600px]"
        >
          <ChatInterface />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
 
