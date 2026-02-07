import { motion } from 'motion/react';

// Olympic color pattern: Blue, Yellow, Black, Green, Red (repeating)
const OLYMPIC_COLORS = ['#0085C7', '#F4C300', '#000000', '#009F3D', '#DF0024'];


const GoogleOlympicsHeading = ({ show = false, className = '' }) => {
    // First line: GOOGLE OLYMPICS (single line)
    const heading = 'Google Olympics';
    const getLetterColor = (index) => {
        return OLYMPIC_COLORS[index % OLYMPIC_COLORS.length];
    };

    // Container variants for animation
    const containerVariants = {
        hidden: { 
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.18,
                staggerChildren: 0.08,
            },
        },
    };

    // Individual letter variants
    const letterVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.98,
            y: 8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.38,
            },
        },
    };

    return (
        <motion.div
            className={`flex flex-col items-center select-none pointer-events-none ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
        >
            {/* First line: Google Olympics */}
            <div className="w-full flex justify-center px-1 sm:px-2 md:px-0">
                {heading.split('').map((letter, index) => {
                    if (letter === ' ') {
                        return (
                            <span
                                key={index}
                                className="inline-block w-2 sm:w-4 md:w-6 lg:w-8"
                                aria-hidden="true"
                            />
                        );
                    }
                    return (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block text-[2.3rem] xs:text-[2.7rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem]"
                            style={{
                                fontFamily: 'Fredericka the Great, cursive',
                                color: getLetterColor(index),
                                letterSpacing: '0.08em',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
                                lineHeight: 1.1,
                                fontWeight: 800,
                            }}
                        >
                            {letter}
                        </motion.span>
                    );
                })}
            </div>
            {/* Second line: 2.0 */}
            <div className="w-full flex justify-center mt-2 px-1 sm:px-2 md:px-0">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
                    className="text-[1.4rem] xs:text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem]"
                    style={{
                        fontFamily: 'Fredericka the Great, cursive',
                        color: '#030c0f',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        textShadow: '2px 2px 4px rgba(22, 6, 6, 0.3), 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
                        lineHeight: 1.1,
                    }}
                >
                    2.0
                </motion.span>
            </div>
        </motion.div>
    );
};

export default GoogleOlympicsHeading;
