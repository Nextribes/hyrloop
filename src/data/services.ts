import { Users, Briefcase, Globe, MessageSquare, Shield, Lightbulb, LucideIcon } from 'lucide-react';

export interface ServiceData {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    features: string[];
    benefits: string[];
}

export const servicesData: ServiceData[] = [
    {
        id: "recruitment",
        title: "Core Recruitment Solutions",
        shortDescription: "Precision-driven recruitment services to unlock human capital potential.",
        fullDescription: "finding the right talent is the most critical challenge for modern businesses. Our Core Recruitment Solutions go beyond simple resume matching. We employ a data-driven, relationship-first approach to identify candidates who not only fit the job description but also align with your company culture and long-term strategic goals. Whether you need to fill a single critical role or scale an entire department, our team acts as an extension of your brand.",
        icon: Users,
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
        features: [
            "Strategic Recruitment Services",
            "Executive Search & Leadership Hiring",
            "Talent Acquisition Strategy",
            "Diversity & Inclusion Hiring"
        ],
        benefits: [
            "Reduced time-to-hire by 40%",
            "Higher candidate retention rates",
            "Access to passive talent networks",
            "Streamlined interview processes"
        ]
    },
    {
        id: "it-development",
        title: "IT Development Services",
        shortDescription: "End-to-end web and mobile app development solutions for modern businesses.",
        fullDescription: "In today's digital-first world, having robust web and mobile applications is essential for business success. Our IT Development Services combine technical excellence with user-centric design to deliver scalable, high-performance solutions. Whether you need a responsive website, a native mobile app, or a complex enterprise platform, our experienced developers bring your vision to life with cutting-edge technologies and agile methodologies.",
        icon: Briefcase,
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        features: [
            "Custom Web Application Development",
            "Mobile App Development (iOS & Android)",
            "Progressive Web Apps (PWA)",
            "E-commerce & CMS Solutions",
            "API Development & Integration",
            "UI/UX Design & Prototyping"
        ],
        benefits: [
            "Scalable and maintainable codebases",
            "Cross-platform mobile solutions",
            "Modern tech stack (React, Node.js, Flutter)",
            "Agile development methodology",
            "Post-launch support and maintenance",
            "Performance optimization included"
        ]
    },
    {
        id: "gcc",
        title: "GCC Setup & Scale",
        shortDescription: "End-to-end support for establishing Global Capability Centers.",
        fullDescription: "Establishing a Global Capability Center (GCC) is a transformative move for any multinational organization. We provide end-to-end consulting and operational support to set up your GCC from scratch. From selecting the right location and navigating local regulations to hiring the founding leadership team and defining operational workflows, we ensure your center becomes a powerhouse of innovation and efficiency.",
        icon: Globe,
        color: "text-green-400",
        bgColor: "bg-green-500/10",
        features: [
            "GCC Strategy & Setup Consulting",
            "Talent Acquisition for GCC Roles",
            "Cross-Cultural Team Integration",
            "Operations & Compliance Frameworks"
        ],
        benefits: [
            "Cost arbitrage without quality compromise",
            "Rapid operationalization (0 to 100 in 6 months)",
            "Access to global talent hubs",
            "Seamless HQ integration"
        ]
    },
    {
        id: "payroll",
        title: "Payroll & Compensation",
        shortDescription: "Strategic payroll services with compensation benchmarking.",
        fullDescription: "Managing payroll is more than just processing payments; it's about ensuring accuracy, timeliness, and compliance while maintaining employee trust. Our Payroll & Compensation services take the complexity out of financial HR. We handle tax deductions, benefits administration, and statutory filings, while also providing strategic advice on compensation structures to keep you competitive in the talent market.",
        icon: MessageSquare,
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
        features: [
            "Tax & Statutory Compliance",
            "Compensation Benchmarking",
            "Benefits Structuring",
            "Complete Payroll Processing"
        ],
        benefits: [
            "100% compliant payroll operations",
            "Data-backed salary structuring",
            "Correct and timely employee payouts",
            "Reduced administrative overhead"
        ]
    },
    {
        id: "compliance",
        title: "HR Operations & Compliance",
        shortDescription: "Navigate complex HR regulations with expert policy development.",
        fullDescription: "Regulatory landscapes are constantly evolving, and non-compliance can be costly. Our HR Operations & Compliance team acts as your shield, ensuring that your organization adheres to all local, state, and national labor laws. We also help you build robust internal policies and Standard Operating Procedures (SOPs) that create a fair, transparent, and efficient workplace environment.",
        icon: Shield,
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        features: [
            "HR Policy Development",
            "SOP Design & Implementation",
            "Global Statutory Compliance",
            "HR Audits & Risk Assessment"
        ],
        benefits: [
            "Mitigated legal risks",
            "Standardized operational procedures",
            "Clear employee handbooks",
            "audit-proof HR documentation"
        ]
    },
    {
        id: "consulting",
        title: "Strategic HR Consulting",
        shortDescription: "Complete HR transformation from performance to technology.",
        fullDescription: "True HR excellence drives business performance. Our Strategic HR Consulting services are designed for organizations looking to modernize their people practices. Whether it's implementing a new HRIS, redesigning your performance management system, or fostering a culture of high engagement, our consultants bring decades of industry expertise to solve your most complex organizational challenges.",
        icon: Lightbulb,
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/10",
        features: [
            "Performance Management Systems",
            "HRIS & ATS Implementation",
            "Employee Engagement Strategies",
            "Organizational Design"
        ],
        benefits: [
            "High-performance culture alignment",
            "Modernized HR technology stack",
            "Improved employee satisfaction scores",
            "Strategic workforce planning"
        ]
    }
];
