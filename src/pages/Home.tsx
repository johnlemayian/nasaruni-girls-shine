
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const programs = [
    {
      title: "Education Program",
      description: "Primary, secondary, and vocational training for rescued girls",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/programs"
    },
    {
      title: "Life Skills Training",
      description: "Beadwork, sewing, cooking, farming, and sports development",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/programs"
    },
    {
      title: "Mentorship & Counseling",
      description: "Support services to help girls heal, grow, and thrive",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/programs"
    }
  ];

  return (
    <div>
      <HeroSection />
      <MissionSection />
      
      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support systems designed to empower girls through every stage of their journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover-lift border-0 shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link 
                    to={program.link}
                    className="text-nasaruni-red hover:text-nasaruni-red/80 font-medium"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-nasaruni-red hover:bg-nasaruni-red/90">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-nasaruni text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can change a girl's life forever. Join us in empowering the next generation 
            of female leaders in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-nasaruni-red hover:bg-gray-100"
            >
              <Link to="/get-involved">Donate Now</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-nasaruni-red"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
