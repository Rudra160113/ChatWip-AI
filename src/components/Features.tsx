import { BarChart3, Image, FileCode, ShieldCheck, Layers, Sparkles, Brain, Globe, FileText, Video, MessageSquare, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
  >
    <div className="h-full p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors duration-300 shadow-subtle hover:shadow-glass-hover">
      <div className="flex flex-col h-full">
        <div className="mb-4 p-2 w-fit rounded-lg bg-primary/10">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm flex-grow">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export function Features() {
  const features = [
    {
      title: "Advanced Natural Language Processing",
      description: "Understand and generate human-like text with advanced language models from OpenAI, Anthropic, and other providers.",
      icon: <MessageSquare size={24} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Image Generation",
      description: "Create stunning visuals using DALL-E 3, Stable Diffusion, and other cutting-edge image generation technologies.",
      icon: <Image size={24} className="text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Voice Technologies",
      description: "Convert speech to text and text to speech with exceptional accuracy using voice recognition technology.",
      icon: <FileText size={24} className="text-green-600 dark:text-green-400" />,
    },
    {
      title: "Video Processing",
      description: "Generate and edit videos with AI-powered tools that understand context and creative direction.",
      icon: <Video size={24} className="text-red-600 dark:text-red-400" />,
    },
    {
      title: "Data Analytics",
      description: "Process and visualize complex data sets to gain actionable insights and make informed decisions.",
      icon: <BarChart3 size={24} className="text-yellow-600 dark:text-yellow-400" />,
    },
    {
      title: "Code Generation",
      description: "Generate, review, and optimize code in multiple programming languages for various applications.",
      icon: <FileCode size={24} className="text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title: "Enhanced Security",
      description: "State-of-the-art encryption and privacy protections to keep your data safe and secure.",
      icon: <ShieldCheck size={24} className="text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Multi-modal Capabilities",
      description: "Seamlessly work across text, images, audio, and video with integrated AI processing capabilities.",
      icon: <Layers size={24} className="text-rose-600 dark:text-rose-400" />,
    },
    {
      title: "Creative Assistance",
      description: "Get help with design, writing, and other creative tasks from AI trained on diverse creative works.",
      icon: <Sparkles size={24} className="text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Machine Learning",
      description: "Leverage advanced machine learning algorithms that adapt to your needs and improve over time.",
      icon: <Brain size={24} className="text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Multi-language Support",
      description: "Communicate and create content in multiple languages with high-quality translation capabilities.",
      icon: <Globe size={24} className="text-sky-600 dark:text-sky-400" />,
    },
    {
      title: "High-performance Computing",
      description: "Access powerful computing resources for complex tasks without needing specialized hardware.",
      icon: <Cpu size={24} className="text-fuchsia-600 dark:text-fuchsia-400" />,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the wide range of capabilities that Exo-vision AI offers to enhance your productivity and creativity.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
