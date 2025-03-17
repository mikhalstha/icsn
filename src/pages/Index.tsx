
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Monitor, Printer, Camera, Server } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Rural Education with Affordable IT Solutions
            </h1>
            <p className="text-xl mb-8">
              ICSN specializes in providing affordable IT-related services and products to rural and hill area schools in Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-white text-icsn-primary hover:bg-gray-100 font-medium">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-transparent border-2 border-white hover:bg-white/10 font-medium">
                  Our Services
                </Button>
              </Link>
              <Link to="/gallery">
                <Button className="bg-transparent border-2 border-white hover:bg-white/10 font-medium">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-icsn-dark mb-6">Welcome to Iscon Computer Solution Nepal</h2>
            <p className="text-gray-600 mb-8">
              At ICSN, we are committed to bridging the digital divide by providing reliable, 
              affordable, and accessible IT solutions to schools in rural and hill areas across Nepal. 
              Our goal is to empower students and teachers with the technology they need for modern education.
            </p>
            <Link to="/about">
              <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                Learn More About Us <ChevronRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-icsn-dark">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive IT solutions for educational institutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-icsn-primary mb-4">
                <Monitor size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Computer Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Repair and maintenance services for computers, laptops, and related hardware for educational institutions.
              </p>
              <Link to="/services" className="text-icsn-primary hover:text-icsn-secondary flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-icsn-primary mb-4">
                <Printer size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Printer Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert maintenance and repair services for all types of printers, ensuring efficient operation.
              </p>
              <Link to="/services" className="text-icsn-primary hover:text-icsn-secondary flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-icsn-primary mb-4">
                <Camera size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">CCTV Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional CCTV installation and maintenance services to enhance security in educational settings.
              </p>
              <Link to="/services" className="text-icsn-primary hover:text-icsn-secondary flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-icsn-primary mb-4">
                <Server size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">IT Equipment Sales</h3>
              <p className="text-gray-600 mb-4">
                Quality computer hardware, printers, CCTV systems, and other IT equipment at affordable prices.
              </p>
              <Link to="/services" className="text-icsn-primary hover:text-icsn-secondary flex items-center font-medium">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-icsn-dark mb-6">Why Choose ICSN?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-icsn-primary text-white p-1 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Affordable Solutions</h3>
                    <p className="text-gray-600">Special pricing for rural and hill area schools to make technology accessible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-icsn-primary text-white p-1 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Experienced Technicians</h3>
                    <p className="text-gray-600">Our team has extensive experience working with educational institutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-icsn-primary text-white p-1 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Quick Response Time</h3>
                    <p className="text-gray-600">We understand the importance of minimal downtime in educational settings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-icsn-primary text-white p-1 rounded-full mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Educational Focus</h3>
                    <p className="text-gray-600">We tailor our services specifically for the needs of educational institutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for school/work image */}
              <div className="h-full min-h-[400px] flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 font-medium">Image of ICSN's team working in a rural school</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-icsn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve IT Infrastructure at Your School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for affordable and reliable IT solutions tailored for educational institutions.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-icsn-primary hover:bg-gray-100 font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
