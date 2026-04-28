import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Up to 5 Projects", "Basic AI Analysis", "Community Support"],
      button: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "$19",
      features: ["Unlimited Projects", "Advanced AI Insights", "Priority Support", "Team Collaboration"],
      button: "Try Pro",
      highlight: true // ده الكارت اللي هنخليه يبرز شوية
    },
    {
      name: "Enterprise",
      price: "$49",
      features: ["Custom Solutions", "dedicated AI Model", "24/7 Phone Support", "Secure Hosting"],
      button: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that works best for your productivity goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border ${plan.highlight ? 'border-purple-500 bg-purple-500/5 shadow-2xl shadow-purple-500/10 scale-105' : 'border-gray-800 bg-gray-900/40'} transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-500">/month</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;