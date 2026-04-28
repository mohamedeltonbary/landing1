import React from 'react';
// استورد الصور اللي شوفتها في فولدر الأصول عندك
import img1 from '../../assets/heroImg3.jpg';
import img2 from '../../assets/heroImg4.jpg';
import img3 from '../../assets/heroImg5.jpg';
import Style from "./Features.module.css"
const Features = () => {
  const featureList = [
    {
      title: "Smart Analysis",
      desc: "Our AI analyzes your workflow to provide the best productivity tips.",
      img: img1
    },
    {
      title: "Cloud Sync",
      desc: "Access your projects from anywhere in the world, at any time.",
      img: img2
    },
    {
      title: "Team Power",
      desc: "Collaborate with your team members in real-time with zero lag.",
      img: img3
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-purple-500">FocusFlow?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureList.map((item, index) => (
            <div key={index} className="cursor-pointer group p-6 bg-gray-900/50 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all duration-300 shadow-xl">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;