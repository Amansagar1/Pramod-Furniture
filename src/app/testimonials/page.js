"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const TestimonialsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Testimonials data
  const testimonialsData = {
    stats: {
      totalClients: 250,
      satisfactionRate: 98,
      repeatClients: 45,
      projectsCompleted: 300
    },
    filters: [
      { key: "all", label: "All Testimonials", icon: "⭐" },
      { key: "furniture", label: "Custom Furniture", icon: "🪑" },
      { key: "restoration", label: "Restoration", icon: "🔧" },
      { key: "commercial", label: "Commercial", icon: "🏢" },
    ],
    testimonials: [
      {
        id: 1,
        clientName: "Priya Sharma",
        clientLocation: "Mumbai",
        projectType: "furniture",
        project: "Custom Dining Table & Chairs",
        rating: 5,
        featured: true,
        text: "Pramod created the most beautiful dining table for our family. His attention to detail is remarkable. The table has become the heart of our home, and we cherish every meal around it. The quality is exceptional and worth every rupee!",
        fullText: "Working with Pramod was an absolute pleasure from start to finish. He took the time to understand our family's needs and created a dining table that perfectly fits our space and lifestyle. The solid wood construction and flawless finish exceeded our expectations. Six months later, the table still looks brand new despite daily use by our two young children. Pramod's craftsmanship is truly timeless.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
        ],
        date: "2024-01-15",
        duration: "4 weeks",
        budget: "₹85,000"
      },
      {
        id: 2,
        clientName: "Rajesh Kumar",
        clientLocation: "Delhi",
        projectType: "restoration",
        project: "Antique Wardrobe Restoration",
        rating: 5,
        featured: true,
        text: "Pramod restored my grandfather's 80-year-old wardrobe to its original glory. His respect for heritage and traditional techniques is impressive. The wardrobe looks even better than I remember from my childhood.",
        fullText: "I inherited my grandfather's antique wardrobe, but it was in terrible condition with broken joints, missing veneer, and damaged hardware. Pramod not only restored it perfectly but also educated me about the wood and traditional joinery techniques used. He preserved the original character while making it functional for modern use. The restoration was completed on time and within budget. I couldn't be happier!",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        ],
        date: "2024-02-10",
        duration: "3 weeks",
        budget: "₹25,000"
      },
      {
        id: 3,
        clientName: "Anita & Sameer Patel",
        clientLocation: "Bangalore",
        projectType: "furniture",
        project: "Complete Kitchen Cabinetry",
        rating: 5,
        text: "We got our entire kitchen done by Pramod, and it's transformed how we cook and entertain. The storage solutions are brilliant, and the craftsmanship is flawless. Highly recommended!",
        fullText: "After getting multiple quotes from different carpenters, we chose Pramod for our kitchen renovation. His design suggestions were practical and beautiful. The soft-close mechanisms, custom pull-out shelves, and spice racks have made our kitchen incredibly functional. The finish is perfect, and the attention to detail is visible in every corner. Our friends and family are always complimenting our kitchen!",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        ],
        date: "2024-03-05",
        duration: "5 weeks",
        budget: "₹1,80,000"
      },
      {
        id: 4,
        clientName: "Mr. Gupta",
        clientLocation: "Chennai",
        projectType: "commercial",
        project: "Office Conference Table",
        rating: 5,
        featured: true,
        text: "Pramod created a stunning conference table for our new office. It's not just furniture; it's a statement piece that impresses our clients. The quality is outstanding.",
        fullText: "We needed a conference table that reflected our company's values of quality and attention to detail. Pramod delivered beyond our expectations. The table is not only beautiful but also incredibly durable. It has become the centerpiece of our office, and we've received numerous compliments from clients and visitors. The cable management system he designed is particularly clever. Pramod is a true artist.",
        images: [
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
        ],
        date: "2024-01-28",
        duration: "4 weeks",
        budget: "₹1,20,000"
      },
      {
        id: 5,
        clientName: "Dr. Meera Nair",
        clientLocation: "Hyderabad",
        projectType: "furniture",
        project: "Custom Bookshelves & Study Table",
        rating: 5,
        text: "Pramod designed and built floor-to-ceiling bookshelves for my home library. The precision and quality are exceptional. He turned my dream library into reality!",
        fullText: "As an academic, my book collection is very important to me. Pramod understood this and created bookshelves that are not only beautiful but also perfectly functional. The adjustable shelves, integrated lighting, and hidden storage compartments are brilliant. The study table he made complements the shelves perfectly. The entire project was completed with minimal disruption to our home. Pramod is trustworthy, skilled, and a pleasure to work with.",
        images: [
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop",
        ],
        date: "2024-02-20",
        duration: "3 weeks",
        budget: "₹95,000"
      },
      {
        id: 6,
        clientName: "The Heritage Hotel",
        clientLocation: "Udaipur",
        projectType: "commercial",
        project: "Restaurant Furniture Suite",
        rating: 5,
        text: "We commissioned Pramod for all the dining furniture in our heritage hotel restaurant. His work has enhanced our guests' experience tremendously. Authentic craftsmanship!",
        fullText: "Finding someone who could create furniture that matched the heritage aesthetic of our hotel while meeting modern durability standards was challenging until we found Pramod. He created custom tables, chairs, and sideboards that perfectly complement our 150-year-old building. The furniture has held up beautifully despite heavy daily use. Our guests frequently comment on the beautiful furniture. Pramod's work has truly elevated our restaurant's ambiance.",
        images: [
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
        ],
        date: "2024-03-12",
        duration: "8 weeks",
        budget: "₹4,50,000"
      },
      {
        id: 7,
        clientName: "Rohit Malhotra",
        clientLocation: "Pune",
        projectType: "restoration",
        project: "Vintage Chair Set Restoration",
        rating: 5,
        text: "Pramod restored six vintage dining chairs that were falling apart. They're now stronger than ever and look magnificent. His restoration skills are incredible!",
        fullText: "I had six vintage dining chairs that were sentimental but in terrible condition. Multiple furniture repair shops said they couldn't be saved. Pramod took on the challenge and the results are astonishing. He reinforced the structures, replaced damaged parts with matching wood, and reupholstered them with period-appropriate fabric. The chairs are now the pride of our dining room. Pramod's dedication to preserving the original character while ensuring modern durability is remarkable.",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        ],
        date: "2024-01-08",
        duration: "2 weeks",
        budget: "₹35,000"
      },
      {
        id: 8,
        clientName: "Neha & Arjun Singh",
        clientLocation: "Gurgaon",
        projectType: "furniture",
        project: "Custom Bedroom Suite",
        rating: 5,
        featured: true,
        text: "Pramod created our dream bedroom furniture - bed, wardrobes, and nightstands. The quality is exceptional, and the design perfectly matches our vision. Absolutely stunning!",
        fullText: "We worked with Pramod to create a complete bedroom suite for our new home. From the initial design consultation to the final installation, the experience was professional and enjoyable. Pramod listened to our ideas and added his expert suggestions to create something truly special. The hidden storage in the bed frame, the soft-close wardrobe doors, and the elegant nightstands all showcase his skill and attention to detail. The furniture has transformed our bedroom into a peaceful sanctuary.",
        images: [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop",
        ],
        date: "2024-03-01",
        duration: "6 weeks",
        budget: "₹1,40,000"
      }
    ]
  };

  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === "all" 
    ? testimonialsData.testimonials 
    : testimonialsData.testimonials.filter(testimonial => testimonial.projectType === activeFilter);

  // Star Rating Component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < rating ? "text-sky-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }) => {
    return (
      <div 
        className="group cursor-pointer bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
        onClick={() => setSelectedTestimonial(testimonial)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
              {testimonial.clientName}
            </h3>
            <p className="text-gray-600 text-sm">{testimonial.clientLocation}</p>
          </div>
          {testimonial.featured && (
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Project Info */}
        <div className="mb-4 p-3 bg-sky-50 rounded-lg">
          <p className="text-sm font-semibold text-sky-800">{testimonial.project}</p>
          <div className="flex justify-between text-xs text-sky-600 mt-1">
            <span>{testimonial.duration}</span>
            <span>{testimonial.budget}</span>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          &quot;{testimonial.text}&quot;
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(testimonial.date).toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <button className="text-sky-600 hover:text-sky-700 font-semibold transition-colors">
            Read Full →
          </button>
        </div>
      </div>
    );
  };

  // Testimonial Modal Component
  const TestimonialModal = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

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

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-sky-600">
                    {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-3xl font-bold text-gray-800">{testimonial.clientName}</h2>
                    {testimonial.featured && (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        Featured Client
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg">{testimonial.clientLocation}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-sky-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-sky-800 mb-4">Project Details</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-sky-600 mb-1">Project</p>
                    <p className="font-semibold text-sky-800">{testimonial.project}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sky-600 mb-1">Duration</p>
                    <p className="font-semibold text-sky-800">{testimonial.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sky-600 mb-1">Budget</p>
                    <p className="font-semibold text-sky-800">{testimonial.budget}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Experience</h3>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    &quot;{testimonial.fullText}&quot;
                  </p>
                </div>
              </div>

              {/* Project Images */}
              {testimonial.images && testimonial.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {testimonial.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${testimonial.project} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-xl shadow-lg"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='white'%3EProject Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-sky-100 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Experience This Level of Craftsmanship?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join our satisfied clients and let us bring your furniture vision to life with the same dedication and quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </button>
                  <button className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                    View Portfolio
                  </button>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
            Don&apos;t just take our word for it. Read what our clients have to say about their experience 
            working with Pramod Furniture Craftsmen.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{testimonialsData.stats.totalClients}+</div>
              <div className="text-sky-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{testimonialsData.stats.satisfactionRate}%</div>
              <div className="text-sky-200">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{testimonialsData.stats.repeatClients}+</div>
              <div className="text-sky-200">Repeat Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{testimonialsData.stats.projectsCompleted}+</div>
              <div className="text-sky-200">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <AnimatedSection className="py-12 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {testimonialsData.filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-700'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Testimonials Found</h3>
              <p className="text-gray-600 mb-8">Try selecting a different category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Show All Testimonials
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {activeFilter === 'all' ? 'All Client Stories' : 
                   activeFilter === 'furniture' ? 'Custom Furniture Projects' :
                   activeFilter === 'restoration' ? 'Restoration Projects' :
                   'Commercial Projects'}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''} from satisfied clients
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have experienced the Pramod Furniture Craftsmen difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonial Modal */}
      <TestimonialModal testimonial={selectedTestimonial} onClose={() => setSelectedTestimonial(null)} />
    </div>
  );
};

export default TestimonialsPage;