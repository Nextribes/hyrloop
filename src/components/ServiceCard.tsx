import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
    id: string;
    icon: LucideIcon;
    title: string;
    shortDescription: string;
    color: string;
    bgColor: string;
    className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    id,
    icon: Icon,
    title,
    shortDescription,
    color,
    bgColor,
    className = ""
}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/services/${id}`)}
            className={`group h-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${className}`}
        >
            <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <Icon className={`h-5 w-5 ${color}`} />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                {title}
            </h3>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                {shortDescription}
            </p>

            <div className="flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                Learn More <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
};

export default ServiceCard;
