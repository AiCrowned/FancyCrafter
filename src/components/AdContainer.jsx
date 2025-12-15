import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';

const AdContainer = ({ type = 'banner', className = '' }) => {
    // Dimensions based on ad type
    const dimensions = {
        banner: { width: '728px', height: '90px', maxWidth: '100%' },
        native: { width: '300px', height: '250px', maxWidth: '100%' },
        mobile: { width: '320px', height: '50px', maxWidth: '100%' },
    };

    const { width, height, maxWidth } = dimensions[type] || dimensions.banner;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex justify-center ${className}`}
        >
            <div
                style={{ width, height, maxWidth }}
                className="relative glass border-dashed border-2 border-white/10 flex flex-col items-center justify-center gap-2 overflow-hidden"
            >
                {/* Placeholder content - Replace with Adsterra script */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />

                <Megaphone className="w-6 h-6 text-slate-600" />
                <span className="text-xs text-slate-500 text-center px-4">
                    Ad Space ({type === 'banner' ? '728×90' : type === 'native' ? '300×250' : '320×50'})
                </span>

                {/* 
          ADSTERRA INTEGRATION INSTRUCTIONS:
          ===================================
          1. Replace this entire div content with your Adsterra script
          2. Remove the placeholder elements above
          3. Insert your ad script like:
          
          <script 
            async="async" 
            data-cfasync="false" 
            src="//pl.adsterra.com/YOUR_AD_ID.js">
          </script>
          
          Or use an iframe for banner ads:
          
          <iframe 
            src="//YOUR_ADSTERRA_URL" 
            width="728" 
            height="90" 
            scrolling="no" 
            frameBorder="0"
          ></iframe>
        */}
            </div>
        </motion.div>
    );
};

export default AdContainer;
