
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "Mary Sankale",
      role: "Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "A passionate advocate for girls' rights with over 15 years of experience in community development."
    },
    {
      name: "John Kiplagat",
      role: "Education Coordinator",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Former teacher with expertise in curriculum development and educational psychology."
    },
    {
      name: "Grace Nasirian",
      role: "Community Outreach Manager",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Dedicated to building strong relationships with local communities and families."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nasaruni-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Nasaruni CBO
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story began with a simple belief: every girl deserves the chance to reach her full potential, 
              regardless of the circumstances into which she was born.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2016 in Narok County, Kenya, Nasaruni Community Based Organization 
                  was born from a deep concern for the welfare of young girls in our community 
                  who were facing early marriage and Female Genital Mutilation (FGM).
                </p>
                <p>
                  Our founder, Mary Sankale, witnessed firsthand the challenges these girls faced 
                  and knew that education was the key to breaking the cycle of poverty and 
                  harmful traditional practices.
                </p>
                <p>
                  What started as a small rescue operation has grown into a comprehensive 
                  organization that provides education, life skills training, mentorship, 
                  and ongoing support to vulnerable girls throughout the region.
                </p>
                <p>
                  Today, we are proud to have rescued and supported over 200 girls, with a 
                  95% success rate in keeping them in school and helping them build brighter futures.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Community landscape"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover-lift">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-nasaruni-red mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To rescue, educate, and empower vulnerable girls in rural Kenya by providing 
                  them with comprehensive support systems including education, life skills training, 
                  mentorship, and counseling services to help them become confident, contributing 
                  members of society.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover-lift">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-nasaruni-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every girl has access to quality education and the opportunity 
                  to reach her full potential, free from harmful traditional practices and 
                  empowered to make choices about her own life and future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dignity", description: "Every girl deserves to be treated with respect and dignity" },
              { title: "Education", description: "Knowledge is the foundation of empowerment and change" },
              { title: "Community", description: "Sustainable change happens through community engagement" },
              { title: "Hope", description: "We believe in the potential of every girl to create change" }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-nasaruni rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals working tirelessly to empower girls in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-nasaruni-red font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
