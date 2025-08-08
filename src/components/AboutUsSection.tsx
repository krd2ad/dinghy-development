import { Heart, Home, TreePine, TrendingUp, Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  const whyWeDoItItems = [
    {
      icon: Home,
      title: "Help people build first homes",
      description: "Everyone deserves a foundation to build their dreams upon"
    },
    {
      icon: TreePine,
      title: "Reconnect with nature",
      description: "Find peace and purpose in the natural world around us"
    },
    {
      icon: Heart,
      title: "Create family legacies",
      description: "Build something meaningful to pass down through generations"
    },
    {
      icon: TrendingUp,
      title: "Gain financial freedom",
      description: "Land ownership as a pathway to independence and security"
    }
  ];

  return (
    <section className="py-20 bg-earth-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-wave"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Meet the Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-wave border border-border/50">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Profile Image Placeholder - You can replace with actual image */}
                <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                    George B. Fike
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Founder & Chief Trailblazer
                  </p>
                  
                  <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 leading-relaxed">
                    "Helping people find their place in the world—literally."
                  </blockquote>

                  <p className="text-card-foreground leading-relaxed">
                    George has worked across construction, customer service, real estate, and renewable energy—but what's never changed is his love of the outdoors and belief in accessible ownership. His diverse background gives him a unique perspective on what it really takes to make land ownership dreams come true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Do It Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why We Do It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission goes beyond just selling land—we're here to transform lives and build futures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyWeDoItItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-natural hover:shadow-wave transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-3">
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

        {/* Contact CTA Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-wave border border-border/50 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's talk about your land ownership goals. Whether you're just starting to explore or ready to make a move, we're here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group">
              <Phone className="w-5 h-5 mr-2 group-hover:animate-wave" />
              Book a Free Call
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              <Mail className="w-5 h-5 mr-2 group-hover:animate-wave" />
              Send a Message
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No pressure, no sales pitches—just honest conversation about your land ownership dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;