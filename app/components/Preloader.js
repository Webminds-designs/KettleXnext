"use client"
import React from 'react'
import { motion } from 'motion/react'

export default function Preloader({ progress = 0 }) {
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col items-center justify-center">
                {/* Animated Brand Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: [0, 0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                    className="mb-12"
                >
                    <img src="/images/logo-lg.png" alt="Kettlex" className="h-20 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </motion.div>

                {/* Animated Loading Circles */}
                <motion.div
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-white"
                            initial={{ opacity: 0.2 }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Progress bar with animated glow */}
                <div className="relative w-72 h-1 bg-gray-700/50 rounded-full overflow-hidden mb-6">
                    <motion.div
                        className="h-full bg-gradient-to-r from-neutral-500 to-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="absolute top-0 h-full w-10 bg-white/30 blur-sm"
                        initial={{ left: "-10%" }}
                        animate={{ left: `${progress - 10}%` }}
                        transition={{ duration: 0.5 }}
                        style={{ opacity: progress > 10 ? 1 : 0 }}
                    />
                </div>

                {/* Loading Text with TypeWriter Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white font-light tracking-wider"
                >
                    <motion.div className="relative h-6 overflow-hidden">
                        {["INITIALIZING", "PREPARING EXPERIENCE", "LOADING ASSETS", "ALMOST READY"].map((text, i) => (
                            <motion.p
                                key={i}
                                className="absolute text-sm left-0 right-0 text-center font-mono"
                                initial={{ y: 30 }}
                                animate={{ y: progress > (i * 25) && progress < ((i + 1) * 25) ? 0 : 30 }}
                                transition={{ duration: 0.5 }}
                            >
                                {text}
                            </motion.p>
                        ))}
                        <motion.p
                            className="absolute text-sm left-0 right-0 text-center font-mono text-teal-400"
                            initial={{ y: 30 }}
                            animate={{ y: progress >= 100 ? 0 : 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            READY TO BREW INNOVATION
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Progress Percentage */}
                <motion.p
                    className="text-xs text-gray-400 mt-4 font-mono"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {Math.round(progress)}%
                </motion.p>
            </div>
        </motion.div>
    )
}