
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Gallery categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'computers', name: 'Computer Maintenance' },
  { id: 'printers', name: 'Printer Repairs' },
  { id: 'cctv', name: 'CCTV Installation' },
  { id: 'labs', name: 'Computer Labs' },
];

// Mock gallery items (would be replaced with real data)
const galleryItems = [
  { 
    id: 1, 
    category: 'computers', 
    title: 'Computer Repair at Hill School',
    description: 'Fixing computers at a school in the hills of eastern Nepal.',
    imagePlaceholder: 'computer-repair'
  },
  { 
    id: 2, 
    category: 'printers', 
    title: 'Printer Maintenance Workshop',
    description: 'Teaching school staff how to maintain their printers.',
    imagePlaceholder: 'printer-maintenance'
  },
  { 
    id: 3, 
    category: 'cctv', 
    title: 'CCTV Installation at Rural High School',
    description: 'Installing security cameras at a rural high school.',
    imagePlaceholder: 'cctv-install'
  },
  { 
    id: 4, 
    category: 'labs', 
    title: 'New Computer Lab Setup',
    description: 'Setting up a new computer lab for students.',
    imagePlaceholder: 'computer-lab'
  },
  { 
    id: 5, 
    category: 'computers', 
    title: 'Computer Training for Teachers',
    description: 'Providing basic computer training to teachers.',
    imagePlaceholder: 'teacher-training'
  },
  { 
    id: 6, 
    category: 'cctv', 
    title: 'Security System Upgrade',
    description: 'Upgrading the security systems at a local school.',
    imagePlaceholder: 'security-upgrade'
  },
  { 
    id: 7, 
    category: 'printers', 
    title: 'Printer Installation',
    description: 'Installing new printers in an administrative office.',
    imagePlaceholder: 'printer-install'
  },
  { 
    id: 8, 
    category: 'labs', 
    title: 'Computer Lab Maintenance',
    description: 'Regular maintenance of a computer lab in a rural school.',
    imagePlaceholder: 'lab-maintenance'
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const getItemById = (id: number) => {
    return galleryItems.find(item => item.id === id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-icsn-primary to-icsn-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See how we've helped schools across Nepal with their IT needs
          </p>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Browse through our gallery to see examples of our work in schools across Nepal. From computer repairs to CCTV installations, we're proud to support educational institutions with their IT needs.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="pb-8 pt-2 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => openLightbox(item.id)}
                    >
                      {/* Placeholder for real images */}
                      <div className="h-48 bg-gray-300 flex items-center justify-center">
                        <p className="text-gray-600">{item.imagePlaceholder}</p>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">{getItemById(selectedImage)?.imagePlaceholder}</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{getItemById(selectedImage)?.title}</h3>
              <p className="text-gray-600">{getItemById(selectedImage)?.description}</p>
              <button 
                className="mt-4 px-4 py-2 bg-icsn-primary text-white rounded hover:bg-icsn-secondary"
                onClick={closeLightbox}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-icsn-dark mb-6">Need Similar Services for Your School?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We'd love to help your school with its IT needs. Contact us today to discuss how we can assist you.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-icsn-primary text-white rounded-md hover:bg-icsn-secondary transition-colors font-medium"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="px-6 py-3 bg-white border border-icsn-primary text-icsn-primary rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
