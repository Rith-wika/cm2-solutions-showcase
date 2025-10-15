import { Check, Package, DollarSign, TrendingUp, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ERP = () => {
  const features = [
    "Financial Management",
    "Inventory Control",
    "Supply Chain Management",
    "Manufacturing Planning",
    "Real-Time Reporting",
    "Multi-Location Support",
    "Automated Workflows",
    "Compliance Management",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ERP Solution</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Unified platform for enterprise resource management
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary animate-scale-in mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Enterprise Resource Planning
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our ERP solution integrates all aspects of your business operations into a
                  single, unified system. From finance and accounting to inventory and supply
                  chain management, our platform provides real-time visibility and control over
                  your entire organization.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Designed for businesses of all sizes, our ERP system streamlines processes,
                  reduces operational costs, and improves decision-making through comprehensive
                  analytics and reporting capabilities.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Inventory</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Finance</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Analytics</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Automation</h3>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-fade-in">
                      <div className="p-1 bg-primary rounded-full mt-1">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-12 text-center animate-fade-in-up">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERP;
