import React, { useState } from 'react';
import { 
  Minimize2, 
  Maximize2, 
  X, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Settings,
  Wifi,
  Battery,
  Volume2,
  Search,
  Home,
  User,
  Mail,
  Calendar,
  Camera,
  Music
} from 'lucide-react';

function App() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const apps = [
    { icon: Home, name: 'الرئيسية', color: 'text-blue-600' },
    { icon: User, name: 'الملف الشخصي', color: 'text-green-600' },
    { icon: Mail, name: 'البريد', color: 'text-red-600' },
    { icon: Calendar, name: 'التقويم', color: 'text-purple-600' },
    { icon: Camera, name: 'الكاميرا', color: 'text-pink-600' },
    { icon: Music, name: 'الموسيقى', color: 'text-orange-600' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div 
        className={`window-frame transition-all duration-500 ${
          isMaximized 
            ? 'w-full h-full max-w-none max-h-none' 
            : 'w-full max-w-4xl h-full max-h-[700px]'
        }`}
      >
        {/* Title Bar */}
        <div className="title-bar px-4 py-3 flex items-center justify-between">
          <div className="window-controls flex items-center">
            <button className="control-btn close-btn"></button>
            <button className="control-btn minimize-btn"></button>
            <button 
              className="control-btn maximize-btn"
              onClick={toggleMaximize}
            ></button>
          </div>
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-medium text-gray-700">نافذة التطبيق</h1>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Wifi size={16} />
            <Battery size={16} />
            <Volume2 size={16} />
            <span className="text-xs">14:30</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area h-full flex flex-col">
          {/* Navigation Bar */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="البحث..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 pr-10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
              <button className="p-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
                <Settings size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="app-content p-6 h-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">مرحباً بك في التطبيق</h2>
                <p className="text-gray-600">تصميم نافذة حديث وأنيق</p>
              </div>

              {/* Apps Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {apps.map((app, index) => (
                  <div key={index} className={`feature-card p-4 text-center floating`}>
                    <div className="icon-container w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <app.icon size={24} className={app.color} />
                    </div>
                    <h3 className="text-sm font-medium text-gray-700">{app.name}</h3>
                  </div>
                ))}
              </div>

              {/* Device Preview Section */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">معاينة الأجهزة</h3>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                      <Smartphone size={28} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">الهاتف</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                      <Tablet size={28} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">الجهاز اللوحي</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                      <Monitor size={28} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600">سطح المكتب</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-6 py-3 border-t border-white/10 bg-white/5">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>جاهز</span>
              <span>تم التحديث الآن</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;