import { motion } from 'framer-motion';
import { Heart, Github, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 md:mt-16 pb-8"
        >
            <div className="glass border-t border-white/5 pt-8 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Main footer content */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold gradient-text mb-1">FancyCrafter</h3>
                            <p className="text-sm text-slate-400">
                                Transform your text into beautiful Unicode styles
                            </p>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="https://github.com/AiCrowned/FancyCrafter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Twitter className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-white/5" />

                    {/* Bottom section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-sm text-slate-500 flex items-center gap-1 justify-center md:justify-start">
                            Made with <Heart className="w-4 h-4 text-red-400 inline" fill="currentColor" /> by FancyCrafter Team
                        </p>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <span>© {currentYear}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
