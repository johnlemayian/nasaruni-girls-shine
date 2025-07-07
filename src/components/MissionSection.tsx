
import { Card, CardContent } from '@/components/ui/card';

const MissionSection = () => {
  const values = [
    {
      title: "Education First",
      description: "We believe education is the key to breaking cycles of poverty and empowering young women.",
      icon: "📚",
      color: "nasaruni-blue"
    },
    {
      title: "Cultural Respect",
      description: "We honor and preserve cultural heritage while advocating for girls' rights and safety.",
      icon: "🌍",
      color: "nasaruni-green"
    },
    {
      title: "Holistic Support",     
      description: "From rescue to mentorship to life skills, we provide comprehensive support systems.",
      icon: "🤝",
      color: "nasaruni-orange"
    },
    {
      title: "Community Impact",
      description: "Our work creates ripple effects that strengthen entire communities and families.",
      icon: "💫",
      color: "nasaruni-gold"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To create a world where every girl has the opportunity to reach her full potential 
            through education, empowerment, and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover-lift border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-earth rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Commitment</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            "We are committed to rescuing vulnerable girls from harmful traditional practices, 
            providing them with quality education, life skills training, and mentorship to 
            help them become empowered, confident, and contributing members of society. 
            We believe every girl deserves the chance to dream, learn, and achieve her goals."
          </p>
          <div className="mt-8 text-right">
            <p className="text-lg italic">- Nasaruni CBO Leadership Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
