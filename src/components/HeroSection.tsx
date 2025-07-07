
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-nasaruni-cream via-white to-nasaruni-cream pattern-overlay">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Empowering Girls</span>
              <br />
              <span className="text-gray-900">Through Education,</span>
              <br />
              <span className="text-gray-900">Skills & Hope</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
              Nasaruni Community Based Organization rescues, mentors, and provides holistic 
              education to vulnerable girls in rural Kenya, many of whom are survivors of 
              early marriage and FGM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-nasaruni-red hover:bg-nasaruni-red/90 text-white px-8 py-3 text-lg"
              >
                <Link to="/get-involved">Sponsor a Girl</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-nasaruni-red text-nasaruni-red hover:bg-nasaruni-red hover:text-white px-8 py-3 text-lg"
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-nasaruni-red">200+</div>
                <div className="text-sm text-gray-600">Girls Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nasaruni-green">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nasaruni-blue">8</div>
                <div className="text-sm text-gray-600">Years Impact</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students at Nasaruni CBO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-semibold text-nasaruni-red mb-2">Join Our Mission</h3>
              <p className="text-sm text-gray-600">
                Every girl deserves the chance to learn, grow, and thrive. Help us make it possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
