import React from 'react';
import { Mail } from 'lucide-react';

const ContactWidget = () => {
    const phoneNumber = "919555624372";
    const email = "info@hyrloop.com";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Widget */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8 filter brightness-0 invert"
                />
                <span className="absolute right-full mr-3 px-3 py-1 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat with us
                </span>
            </a>

            {/* Email Widget */}
            <a
                href={`mailto:${email}`}
                className="group relative flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:shadow-blue-600/40 hover:scale-110 transition-all duration-300"
                aria-label="Send Email"
            >
                <Mail className="w-7 h-7 text-white" />
                <span className="absolute right-full mr-3 px-3 py-1 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Email us
                </span>
            </a>
        </div>
    );
};

export default ContactWidget;
