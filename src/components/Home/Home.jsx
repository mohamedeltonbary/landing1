// import styles from './Home.module.css';

// const Home = () => (
//   <div className={styles.Home}>
//     Home Component
//   </div>
// );  mode mt-

// export default Home;

import React, { useState } from 'react';
import styles from './Home.module.css';
import heroImg from '../../assets/heroImg7.jpg';

const Home = ({ isFormOpen, setIsFormOpen }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // دالة الإرسال للجوجل شيت والواتساب
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // 1. رابط الـ Web App الخاص بك من Google Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwpgyS-i_4ksOlBAiSbWMzOnTyLrB-0-LsuFPUnlbQpXlc6bv4Kk8Oo7sJSlshxfR5U/exec';

    try {
      // إرسال البيانات للجوجل شيت في الخلفية
      // استخدمنا mode: 'no-cors' لأن جوجل سكريبت لا يدعم CORS بشكل مباشر مع JSON
      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Data sent to Google Sheets successfully!");
    } catch (err) {
      console.error("Sheet error:", err);
    }

    // 2. تجهيز وفتح الواتساب
    const phoneNumber = "201555376024";
    const text = `أهلاً، أنا ${formData.name}. إيميلي: ${formData.email}. رسالتي: ${formData.message}`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // تنفيذ الإرسال وفتح الواتساب وقفل الفورم
    window.open(waUrl, '_blank');
    setIsFormOpen(false);

    // إعادة تفريغ الحقول بعد الإرسال
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-10 pb-20 overflow-hidden">

      {/* محتوى الصفحة الأساسي */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* الناحية الشمال: الكلام */}
          <div className="text-center lg:text-left space-y-8 mt-10 lg:mt-0">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-xs md:text-sm font-semibold text-purple-300 whitespace-nowrap">
                  v2.0 is live: AI-Powered Workflow
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Manage Work <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                With Intelligence
              </span>
            </h1>

            {/* Description - زودنا النص هنا شوية */}
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              FocusFlow helps you organize, track, and complete your projects
              using the power of AI. Experience the next generation of productivity
              with automated scheduling and smart task prioritization.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-purple-600/20">
                Start Free Trial
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white border border-gray-800 px-8 py-4 rounded-xl font-bold transition-all cursor-pointer">
                Watch Demo
              </button>
            </div>

            {/* --- القسم الجديد: إحصائيات لملء الفراغ --- */}
            <div className="pt-8 border-t border-gray-800 flex flex-wrap justify-center lg:justify-start gap-8 opacity-80">
              <div>
                <p className="text-2xl font-bold text-white">12k+</p>
                <p className="text-sm text-gray-500">Active Users</p>
              </div>
              <div className="w-px h-10 bg-gray-800 hidden sm:block"></div>
              <div>
                <p className="text-2xl font-bold text-white">99%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
              <div className="w-px h-10 bg-gray-800 hidden sm:block"></div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-500">AI Support</p>
              </div>
            </div>
          </div>

          {/* الناحية اليمين: الصورة */}
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative border border-gray-800 p-2 bg-gray-900/50 rounded-2xl backdrop-blur-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={heroImg} alt="Dashboard" className="rounded-xl w-full h-98 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* --- الـ Floating WhatsApp Section --- */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end ">

        {isFormOpen && (
          <div className="mb-4 w-[300px] md:w-[350px] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 animate-bounce-in ">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Contact Support</h3>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                required
                type="text"
                value={formData.name}
                placeholder="Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white outline-none focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                required
                type="email"
                value={formData.email}
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white outline-none focus:border-purple-500"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                required
                value={formData.message}
                placeholder="How can we help?"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white outline-none focus:border-purple-500 h-24"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer">
                Send via WhatsApp
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform shadow-green-500/20 cursor-pointer"
        >
          <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Home;