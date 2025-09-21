import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Factory, Wheat, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Rooftop solar solutions for homes with government subsidies up to ₹78,000",
      features: ["Net metering benefits", "25+ year warranty", "Low maintenance", "High savings on electricity bills"]
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Scalable solar systems for offices, retail spaces, and commercial buildings",
      features: ["Reduced operational costs", "Corporate sustainability", "Tax benefits", "Professional installation"]
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Large-scale solar installations for manufacturing and industrial facilities",
      features: ["High capacity systems", "Grid synchronization", "Industrial grade equipment", "24/7 monitoring"]
    },
    {
      icon: Wheat,
      title: "Agricultural",
      description: "Solar farming solutions that turn idle land into income-generating assets",
      features: ["25-year income stream", "No soil pollution", "Land lease opportunities", "Rural empowerment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer end-to-end solar services tailored to residential, commercial, 
            industrial, and agricultural clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-solar transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 bg-gradient-solar p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Zap className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Types */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Solar System Types
            </h3>
            <p className="text-xl text-muted-foreground">
              Choose the right system for your energy needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* On-Grid System */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  On-Grid System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connected to the utility grid for net metering benefits
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>Solar Panel</span>
                    <span>→</span>
                    <span>Inverter</span>
                    <span>→</span>
                    <span>Home</span>
                  </div>
                  <div className="text-center text-muted-foreground">
                    ↕️ Net Meter ↕️ Utility Grid
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Off-Grid System */}
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Off-Grid System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Independent system with battery storage for remote locations
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>Solar Panels</span>
                    <span>→</span>
                    <span>Charge Controller</span>
                    <span>→</span>
                    <span>Inverter</span>
                  </div>
                  <div className="text-center text-muted-foreground">
                    ↕️ Battery Bank (Optional Generator)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;