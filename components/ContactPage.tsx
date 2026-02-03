import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ArrowLeft, Star } from 'lucide-react';
import { CLINIC_NAME, CLINIC_TAGLINE, CLINIC_LOCATION, CLINIC_PHONE, CLINIC_HOURS, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

export const ContactPage: React.FC = () => {
    const whatsappLink = `https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent("Hello Doctor, I found Wizdone Dental Hospital on Google and would like to book an appointment.")}`;

    return (
        <div className="min-h-screen bg-white">
            {/* Back to Home */}
            <div className="bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-600 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </a>
                </div>
            </div>

            {/* Contact Header */}
            <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Contact Us</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Visit Our Clinic</h1>
                    <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                        We're here to help you with your dental care needs. Reach out to us anytime.
                    </p>

                    {/* Google Rating Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mt-6">
                        <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{CLINIC_RATING}/5</span>
                        <span className="text-sm text-slate-500">({CLINIC_REVIEW_COUNT} reviews)</span>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Address */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-brand-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Address</h3>
                            <p className="text-slate-600 font-medium">{CLINIC_NAME}</p>
                            <p className="text-slate-500 text-sm mt-1">{CLINIC_TAGLINE}</p>
                            <p className="text-slate-600 mt-3">{CLINIC_LOCATION}</p>
                        </div>

                        {/* Phone & WhatsApp */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-brand-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Numbers</h3>
                            <div className="space-y-3">
                                <a
                                    href={`tel:${CLINIC_PHONE}`}
                                    className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+91 8300 375 191</span>
                                </a>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-brand-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Monday - Saturday</span>
                                    <span className="font-medium text-slate-900">{CLINIC_HOURS.monday}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Sunday</span>
                                    <span className="font-medium text-red-500">{CLINIC_HOURS.sunday}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Find Us on the Map</h2>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d80.16!3d12.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPadur%2C%20Tamil%20Nadu%20603103!5e0!3m2!1sen!2sin!4v1646200000000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Wizdone Dental Hospital - Padur Location"
                        ></iframe>
                    </div>
                    <p className="text-center text-slate-500 text-sm mt-4">
                        📍 R65P+6PX, Modern Layout First Cross St, Padur, Tamil Nadu 603103
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to Book Your Appointment?</h2>
                    <p className="text-brand-100 mb-8">Skip the call. Book instantly via WhatsApp.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Book via WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};
