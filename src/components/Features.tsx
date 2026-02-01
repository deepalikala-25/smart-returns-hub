import { 
  MapPin, 
  CreditCard, 
  Bell, 
  RefreshCw, 
  Shield, 
  BarChart3,
  Zap,
  Leaf 
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your order status from warehouse to doorstep with live updates.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Choose from COD, UPI, Net Banking, or card payments with secure processing.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get instant alerts about order status, redirects, and delivery updates.",
  },
  {
    icon: RefreshCw,
    title: "Intelligent Redirect",
    description: "Unsuitable products find new homes automatically, reducing waste.",
  },
  {
    icon: Shield,
    title: "Verified Database",
    description: "Customer preferences stored securely for accurate product matching.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Monitor sustainability metrics and order optimization in real-time.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "AI-powered suitability checks in milliseconds before shipping.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint by minimizing unnecessary shipments.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You <span className="text-gradient">Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed for modern e-commerce sustainability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent group-hover:bg-hero-gradient flex items-center justify-center mb-4 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
