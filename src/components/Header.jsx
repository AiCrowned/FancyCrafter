import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="sticky top-0 z-50 glass border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-2 md:gap-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 blur-lg opacity-50" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold gradient-text">
                                FancyCrafter
                            </h1>
                            <p className="text-[10px] md:text-xs text-slate-400 -mt-1 hidden sm:block">
                                Premium Text Generator
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a
                            href="#styles"
                            className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                            Styles
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <motion.a
                            href="https://github.com/AiCrowned/FancyCrafter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            GitHub
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pb-4 flex flex-col gap-3"
                    >
                        <a
                            href="#styles"
                            className="text-sm text-slate-300 hover:text-white transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Styles
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-slate-300 hover:text-white transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="https://github.com/AiCrowned/FancyCrafter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center"
                        >
                            GitHub
                        </a>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
