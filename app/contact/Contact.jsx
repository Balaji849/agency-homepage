/**
 * Component: Contact
 * Purpose:   Full-featured contact section with a validated enquiry form and contact info panel.
 *            Form fields: First/Last name, Email, Phone (with country code), Message, and
 *            multi-select Services checkboxes. Includes real-time field validation with
 *            error messages and a success state with a confirmation UI after submission.
 * State:     formData, errors, isSubmitted (all managed locally with useState)
 * Used in:   app/page.jsx
 * Section ID: #contact (used by Navbar anchor links)
 */

"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES_OPTIONS = [
  "Website design",
  "Content creation",
  "UX design",
  "Strategy & consulting",
  "User research",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error for that field on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      const updatedServices = isSelected
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // simulate API submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] relative z-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 mb-6">
            Contact our team
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg">
            Got any questions about the product or scaling on our platform? We&apos;re here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form Side - Span 2 */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 dark:bg-green-900/10 dark:border-green-900/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Thank you for reaching out. Our friendly team will get back to you shortly.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    size="lg"
                    className="mt-8 px-6"
                  >
                    Send another message
                  </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.firstName ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                      } bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                    } bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone number</label>
                  <div className="flex">
                    <select className="px-4 py-3 border border-r-0 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-900 dark:text-white rounded-l-xl focus:outline-none">
                      <option>US</option>
                      <option>UK</option>
                      <option>IN</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (777) 001-7803"
                      className="w-full px-4 py-3 rounded-r-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Leave us a message..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                    } bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">Services</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES_OPTIONS.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="appearance-none w-5 h-5 border border-neutral-300 dark:border-neutral-600 rounded bg-transparent checked:bg-neutral-900 dark:checked:bg-white checked:border-transparent transition"
                          />
                          {formData.services.includes(service) && (
                            <svg className="absolute w-3 h-3 text-white dark:text-neutral-900 pointer-events-none" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="p-7 rounded-full"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info Side - Span 1 */}
          <div className="space-y-12 lg:pl-12">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center mb-2">
                <MessageSquare className="w-5 h-5 mr-2" /> Chat with us
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                Speak to our friendly team via live chat.
              </p>
              <div className="space-y-3">
                <a href="#" className="flex items-center text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline font-medium">
                  <MessageSquare className="w-4 h-4 mr-3 text-neutral-500" /> Start a live chat
                </a>
                <a href="#" className="flex items-center text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline font-medium">
                  <Mail className="w-4 h-4 mr-3 text-neutral-500" /> Shoot us an email
                </a>
                <a href="#" className="flex items-center text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline font-medium">
                  {/* Using generic icon for X/Twitter since feather icons doesn't have official X logo */}
                  <svg className="w-4 h-4 mr-3 text-neutral-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  Message us on X
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2" /> Call us
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <a href="#" className="flex items-center text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline font-medium">
                <Phone className="w-4 h-4 mr-3 text-neutral-500" /> +1 (777) 001-7803
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2" /> Visit us
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                Chat to us in person at our Melbourne HQ.
              </p>
              <a href="#" className="flex items-center text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline font-medium">
                <MapPin className="w-4 h-4 mr-3 text-neutral-500" /> 100 Smith Street, Collingwood VIC 3066
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
