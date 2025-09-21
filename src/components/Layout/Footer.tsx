import { MapPin, Phone, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-solar p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">SHIVAR</h1>
                <p className="text-xs text-muted-foreground -mt-1">SOLAR ENERGY</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering communities with clean and profitable solar energy solutions
              while promoting environmental responsibility and energy independence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {["About Us", "Services", "Products", "Solar Farming", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <div className="space-y-2">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Industrial Solutions",
                "Agricultural Solar",
                "Solar Farming"
              ].map((service) => (
                <p key={service} className="text-muted-foreground text-sm">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">+91 8898706176</p>
                  <p className="text-muted-foreground text-sm">Call anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">shivarsolarenergy@gmail.com</p>
                  <p className="text-muted-foreground text-sm">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Thane, Maharashtra</p>
                  <p className="text-muted-foreground text-sm">403, Vilasini CHS, Above Gupta Sandwich</p>
                  <p className="text-muted-foreground text-sm">Shivaji Path, Thane Station Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Shivar Solar Energy. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Serving Residential, Commercial, Industrial & Agricultural Sectors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;