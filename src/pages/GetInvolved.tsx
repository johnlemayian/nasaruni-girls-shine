
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GetInvolved = () => {
  const ways = [
    {
      title: "Sponsor a Girl",
      description: "Provide comprehensive support for one girl's entire educational journey",
      amount: "$500/year",
      details: [
        "Full school fees and supplies",
        "Healthcare and nutrition support", 
        "Life skills training participation",
        "Regular progress updates",
        "Direct communication opportunities"
      ],
      color: "nasaruni-red",
      priority: "high"
    },
    {
      title: "Monthly Donation",
      description: "Regular contributions that help us plan and sustain our programs",
      amount: "$25-100/month",
      details: [
        "Flexible monthly giving options",
        "Support multiple girls at once",
        "Fund ongoing programs and operations",
        "Quarterly impact reports",
        "Tax-deductible contributions"
      ],
      color: "nasaruni-blue",
      priority: "medium"
    },
    {
      title: "One-Time Donation",
      description: "Make an immediate impact with a single contribution",
      amount: "Any amount",
      details: [
        "Emergency rescue operations",
        "School supplies and uniforms",
        "Medical care and counseling",
        "Facility improvements",
        "Program equipment and materials"
      ],
      color: "nasaruni-green",
      priority: "medium"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Education & Tutoring",
      icon: "📚",
      description: "Help with academic support, curriculum development, and educational activities"
    },
    {
      title: "Life Skills Training",
      icon: "✂️",
      description: "Teach practical skills like sewing, cooking, farming, or business development"  
    },
    {
      title: "Mentorship Program",
      icon: "🤝",
      description: "Provide guidance, counseling, and emotional support to our girls"
    },
    {
      title: "Healthcare Support",
      icon: "🏥",
      description: "Medical professionals to provide healthcare services and health education"
    },
    {
      title: "Community Outreach",
      icon: "🌍",
      description: "Help with awareness campaigns and community engagement activities"
    },
    {
      title: "Administrative Support",
      icon: "💼",
      description: "Assist with operations, fundraising, communications, and organizational tasks"
    }
  ];

  const partnerships = [
    {
      title: "Corporate Partnerships",
      description: "Partner with us for CSR initiatives, employee engagement, and community impact"
    },
    {
      title: "Educational Institutions",
      description: "Collaborate on exchange programs, research projects, and educational resources"
    },
    {
      title: "NGO Collaborations",
      description: "Work together with other organizations to maximize our collective impact"
    },
    {
      title: "Government Partnerships",
      description: "Partner with local and national government agencies on policy and programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nasaruni-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our mission of empowering girls in rural Kenya. 
              Whether through donations, volunteering, or partnerships, your contribution makes a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Donate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the giving option that works best for you and makes the biggest impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way, index) => (
              <Card key={index} className={`relative hover-lift ${way.priority === 'high' ? 'ring-2 ring-nasaruni-red' : ''}`}>
                {way.priority === 'high' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-nasaruni-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Impact
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{way.title}</h3>
                    <p className="text-gray-600 mb-4">{way.description}</p>
                    <div className={`text-2xl font-bold text-${way.color}`}>{way.amount}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {way.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-nasaruni-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full bg-${way.color} hover:bg-${way.color}/90`}>
                    Choose This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your skills and time to directly impact the lives of girls in our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{opportunity.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-nasaruni-blue hover:bg-nasaruni-blue/90">
              Apply to Volunteer
            </Button>
            <p className="text-sm text-gray-600 mt-2">We'll match you with opportunities that fit your skills and availability</p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join forces with us to create sustainable, long-term impact for girls in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.title}</h3>
                  <p className="text-gray-600">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Money Is Used */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Your Donation Is Used</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in transparency. Here's exactly how your contributions make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-nasaruni-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">60%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Programs</h3>
              <p className="text-sm text-gray-600">Education, life skills, and mentorship programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nasaruni-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">20%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Operations</h3>
              <p className="text-sm text-gray-600">Facility maintenance, utilities, and transportation</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nasaruni-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">15%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Staff & Training</h3>
              <p className="text-sm text-gray-600">Salaries and professional development</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nasaruni-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Administration</h3>
              <p className="text-sm text-gray-600">Financial management and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-nasaruni text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of supporters and help us continue our mission of empowering girls 
            through education, skills, and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-nasaruni-red hover:bg-gray-100">
              Start Donating Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nasaruni-red">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
