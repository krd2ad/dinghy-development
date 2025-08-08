import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-earth-gradient flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a23561d9-3cb5-4bb0-b503-25a25c84fb81.png" 
            alt="Dinghy Development - Your boat to the shore" 
            className="mx-auto h-32 w-auto animate-float drop-shadow-lg"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-hero-gradient bg-clip-text text-transparent">
            Dinghy Development
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Your Course Toward Land Ownership Begins Here
        </p>

        {/* Mission Statement */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-natural border border-border/50 max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed italic">
            "At Dinghy Development, we believe land is the most powerful form of independence.
            Our goal is simple: Chart a course so everyone has access to land ownership."
          </blockquote>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="w-full sm:w-auto">
            Browse Listings
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Book a Free Call
          </Button>
        </div>

        {/* Tagline */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-lg italic">
            "We're your boat to the shore."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;