'use client';

import { Calendar } from 'lucide-react';

interface ScheduleButtonProps {
    partnerName: string;
    meetingType?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function ScheduleButton({
    partnerName,
    meetingType = 'Success Session',
    variant = 'secondary',
    size = 'md',
    className = '',
}: ScheduleButtonProps) {
    const handleClick = () => {
        // Option A: Direct redirect
        window.open(
            `https://calendly.com/scoreupriseup/success-session?name=${encodeURIComponent(partnerName)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    // Base styles
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer border-2 border-transparent group";

    // Size variants
    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // Style variants
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40",
        secondary: "bg-transparent border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30",
        outline: "bg-white border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600",
    };

    return (
        <button
            onClick={handleClick}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            aria-label={`Schedule a call about ${partnerName}`}
        >
            <Calendar size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} className="transition-transform duration-300 group-hover:scale-110" />
            <span>Schedule a Call</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
    );
}
