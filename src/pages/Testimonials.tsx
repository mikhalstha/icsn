
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

// Mock testimonial data (would be replaced with real testimonials)
const testimonials = [
  {
    id: 1,
    name: 'Hari Sharma',
    position: 'Principal',
    school: 'Himalaya Secondary School',
    quote: 'ICSN has been instrumental in keeping our computer lab functional. Their affordable rates and quick response time have made them an invaluable partner in our digital education efforts.',
    imagePlaceholder: 'principal-photo'
  },
  {
    id: 2,
    name: 'Anita Gurung',
    position: 'Computer Teacher',
    school: 'Sunrise Academy',
    quote: 'As a computer teacher in a rural school, I rely heavily on functioning equipment. ICSN has always been responsive and their technicians are knowledgeable. They understand the challenges we face and provide practical solutions.',
    imagePlaceholder: 'teacher-photo'
  },
  {
    id: 3,
    name: 'Bikash Tamang',
    position: 'School Administrator',
    school: 'Everest Public School',
    quote: 'The CCTV system installed by ICSN has significantly improved security at our school. The team was professional, efficient, and provided excellent training on how to use the system.',
    imagePlaceholder: 'administrator-photo'
  },
  {
    id: 4,
    name: 'Sarita Thapa',
    position: 'Head Teacher',
    school: 'Valley View School',
    quote: 'Our experience with ICSN has been exceptional. Their preventive maintenance program has reduced our computer downtime by 90%, allowing our students to have consistent access to technology.',
    imagePlaceholder: 'head-teacher-photo'
  },
  {
    id: 5,
    name: 'Ram Shrestha',
    position: 'IT Coordinator',
    school: 'Modern Education Academy',
    quote: 'What sets ICSN apart is their understanding of educational needs. They don\'t just fix computers; they help us create a technology environment that enhances learning for our students.',
    imagePlaceholder: 'it-coordinator-photo'
  },
  {
    id: 6,
    name: 'Sushila KC',
    position: 'Principal',
    school: 'Eastern Light School',
    quote: 'The printer maintenance services from ICSN have saved our school thousands of rupees in replacement costs. Their team is reliable, and they genuinely care about helping rural schools like ours.',
    imagePlaceholder: 'principal-photo-2'
  }
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            What schools and educators say about our services
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              At ICSN, we measure our success by the satisfaction of the schools we serve. Here are some testimonials from educators and administrators who have partnered with us for their IT needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    {/* Placeholder for real images */}
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                      <p className="text-gray-600 text-xs">{testimonial.imagePlaceholder}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-icsn-primary">{testimonial.position}</p>
                      <p className="text-sm text-gray-500">{testimonial.school}</p>
                    </div>
                  </div>
                  <Quote className="text-icsn-primary/20" size={32} />
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-icsn-dark mb-6">Share Your Experience</h2>
            <p className="text-gray-600 mb-8">
              If you've worked with ICSN and would like to share your experience, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button className="bg-icsn-primary hover:bg-icsn-secondary">
                Submit Your Testimonial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-icsn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the reliable and affordable IT services that have helped schools across Nepal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button className="bg-white text-icsn-primary hover:bg-gray-100 font-medium">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white hover:bg-white/10 font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
