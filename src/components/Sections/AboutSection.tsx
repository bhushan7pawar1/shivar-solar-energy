import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Shivar Solar Energy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A forward-thinking renewable energy company focused on solar rooftop systems 
            and solar farming solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower communities with clean and profitable solar energy solutions 
                    while promoting environmental responsibility and energy independence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-light p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading force in India's solar revolution by delivering 
                    reliable technology, expert service, and long-term value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Go Solar with Shivar?
            </h3>
            <div className="space-y-4">
              {[
                "Save big on electricity bills",
                "Generate long-term passive income from idle land",
                "Reduce carbon footprint",
                "Low maintenance, high return",
                "Government incentives and net metering benefits"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Built on Trust. Powered by Expertise.
            </h3>
            <p className="text-xl text-muted-foreground">
              We don't just install solar — we deliver confidence, commitment, and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Expertise",
                description: "Our team brings years of experience in solar technology and installation."
              },
              {
                title: "Full Project Lifecycle Support",
                description: "From consultation to maintenance, we're with you every step of the way."
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. Clear, upfront pricing with detailed breakdowns."
              },
              {
                title: "Quality Procurement",
                description: "We partner with top-tier brands to ensure the highest quality equipment."
              },
              {
                title: "Rural Empowerment Focus",
                description: "Committed to bringing clean energy solutions to rural communities."
              },
              {
                title: "25-Year Equipment Warranty",
                description: "Long-term protection and peace of mind for your investment."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-solar transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-primary italic">
            "Our systems don't just power homes—they power livelihoods."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;