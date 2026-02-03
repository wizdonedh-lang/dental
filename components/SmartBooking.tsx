import React, { useState, useEffect } from 'react';
import { format, addDays, isSameDay, startOfToday } from 'date-fns';
import { MessageCircle, Calendar as CalendarIcon, Clock, Shield, AlertCircle, Info } from 'lucide-react';
import { SERVICES, MOCK_BOOKED_SLOTS, CLINIC_PHONE, CLINIC_NAME } from '../constants';
import { TimeSlot } from '../types';

// LocalStorage key for booked slots
const BOOKED_SLOTS_KEY = 'wizdone_booked_slots';

// Helper to get booked slots from localStorage
const getBookedSlots = (): { [dateKey: string]: string[] } => {
  try {
    const stored = localStorage.getItem(BOOKED_SLOTS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Helper to save booked slot to localStorage
const saveBookedSlot = (date: Date, time: string) => {
  const dateKey = format(date, 'yyyy-MM-dd');
  const bookedSlots = getBookedSlots();

  if (!bookedSlots[dateKey]) {
    bookedSlots[dateKey] = [];
  }

  if (!bookedSlots[dateKey].includes(time)) {
    bookedSlots[dateKey].push(time);
    localStorage.setItem(BOOKED_SLOTS_KEY, JSON.stringify(bookedSlots));
  }
};

// Helper to check if a slot is booked
const isSlotBooked = (date: Date, time: string): boolean => {
  const dateKey = format(date, 'yyyy-MM-dd');
  const bookedSlots = getBookedSlots();

  // Check localStorage bookings
  if (bookedSlots[dateKey]?.includes(time)) {
    return true;
  }

  // Also check mock slots for today
  if (isSameDay(date, startOfToday()) && MOCK_BOOKED_SLOTS.includes(time)) {
    return true;
  }

  return false;
};

export const SmartBooking: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [patientName, setPatientName] = useState<string>('');
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ treatment?: string; slot?: string; name?: string }>({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Generate next 14 days for the calendar view
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i));

  // Generate slots logic
  useEffect(() => {
    const times = [
      "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
      "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
      "07:00 PM", "07:30 PM"
    ];

    // Check availability from localStorage + mock
    const generatedSlots: TimeSlot[] = times.map(time => ({
      time,
      isBooked: isSlotBooked(selectedDate, time)
    }));

    setSlots(generatedSlots);
    setSelectedSlot(null);
    setSuggestion(null);
    setBookingSuccess(false);
    setErrors(prev => ({ ...prev, slot: undefined }));
  }, [selectedDate]);

  const handleSlotClick = (slot: TimeSlot) => {
    if (slot.isBooked) {
      const index = slots.findIndex(s => s.time === slot.time);
      const nextAvailable = slots.slice(index + 1).find(s => !s.isBooked);

      if (nextAvailable) {
        setSuggestion(`${slot.time} is already reserved. Try ${nextAvailable.time} for a shorter wait time.`);
      } else {
        setSuggestion("Fully booked for the rest of the day. Please check tomorrow.");
      }
      return;
    }

    setSuggestion(null);
    setSelectedSlot(slot.time);
    if (errors.slot) setErrors(prev => ({ ...prev, slot: undefined }));
  };

  const handleWhatsAppBooking = () => {
    const newErrors: { treatment?: string; slot?: string; name?: string } = {};
    let hasError = false;

    // Validate Treatment
    if (!selectedTreatment) {
      newErrors.treatment = "Please select a treatment to proceed.";
      hasError = true;
    }

    // Validate Slot
    if (!selectedSlot) {
      newErrors.slot = "Please select a preferred time slot.";
      hasError = true;
    }

    // Validate Name
    if (!patientName.trim()) {
      newErrors.name = "Please enter your full name.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      // Priority scrolling: Scroll to the top-most error
      if (newErrors.treatment) {
        document.getElementById('step-treatment')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (newErrors.slot) {
        document.getElementById('step-slot')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (newErrors.name) {
        document.getElementById('step-name')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Save the booked slot to localStorage
    saveBookedSlot(selectedDate, selectedSlot!);

    // Mark the slot as booked in current state
    setSlots(prevSlots =>
      prevSlots.map(s =>
        s.time === selectedSlot ? { ...s, isBooked: true } : s
      )
    );

    // Show success state
    setBookingSuccess(true);

    const formattedDate = format(selectedDate, 'EEEE, MMM do, yyyy');
    const message = `Hello Doctor,\nI found Wizdone Dental Hospital on Google and would like to book an appointment.\n\n👤 *Name:* ${patientName}\n🦷 *Treatment:* ${selectedTreatment}\n📅 *Date:* ${formattedDate}\n⏰ *Time:* ${selectedSlot}\n\nPlease confirm my slot.`;

    const url = `https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-12 sm:py-16 lg:py-20 bg-slate-50 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Header - Responsive */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
            Book Your Appointment
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-medium">
            Skip the call. Secure your slot via WhatsApp.
          </p>
        </div>

        {/* Grid - Reorder on mobile: Form first, then Summary */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

          {/* LEFT COLUMN: FORM STEPS - Order 1 on mobile */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-12 order-1 w-full max-w-full overflow-hidden">

            {/* Step 1: Treatment */}
            <div id="step-treatment" className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border transition-all duration-300 ${errors.treatment ? 'border-red-200 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]' : 'border-slate-100 shadow-sm'}`}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-base sm:text-lg shadow-sm border border-brand-100">1</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">What brings you in today?</h3>
              </div>

              <div className="md:ml-14">
                <p className="text-slate-500 mb-4 font-medium">Select the procedure you need:</p>

                {/* Treatment Selection with Icon */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-grow">
                    <select
                      className={`w-full p-3 sm:p-4 bg-slate-50 border rounded-xl appearance-none font-semibold text-slate-700 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none cursor-pointer transition-colors min-h-[52px] text-base ${errors.treatment ? 'border-red-300' : 'border-slate-200 hover:border-brand-300'}`}
                      value={selectedTreatment}
                      onChange={(e) => {
                        setSelectedTreatment(e.target.value);
                        if (errors.treatment) setErrors(prev => ({ ...prev, treatment: undefined }));
                      }}
                    >
                      <option value="" disabled>Select a procedure...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  {/* Calendar Indicator Icon */}
                  <div className="relative group p-2">
                    <CalendarIcon className={`w-6 h-6 transition-colors duration-300 ${selectedTreatment ? 'text-brand-500' : 'text-slate-300'}`} />
                    {!selectedTreatment && (
                      <div className="absolute bottom-full right-0 mb-2 w-max px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 translate-y-2 group-hover:translate-y-0 duration-200">
                        Select treatment first
                        <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    )}
                  </div>
                </div>

                {errors.treatment && <p className="text-red-500 text-sm mt-2 font-medium animate-pulse">{errors.treatment}</p>}
              </div>
            </div>

            {/* Step 2: Date */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-base sm:text-lg shadow-sm border border-brand-100">2</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Pick a date</h3>
              </div>

              <div className="md:ml-14 flex flex-col gap-6 md:gap-8 md:grid md:grid-cols-2">
                {/* Date Picker */}
                <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                  <div className="flex justify-between items-center mb-4 px-2">
                    <span className="font-bold text-slate-900">{format(selectedDate, 'MMMM yyyy')}</span>
                  </div>

                  {/* Horizontal Scrollable Dates */}
                  <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                    {availableDates.map(date => {
                      const isSelected = isSameDay(date, selectedDate);
                      return (
                        <button
                          key={date.toString()}
                          onClick={() => setSelectedDate(date)}
                          className={`flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-200 border ${isSelected
                            ? 'bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/30 scale-105'
                            : 'bg-white text-slate-600 border-slate-100 hover:border-brand-200 hover:bg-brand-50'
                            }`}
                        >
                          <span className={`text-[10px] font-medium uppercase mb-1 ${isSelected ? 'opacity-100' : 'opacity-60'}`}>{format(date, 'EEE')}</span>
                          <span className="text-lg font-bold">{format(date, 'd')}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Tip - Hidden on mobile */}
                <div className="hidden md:flex items-start gap-3 text-sm text-slate-600 italic bg-slate-50 p-5 rounded-2xl border border-slate-100 h-fit">
                  <Info className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">"Wednesdays are popular for routine checkups. We recommend booking at least 2 days in advance."</p>
                </div>
              </div>
            </div>

            {/* Step 3: Time Slot */}
            <div id="step-slot" className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border transition-all duration-300 ${errors.slot ? 'border-red-200 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]' : 'border-slate-100 shadow-sm'}`}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-base sm:text-lg shadow-sm border border-brand-100">3</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Pick a time</h3>
              </div>

              <div className="md:ml-14">

                {suggestion && (
                  <div className="mb-6 bg-amber-50 border border-amber-100 text-amber-800 p-4 rounded-xl flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-sm">{suggestion}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => handleSlotClick(slot)}
                      className={`
                        relative py-3 sm:py-4 px-2 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-1 group min-h-[56px]
                        ${slot.isBooked
                          ? 'bg-slate-50 border-transparent text-slate-300 cursor-pointer'
                          : selectedSlot === slot.time
                            ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-md scale-[1.02]'
                            : 'bg-white border-slate-100 text-slate-700 hover:border-brand-200 hover:shadow-sm'
                        }
                      `}
                    >
                      <span className={`font-bold text-sm ${slot.isBooked ? 'line-through decoration-slate-300' : ''}`}>{slot.time}</span>
                      {slot.isBooked && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">Reserved</span>
                      )}
                    </button>
                  ))}
                </div>
                {errors.slot && <p className="text-red-500 text-sm mt-3 font-medium animate-pulse">{errors.slot}</p>}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SUMMARY SIDEBAR - Order 2 on mobile (shows after form) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 order-2 w-full max-w-full overflow-hidden">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              {/* Header */}
              <div className="bg-[#00C2CB] p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1">Booking Summary</h3>
                <p className="text-brand-50 text-xs sm:text-sm opacity-90 font-medium">Review your selection before finalizing.</p>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">

                {/* Details List */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Treatment</p>
                      <p className="font-bold text-slate-800 text-sm">{selectedTreatment || "Not selected"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <CalendarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Date</p>
                      <p className="font-bold text-slate-800 text-sm">{format(selectedDate, 'EEEE, MMM do, yyyy')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Time Slot</p>
                      <p className="font-bold text-slate-800 text-sm">{selectedSlot || "Not selected"}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full my-2"></div>

                {/* Patient Name Input */}
                <div id="step-name">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Patient Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full p-3.5 bg-slate-50 border rounded-xl font-medium text-slate-800 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 ${errors.name ? 'border-red-300 focus:border-red-500 bg-red-50' : 'border-slate-200 focus:bg-white'
                      }`}
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 hover:shadow-xl min-h-[52px]"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Confirm on WhatsApp</span>
                </button>

                {/* Footer Notes */}
                <div className="text-center space-y-3 pt-2">
                  <p className="text-[10px] text-slate-400 leading-tight">
                    Opens WhatsApp to finalize. By clicking, you agree to our terms.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-slate-400">
                    <Shield className="w-3 h-3 text-brand-500" />
                    <span className="text-[10px] font-medium text-slate-500">Secured with End-to-End Encryption</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};