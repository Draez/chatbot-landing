import React from "react";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Custom ChatGPT Chatbots</h3>
                        <p className="text-sm text-gray-400">Enhance your website with smart, quality content-driven chatbots</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#features" className="text-sm text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#contact" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-400">&copy; 2024 Custom ChatGPT Chatbots. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}