"use client";

import { useState } from "react";

interface NewsletterButtonProps {
    placeholder?: string;
    buttonLabel?: string;
    onSubscribe?: (email: string) => void;
}

export default function NewsletterButton({
    placeholder = "Enter your email",
    buttonLabel = "Subscribe",
    onSubscribe,
}: NewsletterButtonProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            onSubscribe?.(email.trim());
            setEmail("");
        }
    };

    return (
        <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
                type="email"
                className="newsletter-input"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
                {buttonLabel}
            </button>
        </form>
    );
}
