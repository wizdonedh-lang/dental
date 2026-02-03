import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, CLINIC_RATING, CLINIC_REVIEW_COUNT } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google branding */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-3 sm:mb-4">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-4 h-4"
            />
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span className="text-sm font-semibold text-slate-700">{CLINIC_RATING}/5</span>
            <span className="text-xs sm:text-sm text-slate-500">({CLINIC_REVIEW_COUNT} reviews)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Our Patients Say</h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">Real reviews from verified Google patients</p>
        </div>

        {/* Reviews Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {REVIEWS.slice(0, 6).map((review) => (
            <div key={review.id} className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              {/* Google Review Label */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
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
              <p className="text-slate-700 mb-4 sm:mb-6 flex-grow italic text-sm sm:text-base">"{review.text}"</p>

              {/* Author */}
              <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm sm:text-base">— {review.author}</p>
                <p className="text-xs text-brand-600 uppercase tracking-wide font-medium mt-1">{review.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://www.google.com/maps/place/Wizdone+Dental+Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm text-sm sm:text-base min-h-[48px] active:scale-[0.98]"
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