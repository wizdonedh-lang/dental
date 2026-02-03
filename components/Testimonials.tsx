import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google branding */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-4 h-4"
            />
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span className="text-sm font-semibold text-slate-700">{CLINIC_RATING}/5</span>
            <span className="text-sm text-slate-500">({CLINIC_REVIEW_COUNT} reviews)</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">What Our Patients Say</h2>
          <p className="text-slate-600 mt-2">Real reviews from verified Google patients</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.slice(0, 6).map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              {/* Google Review Label */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <img src="https://www.google.com/favicon.ico" alt="" className="w-3 h-3" />
                  Google Review
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 mb-6 flex-grow italic">"{review.text}"</p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900">— {review.author}</p>
                <p className="text-xs text-brand-600 uppercase tracking-wide font-medium mt-1">{review.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Wizdone+Dental+Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
            View All {CLINIC_REVIEW_COUNT} Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};