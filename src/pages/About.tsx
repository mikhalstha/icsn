
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Iscon Computer Solution Nepal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission to support education through affordable IT solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-icsn-dark mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Iscon Computer Solution Nepal (ICSN) was founded in 2015 with a clear mission: to bridge the digital divide in education by providing affordable IT solutions to schools in rural and hill areas of Nepal.
              </p>
              <p>
                Our founder, having worked in the IT sector for over a decade, saw firsthand how limited access to technology and technical support was hindering educational progress in remote areas. While urban schools were rapidly adopting new technologies, rural schools were being left behind due to high costs and limited access to maintenance services.
              </p>
              <p>
                ICSN was established to address this disparity. We started by offering affordable computer repair services to a handful of schools in the Sunsari district. As word spread about our specialized services for educational institutions, our client base expanded to neighboring districts.
              </p>
              <p>
                Today, ICSN serves dozens of schools across eastern Nepal, providing a comprehensive range of IT services from computer and printer repairs to CCTV installations and equipment sales. Our team has grown, but our mission remains the same: to empower rural education through accessible and affordable IT solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-icsn-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To provide affordable, reliable, and accessible IT solutions that enhance educational opportunities in rural and hill area schools across Nepal.
              </p>
              <p className="text-gray-600">
                We believe that every student deserves access to working technology, regardless of their school's location or budget. Our mission is to make this a reality through specialized services for educational institutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-icsn-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To create a future where every school in Nepal, regardless of location, has equal access to functioning IT infrastructure and technical support.
              </p>
              <p className="text-gray-600">
                We envision classrooms where technology enhances learning without the barriers of maintenance issues or prohibitive costs, enabling students in even the most remote areas to develop the digital skills needed for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-icsn-dark mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-300 w-40 h-40 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="text-xl font-bold">Rajesh Sharma</h3>
              <p className="text-icsn-primary">Founder & Lead Technician</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-300 w-40 h-40 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="text-xl font-bold">Sunita Rai</h3>
              <p className="text-icsn-primary">Computer Specialist</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-300 w-40 h-40 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="text-xl font-bold">Bipin Adhikari</h3>
              <p className="text-icsn-primary">CCTV & Security Expert</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="bg-gray-300 w-40 h-40 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="text-xl font-bold">Anita Gurung</h3>
              <p className="text-icsn-primary">Customer Relations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-icsn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the many schools we've helped with affordable IT solutions and support.
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

export default About;
