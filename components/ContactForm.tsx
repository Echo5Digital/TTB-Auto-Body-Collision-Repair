'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  title = 'Book an Appointment',
  subtitle = 'Fill out the form below and our team will get back to you within 24 hours.',
  submitLabel = 'Send Message',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[\d\s\-+().]{7,20}$/;
    if (data.phone && !phoneRegex.test(data.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      errs.message = 'Please describe your request (at least 10 characters).';
    }

    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);

    const errs = validate(formData);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      onSubmit?.(formData);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const inputBase =
    'w-full bg-[#0F1114] border text-[#D9DCE1] placeholder-[#4A5060] rounded-[0.375rem] px-4 py-3 pl-11 text-sm font-body transition-colors duration-200 outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]';
  const inputIdle = 'border-[#2A2D35]';
  const inputError = 'border-[#E50914] bg-[#120508]';

  const getInputClass = (field: keyof FormErrors) =>
    `${inputBase} ${errors[field] ? inputError : inputIdle}`;

  return (
    <div
      className="w-full max-w-xl mx-auto"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header Banner */}
      <div
        className="relative overflow-hidden rounded-t-[0.375rem] px-6 py-5"
        style={{ background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)' }}
      >
        <img
          src="https://images.pexels.com/photos/4488639/pexels-photo-4488639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Automotive repair workshop with tools and engine parts"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="relative z-10">
          <h2
            className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-red-100 font-light">{subtitle}</p>
        </div>
      </div>

      {/* Form Card */}
      <div
        className="bg-[#0D0E11] border border-[#1E2028] border-t-0 rounded-b-[0.375rem] px-6 py-7"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
      >
        {submitted ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0F2A1A] border-2 border-green-500 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3
                className="text-xl font-black uppercase tracking-wide text-[#D9DCE1]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Message Sent!
              </h3>
              <p className="text-sm text-[#7A8090] mt-1">
                We'll reach out to{' '}
                <span className="text-[#E50914] font-semibold">{formData.email}</span> shortly.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 text-xs uppercase tracking-widest text-[#7A8090] hover:text-[#E50914] transition-colors duration-200 underline underline-offset-4"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5"
              >
                Full Name <span className="text-[#E50914]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060]" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('name')}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5"
              >
                Email Address <span className="text-[#E50914]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('email')}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5"
              >
                Phone Number{' '}
                <span className="text-[#4A5060] font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060]" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('phone')}
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5"
              >
                Message / Service Request <span className="text-[#E50914]">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#4A5060]" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe the issue or service you need..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClass('message')} resize-none pl-11 leading-relaxed`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full flex items-center justify-center gap-2
                hover:brightness-110 active:scale-[0.98]
                text-white font-black uppercase tracking-widest
                py-3.5 px-6 rounded-[0.375rem]
                transition-all duration-200
                text-sm
              "
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)',
                boxShadow: '0 4px 16px rgba(229,9,20,0.35), 0 2px 6px rgba(0,0,0,0.5)',
              }}
            >
              <Send className="w-4 h-4" />
              {submitLabel}
            </button>

            <p className="text-center text-xs text-[#4A5060] mt-2">
              Fields marked <span className="text-[#E50914]">*</span> are required.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;