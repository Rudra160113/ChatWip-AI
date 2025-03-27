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
            Experience the power of our emotionally intelligent AI assistant. Ask questions, generate content, and enjoy meaningful conversations.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">OpenAI</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">Gemini</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">Llama</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">HuggingFace</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">Stable Diffusion</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">Pexels</div>
            <div className="bg-secondary/20 py-1 px-3 rounded-full text-sm">ElevenLabs TTS</div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto h-[600px]"
        >
          <ChatInterface />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Quick Commands</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/image [prompt]</span>
              <p>Generate AI image (OpenAI)</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/stability [prompt]</span>
              <p>Generate with Stable Diffusion</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/llama-image [prompt]</span>
              <p>Generate image with Llama</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/gemini-image [prompt]</span>
              <p>Generate image with Gemini</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/llama [prompt]</span>
              <p>Chat with Llama model</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/pexels [query]</span>
              <p>Search photos on Pexels</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/speak [text]</span>
              <p>Text-to-speech with ElevenLabs</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <span className="font-mono font-bold">/random-photo</span>
              <p>Get a random curated photo</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
