"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Services data
  const servicesData = {
    categories: [
      { key: "all", label: "All Services", icon: "⭐" },
      { key: "furniture", label: "Custom Furniture", icon: "🪑" },
      { key: "restoration", label: "Restoration", icon: "🔧" },
      { key: "consultation", label: "Consultation", icon: "💬" },
    ],
    services: [
      {
        id: 1,
        title: "Custom Dining Tables",
        category: "furniture",
        icon: "🍽️",
        featured: true,
        description: "Handcrafted dining tables tailored to your space and style, from rustic farmhouse to modern minimalist designs.",
        fullDescription: "Our custom dining tables are the centerpiece of family gatherings and memorable meals. We work with you to create a table that fits your space perfectly, whether it's an intimate breakfast nook or a grand dining hall. Each table is built with precision joinery and finished to highlight the natural beauty of the wood.",
        features: [
          "Custom dimensions and design",
          "Choice of wood species",
          "Various leg styles and bases",
          "Durable food-safe finishes",
          "Extended warranty available"
        ],
        process: [
          "Initial consultation & measurements",
          "Design proposal & material selection",
          "Craftsmanship & construction",
          "Finishing & quality check",
          "Delivery & installation"
        ],
        duration: "3-5 weeks",
        startingPrice: "₹45,000",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 2,
        title: "Kitchen Cabinetry",
        category: "furniture",
        icon: "🗄️",
        featured: true,
        description: "Bespoke kitchen cabinets that combine functionality with exquisite craftsmanship and intelligent storage solutions.",
        fullDescription: "Transform your kitchen with custom cabinetry designed around your cooking style and storage needs. We create beautiful, functional spaces that make meal preparation a joy. From traditional shaker styles to contemporary handle-less designs, every cabinet is built to last.",
        features: [
          "Custom storage solutions",
          "Soft-close mechanisms",
          "Durable hardware",
          "Various door styles and finishes",
          "Integrated lighting options"
        ],
        process: [
          "Kitchen layout analysis",
          "Storage needs assessment",
          "3D design visualization",
          "Precision construction",
          "Professional installation"
        ],
        duration: "4-6 weeks",
        startingPrice: "₹1,20,000",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 3,
        title: "Furniture Restoration",
        category: "restoration",
        icon: "🔄",
        description: "Breathing new life into cherished heirlooms and antique furniture with careful restoration techniques.",
        fullDescription: "Preserve your family heritage with our expert restoration services. We combine traditional techniques with modern methods to restore your furniture while maintaining its historical integrity and character.",
        features: [
          "Structural repairs",
          "Veneer replacement",
          "Traditional finishing techniques",
          "Hardware restoration",
          "Upholstery services"
        ],
        process: [
          "Assessment & condition report",
          "Restoration proposal",
          "Careful disassembly & repair",
          "Finishing & polishing",
          "Quality assurance"
        ],
        duration: "2-4 weeks",
        startingPrice: "₹8,000",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 4,
        title: "Custom Bedroom Sets",
        category: "furniture",
        icon: "🛏️",
        description: "Complete bedroom solutions including beds, wardrobes, and nightstands designed for peaceful retreats.",
        fullDescription: "Create your perfect sanctuary with custom bedroom furniture. We design cohesive sets that maximize space while reflecting your personal style, ensuring every piece works in harmony.",
        features: [
          "Space-optimized designs",
          "Integrated storage solutions",
          "Custom headboards",
          "Matching furniture sets",
          "Peaceful aesthetic designs"
        ],
        process: [
          "Bedroom layout planning",
          "Storage requirements analysis",
          "Material and finish selection",
          "Coordinated construction",
          "Installation and setup"
        ],
        duration: "5-7 weeks",
        startingPrice: "₹75,000",
        images: [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 5,
        title: "Antique Conservation",
        category: "restoration",
        icon: "🏺",
        description: "Specialized conservation services for valuable antiques using museum-quality techniques and materials.",
        fullDescription: "Protect your investment with our professional conservation services. We use archival materials and reversible techniques to preserve your antiques for future generations while maintaining their value and authenticity.",
        features: [
          "Museum-grade conservation",
          "Reversible treatments",
          "Climate considerations",
          "Documentation provided",
          "Value preservation"
        ],
        process: [
          "Detailed condition assessment",
          "Conservation proposal",
          "Gentle cleaning and stabilization",
          "Minimal intervention approach",
          "Aftercare recommendations"
        ],
        duration: "3-6 weeks",
        startingPrice: "₹15,000",
        images: [
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 6,
        title: "Design Consultation",
        category: "consultation",
        icon: "📐",
        description: "Expert advice on furniture design, wood selection, and space planning for your perfect interior.",
        fullDescription: "Get professional guidance for your furniture projects. Whether you're planning a single piece or an entire room, our consultations help you make informed decisions about design, materials, and functionality.",
        features: [
          "Space planning advice",
          "Material selection guidance",
          "Budget planning",
          "Style coordination",
          "Technical specifications"
        ],
        process: [
          "Initial needs assessment",
          "Site visit and measurements",
          "Design recommendations",
          "Material and budget planning",
          "Implementation roadmap"
        ],
        duration: "2-4 hours",
        startingPrice: "₹2,500",
        images: [
          "https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 7,
        title: "Office Furniture",
        category: "furniture",
        icon: "💼",
        description: "Ergonomic and stylish office furniture that enhances productivity and reflects your professional brand.",
        fullDescription: "Create inspiring workspaces with custom office furniture. From executive desks to collaborative workstations, we design furniture that supports productivity while making a design statement.",
        features: [
          "Ergonomic designs",
          "Cable management systems",
          "Durable commercial-grade finishes",
          "Brand-aligned aesthetics",
          "Modular options available"
        ],
        process: [
          "Workflow analysis",
          "Ergonomic assessment",
          "Brand integration planning",
          "Commercial-grade construction",
          "Professional installation"
        ],
        duration: "4-6 weeks",
        startingPrice: "₹35,000",
        images: [
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop"
        ]
      },
      {
        id: 8,
        title: "Wood Selection Guidance",
        category: "consultation",
        icon: "🌳",
        description: "Expert advice on choosing the right wood species for your project based on aesthetics, durability, and budget.",
        fullDescription: "Make informed decisions about wood selection with our expert guidance. We help you choose the perfect wood species that balances beauty, durability, sustainability, and cost for your specific project needs.",
        features: [
          "Wood characteristics education",
          "Sustainability guidance",
          "Budget considerations",
          "Grain pattern selection",
          "Finish compatibility advice"
        ],
        process: [
          "Project requirements analysis",
          "Wood sample presentation",
          "Characteristics comparison",
          "Budget and availability check",
          "Final selection guidance"
        ],
        duration: "1-2 hours",
        startingPrice: "₹1,500",
        images: [
          "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&h=400&fit=crop"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "We discuss your vision, requirements, and budget to understand your needs completely.",
        icon: "💬"
      },
      {
        step: 2,
        title: "Design & Planning",
        description: "Create detailed designs and select materials that align with your vision and space.",
        icon: "📐"
      },
      {
        step: 3,
        title: "Craftsmanship",
        description: "Our master craftsmen bring your vision to life with precision and attention to detail.",
        icon: "🛠️"
      },
      {
        step: 4,
        title: "Finishing",
        description: "Apply the perfect finish to protect and enhance the natural beauty of the wood.",
        icon: "🎨"
      },
      {
        step: 5,
        title: "Delivery",
        description: "Careful installation and setup in your space, ensuring complete satisfaction.",
        icon: "🚚"
      }
    ]
  };

  // Filter services based on active tab
  const filteredServices = activeTab === "all" 
    ? servicesData.services 
    : servicesData.services.filter(service => service.category === activeTab);

  // Service Card Component
  const ServiceCard = ({ service }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div 
        className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
        onClick={() => setSelectedService(service)}
      >
        <div className="relative overflow-hidden">
          <img
            src={service.images[0]}
            alt={service.title}
            className={`w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='white'%3E" + service.title + "%3C/text%3E%3C/svg%3E";
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-sky-100 animate-pulse flex items-center justify-center">
              <div className="text-sky-600">Loading...</div>
            </div>
          )}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          
          {/* Featured Badge */}
          {service.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm font-semibold shadow-lg">
                Popular
              </span>
            </div>
          )}
          
          {/* Service Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl">{service.icon}</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {service.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sky-600 font-bold text-lg">{service.startingPrice}</span>
              <span className="text-gray-500 text-sm ml-1">starting price</span>
            </div>
            <span className="text-gray-500 text-sm">{service.duration}</span>
          </div>
          
          <button className="w-full bg-sky-100 hover:bg-sky-200 text-sky-700 py-3 rounded-lg font-semibold transition-colors group-hover:bg-sky-600 group-hover:text-white">
            Learn More →
          </button>
        </div>
      </div>
    );
  };

  // Service Modal Component
  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl text-gray-700">×</span>
            </button>

            {/* Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-semibold">
                  Starting at {service.startingPrice}
                </div>
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold">
                  {service.duration}
                </div>
                {service.featured && (
                  <div className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold">
                    Popular Service
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Details</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Process</h4>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-sky-50 rounded-lg">
                        <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">{step}</h5>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="mt-8 p-6 bg-sky-100 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-4">
                      Let&apos;s discuss your project and create something beautiful together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                        Book Consultation
                      </button>
                      <button className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 to-sky-700 text-white p-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
            From custom furniture creation to expert restoration, we offer comprehensive 
            woodcraft services tailored to your unique needs and vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Custom Furniture
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Restoration Services
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              Design Consultation
            </span>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <AnimatedSection className="py-12 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {servicesData.categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === category.key
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Services Found</h3>
              <p className="text-gray-600 mb-8">Try selecting a different service category.</p>
              <button
                onClick={() => setActiveTab("all")}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Show All Services
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {activeTab === 'all' ? 'All Services' : 
                   activeTab === 'furniture' ? 'Custom Furniture' :
                   activeTab === 'restoration' ? 'Restoration Services' :
                   'Consultation Services'}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} to bring your vision to life
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Craftsmanship Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows our meticulous process to ensure exceptional quality and complete client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {servicesData.process.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-600 transition-colors duration-300">
                    <span className="text-2xl group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </span>
                  </div>
                  {index < servicesData.process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-sky-200 -z-10"></div>
                  )}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Project Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your furniture vision to life? Schedule a consultation and let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Call Us: +91 98765 43210
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};

export default ServicesPage;