import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const StyleCard = ({ style, result, index }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!result) return;

        try {
            await navigator.clipboard.writeText(result);
            setCopied(true);
            toast.success('Copied to clipboard!', {
                icon: '✨',
            });

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast.error('Failed to copy');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={handleCopy}
            className={`glass glass-hover cursor-pointer p-4 md:p-5 relative group ${result ? 'hover:glow-purple' : 'opacity-50 cursor-not-allowed'
                }`}
            whileHover={result ? { scale: 1.02, y: -4 } : {}}
            whileTap={result ? { scale: 0.98 } : {}}
        >
            {/* Style name badge */}
            <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/20">
                    {style.name}
                </span>

                {/* Copy indicator */}
                <motion.div
                    initial={false}
                    animate={{
                        scale: copied ? [1, 1.3, 1] : 1,
                        rotate: copied ? [0, 10, -10, 0] : 0
                    }}
                    className={`p-2 rounded-lg transition-all ${copied
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10'
                        }`}
                >
                    {copied ? (
                        <Check className="w-4 h-4" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </motion.div>
            </div>

            {/* Transformed text */}
            <div className="min-h-[60px] flex items-center">
                <p className="text-base md:text-lg text-white break-all leading-relaxed">
                    {result || (
                        <span className="text-slate-500 italic text-sm">
                            Type something to see preview...
                        </span>
                    )}
                </p>
            </div>

            {/* Preview on hover */}
            {result && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-sm font-medium text-white flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        Click to copy
                    </span>
                </div>
            )}

            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none gradient-border" />
        </motion.div>
    );
};

export default StyleCard;
