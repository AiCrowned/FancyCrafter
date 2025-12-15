import { motion } from 'framer-motion';
import { Type, X, Sparkles } from 'lucide-react';

const InputSection = ({ text, setText }) => {
    const maxChars = 500;
    const charCount = text.length;
    const isNearLimit = charCount > maxChars * 0.8;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-16 md:top-20 z-40 py-4 md:py-6"
        >
            <div className="glass glow-purple p-4 md:p-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <Type className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <h2 className="text-base md:text-lg font-semibold text-white">Enter Your Text</h2>
                </div>

                {/* Textarea */}
                <div className="relative">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value.slice(0, maxChars))}
                        placeholder="Type something amazing..."
                        className="w-full h-28 md:h-32 p-3 md:p-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm md:text-base resize-none focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />

                    {/* Character count & Clear button */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-3">
                        <span className={`text-xs md:text-sm transition-colors ${isNearLimit ? 'text-orange-400' : 'text-slate-500'}`}>
                            {charCount}/{maxChars}
                        </span>
                        {text && (
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                onClick={() => setText('')}
                                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-4 h-4" />
                            </motion.button>
                        )}
                    </div>
                </div>

                {/* Hint text */}
                {!text && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-xs md:text-sm text-slate-500 flex items-center gap-2"
                    >
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                        Start typing to see the magic happen!
                    </motion.p>
                )}
            </div>
        </motion.section>
    );
};

export default InputSection;
