import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "OnFocus Software Inc Launches AI-Powered CRM",
      excerpt: "We're excited to announce the launch of our next-generation CRM with integrated AI capabilities for intelligent customer insights.",
      date: "March 20, 2024",
      tag: "Product Launch",
    },
    {
      title: "Partnership with Global Cloud Provider",
      excerpt: "Strategic partnership announced to deliver enhanced cloud solutions to enterprise clients worldwide.",
      date: "March 12, 2024",
      tag: "Partnership",
    },
    {
      title: "Award: Best Enterprise Software 2024",
      excerpt: "Our ERP solution recognized as 'Best Enterprise Software of the Year' by Tech Innovation Awards.",
      date: "March 5, 2024",
      tag: "Achievement",
    },
    {
      title: "Expansion to European Market",
      excerpt: "Opening new offices in London and Berlin to better serve our growing European client base.",
      date: "February 28, 2024",
      tag: "Company News",
    },
    {
      title: "New Cybersecurity Features Released",
      excerpt: "Enhanced security protocols and compliance features now available across all our products.",
      date: "February 20, 2024",
      tag: "Update",
    },
    {
      title: "Client Success: 1000+ Implementations",
      excerpt: "Celebrating a milestone of over 1000 successful implementations across various industries.",
      date: "February 10, 2024",
      tag: "Milestone",
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Latest announcements and company updates
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-xs font-semibold text-secondary-foreground bg-secondary px-3 py-1 rounded-full">
                          <Tag className="w-3 h-3 inline mr-1" />
                          {item.tag}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">{item.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
