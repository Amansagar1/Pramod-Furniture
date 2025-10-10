"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // All data in one place
  const pageData = {
    hero: {
      title: "Crafting Legacy,",
      highlightedTitle: "One Piece at a Time.",
      subtitle:
        "For Pramod, wood is not just a material; it's a narrative waiting to be told.",
      cta: "Explore the Collection",
    },
    story: {
      title: "The Man Behind the Grain",
      content: [
        "My journey with wood began in my grandfather's shed. The scent of cedar and the sound of a handsaw were my childhood backdrop.",
        "For over 15 years, I've dedicated myself to furniture making, moving from traditional joinery to contemporary forms with deep respect for the material.",
        "Pramod Furniture Craftsmen was born from a belief: furniture should be a centerpiece of your home's story, an heirloom for generations.",
      ],
    },
    timeline: [
      {
        year: "2005-2008",
        title: "The Apprenticeship",
        description: "Mastered fundamentals under Master Craftsman Rajesh Verma.",
        icon: "🛠️",
      },
      {
        year: "2009-2014",
        title: "Formative Years",
        description: "Honed skills in contemporary furniture design.",
        icon: "📐",
      },
      {
        year: "2015",
        title: "Founded Workshop",
        description: "Established focus on sustainable, custom-made pieces.",
        icon: "🏭",
      },
      {
        year: "2018",
        title: "Sustainable Certified",
        description: "Committed to ethically sourced and reclaimed timber.",
        icon: "🌿",
      },
      {
        year: "Present",
        title: "Mastering the Art",
        description: "Blending age-old techniques with innovative designs.",
        icon: "⭐",
      },
    ],
    values: [
      {
        title: "Sustainable Woodcraft",
        icon: "🌱",
        description:
          "Using only reclaimed wood or lumber from sustainably managed forests.",
      },
      {
        title: "Heirloom Quality",
        icon: "⏳",
        description: "Building pieces for generations, not just for a season.",
      },
      {
        title: "Bespoke Collaboration",
        icon: "💬",
        description:
          "Your vision is our blueprint for creating perfect pieces.",
      },
    ],
    gallery: {
      title: "Where the Magic Happens",
      description:
        "Step inside our studio filled with the scent of wood and focused creation.",
      images: [
        "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1608500218866-139a4cf6b88a?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      ],
    },
  };

  // Timeline Component
  const TimelineItem = ({ year, title, description, icon, isLast }) => (
    <div className="flex">
      {!isLast && (
        <div className="flex flex-col items-center mr-6">
          <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white text-lg">
            {icon}
          </div>
          <div className="w-1 h-full bg-sky-200 mt-2"></div>
        </div>
      )}
      <div className="pb-12">
        <span className="text-sky-600 font-semibold">{year}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );

  // Value Card Component
  const ValueCard = ({ title, icon, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`text-4xl mb-4 transition-transform ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Story Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-sky-900 to-sky-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop"
                alt="Pramod at work"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23d97706'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EWorkshop Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                {pageData.story.title}
              </h2>
              <div className="space-y-6">
                {pageData.story.content.map((paragraph, index) => (
                  <p key={index} className="text-sky-50 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-sky-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Pramod Sharma</p>
                    <p className="text-sky-200 text-sm">Master Craftsman & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="py-20 bg-sky-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            A Legacy of Craft
          </h2>
          <div className="max-w-4xl mx-auto">
            {pageData.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === pageData.timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Guiding Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pageData.values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
     <AnimatedSection className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
      {pageData.gallery.title}
    </h2>
    <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      {pageData.gallery.description}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80", // woodwork tools
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // modern workshop
        "https://images.unsplash.com/photo-1581093588401-22d07b2f94f5?auto=format&fit=crop&w=800&q=80", // craftsman working
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", // furniture making
       
   
      ].map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image}
            alt={`Workshop ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='white'%3EImage%20Not%20Found%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-2xl">👁️</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</AnimatedSection>


      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss your custom
            furniture project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-sky-400 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.replace("w=500&h=400", "w=1200&h=800")}
              alt="Workshop enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23d97706'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='32' fill='white'%3EWorkshop Image%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;