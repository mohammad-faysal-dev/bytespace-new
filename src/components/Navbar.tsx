"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/icons/logo.png"
                        alt="ByteSpace Logo"
                        width={29}
                        height={32}
                        className="navbar-logo-img"
                    />
                    <span className="navbar-logo-text">ByteSpace</span>
                </Link>

                {/* Nav links — centered */}
                <ul className="navbar-links">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`navbar-link${isActive ? " active" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Actions */}
                <div className="navbar-actions">
                    <Link href="/signin" className="navbar-link">
                        Sign In
                    </Link>
                    <Link href="/join" className="navbar-link">
                        Join Us
                    </Link>
                    <Link href="/cart" className="navbar-cart" aria-label="Cart">
                        <Image
                            src="/icons/shopping-bag.png"
                            alt="Cart"
                            width={22}
                            height={22}
                        />
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="navbar-hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F5F5F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {mobileOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="navbar-mobile">
                    <ul className="navbar-mobile-links">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="navbar-mobile-link"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-mobile-actions">
                        <Link
                            href="/signin"
                            className="navbar-mobile-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/join"
                            className="navbar-mobile-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
