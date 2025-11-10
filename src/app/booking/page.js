"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const BookConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    message: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
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
        consultationType: "",
        preferredDate: "",
        preferredTime: "",
        budget: "",
        message: ""
      });
      setCurrentStep(1);
    }, 2000);
  };

  // Consultation data
  const consultationData = {
    types: [
      {
        id: "virtual",
        title: "Virtual Consultation",
        icon: "💻",
        duration: "45-60 minutes",
        price: "Free",
        description: "Video call discussion about your project, design ideas, and preliminary advice",
        features: [
          "Video call via Zoom/Google Meet",
          "Screen sharing for design ideas",
          "Digital material samples",
          "Follow-up summary email",
          "Preliminary budget estimate"
        ],
        bestFor: [
          "Initial project discussions",
          "Remote clients",
          "Quick design advice",
          "Preliminary planning"
        ]
      },
      {
        id: "in-person",
        title: "In-Person Consultation",
        icon: "🏠",
        duration: "60-90 minutes",
        price: "₹1,500*",
        description: "On-site visit to your space for detailed measurements and personalized advice",
        features: [
          "On-site space assessment",
          "Detailed measurements",
          "Material samples brought to you",
          "3D design concepts",
          "Detailed project proposal"
        ],
        bestFor: [
          "Complex projects",
          "Space planning",
          "Material selection",
          "Detailed budget planning"
        ]
      },
      {
        id: "workshop",
        title: "Workshop Visit",
        icon: "🔨",
        duration: "90-120 minutes",
        price: "₹2,000*",
        description: "Visit our workshop to see materials, ongoing projects, and discuss with craftsmen",
        features: [
          "Workshop tour",
          "Hands-on material selection",
          "Meet the craftsmen",
          "See ongoing projects",
          "Comprehensive project planning"
        ],
        bestFor: [
          "Material selection",
          "Seeing craftsmanship quality",
          "Complex custom projects",
          "Commercial projects"
        ]
      }
    ],
    benefits: [
      {
        icon: "💰",
        title: "Cost Estimation",
        description: "Get accurate budget projections before starting your project"
      },
      {
        icon: "📐",
        title: "Expert Design Advice",
        description: "Professional guidance on materials, styles, and space optimization"
      },
      {
        icon: "⏱️",
        title: "Timeline Planning",
        description: "Understand project duration and plan accordingly"
      },
      {
        icon: "🔧",
        title: "Technical Solutions",
        description: "Expert solutions for challenging spaces and unique requirements"
      }
    ],
    process: [
      {
        step: 1,
        title: "Book Consultation",
        description: "Choose your preferred consultation type and schedule a time"
      },
      {
        step: 2,
        title: "Pre-Consultation Prep",
        description: "We'll send you a brief questionnaire to understand your needs"
      },
      {
        step: 3,
        title: "Consultation Session",
        description: "In-depth discussion about your project, requirements, and vision"
      },
      {
        step: 4,
        title: "Project Proposal",
        description: "Receive detailed proposal with timeline, budget, and design concepts"
      }
    ]
  };

  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  // Get next 7 days for date selection
  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date.toISOString().split('T')[0]);
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 to-sky-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book a Consultation</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
            Start your furniture journey with expert guidance. Choose the consultation
            that best fits your needs and let's bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Free Virtual Consultations
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Expert Design Advice
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              No Obligation Quote
            </span>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the consultation option that best matches your project needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultationData.types.map((type) => (
              <div
                key={type.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${formData.consultationType === type.id
                    ? 'border-sky-500 ring-2 ring-sky-200'
                    : 'border-gray-200 hover:border-sky-300'
                  }`}
              >
                {/* Popular Badge */}
                {type.id === "virtual" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{type.title}</h3>
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <span className="text-sky-600 font-bold text-xl">{type.price}</span>
                      <span className="text-gray-500 text-sm">{type.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
                      <ul className="space-y-1">
                        {type.bestFor.map((item, index) => (
                          <li key={index} className="text-sm text-gray-500">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, consultationType: type.id }));
                      nextStep();
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${formData.consultationType === type.id
                        ? 'bg-sky-600 text-white hover:bg-sky-700'
                        : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                      }`}
                  >
                    {formData.consultationType === type.id ? "Selected" : "Choose This Option"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * Consultation fees are credited towards your project if you proceed with us
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Booking Form */}
      {currentStep >= 2 && (
        <AnimatedSection className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-sm font-semibold ${currentStep >= 1 ? 'text-sky-600' : 'text-gray-400'}`}>
                    Consultation Type
                  </div>
                  <div className={`text-sm font-semibold ${currentStep >= 2 ? 'text-sky-600' : 'text-gray-400'}`}>
                    Your Details
                  </div>
                  <div className={`text-sm font-semibold ${currentStep >= 3 ? 'text-sky-600' : 'text-gray-400'}`}>
                    Schedule
                  </div>
                  <div className={`text-sm font-semibold ${submitStatus === 'success' ? 'text-sky-600' : 'text-gray-400'}`}>
                    Confirmation
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-sky-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">🎉</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Consultation Booked Successfully!</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Thank you for booking a consultation with Pramod Furniture Craftsmen.
                      We've sent a confirmation email with all the details and next steps.
                    </p>
                    <div className="bg-sky-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                      <h4 className="font-semibold text-gray-800 mb-3">What's Next?</h4>
                      <ul className="text-sm text-gray-600 space-y-2 text-left">
                        <li>• You'll receive a pre-consultation questionnaire within 1 hour</li>
                        <li>• We'll confirm your appointment time within 24 hours</li>
                        <li>• Prepare any inspiration images or room measurements</li>
                        <li>• We'll call you at your scheduled time</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitStatus(null);
                        setCurrentStep(1);
                      }}
                      className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Tell Us About Your Project</h3>
                        <p className="text-gray-600 mb-8">
                          Help us understand your needs better so we can make the most of our consultation time.
                        </p>

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
                              placeholder="+91 98016 52150"
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
                              <option value="dining-table">Dining Table & Chairs</option>
                              <option value="kitchen-cabinets">Kitchen Cabinets</option>
                              <option value="bedroom-set">Bedroom Furniture Set</option>
                              <option value="wardrobe">Wardrobe & Storage</option>
                              <option value="office-furniture">Office Furniture</option>
                              <option value="restoration">Furniture Restoration</option>
                              <option value="commercial">Commercial Project</option>
                              <option value="other">Other Custom Project</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Description *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
                            placeholder="Tell us about your project, room dimensions, style preferences, specific requirements, etc."
                          />
                        </div>

                        <div className="flex justify-between pt-6">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                          >
                            Continue to Schedule →
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Schedule Your Consultation</h3>
                        <p className="text-gray-600 mb-8">
                          Choose a convenient date and time for your {consultationData.types.find(t => t.id === formData.consultationType)?.title.toLowerCase()}.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Preferred Date *
                            </label>
                            <select
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                            >
                              <option value="">Select a date</option>
                              {getNextDays().map((date) => (
                                <option key={date} value={date}>
                                  {new Date(date).toLocaleDateString('en-IN', {
                                    weekday: 'short',
                                    day: 'numeric',
                                    month: 'long'
                                  })}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Preferred Time *
                            </label>
                            <select
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Select budget range (optional)</option>
                            <option value="under-50k">Under ₹50,000</option>
                            <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                            <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                            <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                            <option value="over-5l">Over ₹5,00,000</option>
                          </select>
                        </div>

                        {/* Consultation Summary */}
                        <div className="bg-sky-50 rounded-xl p-6 mt-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Consultation Summary</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Type:</span>
                              <span className="font-semibold ml-2">
                                {consultationData.types.find(t => t.id === formData.consultationType)?.title}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Duration:</span>
                              <span className="font-semibold ml-2">
                                {consultationData.types.find(t => t.id === formData.consultationType)?.duration}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Price:</span>
                              <span className="font-semibold ml-2">
                                {consultationData.types.find(t => t.id === formData.consultationType)?.price}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Project:</span>
                              <span className="font-semibold ml-2 capitalize">
                                {formData.projectType?.replace('-', ' ')}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between pt-6">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                          >
                            ← Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Booking...
                              </span>
                            ) : (
                              "Confirm Booking"
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Book a Consultation?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance and avoid costly mistakes with our professional consultation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {consultationData.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps from booking to project completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {consultationData.process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < consultationData.process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-sky-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards creating your dream furniture.
          </p>
          {currentStep === 1 && (
            <button
              onClick={() => {
                setFormData(prev => ({ ...prev, consultationType: "virtual" }));
                nextStep();
              }}
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Free Virtual Consultation
            </button>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BookConsultationPage;