import { Check, Code2, GitBranch, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesBg from "@/assets/services-bg.jpg";

const SoftwareDevelopment = () => {
  const features = [
    "Custom Software Solutions",
    "Agile Development Process",
    "Scalable Architecture",
    "Quality Assurance Testing",
    "Ongoing Support & Maintenance",
    "Integration Capabilities",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 73, 89, 0.85), rgba(56, 73, 89, 0.85)), url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Development</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Building robust, scalable solutions for your business
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
                  Enterprise Software Development
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our software development services deliver custom solutions tailored to your
                  unique business requirements. We build scalable, secure, and maintainable
                  software that grows with your business. From initial concept to deployment and
                  beyond, we're with you every step of the way.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Using modern technologies and best practices, our experienced development team
                  creates software that solves real business problems. We follow agile methodologies
                  to ensure flexibility, transparency, and rapid delivery of high-quality solutions.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Well-documented, maintainable codebases
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <GitBranch className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Agile Process</h3>
                  <p className="text-muted-foreground">
                    Iterative development with regular updates
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-secondary rounded-full inline-block mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Security First</h3>
                  <p className="text-muted-foreground">
                    Built-in security best practices
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features List */}
            <Card className="border-2 border-primary animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>
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
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
