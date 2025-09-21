import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, TrendingUp, Shield, Leaf, Calendar, IndianRupee } from "lucide-react";

const SolarFarmingSection = () => {
  const farmingData = {
    landRequired: "4 Acres",
    initialInvestment: "₹10-11 Lakhs",
    annualIncome: "₹7 Lakhs",
    returnPeriod: "25 Years",
    ppaBuyer: "Private entity via long-term Power Purchase Agreement"
  };

  const benefits = [
    {
      icon: IndianRupee,
      title: "Steady Annual Returns",
      description: "Generate consistent income without daily effort or operational hassles"
    },
    {
      icon: Leaf,
      title: "No Environmental Impact",
      description: "No impact on soil fertility or pollution - environmentally sustainable"
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Secure investment through long-term Power Purchase Agreements"
    },
    {
      icon: TrendingUp,
      title: "Social Impact",
      description: "Contribute to renewable energy and rural development in India"
    }
  ];

  return (
    <section id="solar-farming" className="py-20 bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Lifetime Asset
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solar Farming - A Lifetime Asset
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Power From Your Land, Income For 25 Years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Solar Farming Model */}
          <div>
            <Card className="shadow-solar border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Landmark className="h-6 w-6 text-primary mr-3" />
                  1 MW Solar Farming Model
                </CardTitle>
                <p className="text-muted-foreground">Approximate investment and returns</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Land Required</div>
                    <div className="text-xl font-bold text-primary">{farmingData.landRequired}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Initial Investment</div>
                    <div className="text-xl font-bold text-primary">{farmingData.initialInvestment}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Annual Income</div>
                    <div className="text-xl font-bold text-secondary">{farmingData.annualIncome}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Return Period</div>
                    <div className="text-xl font-bold text-secondary">{farmingData.returnPeriod}</div>
                  </div>
                </div>

                <div className="bg-accent-light p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">PPA Buyer</div>
                  <div className="text-sm text-foreground">{farmingData.ppaBuyer}</div>
                </div>

                <Button className="w-full bg-gradient-primary text-lg py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Land Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Key Benefits */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Key Benefits for Landowners
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-solar p-2 rounded-lg flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-solar text-white border-none">
              <CardContent className="p-6 text-center">
                <blockquote className="text-lg font-medium italic">
                  "Idle land becomes income land with Shivar Solar Energy."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Return on Investment Breakdown
              </CardTitle>
              <p className="text-muted-foreground">
                Understanding your 25-year solar farming journey
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">₹175L</div>
                  <div className="text-sm text-muted-foreground">Total Income (25 years)</div>
                  <div className="text-xs text-muted-foreground">₹7L annual × 25 years</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">16x</div>
                  <div className="text-sm text-muted-foreground">Return Multiple</div>
                  <div className="text-xs text-muted-foreground">On initial investment</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">₹164L</div>
                  <div className="text-sm text-muted-foreground">Net Profit</div>
                  <div className="text-xs text-muted-foreground">After initial investment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolarFarmingSection;