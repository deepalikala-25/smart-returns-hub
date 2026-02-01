import { 
  Package, 
  TrendingUp, 
  Recycle, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Truck
} from "lucide-react";

const orders = [
  { id: "ORD-7821", product: "Wireless Headphones", status: "delivered", customer: "John D.", redirected: false },
  { id: "ORD-7822", product: "Smart Watch", status: "redirected", customer: "Sarah M.", redirected: true },
  { id: "ORD-7823", product: "Laptop Stand", status: "in-transit", customer: "Mike R.", redirected: false },
  { id: "ORD-7824", product: "Keyboard", status: "processing", customer: "Emma L.", redirected: false },
  { id: "ORD-7825", product: "Monitor", status: "redirected", customer: "Alex K.", redirected: true },
];

const statusStyles: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  delivered: { bg: "bg-primary/10", text: "text-primary", icon: CheckCircle },
  redirected: { bg: "bg-secondary/20", text: "text-secondary-foreground", icon: Recycle },
  "in-transit": { bg: "bg-accent", text: "text-accent-foreground", icon: Truck },
  processing: { bg: "bg-muted", text: "text-muted-foreground", icon: Clock },
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Live Dashboard</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Track & <span className="text-gradient">Optimize</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time insights into your sustainable order management
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-secondary/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
              <span className="ml-4 text-sm text-muted-foreground font-medium">SmartFlow Dashboard</span>
            </div>

            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center text-primary text-sm">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>12%</span>
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">2,847</div>
                  <div className="text-sm text-muted-foreground">Total Orders</div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Recycle className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="flex items-center text-primary text-sm">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>23%</span>
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">423</div>
                  <div className="text-sm text-muted-foreground">Products Redirected</div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center text-destructive text-sm">
                      <ArrowDownRight className="w-4 h-4" />
                      <span>67%</span>
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">14.8%</div>
                  <div className="text-sm text-muted-foreground">Return Rate</div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="flex items-center text-primary text-sm">
                      <ArrowDownRight className="w-4 h-4" />
                      <span>18%</span>
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">1.2 days</div>
                  <div className="text-sm text-muted-foreground">Avg. Delivery</div>
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-muted/20 rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="font-display font-bold text-foreground">Recent Orders</h3>
                </div>
                <div className="divide-y divide-border">
                  {orders.map((order) => {
                    const style = statusStyles[order.status];
                    const StatusIcon = style.icon;
                    return (
                      <div key={order.id} className="px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                            <Package className="w-5 h-5 text-accent-foreground" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{order.product}</div>
                            <div className="text-sm text-muted-foreground">{order.id}</div>
                          </div>
                        </div>
                        <div className="hidden sm:block text-sm text-muted-foreground">{order.customer}</div>
                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${style.bg}`}>
                          <StatusIcon className={`w-4 h-4 ${style.text}`} />
                          <span className={`text-sm font-medium capitalize ${style.text}`}>
                            {order.status.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
