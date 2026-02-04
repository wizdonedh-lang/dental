import React from 'react';
import { Star, CheckCircle2, ArrowLeft, ShieldCheck, Heart, Users, Award, Clock, MapPin, Phone } from 'lucide-react';
import { CLINIC_NAME, CLINIC_TAGLINE, MAIN_DOCTOR, CLINIC_RATING, CLINIC_REVIEW_COUNT, CLINIC_LOCATION, CLINIC_PHONE, CLINIC_HOURS } from '../constants';

export const AboutPage: React.FC = () => {
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

            {/* Hero Section with Signboard */}
            <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <div className="space-y-6">
                            <div>
                                <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">About Us</span>
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">{CLINIC_NAME}</h1>
                                <p className="text-xl text-brand-600 font-medium mt-2">Precision in Every Dental Procedure</p>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                <strong className="text-slate-800">Wizdone Dental Hospital</strong> is a specialized dental care center
                                located in Padur, Tamil Nadu. We focus on <strong className="text-slate-800">wisdom tooth extraction</strong> and
                                <strong className="text-slate-800"> maxillofacial surgery</strong>, providing precise, safe, and painless
                                dental treatments for patients of all ages — from children to elderly.
                            </p>

                            <p className="text-slate-600 leading-relaxed">
                                Our mission is simple: <strong className="text-slate-800">make every dental visit comfortable</strong>.
                                We understand that visiting a dentist can be stressful. That's why we take extra care to explain
                                every procedure clearly, use modern techniques for pain-free treatments, and treat every patient
                                with respect and compassion.
                            </p>

                            {/* Trust Stats */}
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="font-bold text-slate-900">{CLINIC_RATING}/5</span>
                                    <span className="text-slate-500 text-sm">({CLINIC_REVIEW_COUNT} Google reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Hospital Signboard Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-100 rounded-2xl rotate-2 opacity-50"></div>
                            <img
                                src="/images/hospital-signboard.jpg"
                                alt="Wizdone Dental Hospital signboard in Padur, Tamil Nadu"
                                className="relative rounded-2xl shadow-xl w-full object-cover"
                            />
                            <p className="text-center text-sm text-slate-500 mt-4">
                                Our clinic at No. 82D, 7th East Cross, Seaview Enclave, Padur
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy of Care */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Our Approach</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Philosophy of Care</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            We believe dental care should never be stressful. Every decision we make is guided by patient comfort and safety.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-slate-50 rounded-2xl">
                            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-7 h-7 text-brand-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Patient Comfort First</h3>
                            <p className="text-sm text-slate-600">
                                Your comfort is our priority. We ensure a calm, relaxed environment for every procedure.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-2xl">
                            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <ShieldCheck className="w-7 h-7 text-brand-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Pain-Free Procedures</h3>
                            <p className="text-sm text-slate-600">
                                Modern anesthesia techniques and gentle handling minimize discomfort during treatments.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-2xl">
                            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-7 h-7 text-brand-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Clear Communication</h3>
                            <p className="text-sm text-slate-600">
                                Every procedure is explained in simple terms. No surprises, no hidden costs.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-2xl">
                            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-7 h-7 text-brand-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Ethical Decisions</h3>
                            <p className="text-sm text-slate-600">
                                We recommend only what's necessary. No rushed consultations, no unnecessary treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Profile Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Founder & Lead Surgeon</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Meet Dr. K. G. Sriraam</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Doctor Image */}
                                <div className="shrink-0">
                                    <img
                                        src={MAIN_DOCTOR.image}
                                        alt={MAIN_DOCTOR.name}
                                        className="w-48 h-48 rounded-2xl object-cover shadow-md"
                                    />
                                </div>

                                {/* Doctor Info */}
                                <div className="text-center md:text-left flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">{MAIN_DOCTOR.name}</h3>
                                    <p className="text-brand-600 font-medium text-lg">{MAIN_DOCTOR.qualification}</p>
                                    <p className="text-slate-500 mb-4">Reg. No: 0528</p>

                                    <div className="space-y-2 text-sm text-slate-600 mb-6">
                                        <div className="flex items-center gap-2 justify-center md:justify-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>Oral & Maxillofacial Surgeon</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center md:justify-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>Dental Implantologist</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center md:justify-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>Maxillofacial surgeon, Wisdom tooth specialist and Implantologist</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center md:justify-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>{MAIN_DOCTOR.experienceYears}+ Years of Clinical Experience</span>
                                        </div>
                                    </div>

                                    {/* Trust Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-700">{CLINIC_RATING}/5 Google Rating</span>
                                    </div>
                                </div>
                            </div>

                            {/* Doctor's Philosophy */}
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <p className="text-slate-600 leading-relaxed">
                                    Dr. K. G. Sriraam founded Wizdone Dental Hospital with a simple belief:
                                    <strong className="text-slate-800"> dental care should never be feared</strong>. With over {MAIN_DOCTOR.experienceYears} years
                                    of experience in oral surgery, he has built a reputation for calm, patient-first care.
                                    His approach focuses on clear communication, gentle handling, and ensuring every patient
                                    leaves with a positive experience.
                                </p>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Known for his expertise in <strong className="text-slate-800">painless wisdom tooth extractions</strong>,
                                    Dr. K. G. Sriraam has successfully treated over {MAIN_DOCTOR.patientsTreated} patients, earning the trust
                                    of families across Padur and surrounding areas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & Hygiene */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Our Standards</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Infrastructure & Hygiene</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            We maintain the highest standards of cleanliness and safety, following WHO guidelines for sterilization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Clinic Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/doctor-treating-patient.jpg"
                                alt="Dr. Sriraam treating a patient at Wizdone Dental Hospital"
                                className="w-full aspect-[4/3] object-cover object-center"
                            />
                        </div>

                        {/* Hygiene Features */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">100% Sterilized Instruments</h4>
                                    <p className="text-sm text-slate-600">Every instrument is autoclaved before use, following strict sterilization protocols.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Modern Dental Equipment</h4>
                                    <p className="text-sm text-slate-600">Advanced technology for precise diagnoses and comfortable treatments.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-brand-50 rounded-xl border border-brand-100">
                                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Heart className="w-5 h-5 text-brand-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Clean Treatment Rooms</h4>
                                    <p className="text-sm text-slate-600">Well-maintained, hygienic environment designed for patient comfort.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-slate-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">WHO Safety Standards</h4>
                                    <p className="text-sm text-slate-600">All safety practices align with World Health Organization guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Patients Trust Us */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">Patient Trust</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Why Families Choose Wizdone</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="font-bold text-slate-900">{CLINIC_RATING}/5</span>
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Perfect Google Rating</h4>
                            <p className="text-sm text-slate-600">
                                {CLINIC_REVIEW_COUNT} verified patient reviews, all sharing positive experiences about our care and professionalism.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                                <Heart className="w-5 h-5 text-brand-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Painless Procedures</h4>
                            <p className="text-sm text-slate-600">
                                Our gentle techniques and modern anesthesia ensure minimal discomfort during and after treatments.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-5 h-5 text-brand-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Friendly Doctor</h4>
                            <p className="text-sm text-slate-600">
                                Dr. K. G. Sriraam's calm demeanor and clear explanations put even the most anxious patients at ease.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Clean & Hygienic</h4>
                            <p className="text-sm text-slate-600">
                                Patients consistently praise our spotless clinic and visible commitment to hygiene standards.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                                <MapPin className="w-5 h-5 text-brand-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Convenient Location</h4>
                            <p className="text-sm text-slate-600">
                                Easy to find in Padur, with clear signage and accessible parking for all patients.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-5 h-5 text-brand-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Flexible Timing</h4>
                            <p className="text-sm text-slate-600">
                                Open Monday to Saturday, 10 AM to 8 PM. Sunday appointments available on request.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & CTA */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Painless Dental Care?</h2>
                        <p className="text-brand-100 mb-8 max-w-xl mx-auto">
                            Book your appointment today and see why hundreds of families trust Wizdone Dental Hospital.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a
                                href="/#booking"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg"
                            >
                                Book Appointment
                            </a>
                            <a
                                href={`tel:${CLINIC_PHONE}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-400 transition-colors border border-brand-400"
                            >
                                <Phone className="w-5 h-5" />
                                Call: 83003 75191
                            </a>
                        </div>

                        <div className="text-brand-200 text-sm">
                            <p className="font-medium">Visit Us:</p>
                            <p>No. 82D, 7th East Cross, Seaview Enclave, Modern Layout, Padur, Tamil Nadu 603103</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
