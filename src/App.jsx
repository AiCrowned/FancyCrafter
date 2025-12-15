import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import InputSection from './components/InputSection';
import StyleCard from './components/StyleCard';
import AdContainer from './components/AdContainer';
import Footer from './components/Footer';
import { textStyles, transformToAllStyles } from './utils/textStyles';

function App() {
    const [text, setText] = useState('');

    // Memoize transformations for performance
    const transformedStyles = useMemo(() => {
        return transformToAllStyles(text);
    }, [text]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                {/* Top Banner Ad */}
                <AdContainer type="banner" className="mt-4 md:mt-6 hidden md:flex" />
                <AdContainer type="mobile" className="mt-4 md:hidden" />

                {/* Input Section */}
                <InputSection text={text} setText={setText} />

                {/* Results Section */}
                <section id="styles" className="py-6 md:py-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6 md:mb-8"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                            ✨ Fancy Styles
                        </h2>
                        <p className="text-sm md:text-base text-slate-400">
                            Click any style to copy it to your clipboard
                        </p>
                    </motion.div>

                    {/* Responsive Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* First row of cards */}
                        {transformedStyles.slice(0, 6).map((style, index) => (
                            <StyleCard
                                key={style.id}
                                style={style}
                                result={style.result}
                                index={index}
                            />
                        ))}

                        {/* Native Ad between card rows */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center my-4"
                        >
                            <AdContainer type="native" />
                        </motion.div>

                        {/* Remaining cards */}
                        {transformedStyles.slice(6).map((style, index) => (
                            <StyleCard
                                key={style.id}
                                style={style}
                                result={style.result}
                                index={index + 6}
                            />
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-8 md:py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-6 md:p-8 text-center"
                    >
                        <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">
                            About FancyCrafter
                        </h2>
                        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            FancyCrafter transforms your ordinary text into beautiful Unicode styles
                            instantly. Perfect for social media bios, Instagram captions, Twitter posts,
                            Discord usernames, and more! All transformations happen in your browser -
                            no data is sent to any server.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20">
                                19+ Styles
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/20">
                                100% Free
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 border border-green-500/20">
                                No Sign-up
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/20">
                                Privacy First
                            </span>
                        </div>
                    </motion.div>
                </section>

                {/* Bottom Banner Ad */}
                <AdContainer type="banner" className="mb-6 hidden md:flex" />
                <AdContainer type="mobile" className="mb-6 md:hidden" />
            </main>

            <Footer />
        </div>
    );
}

export default App;
