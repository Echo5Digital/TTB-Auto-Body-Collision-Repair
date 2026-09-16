'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Car, Calendar, Wrench, MessageSquare, Send, AlertCircle, CheckCircle, Upload, ChevronDown } from 'lucide-react';

interface EstimateFormProps {
  onSubmit?: (data: FormState) => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceRequired: string;
  description: string;
  contactMethod: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  serviceRequired?: string;
  description?: string;
  contactMethod?: string;
  agree?: string;
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  serviceRequired: '',
  description: '',
  contactMethod: '',
  agree: false,
};

const vehicleMakes = [
  'Chevrolet', 'Ford', 'Toyota', 'Honda', 'Nissan', 'BMW',
  'Mercedes-Benz', 'Audi', 'Lexus', 'RAM', 'GMC', 'Other',
];

const services = [
  'Collision Repair',
  'Auto Body Repair',
  'Painting & Refinishing',
  'Frame Straightening',
  'Dent & Scratch Repair',
  'Insurance Claims Assistance',
];

const contactMethods = ['Phone Call', 'Text Message', 'Email'];

const currentYear = new Date().getFullYear();
const vehicleYears = Array.from({ length: 30 }, (_, i) => String(currentYear - i));

const EstimateForm: React.FC<EstimateFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }

    const phoneRegex = /^[\d\s\-+().]{7,20}$/;
    if (!data.phone.trim() || !phoneRegex.test(data.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!data.vehicleMake) errs.vehicleMake = 'Please select your vehicle make.';
    if (!data.vehicleModel.trim()) errs.vehicleModel = 'Please enter your vehicle model.';
    if (!data.vehicleYear) errs.vehicleYear = 'Please select your vehicle year.';
    if (!data.serviceRequired) errs.serviceRequired = 'Please select a service.';

    if (!data.description.trim() || data.description.trim().length < 10) {
      errs.description = 'Please describe the damage (at least 10 characters).';
    }

    if (!data.contactMethod) errs.contactMethod = 'Please select a contact method.';
    if (!data.agree) errs.agree = 'You must agree before submitting.';

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const updated = { ...formData, [name]: type === 'checkbox' ? checked : value };
    setFormData(updated);

    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<string, boolean>
    );
    setTouched(allTouched);

    const errs = validate(formData);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      onSubmit?.(formData);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
    setFileName('');
    setSubmitted(false);
  };

  const inputBase =
    'w-full bg-[#0F1114] border text-[#D9DCE1] placeholder-[#4A5060] rounded-[0.375rem] px-4 py-3 pl-11 text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]';
  const selectBase =
    'w-full bg-[#0F1114] border text-[#D9DCE1] rounded-[0.375rem] px-4 py-3 pl-11 pr-9 text-sm appearance-none transition-colors duration-200 outline-none focus:ring-2 focus:ring-[#E50914] focus:border-[#E50914]';
  const inputIdle = 'border-[#2A2D35]';
  const inputError = 'border-[#E50914] bg-[#120508]';

  const getInputClass = (field: keyof FormErrors, isSelect = false) =>
    `${isSelect ? selectBase : inputBase} ${errors[field] ? inputError : inputIdle}`;

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header Banner */}
      <div
        className="relative overflow-hidden rounded-t-[0.375rem] px-6 py-6"
        style={{ background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.35) 100%)' }}
        />
        <div className="relative z-10">
          <h2
            className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Get a <span style={{ color: '#0B0C0F' }}>Free</span> Estimate
          </h2>
          <p className="mt-1 text-sm text-red-100 font-light">
            Describe your vehicle&apos;s damage or service need and we&apos;ll get back to you promptly.
          </p>
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
                Request Sent!
              </h3>
              <p className="text-sm text-[#7A8090] mt-1">
                We&apos;ll reach out to{' '}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Phone Number <span className="text-[#E50914]">*</span>
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

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
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

              {/* Vehicle Make */}
              <div>
                <label htmlFor="vehicleMake" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Vehicle Make <span className="text-[#E50914]">*</span>
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                  <select
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('vehicleMake', true)}
                  >
                    <option value="">Select Make</option>
                    {vehicleMakes.map((make) => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                </div>
                {errors.vehicleMake && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.vehicleMake}
                  </p>
                )}
              </div>

              {/* Vehicle Model */}
              <div>
                <label htmlFor="vehicleModel" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Vehicle Model <span className="text-[#E50914]">*</span>
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060]" />
                  <input
                    id="vehicleModel"
                    name="vehicleModel"
                    type="text"
                    placeholder="e.g. Tahoe, Silverado"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('vehicleModel')}
                  />
                </div>
                {errors.vehicleModel && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.vehicleModel}
                  </p>
                )}
              </div>

              {/* Vehicle Year */}
              <div>
                <label htmlFor="vehicleYear" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Vehicle Year <span className="text-[#E50914]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                  <select
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('vehicleYear', true)}
                  >
                    <option value="">Select Year</option>
                    {vehicleYears.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                </div>
                {errors.vehicleYear && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.vehicleYear}
                  </p>
                )}
              </div>

              {/* Service Required */}
              <div>
                <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Service Required <span className="text-[#E50914]">*</span>
                </label>
                <div className="relative">
                  <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('serviceRequired', true)}
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                </div>
                {errors.serviceRequired && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.serviceRequired}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                Description of Damage <span className="text-[#E50914]">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#4A5060]" />
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Tell us about the damage..."
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClass('description')} resize-none leading-relaxed`}
                />
              </div>
              {errors.description && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Preferred Contact Method <span className="text-[#E50914]">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('contactMethod', true)}
                  >
                    <option value="">Select Contact Method</option>
                    {contactMethods.map((method) => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A5060] pointer-events-none" />
                </div>
                {errors.contactMethod && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.contactMethod}
                  </p>
                )}
              </div>

              {/* Upload Photos */}
              <div>
                <label htmlFor="photos" className="block text-xs font-semibold uppercase tracking-widest text-[#7A8090] mb-1.5">
                  Upload Photos <span className="text-[#4A5060] font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <label
                  htmlFor="photos"
                  className="flex items-center gap-2 w-full bg-[#0F1114] border border-dashed border-[#2A2D35] text-[#7A8090] rounded-[0.375rem] px-4 py-3 text-sm cursor-pointer hover:border-[#E50914] transition-colors duration-200"
                >
                  <Upload className="w-4 h-4 text-[#4A5060] shrink-0" />
                  <span className="truncate">{fileName || 'Choose file or drag and drop'}</span>
                  <input
                    id="photos"
                    name="photos"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-0.5 w-4 h-4 accent-[#E50914] shrink-0 cursor-pointer"
                />
                <span className="text-xs text-[#7A8090] leading-relaxed">
                  I agree to the{' '}
                  <a href="/#" className="text-[#E50914] underline underline-offset-2">
                    terms and privacy policy
                  </a>
                  . I consent to be contacted by TTB Auto Body &amp; Collision Repair regarding my inquiry.
                </span>
              </label>
              {errors.agree && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#E50914]">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.agree}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] text-white font-black uppercase tracking-widest py-3.5 px-6 rounded-[0.375rem] transition-all duration-200 text-sm"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)',
                boxShadow: '0 4px 16px rgba(229,9,20,0.35), 0 2px 6px rgba(0,0,0,0.5)',
              }}
            >
              <Send className="w-4 h-4" />
              Send Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EstimateForm;
