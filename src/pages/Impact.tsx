
import { Card, CardContent } from '@/components/ui/card';

const Impact = () => {
  const stats = [
    { number: "200+", label: "Girls Rescued", description: "Saved from early marriage and FGM" },
    { number: "95%", label: "Success Rate", description: "Girls staying in school and thriving" },
    { number: "150+", label: "Graduates", description: "Girls who completed their education" },
    { number: "8", label: "Years", description: "Of dedicated service to the community" },
    { number: "25+", label: "Partners", description: "Organizations supporting our mission" },
    { number: "500+", label: "Families", description: "Impacted through our programs" }
  ];

  const testimonials = [
    {
      name: "Sarah Nkengere",
      age: "19 years old",
      story: "I was rescued when I was 13, just days before my forced marriage. Today, I'm in my final year of secondary school and dream of becoming a doctor. Nasaruni gave me hope when I had none.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Grace Sankale",
      age: "21 years old", 
      story: "Through Nasaruni's life skills program, I learned beadwork and now run my own small business. I'm financially independent and helping other girls in my community.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mary Tipatet",
      age: "18 years old",
      story: "I thought my dreams of education were over, but Nasaruni believed in me. Now I'm preparing for university and want to become a teacher to help other girls like me.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nasaruni-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every statistic represents a life transformed, a dream realized, and a future full of possibilities. 
              Here's how we're making a difference in rural Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-nasaruni-red mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Behind every number is a girl whose life has been transformed. Here are just a few of their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-nasaruni-red text-sm mb-4">{testimonial.age}</p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">"{testimonial.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Address */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges We Address</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work tackles some of the most pressing issues facing girls in rural Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-red rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Marriage</h3>
                  <p className="text-gray-600">
                    Many girls in our community are forced into marriage as young as 12-14 years old, 
                    ending their education and limiting their opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-blue rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Female Genital Mutilation</h3>
                  <p className="text-gray-600">
                    FGM is still practiced in many communities, causing physical and psychological trauma 
                    to young girls and often preceding early marriage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-green rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Access to Education</h3>
                  <p className="text-gray-600">
                    Poverty, cultural barriers, and lack of resources prevent many girls from 
                    accessing quality education in rural areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-gold rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Poverty and Food Insecurity</h3>
                  <p className="text-gray-600">
                    Economic hardship forces families to make difficult choices, often at the 
                    expense of their daughters' future.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-orange rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Lack of Life Skills</h3>
                  <p className="text-gray-600">
                    Without practical skills and mentorship, even educated girls struggle to 
                    become economically independent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-nasaruni-red rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mental Health Support</h3>
                  <p className="text-gray-600">
                    Girls who have experienced trauma need counseling and emotional support 
                    to heal and rebuild their confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-nasaruni text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can help us rescue more girls, provide better education, and create 
            lasting change in rural Kenya. Together, we can build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-nasaruni-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Sponsor a Girl
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-nasaruni-red px-8 py-3 rounded-lg font-semibold transition-colors">
              Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
