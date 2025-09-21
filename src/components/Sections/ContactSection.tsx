import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Send, Calculator } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectSize: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your solar project.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectSize: "",
      location: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Go Solar? Let's Talk!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's make your roof or land your greatest energy asset. 
            Contact us today to schedule a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 8898706176</p>
                    <p className="text-sm text-muted-foreground">Call anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-light p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">shivarsolarenergy@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">403, Vilasini CHS</p>
                    <p className="text-muted-foreground">Above Gupta Sandwich</p>
                    <p className="text-muted-foreground">Shivaji Path, Thane Station Road</p>
                    <p className="text-muted-foreground">Thane (W), Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Service Area</h4>
                    <p className="text-muted-foreground">Happy to serve pan-India</p>
                    <p className="text-sm text-muted-foreground">Residential, Commercial, Industrial & Agricultural</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-solar text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Government Benefits</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subsidy Available:</span>
                    <span className="font-bold">Up to ₹78,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty Period:</span>
                    <span className="font-bold">25+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI Period:</span>
                    <span className="font-bold">3-5 Years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Calculator className="h-5 w-5 text-primary mr-2" />
                  Request a Free Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and we'll provide you with a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Solar</SelectItem>
                          <SelectItem value="commercial">Commercial Solar</SelectItem>
                          <SelectItem value="industrial">Industrial Solar</SelectItem>
                          <SelectItem value="agricultural">Agricultural Solar</SelectItem>
                          <SelectItem value="solar-farming">Solar Farming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectSize">Estimated Project Size</Label>
                      <Select value={formData.projectSize} onValueChange={(value) => handleInputChange("projectSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3kw">1-3 kW (Small Home)</SelectItem>
                          <SelectItem value="3-5kw">3-5 kW (Medium Home)</SelectItem>
                          <SelectItem value="5-10kw">5-10 kW (Large Home/Small Business)</SelectItem>
                          <SelectItem value="10-50kw">10-50 kW (Commercial)</SelectItem>
                          <SelectItem value="50kw-plus">50 kW+ (Industrial/Solar Farm)</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, roof space, land area, or any specific questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary text-lg py-6">
                    <Send className="h-5 w-5 mr-2" />
                    Request Free Quote
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by our solar experts. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;