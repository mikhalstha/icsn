
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Upload } from 'lucide-react';

// Form interface
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  school: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: '',
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      console.log('Files:', files);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        message: '',
      });
      setFiles(null);
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting ICSN. We will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for IT solutions tailored to your school's needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-icsn-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                    School/Organization Name
                  </label>
                  <Input
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Enter your school or organization name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your IT needs or questions"
                    rows={5}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <Upload className="text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-500 mb-2">Upload photos of your IT equipment or issues</p>
                    <p className="text-xs text-gray-400 mb-4">Max file size: 5MB | Formats: JPG, PNG</p>
                    <input
                      type="file"
                      id="photos"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="photos">
                      <div className="bg-icsn-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-icsn-secondary">
                        Select Files
                      </div>
                    </label>
                    {files && files.length > 0 && (
                      <div className="mt-4 w-full">
                        <p className="text-sm font-medium text-gray-700">Selected files:</p>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {Array.from(files).map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-icsn-primary hover:bg-icsn-secondary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-icsn-dark mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-icsn-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-icsn-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600">Itahari-20, Sunsari, Nepal</p>
                    <p className="text-gray-600 mt-1">Near Central Bus Terminal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-icsn-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-icsn-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+977 9800000000</p>
                    <p className="text-gray-600 mt-1">+977 025-123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-icsn-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-icsn-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">info@icsnepal.com</p>
                    <p className="text-gray-600 mt-1">support@icsnepal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-icsn-primary/10 p-3 rounded-full mr-4">
                    <Clock className="text-icsn-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Sunday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 mt-1">Saturday: Closed</p>
                    <p className="text-gray-600 mt-1">Emergency support available 24/7 for schools with service contracts</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="mt-8 bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Google Maps Embed would go here</p>
                {/* In a real implementation, this would be replaced with a proper Google Maps embed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-icsn-dark mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What areas do you serve?</h3>
              <p className="text-gray-600">
                We primarily serve schools in Sunsari district and surrounding areas in eastern Nepal. For schools in more remote locations, please contact us to discuss service options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer discounts for educational institutions?</h3>
              <p className="text-gray-600">
                Yes, we offer special pricing for schools, particularly those in rural and hill areas. We understand the budget constraints faced by educational institutions and aim to make our services accessible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How quickly can you respond to service requests?</h3>
              <p className="text-gray-600">
                Our standard response time is 2-3 business days, but schools with service contracts receive priority with response times as quick as 24 hours. For emergency situations, we make every effort to respond as quickly as possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can you provide training for our staff?</h3>
              <p className="text-gray-600">
                Yes, we offer basic IT training for school staff as part of our service packages. This includes training on system maintenance, troubleshooting common issues, and using educational technology effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
