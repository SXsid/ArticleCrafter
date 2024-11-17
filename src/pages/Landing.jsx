import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Type, Wand2, Code, Command, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const BorderButton = () => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-1 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #B794F4, #FED7E2, #B794F4)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <Link to={"/home"} >
        <button
          className="relative px-8 py-3 bg-[#1A1625] rounded-lg text-pink-100 font-semibold"
        >
          Try it Now
        </button>
      </Link>
    </motion.div>
  );
};

const LandingPage = () => {
  const features = [
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Smart Editor",
      description: "Advanced text editing with real-time formatting"
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "Content Assistant",
      description: "AI-powered writing suggestions and improvements"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Auto Formatting",
      description: "Professional formatting with one click"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Content Snippets",
      description: "AI-powered writing suggestions and improvements"
    },
    {
      icon: <Command className="w-6 h-6" />,
      title: "Bash scripts",
      description: "Professional formatting with one click"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Emojis and avatar",
      description: "Professional formatting with one click"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1625] text-pink-50 relative ">

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #B794F4 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #B794F4 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section with Horizontal Layout */}
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-6xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #B794F4, #FED7E2)",
                }}
              >
                Article/Crafter
              </motion.div>

              <motion.p
                className="text-xl mb-8 text-pink-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Transform your writing experience with AI-powered editing,
                professional formatting, and intelligent suggestions.
                Create stunning articles effortlessly with our advanced editor.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <BorderButton />
              </motion.div>
            </motion.div>

            {/* Right Side - Editor Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[rgb(34,29,46)] rounded-lg shadow-2xl overflow-hidden">
                {/* Editor Toolbar */}
                <div className="border-b border-gray-700 p-2">
                  <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="grid grid-cols-8 gap-1">
                    {['B', 'I', 'U', '¶', '≡', '⌘'].map((icon, index) => (
                      <motion.button
                        key={icon}
                        className="p-1 hover:bg-purple-300/20 rounded text-pink-200"
                        whileHover={{ scale: 1.1 }}
                      >
                        {icon}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Editor Content */}
                <div className="p-4">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.5 }}
                  >
                    {[3/4, 1/2, 2/3, 1/2, 3/4, 5/6, 3/4, 1/2, 2/3].map((width, index) => (
                      <motion.div
                        key={index}
                        className={`h-4 bg-purple-300/20 rounded mb-4`}
                        style={{ width: `${width * 100}%` }}
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                          x: [0, 2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="container mx-auto px-8 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#221D2E]/50 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(183, 148, 244, 0.2)"
                }}
              >
                <motion.div
                  className="text-purple-300 mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold mb-2 text-pink-100"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-pink-200/80"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "Try it Now" Button at Bottom Center */}
        <motion.div
          className=" mt-10 left-1/2 transform -translate-x-1/2"
          drag
          dragConstraints={{ left: -100, right: 100 }}
        >
          <BorderButton />
        </motion.div>

      </div>

      {/* Footer */}
      <footer className=" items-center justify-center p-10 bg-[#1a16255d] text-center py-4">
        <p className="text-sm text-pink-200">Built with 💜 by Sudhanshu Shekhar</p>
      </footer>
    </div>
  );
};

export default LandingPage;
