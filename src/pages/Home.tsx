import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud, Database, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "Beautiful, responsive websites tailored to your brand",
      link: "/services/web-design",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Intuitive mobile applications for iOS and Android",
      link: "/services/app-design",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions for your business needs",
      link: "/services/software-development",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      link: "/services/cloud-solutions",
    },
  ];

  const products = [
    {
      icon: Users,
      title: "CRM",
      description: "Customer Relationship Management",
      link: "/products/crm",
    },
    {
      icon: Briefcase,
      title: "ERP",
      description: "Enterprise Resource Planning",
      link: "/products/erp",
    },
    {
      icon: Database,
      title: "HRMS",
      description: "Human Resource Management System",
      link: "/products/hrms",
    },
  ];

  const insights = [
    {
      title: "Digital Transformation Success",
      description: "How we helped a Fortune 500 company modernize their infrastructure",
      category: "Case Study",
      link: "/insights/case-studies",
    },
    {
      title: "The Future of Cloud Computing",
      description: "Exploring trends and innovations in cloud technology",
      category: "Blog",
      link: "/insights/blog",
    },
    {
      title: "New AI-Powered CRM Launch",
      description: "Introducing intelligent automation to customer management",
      category: "News",
      link: "/insights/news",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 73, 89, 0.85), rgba(56, 73, 89, 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovative IT Solutions for Modern Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Transforming ideas into powerful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/services/web-design">
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Welcome to CM<sub>2</sub> IT Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a leading technology company specializing in cutting-edge software solutions,
              innovative product development, and digital transformation services. With years of
              expertise and a passion for excellence, we help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-block p-4 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Products</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade solutions to streamline your operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={index} to={product.link} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-scale-in border-2 hover:border-primary">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 inline-block p-4 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <product.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-primary">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest news, blogs, and case studies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link key={index} to={insight.link} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up border-2 hover:border-primary">
                  <CardContent className="p-6">
                    <div className="text-xs font-semibold text-secondary-foreground bg-secondary px-3 py-1 rounded-full inline-block mb-4">
                      {insight.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
