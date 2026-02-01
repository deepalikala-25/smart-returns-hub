import { ShoppingCart, CheckCircle, ArrowRight, Package, RefreshCw, Truck, UserCheck } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Customer Places Order",
    description: "Customer selects products using filters, payment methods (COD, UPI, Net Banking), and confirms order.",
    color: "bg-primary",
  },
  {
    icon: CheckCircle,
    title: "Smart Suitability Check",
    description: "Our AI system verifies if the product matches customer requirements before shipping.",
    color: "bg-secondary",
  },
  {
    icon: Package,
    title: "Product Assessment",
    description: "If suitable, order proceeds. If not, system scans database for matching customer needs.",
    color: "bg-primary",
  },
  {
    icon: RefreshCw,
    title: "Smart Redirect",
    description: "Unsuitable products are redirected to verified customers who need them instead of returning.",
    color: "bg-secondary",
  },
  {
    icon: Truck,
    title: "Optimized Delivery",
    description: "Products reach the right customers faster, reducing logistics waste and delivery time.",
    color: "bg-primary",
  },
  {
    icon: UserCheck,
    title: "Customer Satisfaction",
    description: "Higher satisfaction rates, reduced returns, and sustainable shopping experience.",
    color: "bg-secondary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Process Flow</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our intelligent system optimizes every step of the order journey
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div
                    className={`bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-md`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-card`}>
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
