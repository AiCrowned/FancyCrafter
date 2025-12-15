import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-auto"
        >
            <div className="glass border-t border-white/5 py-6 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold gradient-text mb-1">FancyCrafter</h3>
                            <p className="text-sm text-slate-400">
                                Transform your text into beautiful Unicode styles
                            </p>
                        </div>

                        {/* YouTube Link */}
                        <motion.a
                            href="https://www.youtube.com/@AiCrowned"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-medium hover:opacity-90 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Youtube className="w-5 h-5" />
                            <span className="text-sm">Subscribe on YouTube</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
