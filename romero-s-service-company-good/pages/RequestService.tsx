import React, { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero.tsx';
import { CheckCircle2, Send, Phone, Mail, MapPin, Clock, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import { PHONE, EMAIL } from '../constants.tsx';

type IntakeFormState = {
  full_name: string;
  phone: string;
  email: string;
  address: string;
  unit_access: string;
  description: string;
  urgency: string;
  contact_preference: string;
  work_types: string[];
  work_type_other: string;
  property_type: string;
  timeline: string;
  access_situation: string;
  additional_issues: string;
  budget: string;
  availability: string;
  referral_source: string;
  referral_name: string;
  referral_other: string;
  additional_notes: string;
};

const workTypeOptions = [
  'Plumbing',
  'Electrical',
  'Roof Repair',
  'Garage Door',
  'Appliance Repair',
  'Flooring',
  'Painting',
  'Cleaning',
  'Maintenance',
  'Other'
];

const urgencyOptions = ['Emergency', 'Today', 'Within 24 hours', 'This week', 'Flexible'];
const contactPreferenceOptions = ['Call', 'Text', 'Email'];
const propertyTypeOptions = ['Homeowner', 'Landlord', 'Tenant', 'Property Manager', 'Business Owner', 'Other'];
const timelineOptions = ['ASAP', 'Today', 'This week', 'Next week', 'This month', 'Flexible'];
const accessSituationOptions = ['Owner occupied', 'Vacant', 'Tenant occupied', 'Self access available', 'Need appointment', 'Other'];
const budgetOptions = ['Under $500', '$500-$1,500', '$1,500-$5,000', '$5,000+', 'Not sure'];
const availabilityOptions = ['Morning', 'Afternoon', 'Evening', 'Weekdays', 'Weekends', 'Flexible'];
const referralSourceOptions = ['Referral', 'Google', 'Facebook', 'Instagram', 'Website', 'Truck/Sign', 'Other'];

const MAKE_WEBHOOK_URL =
  (import.meta.env.VITE_MAKE_WEBHOOK_URL as string | undefined) ??
  'https://hook.us2.make.com/hlat3lp6y0uo5odvx3skf8l7nyma90yq';

const RequestService: React.FC = () => {
  useEffect(() => {
    document.title = "Request Service | Romero’s Service Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Request a quote for property repairs in Acadiana and Baton Rouge. Fast response, clear communication, and a professional intake process.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://romerosservicecompany.com/request-service');
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<IntakeFormState>({
    full_name: '',
    phone: '',
    email: '',
    address: '',
    unit_access: '',
    description: '',
    urgency: 'Flexible',
    contact_preference: 'Call',
    work_types: [],
    work_type_other: '',
    property_type: 'Homeowner',
    timeline: 'Flexible',
    access_situation: 'Owner occupied',
    additional_issues: '',
    budget: 'Not sure',
    availability: 'Flexible',
    referral_source: 'Website',
    referral_name: '',
    referral_other: '',
    additional_notes: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setErrorMessage('');
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleWorkType = (workType: string) => {
    setErrorMessage('');
    setFormData(prev => {
      const hasWorkType = prev.work_types.includes(workType);
      return {
        ...prev,
        work_types: hasWorkType
          ? prev.work_types.filter(item => item !== workType)
          : [...prev.work_types, workType]
      };
    });
  };

  const payload = useMemo(() => {
    const now = new Date();
    const workTypes = formData.work_types.join(', ');
    const summary = `${formData.full_name || 'New Lead'} — ${formData.address || 'No address provided'}`;
    const body = [
      `Name: ${formData.full_name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Address: ${formData.address}`,
      `Service Type: ${workTypes || 'Not specified'}`,
      `Urgency: ${formData.urgency}`,
      `Timeline: ${formData.timeline}`,
      `Budget: ${formData.budget}`,
      `Message: ${formData.description}`
    ].join('\n');

    const orderedHumanFields = [
      { title: 'Full Name', name: 'full_name', value: formData.full_name },
      { title: 'Phone', name: 'phone', value: formData.phone },
      { title: 'Email', name: 'email', value: formData.email },
      { title: 'Address', name: 'address', value: formData.address },
      { title: 'Unit Access', name: 'unit_access', value: formData.unit_access },
      { title: 'Description', name: 'description', value: formData.description },
      { title: 'Urgency', name: 'urgency', value: formData.urgency },
      { title: 'Contact Preference', name: 'contact_preference', value: formData.contact_preference },
      { title: 'Work Types', name: 'work_types', value: workTypes },
      { title: 'Work Type Other', name: 'work_type_other', value: formData.work_type_other },
      { title: 'Property Type', name: 'property_type', value: formData.property_type },
      { title: 'Timeline', name: 'timeline', value: formData.timeline },
      { title: 'Access Situation', name: 'access_situation', value: formData.access_situation },
      { title: 'Additional Issues', name: 'additional_issues', value: formData.additional_issues },
      { title: 'Budget', name: 'budget', value: formData.budget },
      { title: 'Availability', name: 'availability', value: formData.availability },
      { title: 'Referral Source', name: 'referral_source', value: formData.referral_source },
      { title: 'Referral Name', name: 'referral_name', value: formData.referral_name },
      { title: 'Referral Other', name: 'referral_other', value: formData.referral_other },
      { title: 'Additional Notes', name: 'additional_notes', value: formData.additional_notes }
    ];

    return {
      number: 14,
      title: 'Romero Intake',
      email: formData.email,
      name: formData.full_name,
      first_name: formData.full_name.split(' ')[0] || '',
      last_name: formData.full_name.split(' ').slice(1).join(' '),
      company: '',
      summary,
      body,
      data: {
        full_name: formData.full_name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        unit_access: formData.unit_access,
        description: formData.description,
        urgency: formData.urgency,
        contact_preference: formData.contact_preference,
        work_types: workTypes,
        work_type_other: formData.work_type_other,
        property_type: formData.property_type,
        timeline: formData.timeline,
        access_situation: formData.access_situation,
        additional_issues: formData.additional_issues,
        budget: formData.budget,
        availability: formData.availability,
        referral_source: formData.referral_source,
        referral_name: formData.referral_name,
        referral_other: formData.referral_other,
        additional_notes: formData.additional_notes,
        ip: '',
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        created_at: now.toISOString(),
        site_url: typeof window !== 'undefined' ? window.location.href : '',
        site_name: 'Romero\'s Service Company',
        form_id: 'request-service',
        form_name: 'RSC Intake Form'
      },
      created_at: now.toISOString(),
      human_fields: {
        Full_Name: formData.full_name,
        Phone: formData.phone,
        Email: formData.email,
        Address: formData.address,
        Unit_Access: formData.unit_access,
        Description: formData.description,
        Urgency: formData.urgency,
        Contact_Preference: formData.contact_preference,
        Work_Types: workTypes,
        Work_Type_Other: formData.work_type_other,
        Property_Type: formData.property_type,
        Timeline: formData.timeline,
        Access_Situation: formData.access_situation,
        Additional_Issues: formData.additional_issues,
        Budget: formData.budget,
        Availability: formData.availability,
        Referral_Source: formData.referral_source,
        Referral_Name: formData.referral_name,
        Referral_Other: formData.referral_other,
        Additional_Notes: formData.additional_notes
      },
      ordered_human_fields: orderedHumanFields,
      id: 'request-service',
      form_id: 'request-service',
      site_url: typeof window !== 'undefined' ? window.location.origin : '',
      site_name: 'Romero\'s Service Company',
      form_name: 'RSC Intake Form'
    };
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!MAKE_WEBHOOK_URL) {
      setErrorMessage('Missing Make webhook URL. Add VITE_MAKE_WEBHOOK_URL to your environment.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Make webhook submit error:', error);
      setErrorMessage('Something went wrong while sending the request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-stone-50 min-h-screen">
        <div className="max-w-3xl mx-auto py-32 px-6 text-center">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-stone-200">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-emerald-950 mb-6">Submission Confirmed.</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Your request has been sent to our intake workflow. We’ll review the details and follow up within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-950 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50">
      <Hero
        title="Request Service in Lafayette & Acadiana"
        subtitle="PRIMARY SERVICE INTAKE"
        description="Every project at Romero’s begins here. Tell us what’s going on, and we’ll route it to the right team with clear next steps and a fast response."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070"
      >
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-stone-200/40 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <p className="text-emerald-950 font-bold text-[10px] uppercase tracking-wider leading-none">
            No money upfront. Licensed professionals. Clear response within 24 hours.
          </p>
        </div>
      </Hero>

      <section className="py-24 px-6 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-stone-200">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-emerald-950 mb-2">Submit Your Residential or Commercial Service Request</h2>
                <p className="text-stone-500 font-medium">Please fill out as much as you can. The more detail, the better the dispatch.</p>
              </div>

              {errorMessage && (
                <div className="mb-8 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-950">Contact Information</h3>
                      <p className="text-sm text-stone-500">How should we reach you?</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Full Name" htmlFor="full_name">
                      <input
                        required
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="input-style"
                      />
                    </Field>
                    <Field label="Phone Number" htmlFor="phone">
                      <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(337) 000-0000"
                        className="input-style"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Email Address" htmlFor="email">
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="input-style"
                      />
                    </Field>
                    <Field label="Contact Preference" htmlFor="contact_preference">
                      <SelectField
                        id="contact_preference"
                        name="contact_preference"
                        value={formData.contact_preference}
                        onChange={handleChange}
                        options={contactPreferenceOptions}
                      />
                    </Field>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-950">Property Details</h3>
                      <p className="text-sm text-stone-500">Tell us about the location and access.</p>
                    </div>
                  </div>

                  <Field label="Address" htmlFor="address">
                    <input
                      required
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Lafayette, LA"
                      className="input-style"
                    />
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Property Type" htmlFor="property_type">
                      <SelectField
                        id="property_type"
                        name="property_type"
                        value={formData.property_type}
                        onChange={handleChange}
                        options={propertyTypeOptions}
                      />
                    </Field>
                    <Field label="Access Situation" htmlFor="access_situation">
                      <SelectField
                        id="access_situation"
                        name="access_situation"
                        value={formData.access_situation}
                        onChange={handleChange}
                        options={accessSituationOptions}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Unit / Access Notes" htmlFor="unit_access">
                      <input
                        type="text"
                        id="unit_access"
                        name="unit_access"
                        value={formData.unit_access}
                        onChange={handleChange}
                        placeholder="Gate code, unit number, etc."
                        className="input-style"
                      />
                    </Field>
                    <Field label="Availability" htmlFor="availability">
                      <SelectField
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        options={availabilityOptions}
                      />
                    </Field>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-950">Project Details</h3>
                      <p className="text-sm text-stone-500">What needs to happen?</p>
                    </div>
                  </div>

                  <Field label="Describe the issue / project" htmlFor="description">
                    <textarea
                      required
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="What’s going on, what you want fixed, and anything important we should know..."
                      className="input-style resize-none"
                    />
                  </Field>

                  <Field label="Work Types" htmlFor="work_types">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {workTypeOptions.map(option => (
                          <label
                            key={option}
                            className="flex items-center gap-3 rounded-xl bg-white border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700 shadow-sm cursor-pointer hover:border-emerald-300"
                          >
                            <input
                              type="checkbox"
                              checked={formData.work_types.includes(option)}
                              onChange={() => toggleWorkType(option)}
                              className="h-4 w-4 rounded border-stone-300 text-emerald-700 focus:ring-emerald-500"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Work Type Other" htmlFor="work_type_other">
                      <input
                        type="text"
                        id="work_type_other"
                        name="work_type_other"
                        value={formData.work_type_other}
                        onChange={handleChange}
                        placeholder="Anything else?"
                        className="input-style"
                      />
                    </Field>
                    <Field label="Urgency" htmlFor="urgency">
                      <SelectField
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        options={urgencyOptions}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Timeline" htmlFor="timeline">
                      <SelectField
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        options={timelineOptions}
                      />
                    </Field>
                    <Field label="Budget" htmlFor="budget">
                      <SelectField
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                      />
                    </Field>
                  </div>

                  <Field label="Additional Issues" htmlFor="additional_issues">
                    <textarea
                      id="additional_issues"
                      name="additional_issues"
                      rows={3}
                      value={formData.additional_issues}
                      onChange={handleChange}
                      placeholder="Any other problems we should know about?"
                      className="input-style resize-none"
                    />
                  </Field>

                  <Field label="Additional Notes" htmlFor="additional_notes">
                    <textarea
                      id="additional_notes"
                      name="additional_notes"
                      rows={3}
                      value={formData.additional_notes}
                      onChange={handleChange}
                      placeholder="Extra details, special instructions, or helpful context..."
                      className="input-style resize-none"
                    />
                  </Field>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-950">Referral / Follow-up</h3>
                      <p className="text-sm text-stone-500">Optional, but useful for tracking leads and referrals.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Referral Source" htmlFor="referral_source">
                      <SelectField
                        id="referral_source"
                        name="referral_source"
                        value={formData.referral_source}
                        onChange={handleChange}
                        options={referralSourceOptions}
                      />
                    </Field>
                    <Field label="Referral Name" htmlFor="referral_name">
                      <input
                        type="text"
                        id="referral_name"
                        name="referral_name"
                        value={formData.referral_name}
                        onChange={handleChange}
                        placeholder="Who referred them?"
                        className="input-style"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Referral Other" htmlFor="referral_other">
                      <input
                        type="text"
                        id="referral_other"
                        name="referral_other"
                        value={formData.referral_other}
                        onChange={handleChange}
                        placeholder="If other, explain here"
                        className="input-style"
                      />
                    </Field>
                    <Field label="Preferred Response Time" htmlFor="availability">
                      <SelectField
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        options={availabilityOptions}
                      />
                    </Field>
                  </div>
                </section>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center space-x-3"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Request'}</span>
                  </button>
                  <p className="text-center text-stone-400 text-xs mt-6 font-medium">
                    By submitting, you agree to our terms of service and priority dispatch protocols.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-emerald-950 text-white p-10 rounded-[2.5rem] shadow-xl">
                <h2 className="text-xl font-bold mb-6">Local Service Area & Direct Contact Information</h2>
                <div className="space-y-6">
                  <ContactInfoRow icon={<Phone className="w-6 h-6" />} label="Office Line" value={PHONE} />
                  <ContactInfoRow icon={<Mail className="w-6 h-6" />} label="Email Dispatch" value={EMAIL} />
                  <ContactInfoRow icon={<MapPin className="w-6 h-6" />} label="Serving Acadiana & Baton Rouge" value="Lafayette, Baton Rouge & Surrounding Region" />
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200">
                <h2 className="text-xl font-bold text-emerald-950 mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  Fast Response & Clear Next Steps
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: 'Priority Review', text: 'Requests are reviewed in the order received by our dispatch team.' },
                    { title: 'Specialist Assignment', text: 'We match your specific trade needs with the right field technician.' },
                    { title: 'Clear Scheduling', text: 'We call or email you within 24 hours to finalize your appointment.' },
                    { title: 'Quality Execution', text: 'Our multi-trade professionals handle the work with precision.' }
                  ].map((step, i) => (
                    <li key={i} className="flex items-start space-x-3 text-stone-600">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-emerald-950 font-bold text-sm leading-none mb-1">{step.title}</p>
                        <p className="text-xs font-medium leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-100 p-8 rounded-[2rem] border border-stone-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-5 h-5 text-emerald-700" />
                  <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-widest">Emergency?</h4>
                </div>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  For immediate property emergencies that cannot wait 24 hours, submit the form and call our office line directly at{' '}
                  <span className="text-emerald-900 font-bold">{PHONE}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

const Field: React.FC<FieldProps> = ({ label, htmlFor, children }) => (
  <div className="space-y-2">
    <label htmlFor={htmlFor} className="text-sm font-bold text-emerald-950 uppercase tracking-widest px-1">
      {label}
    </label>
    {children}
  </div>
);

type SelectFieldProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options: string[];
};

const SelectField: React.FC<SelectFieldProps> = ({ id, name, value, onChange, options }) => (
  <div className="relative">
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="input-style appearance-none pr-12 cursor-pointer"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
  </div>
);

type ContactInfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const ContactInfoRow: React.FC<ContactInfoRowProps> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 bg-emerald-800 rounded-xl">{icon}</div>
    <div>
      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </div>
);

export default RequestService;

// Shared field styling for inputs/selects/textarea
// Kept here so the form is self-contained and easy to maintain.
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  .input-style {
    width: 100%;
    border: 1px solid rgb(231 229 228);
    background: rgb(250 250 249);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    outline: none;
    transition: all 150ms ease;
    color: rgb(28 25 23);
  }

  .input-style:focus {
    border-color: rgb(16 185 129);
    box-shadow: 0 0 0 1px rgb(16 185 129);
    background: white;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('rsc-intake-form-style')) {
  styleTag.id = 'rsc-intake-form-style';
  document.head.appendChild(styleTag);
}
