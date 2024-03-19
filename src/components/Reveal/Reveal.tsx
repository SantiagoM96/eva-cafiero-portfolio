import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { RevealProps } from '../../models/types';

const Reveal: React.FC<RevealProps> = ({ children, width, variants, transition }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={`${width} overflow-hidden`}>
            <motion.div
                variants={variants}
                initial={variants.hidden}
                animate={mainControls}
                transition={transition}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;