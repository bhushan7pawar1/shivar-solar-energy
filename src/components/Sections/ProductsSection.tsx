import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Zap, Shield, Battery } from "lucide-react";

const ProductsSection = () => {
  const [selectedPanelType, setSelectedPanelType] = useState("all");

  const panelTypes = [
    {
      id: "monocrystalline",
      name: "Monocrystalline",
      description: "High efficiency, sleek black look",
      efficiency: "20-22%",
      lifespan: "25+ years",
      features: ["Highest efficiency", "Space efficient", "Premium appearance", "Better low-light performance"]
    },
    {
      id: "polycrystalline",
      name: "Polycrystalline",
      description: "Cost-effective, bluish tone",
      efficiency: "15-17%",
      lifespan: "25+ years",
      features: ["Cost-effective", "Good efficiency", "Reliable performance", "Proven technology"]
    },
    {
      id: "bifacial",
      name: "Bifacial",
      description: "Generates power from both sides",
      efficiency: "18-20%",
      lifespan: "25+ years",
      features: ["Dual-sided generation", "Higher output", "Versatile installation", "Advanced technology"]
    },
    {
      id: "topcon",
      name: "Topcon",
      description: "Advanced solar cell technology offering higher efficiency",
      efficiency: "22-24%",
      lifespan: "25+ years",
      features: ["Latest technology", "Superior efficiency", "Better temperature coefficient", "Future-ready"]
    }
  ];

  const inverterTypes = [
    {
      name: "String Inverter",
      description: "Ideal for uniform rooftop layouts",
      efficiency: "Up to 98%",
      features: ["Cost-effective", "Easy maintenance", "Centralized monitoring", "Proven reliability"]
    },
    {
      name: "Micro Inverter",
      description: "Attached to each panel; improves performance in shaded areas",
      efficiency: "Up to 95%",
      features: ["Panel-level optimization", "Shade tolerance", "Enhanced monitoring", "Modular design"]
    },
    {
      name: "Hybrid Inverter",
      description: "Supports battery storage for energy independence",
      efficiency: "Up to 97%",
      features: ["Battery compatible", "Grid-tie capability", "Backup power", "Smart energy management"]
    },
    {
      name: "Off-grid Inverter",
      description: "Works without grid connection for remote locations",
      efficiency: "Up to 95%",
      features: ["Independent operation", "Battery charging", "Pure sine wave", "Remote monitoring"]
    }
  ];

  const topBrands = {
    panels: ["Adani Solar", "Waaree Energies", "Vikram Solar", "Tata Power Solar", "Renew Power", "Goldi Solar", "Contendre Solar"],
    inverters: ["Growatt", "Sungrow", "KSolare"]
  };

  const filteredPanels = selectedPanelType === "all" 
    ? panelTypes 
    : panelTypes.filter(panel => panel.id === selectedPanelType);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use top-tier solar equipment from trusted brands to ensure maximum 
            performance and longevity.
          </p>
        </div>

        <Tabs defaultValue="panels" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="panels" className="text-lg">Solar Panels</TabsTrigger>
            <TabsTrigger value="inverters" className="text-lg">Solar Inverters</TabsTrigger>
          </TabsList>

          <TabsContent value="panels" className="space-y-8">
            {/* Panel Type Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedPanelType === "all" ? "default" : "outline"}
                onClick={() => setSelectedPanelType("all")}
                size="sm"
              >
                All Types
              </Button>
              {panelTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedPanelType === type.id ? "default" : "outline"}
                  onClick={() => setSelectedPanelType(type.id)}
                  size="sm"
                >
                  {type.name}
                </Button>
              ))}
            </div>

            {/* Solar Panels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredPanels.map((panel, index) => (
                <Card key={panel.id} className="hover:shadow-solar transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-foreground flex items-center">
                        <Sun className="h-5 w-5 text-primary mr-2" />
                        {panel.name}
                      </CardTitle>
                      <Badge variant="secondary">{panel.efficiency}</Badge>
                    </div>
                    <p className="text-muted-foreground">{panel.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Output Range:</span>
                        <span className="text-foreground font-medium">320W to 600W+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Lifespan:</span>
                        <span className="text-foreground font-medium">{panel.lifespan}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {panel.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs">
                              <Shield className="h-3 w-3 text-secondary mr-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Panel Brands */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Top Solar Panel Brands We Partner With
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {topBrands.panels.map((brand, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inverters" className="space-y-8">
            {/* Inverter Info */}
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The inverter converts the DC electricity from panels into AC electricity for 
                household or grid use. It also enables system monitoring and grid synchronization.
              </p>
            </div>

            {/* Inverters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inverterTypes.map((inverter, index) => (
                <Card key={index} className="hover:shadow-solar transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-foreground flex items-center">
                        <Zap className="h-5 w-5 text-accent mr-2" />
                        {inverter.name}
                      </CardTitle>
                      <Badge variant="secondary">{inverter.efficiency}</Badge>
                    </div>
                    <p className="text-muted-foreground">{inverter.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {inverter.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <Battery className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Inverter Brands */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Top Inverter Brands We Partner With
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {topBrands.inverters.map((brand, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;