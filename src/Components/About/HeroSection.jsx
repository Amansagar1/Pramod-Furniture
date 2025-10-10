import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-sky-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Crafting Legacy,
          <br />
          <span className="text-sky-600">
            <Typewriter
              words={['One Piece at a Time.']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          For Pramod, wood is not just a material; it's a narrative waiting to be told. 
          Welcome to timeless craftsmanship meets modern design.
        </p>
        
        <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore the Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;