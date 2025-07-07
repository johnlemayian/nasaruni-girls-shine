
import { Card, CardContent } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      title: "Education Program",
      description: "Comprehensive educational support from primary through vocational training",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Primary education support and scholarships",
        "Secondary school placement and fees",
        "Vocational training in various trades",
        "University preparation and guidance",
        "Academic mentorship and tutoring"
      ],
      color: "nasaruni-blue"
    },
    {
      title: "Life Skills Training",
      description: "Practical skills development for economic empowerment and independence",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Traditional beadwork and jewelry making",
        "Tailoring and fashion design",
        "Cooking and nutrition education",
        "Modern farming techniques",
        "Sports development and leadership"
      ],
      color: "nasaruni-green"
    },
    {
      title: "Mentorship & Counseling",
      description: "Emotional support and guidance to help girls heal and grow",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: [
        "Individual counseling sessions",
        "Group therapy and support circles",
        "Trauma healing and recovery programs",
        "Life coaching and goal setting",
        "Peer mentorship opportunities"
      ],
      color: "nasaruni-red"
    }
  ];

  const additionalPrograms = [
    {
      title: "Health & Wellness",
      icon: "🏥",
      description: "Comprehensive healthcare and wellness education including reproductive health, mental health support, and regular medical checkups."
    },
    {
      title: "Community Outreach",
      icon: "🤝",
      description: "Working with families and communities to change attitudes about girls' education and harmful traditional practices."
    },
    {
      title: "Alumni Network",
      icon: "🎓",
      description: "Ongoing support for graduates through networking, job placement assistance, and continuing education opportunities."
    },
    {
      title: "Emergency Response",
      icon: "🚨",
      description: "24/7 rescue operations for girls at immediate risk of FGM or forced marriage, with safe house accommodation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nasaruni-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support systems designed to address every aspect of a girl's development - 
              from rescue and healing to education and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-${program.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond our core programs, we provide comprehensive support to ensure every girl's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPrograms.map((program, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our programs are making a measurable difference in the lives of girls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-nasaruni-blue mb-2">98%</div>
              <div className="text-sm text-gray-600">Program Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nasaruni-green mb-2">85%</div>
              <div className="text-sm text-gray-600">Job Placement Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nasaruni-red mb-2">150+</div>
              <div className="text-sm text-gray-600">Life Skills Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nasaruni-gold mb-2">50+</div>
              <div className="text-sm text-gray-600">University Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Support Our Programs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Each program depends on the generous support of donors and volunteers. 
            Your contribution directly impacts a girl's journey to empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-nasaruni-brown hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Fund a Program
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-nasaruni-brown px-8 py-3 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
