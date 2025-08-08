import { Compass, MapPin, Users, FileText, Target, DollarSign, Home, Lightbulb } from "lucide-react";

const WhatWeOfferSection = () => {
  const whatWeDoItems = [
    {
      icon: MapPin,
      title: "Curated land listings for every budget",
      description: "Hand-picked properties that match your vision and financial goals"
    },
    {
      icon: Compass,
      title: "Development guidance and project support",
      description: "Expert advice to turn your land dreams into reality"
    },
    {
      icon: Users,
      title: "Mentorship from landowners",
      description: "Learn from experienced owners who've walked this path before"
    },
    {
      icon: FileText,
      title: "Clear, friendly zoning and land-use guides",
      description: "No legal jargon—just straightforward explanations you can understand"
    }
  ];

  const learnBasicsItems = [
    {
      icon: Target,
      title: "How to evaluate a plot",
      description: "Essential criteria for choosing the right piece of land"
    },
    {
      icon: DollarSign,
      title: "Financing help (even with bad credit)",
      description: "Creative financing options and credit improvement strategies"
    },
    {
      icon: Home,
      title: "What you can and can't do with rural land",
      description: "Understanding restrictions, opportunities, and your rights as a landowner"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23155f19' fill-opacity='0.6'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern, no-fluff approach to land ownership that puts transparency and guidance first
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* What We Do Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">What We Do</h3>
            </div>

            <div className="space-y-6">
              {whatWeDoItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card/60 backdrop-blur-sm rounded-xl p-6 shadow-natural hover:shadow-wave transition-all duration-300 border border-border/50 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learn the Basics Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Learn the Basics</h3>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-6 mb-6 border border-secondary/20">
              <p className="text-secondary-foreground font-medium text-center">
                For first-time buyers:
              </p>
            </div>

            <div className="space-y-6">
              {learnBasicsItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card/60 backdrop-blur-sm rounded-xl p-6 shadow-natural hover:shadow-wave transition-all duration-300 border border-border/50 hover:border-secondary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border/30">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your land ownership journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold shadow-natural hover:shadow-wave transition-all duration-300 transform hover:-translate-y-0.5">
              View Our Listings
            </button>
            <button className="border-2 border-secondary bg-background text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 rounded-lg font-semibold shadow-natural hover:shadow-wave transition-all duration-300 transform hover:-translate-y-0.5">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;