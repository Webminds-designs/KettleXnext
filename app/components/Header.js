"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {

    const [active, setActive] = useState("hero");
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Hide header on scroll down and show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close mobile menu if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    // Add this effect after your other useEffect hooks
    useEffect(() => {
        // Set the active state based on current pathname
        if (pathname === '/') {
            setActive('hero');
        } else if (pathname.startsWith('/')) {
            // Remove the leading slash and use as target
            const path = pathname.substring(1);
            // Check if this path matches any of our navigation items
            const matchingItem = navItems.find(item => item.target === path);
            if (matchingItem) {
                setActive(matchingItem.target);
            }
        }
    }, [pathname]);

    // Define navigation 
    const navItems = [
        { label: "HOME", target: "hero" },
        { label: "ABOUT US", target: "aboutus" },
        { label: "INFO", target: "info" },
        { label: "CONTACT US", target: "contactus" },
    ];

    // Handle navigation
    const handleNavItemClick = (item) => {
        console.log("Clicked on:", item.target);
        setActive(item.target);

        // Check if this is a page navigation item
        if (["aboutus", "info", "contactus"].includes(item.target)) {
            setMobileMenuOpen(false);
            router.push(`/${item.target}`);
            return;
        }
        
        // Handle HOME navigation when not on home page
        if (item.target === "hero" && pathname !== "/") {
            setMobileMenuOpen(false);
            router.push("/");
            return;
        }

        // For other items or if already on home page, scroll to the section
        const section = document.getElementById(item.target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile menu after clicking
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`bg-[#c2c2c2ff] p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center font-medium">
                    {/* Logo */}
                    <div className="lg:ml-12">
                        <img src={isHome ? '/images/logo.png' : '/images/logo-dark.png'} alt="Logo" className="h-10 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className={`hidden lg:flex space-x-20 ${isHome ? 'text-white' : 'text-black'} uppercase text-sm mr-16`}>
                        {navItems.map((item) => (
                            <li
                                key={item.label}
                                onClick={() => handleNavItemClick(item)}
                                className="cursor-pointer relative transition duration-300"
                            >
                                {item.label}
                                {active === item.target && (
                                    <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] ${isHome ? 'bg-white' : 'bg-black'}`}></span>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden mr-4">
                        <button
                            ref={hamburgerRef}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`${isHome ? 'text-white' : 'text-black'} text-2xl`}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Background Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-35 bg-black/30 bg-opacity-30 backdrop-blur-md"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#c2c2c2ff] fixed top-16 left-0 right-0 lg:hidden z-45"
                    >
                        <ul className={`flex flex-col items-center ${isHome ? 'text-white' : 'text-black'} uppercase text-sm py-4`}>
                            {navItems.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavItemClick(item)}
                                    className="cursor-pointer py-2 transition duration-300"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
