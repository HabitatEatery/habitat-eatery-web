import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-pop-cream py-12 md:py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Simple Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-black hover:text-pop-blue transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase text-sm tracking-wider">Back to Home</span>
                </button>

                {/* Content */}
                <div className="bg-white rounded-[2rem] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {/* Simple Title */}
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase leading-tight mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-base text-gray-500 font-medium mb-10">
                        Last updated: January 1, 2024
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Introduction
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            Welcome to Habitat The Eatery ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Information We Collect
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you:
                        </p>
                        <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-blue rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700"><strong>Contact Data:</strong> Name, phone number, email address, and delivery address</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-blue rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700"><strong>Order Data:</strong> Details about your orders, preferences, and transaction history</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-blue rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700"><strong>Technical Data:</strong> IP address, browser type, device information, and usage data</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            How We Use Your Information
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We use your personal data for the following purposes:
                        </p>
                        <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-yellow rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">To process and deliver your food orders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-yellow rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">To communicate with you about your orders via WhatsApp, phone, or email</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-yellow rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">To improve our services and menu offerings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-yellow rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">To send you updates about new products and special offers (with your consent)</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Data Security
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Data Retention
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Your Legal Rights
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-green rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Request access to your personal data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-green rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Request correction of your personal data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-green rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Request erasure of your personal data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-green rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Withdraw consent at any time</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Third-Party Services
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We may share your data with trusted third-party service providers who assist us in operating our business, such as:
                        </p>
                        <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-pink rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">WhatsApp for order communication</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-pink rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Payment processing services</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-pop-pink rounded-full mt-2.5 flex-shrink-0"></span>
                                <span className="text-base md:text-lg text-gray-700">Delivery and logistics partners</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Cookies
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Changes to This Policy
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="bg-pop-cream rounded-2xl border-2 border-black p-6 md:p-8">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase mb-4 text-pop-dark">
                            Contact Us
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                        </p>
                        <div className="space-y-2">
                            <p className="text-base md:text-lg text-gray-700">
                                <strong>Email:</strong> connect@habitat.com
                            </p>
                            <p className="text-base md:text-lg text-gray-700">
                                <strong>WhatsApp:</strong> +91 62354 88392
                            </p>
                            <p className="text-base md:text-lg text-gray-700">
                                <strong>Phone:</strong> 9947109629 / 8606109629
                            </p>
                            <p className="text-base md:text-lg text-gray-700">
                                <strong>Locations:</strong> Chiyyaram, Vadookara
                            </p>
                        </div>
                    </section>

                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={onBack}
                        className="bg-pop-yellow text-black font-display font-black text-lg px-8 py-4 rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                        ← BACK TO HOME
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
