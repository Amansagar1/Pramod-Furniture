"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 2000);
  };

  // Contact data
  const contactData = {
    info: {
      phone: "+91 98765 43210",
      email: "hello@pramodcraftsmen.com",
      address: "123 Woodcraft Lane, Furniture District, Mumbai, Maharashtra 400001",
      workshop: "Shop No. 45, Artisan Square, Andheri East, Mumbai 400069"
    },
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed"
    },
    services: [
      {
        icon: "🪑",
        title: "Custom Furniture",
        description: "Dining tables, chairs, cabinets, beds, and more"
      },
      {
        icon: "🔧",
        title: "Restoration",
        description: "Antique furniture repair and conservation"
      },
      {
        icon: "🏢",
        title: "Commercial Projects",
        description: "Office furniture, restaurant setups, hotels"
      },
      {
        icon: "💬",
        title: "Consultation",
        description: "Design advice and project planning"
      }
    ],
    faqs: [
      {
        question: "How long does a custom furniture project typically take?",
        answer: "Most projects take 3-6 weeks depending on complexity. Simple pieces like tables may take 2-3 weeks, while complete room sets can take 6-8 weeks."
      },
      {
        question: "Do you provide free consultations?",
        answer: "Yes! We offer complimentary initial consultations to discuss your project, understand your requirements, and provide preliminary advice."
      },
      {
        question: "What types of wood do you work with?",
        answer: "We work with a wide range of woods including teak, sheesham, oak, walnut, maple, and reclaimed woods. We also offer sustainable and eco-friendly options."
      },
      {
        question: "Do you handle delivery and installation?",
        answer: "Absolutely! We provide professional delivery and installation services for all our projects within Mumbai. For other cities, we coordinate with trusted logistics partners."
      }
    ]
  };

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 to-sky-700 text-white p-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Create Together</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
            Ready to bring your furniture vision to life? Get in touch for a consultation 
            and let&apos;s discuss your dream project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Free Consultation
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              On-site Measurements
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Transparent Pricing
            </span>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <AnimatedSection className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Start Your Project</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your inquiry! We&apos;ll contact you within 24 hours to discuss your project.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="dining-table">Dining Table</option>
                      <option value="kitchen-cabinets">Kitchen Cabinets</option>
                      <option value="bedroom-furniture">Bedroom Furniture</option>
                      <option value="office-furniture">Office Furniture</option>
                      <option value="restoration">Furniture Restoration</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                      <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                      <option value="over-5l">Over ₹5,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, specific requirements, dimensions, style preferences, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Project Inquiry"
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">{contactData.info.phone}</p>
                      <p className="text-sm text-gray-500">Mon-Sat, 9AM-7PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">{contactData.info.email}</p>
                      <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 text-xl">🏠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Workshop Address</h4>
                      <p className="text-gray-600">{contactData.info.workshop}</p>
                      <p className="text-sm text-gray-500">Visit by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: {contactData.hours.weekdays}</p>
                        <p>Saturday: {contactData.hours.saturday}</p>
                        <p>Sunday: {contactData.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Quick Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-lg font-semibold transition-colors hover:bg-sky-200">
                      <span>📞</span>
                      Call Now
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-lg font-semibold transition-colors hover:bg-sky-200">
                      <span>📱</span>
                      WhatsApp
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-lg font-semibold transition-colors hover:bg-sky-200">
                      <span>📍</span>
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {contactData.services.map((service, index) => (
                    <div key={index} className="text-center p-4 bg-sky-50 rounded-xl">
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.title}</h4>
                      <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our process, pricing, and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {contactData.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center text-white text-sm">
                    ?
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We&apos;re happy to help!
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Ask Your Question
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Map & Location Section */}
      <AnimatedSection className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Visit Our Workshop</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Come see our craftsmanship in action! Our workshop in Andheri East is where 
                the magic happens. Schedule a visit to discuss your project in person and see 
                samples of our work.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <span className="text-sky-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Workshop Address</h4>
                    <p className="text-gray-600">{contactData.info.workshop}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <span className="text-sky-600">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visiting Hours</h4>
                    <p className="text-gray-600">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <span className="text-sky-600">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Parking Available</h4>
                    <p className="text-gray-600">Free parking for clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Directions
                </button>
                <button className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Visit
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-sky-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-semibold">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Workshop location in Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to create the furniture of your dreams. Contact us today for a 
            free consultation and let&apos;s bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Call Now: {contactData.info.phone}
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Email Us
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;