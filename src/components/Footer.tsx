import Image from "next/image";
import Link from "next/link";
import NewsletterButton from "./NewsletterButton";

const featuredLinks = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/courses/business" },
    { label: "IT", href: "/courses/it" },
    { label: "Design", href: "/courses/design" },
];

const developmentLinks = [
    { label: "Development", href: "/courses/development" },
    { label: "Marketing", href: "/courses/marketing" },
    { label: "Photography", href: "/courses/photography" },
    { label: "Finance", href: "/courses/finance" },
    { label: "Sport", href: "/courses/sport" },
];

const companyLinks = [
    { label: "Become a Creator", href: "/become-creator" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* ── Top section ───────────────────────────────── */}
            <div className="footer-top">
                {/* Left: logo + newsletter */}
                <div className="footer-left">
                    {/* Logo — identical to Navbar */}
                    <Link href="/" className="footer-logo">
                        <Image
                            src="/icons/logo.png"
                            alt="ByteSpace Logo"
                            width={29}
                            height={32}
                            className="footer-logo-img"
                        />
                        <span className="footer-logo-text">ByteSpace</span>
                    </Link>

                    <p className="footer-desc">
                        Stay Up to date with our latest features and releases by joining our
                        newsletter.
                    </p>

                    <NewsletterButton placeholder="Enter your email" buttonLabel="Search" />

                    <p className="footer-disclaimer">
                        By subscribing, you agree to our{" "}
                        <Link href="/privacy-policy" className="footer-disclaimer-link">
                            Privacy Policy
                        </Link>{" "}
                        and consent to receive updates from our company.
                    </p>
                </div>

                {/* Right: link columns */}
                <div className="footer-links-grid">
                    {/* Column 1 */}
                    <ul className="footer-links-col">
                        {featuredLinks.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="footer-link">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Column 2 */}
                    <ul className="footer-links-col">
                        {developmentLinks.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="footer-link">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Column 3 */}
                    <ul className="footer-links-col">
                        {companyLinks.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="footer-link">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Bottom bar ────────────────────────────────── */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    @ 2023 ByteSpace. All rights reserved.
                </p>
                <div className="footer-legal-links">
                    <Link href="/privacy-policy" className="footer-legal-link">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="footer-legal-link">
                        Terms of Service
                    </Link>
                    <Link href="/cookies" className="footer-legal-link">
                        Cookies Settings
                    </Link>
                </div>
            </div>
        </footer>
    );
}
