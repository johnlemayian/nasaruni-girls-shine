
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nasaruni-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions about our programs, 
              want to get involved, or need more information, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What is this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us more about how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-nasaruni-red hover:bg-nasaruni-red/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're always ready to help and answer any questions you might have about 
                  our work, programs, or how you can get involved.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                    <p className="text-gray-600">info@nasarunicbo.org</p>
                    <p className="text-gray-600">programs@nasarunicbo.org</p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                    <p className="text-gray-600">+254 XXX XXX XXX</p>
                    <p className="text-gray-600">+254 XXX XXX XXX (Emergency)</p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                    <p className="text-gray-600">
                      Nasaruni Community Based Organization<br />
                      P.O. Box XXX<br />
                      Narok County, Kenya
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">🕒 Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-nasaruni-red rounded-full flex items-center justify-center text-white hover:bg-nasaruni-red/90 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-nasaruni-blue rounded-full flex items-center justify-center text-white hover:bg-nasaruni-blue/90 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-nasaruni-red rounded-full flex items-center justify-center text-white hover:bg-nasaruni-red/90 transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Narok County, Kenya. We welcome visitors and volunteers 
              who want to see our work firsthand.
            </p>
          </div>

          {/* Placeholder for map */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Narok County, Kenya</p>
              <p className="text-sm mt-2">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our work and how you can help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">How can I sponsor a girl?</h3>
                <p className="text-gray-600 text-sm">
                  You can sponsor a girl by choosing our sponsorship option on the Get Involved page. 
                  We'll match you with a girl and provide regular updates on her progress.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Are donations tax-deductible?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, donations to Nasaruni CBO are tax-deductible. We will provide you with 
                  a receipt for your records.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Can I visit your facilities?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we welcome visitors! Please contact us in advance to arrange a visit 
                  and tour of our facilities and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">How do you rescue girls?</h3>
                <p className="text-gray-600 text-sm">
                  We work with community members, local leaders, and authorities to identify 
                  and safely rescue girls at risk of harmful practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
