import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Empowering Tomorrow with
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Clean Energy Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform your roof or land into a powerful energy asset.
              Join India's solar revolution with Shivar Solar Energy.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-accent" />
              <span>25+ Years Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-secondary" />
              <span>Zero Emissions</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>High ROI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-lg px-8 py-6"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30  hover:bg-white/10 text-lg px-8 py-6"
            >
              Learn More
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "25+", label: "Years Warranty" },
              { number: "₹78,000", label: "Government Subsidy" },
              { number: "4", label: "Sectors Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;