"use client";
import Link from 'next/link'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" }
}

const imageHover = {
  scale: 1.1,
  transition: { duration: 0.6, ease: "easeOut" }
}

// Mock data with free professional furniture images
const featuredProjects = [
  {
    id: 1,
    title: 'Custom Kitchen Cabinets',
    type: 'Furniture',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Oak Dining Table',
    type: 'Furniture',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Vintage Door Restoration',
    type: 'Restoration',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing craftsmanship! Our custom bookshelf exceeded expectations.',
    project: 'Custom Bookshelf',
  },
  {
    id: 2,
    name: 'Mike Chen',
    rating: 5,
    comment: 'Professional service and incredible attention to detail.',
    project: 'Kitchen Renovation',
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 5,
    comment: 'Transformed our old furniture into beautiful pieces. Highly recommended!',
    project: 'Furniture Restoration',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-sky-900 to-sky-700 overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-sky-900 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            Master <motion.span 
              className="text-sky-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >Carpentry</motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-sky-100"
            variants={fadeInUp}
          >
            15 Years of Excellence in Custom Woodwork & Furniture Crafting
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Link
                href="/booking"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality craftsmanship backed by years of experience and dedication to excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-sky-600" />,
                title: "15+ Years Experience",
                description: "Decades of expertise in custom woodworking and furniture making"
              },
              {
                icon: <Star className="h-8 w-8 text-sky-600" />,
                title: "Quality Guaranteed",
                description: "Premium materials and meticulous attention to every detail"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-sky-600" />,
                title: "Custom Solutions",
                description: "Tailored designs to match your unique style and requirements"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={scaleIn}
                whileHover={hoverScale}
              >
                <motion.div 
                  className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our finest work in custom carpentry
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <motion.div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={imageHover}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-sky-600 font-semibold">{project.type}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <Link
                    href="/portfolio"
                    className="text-sky-600 hover:text-sky-700 font-medium flex items-center group/link"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our satisfied customers say about our work
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-sky-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/testimonials"
                className="text-sky-600 hover:text-sky-700 font-semibold flex items-center justify-center group"
              >
                Read More Testimonials
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-sky-100 mb-8"
            variants={fadeInUp}
          >
            Get a free consultation and let&apos;s bring your vision to life
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={hoverScale}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/booking"
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}