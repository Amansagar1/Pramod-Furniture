"use client";
import { useState } from "react";
import AnimatedSection from "../../Components/About/AnimatedSection";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Portfolio data
  const portfolioData = {
    projects: [
      {
        id: 1,
        title: "Modern Walnut Dining Table",
        type: "table",
        category: "furniture",
        description: "Handcrafted solid walnut dining table with organic edge and tapered legs. Finished with natural oil to enhance the wood grain.",
        materials: ["Solid Walnut", "Natural Oil Finish"],
        duration: "3 weeks",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
        ],
        featured: true
      },
      {
        id: 2,
        title: "Custom Kitchen Cabinets",
        type: "cabinet",
        category: "furniture",
        description: "Custom-built shaker style kitchen cabinets with soft-close mechanisms and hidden storage solutions.",
        materials: ["Maple Wood", "Plywood", "Water-based Paint"],
        duration: "4 weeks",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
        ],
        featured: true
      },
      {
        id: 3,
        title: "Heritage Door Restoration",
        type: "door",
        category: "restoration",
        description: "Complete restoration of a 100-year-old oak door, preserving original features while adding modern security.",
        materials: ["Reclaimed Oak", "Brass Hardware", "Traditional Glass"],
        duration: "2 weeks",
        images: [
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
        ]
      },
      {
        id: 4,
        title: "Live Edge Console Table",
        type: "table",
        category: "furniture",
        description: "Minimalist console table featuring a single live edge slab with black metal hairpin legs.",
        materials: ["Live Edge Walnut", "Steel Hairpin Legs", "Matte Finish"],
        duration: "2 weeks",
        images: [
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop"
        ]
      },
      {
        id: 5,
        title: "Bookshelf Wall Unit",
        type: "shelf",
        category: "furniture",
        description: "Floor-to-ceiling bookshelf with integrated lighting and hidden compartments.",
        materials: ["Oak Veneer", "LED Lighting", "Glass Shelves"],
        duration: "3 weeks",
        images: [
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop"
        ]
      },
      {
        id: 6,
        title: "Antique Chair Restoration",
        type: "chair",
        category: "restoration",
        description: "Complete restoration of Victorian era armchair with new upholstery and structural repairs.",
        materials: ["Mahogany", "Velvet Fabric", "Traditional Joinery"],
        duration: "3 weeks",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
        ]
      },
      {
        id: 7,
        title: "Custom Office Desk",
        type: "desk",
        category: "custom",
        description: "Executive office desk with built-in cable management and leather inlay.",
        materials: ["Cherry Wood", "Leather Inlay", "Brass Accents"],
        duration: "4 weeks",
        images: [
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop"
        ]
      },
      {
        id: 8,
        title: "Floating Bed Frame",
        type: "bed",
        category: "custom",
        description: "Modern platform bed with integrated lighting and hidden storage drawers.",
        materials: ["Maple Wood", "LED Strips", "Soft-close Drawers"],
        duration: "5 weeks",
        images: [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=600&fit=crop"
        ]
      }
    ],
    filters: [
      { key: "all", label: "All Projects" },
      { key: "furniture", label: "Furniture" },
      { key: "restoration", label: "Restoration" },
      { key: "custom", label: "Custom Design" }
    ]
  };

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  // Project Card Component
  const ProjectCard = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div 
        className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        onClick={() => setSelectedProject(project)}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className={`w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='white'%3E" + project.title + "%3C/text%3E%3C/svg%3E";
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-sky-100 animate-pulse flex items-center justify-center">
              <div className="text-sky-600">Loading...</div>
            </div>
          )}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              project.category === 'furniture' ? 'bg-sky-500 text-white' :
              project.category === 'restoration' ? 'bg-green-500 text-white' :
              'bg-blue-500 text-white'
            }`}>
              {project.category}
            </span>
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-2xl">
              {project.type === 'table' && '📊'}
              {project.type === 'cabinet' && '🗄️'}
              {project.type === 'door' && '🚪'}
              {project.type === 'shelf' && '📚'}
              {project.type === 'chair' && '🪑'}
              {project.type === 'desk' && '💼'}
              {project.type === 'bed' && '🛏️'}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{project.duration}</span>
            <button className="text-sky-600 hover:text-sky-700 font-semibold transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Project Modal Component
  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl text-gray-700">×</span>
            </button>

            {/* Image Gallery */}
            <div className="relative">
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3E" + project.title + "%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Image Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === project.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    ›
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.category === 'furniture' ? 'bg-sky-500 text-white' :
                  project.category === 'restoration' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold">
                    Featured Project
                  </span>
                )}
                <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
                  {project.duration}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Materials Used</h3>
                  <ul className="space-y-2">
                    {project.materials.map((material, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold text-gray-800 capitalize">{project.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold text-gray-800 capitalize">{project.type}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-800">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
                <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Similar Project
                </button>
                <button className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Download Portfolio PDF
                </button>
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
      <section className="bg-gradient-to-br p-40 from-sky-900 to-sky-700 text-white ">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
            Discover our finest craftsmanship through a collection of bespoke furniture, 
            restoration projects, and custom designs that tell stories in wood.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              {portfolioData.projects.length}+ Projects
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              15+ Years Experience
            </span>
            <span className="px-4 py-2 bg-sky-500 rounded-full text-sm font-semibold">
              100% Client Satisfaction
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <AnimatedSection className="py-12 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Projects Found</h3>
              <p className="text-gray-600 mb-8">Try selecting a different filter category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Show All Projects
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {activeFilter === 'all' ? 'All Projects' : 
                   activeFilter === 'furniture' ? 'Furniture Collection' :
                   activeFilter === 'restoration' ? 'Restoration Projects' :
                   'Custom Designs'}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} of exceptional craftsmanship
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your vision to life with custom craftsmanship.
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

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default PortfolioPage;