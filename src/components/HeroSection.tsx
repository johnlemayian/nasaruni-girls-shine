
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Empowering Girls Through Education",
      subtitle: "Breaking barriers, building futures"
    },
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Rescue • Mentorship • Hope",
      subtitle: "Supporting vulnerable girls in rural Kenya"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Building Tomorrow's Leaders",
      subtitle: "Through skills, education, and empowerment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Heart, number: "200+", label: "Girls Rescued" },
    { icon: Users, number: "150+", label: "Active Students" },
    { icon: BookOpen, number: "95%", label: "Success Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">{slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block text-gradient bg-gradient-to-r from-nasaruni-orange to-nasaruni-gold bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-nasaruni-red hover:bg-nasaruni-red/90 text-white px-8 py-6 text-lg group"
              >
                <Link to="/get-involved">
                  Make a Difference
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-nasaruni-red px-8 py-6 text-lg"
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-nasaruni-orange" />
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-nasaruni-orange w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-nasaruni-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-6 h-6 bg-nasaruni-orange rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-nasaruni-blue rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
