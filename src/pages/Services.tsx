
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Monitor, Printer, Camera, Server, Wrench, Cpu, Clock, Shield } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive IT solutions designed specifically for educational institutions
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-icsn-dark mb-6">How We Support Schools</h2>
            <p className="text-gray-600 mb-6">
              At ICSN, we understand the unique IT challenges faced by schools in rural and hill areas of Nepal. Our services are tailored to provide affordable, reliable, and accessible technology solutions that enhance the educational experience.
            </p>
            <p className="text-gray-600">
              Whether you need computer repairs, printer maintenance, CCTV installation, or new IT equipment, our team of experienced technicians is ready to help. We offer special pricing for educational institutions to ensure that technology remains accessible for all students.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-icsn-dark mb-12 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-icsn-primary text-white p-4 rounded-lg">
                <Monitor size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-icsn-dark mb-4">Computer Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">
                  Our technicians are experienced in repairing and maintaining desktop computers, laptops, and related hardware specifically for classroom environments. Services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Hardware troubleshooting and repairs</li>
                  <li>Operating system installation and updates</li>
                  <li>Virus removal and security setup</li>
                  <li>Network configuration for computer labs</li>
                  <li>Preventive maintenance services</li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-icsn-primary text-white p-4 rounded-lg">
                <Printer size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-icsn-dark mb-4">Printer Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">
                  We provide expert maintenance and repair services for all types of printers commonly used in educational settings. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Printer repairs and troubleshooting</li>
                  <li>Cartridge refilling and replacement</li>
                  <li>Printer head cleaning and maintenance</li>
                  <li>Driver installation and updates</li>
                  <li>Network printer configuration</li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-icsn-primary text-white p-4 rounded-lg">
                <Camera size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-icsn-dark mb-4">CCTV Installation & Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Enhance security in your educational institution with our professional CCTV installation and maintenance services. We offer:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Security assessment and system design</li>
                  <li>CCTV camera installation</li>
                  <li>DVR/NVR setup and configuration</li>
                  <li>Remote viewing setup</li>
                  <li>Regular maintenance and troubleshooting</li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-icsn-primary text-white p-4 rounded-lg">
                <Server size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-icsn-dark mb-4">IT Equipment Sales</h3>
                <p className="text-gray-600 mb-4">
                  We supply quality computer hardware, printers, CCTV systems, and other IT equipment at affordable prices for educational institutions. Our offerings include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Desktop computers and laptops</li>
                  <li>Printers and multifunction devices</li>
                  <li>CCTV cameras and security systems</li>
                  <li>Networking equipment</li>
                  <li>Peripherals and accessories</li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-icsn-dark mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Additional Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-icsn-primary mx-auto mb-4">
                <Wrench size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Network Setup</h3>
              <p className="text-gray-600">
                Complete network solutions for computer labs and administrative offices.
              </p>
            </div>
            
            {/* Additional Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-icsn-primary mx-auto mb-4">
                <Cpu size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lab Setup</h3>
              <p className="text-gray-600">
                Design and implementation of computer labs tailored for educational purposes.
              </p>
            </div>
            
            {/* Additional Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-icsn-primary mx-auto mb-4">
                <Clock size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preventive Maintenance</h3>
              <p className="text-gray-600">
                Regular scheduled maintenance to prevent costly equipment failures.
              </p>
            </div>
            
            {/* Additional Service 4 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-icsn-primary mx-auto mb-4">
                <Shield size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Recovery</h3>
              <p className="text-gray-600">
                Recovery of important educational data from damaged or corrupted storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-icsn-dark mb-12 text-center">Our Service Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold mb-4">Basic Support</h3>
              <p className="text-gray-600 mb-6">
                Ideal for small schools with minimal IT requirements.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">On-demand repairs</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Email support</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Standard response time</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Pay-as-you-go pricing</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full bg-gray-500 hover:bg-gray-600">Contact for Pricing</Button>
              </Link>
            </div>
            
            {/* Plan 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-icsn-primary transform scale-105">
              <div className="bg-icsn-primary text-white text-xs font-bold uppercase py-1 px-2 rounded absolute -mt-12 ml-0">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Standard Support</h3>
              <p className="text-gray-600 mb-6">
                Perfect for medium-sized schools with computer labs.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="bg-icsn-primary/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Quarterly maintenance visits</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-primary/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Email & phone support</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-primary/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">48-hour response time</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-primary/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">10% discount on parts</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-primary/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Basic IT training</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full">Contact for Pricing</Button>
              </Link>
            </div>
            
            {/* Plan 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-icsn-accent">
              <h3 className="text-2xl font-bold mb-4">Premium Support</h3>
              <p className="text-gray-600 mb-6">
                For larger schools with extensive IT infrastructure.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Monthly maintenance visits</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">24-hour response time</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">20% discount on parts</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Comprehensive IT training</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-icsn-accent/20 p-1 rounded-full mr-2">
                    <svg className="h-3 w-3 text-icsn-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Loaner equipment available</span>
                </li>
              </ul>
              <Link to="/contact" className="block">
                <Button className="w-full bg-icsn-accent hover:bg-icsn-accent/80 text-white">Contact for Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-icsn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need IT Support for Your School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help with your school's IT needs. We offer free consultations for educational institutions.
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

export default Services;
