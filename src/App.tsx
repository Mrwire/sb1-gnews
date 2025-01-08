import React, { useState, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { 
  Newspaper, 
  Globe,
  Zap,
  Github,
  DollarSign,
  ArrowDown,
  ChartBar,
  Users,
  Shield,
  Rocket,
  Target,
  Brain
} from 'lucide-react';
import { WhitepaperModal } from './components/WhitepaperModal';
import { LoadingStats } from './components/LoadingStats';
import { WalletConnect } from './components/WalletConnect';

function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-purple-600 pulse-ring flex items-center justify-center">
          <Newspaper className="h-12 w-12 text-white animate-glitch" />
        </div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 text-center">
          <p className="text-purple-400 font-mono">Initializing AI{dots}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('features');
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0a0118] overflow-x-hidden">
      <WhitepaperModal 
        isOpen={isWhitepaperOpen} 
        onClose={() => setIsWhitepaperOpen(false)} 
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Newspaper className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">GNews AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['features', 'tokenomics', 'roadmap', 'stats'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Newspaper className="h-16 w-16 text-purple-500" />
                <Globe className="absolute -top-2 -right-2 h-8 w-8 text-purple-400 animate-spin" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white ml-4 tracking-tight">
                GNews <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">AI</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              The crypto that knows everything before everyone else 📰🤖
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href="https://raydium.io/swap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105"
              >
                <span>Buy $GNEWS</span>
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <button 
                onClick={() => setIsWhitepaperOpen(true)}
                className="group bg-gray-800/50 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-2 hover:transform hover:scale-105"
              >
                <span>Whitepaper</span>
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              <LoadingStats />
              <LoadingStats />
              <LoadingStats />
              <LoadingStats />
            </div>

            <div className="relative mx-auto max-w-5xl mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gray-900/50 rounded-xl overflow-hidden h-[600px]">
                <Suspense fallback={<div className="w-full h-full bg-purple-900/20 animate-pulse" />}>
                  <Spline scene="https://prod.spline.design/JO0lUywbwz4NH1sp/scene.splinecode" />
                </Suspense>
              </div>
            </div>

            {/* Scroll Button */}
            <button
              onClick={() => scrollToSection('features')}
              className="animate-bounce bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/30 transition-colors"
            >
              <ArrowDown className="h-6 w-6 text-purple-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Powered by <span className="text-purple-400">AI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group">
              <Brain className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3>
              <p className="text-gray-400">Our AI processes millions of data points in real-time to provide accurate market insights and predictions.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group">
              <Users className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-400">Join our vibrant community of traders and investors who share insights and strategies.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group">
              <Shield className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Secure Platform</h3>
              <p className="text-gray-400">Built with advanced security measures to protect your investments and data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="relative py-20 bg-gradient-to-b from-black/30 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Token<span className="text-purple-400">omics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Distribution</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-gray-400">Public Sale</span>
                  <span className="text-purple-400 font-bold">40%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-400">Development</span>
                  <span className="text-purple-400 font-bold">20%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-400">Marketing</span>
                  <span className="text-purple-400 font-bold">15%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-400">Team</span>
                  <span className="text-purple-400 font-bold">15%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-400">Reserve</span>
                  <span className="text-purple-400 font-bold">10%</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Token Utility</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Access to Premium Features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Governance Rights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Staking Rewards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Platform Fee Discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-20 bg-gradient-to-b from-purple-900/20 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Road<span className="text-purple-400">map</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-purple-500/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-bold text-white mb-2">Q1 2024</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Launch Token on Solana</li>
                  <li>• Release Beta Platform</li>
                  <li>• Community Building</li>
                </ul>
              </div>
              <div className="relative pl-8 border-l-2 border-purple-500/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500/50"></div>
                <h3 className="text-xl font-bold text-white mb-2">Q2 2024</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• AI Trading Features</li>
                  <li>• Mobile App Development</li>
                  <li>• Partnership Announcements</li>
                </ul>
              </div>
              <div className="relative pl-8 border-l-2 border-purple-500/20">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500/30"></div>
                <h3 className="text-xl font-bold text-white mb-2">Q3 2024</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Advanced AI Features</li>
                  <li>• Cross-chain Integration</li>
                  <li>• DAO Governance Launch</li>
                </ul>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500/20"></div>
                <h3 className="text-xl font-bold text-white mb-2">Q4 2024</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Global Marketing Campaign</li>
                  <li>• NFT Marketplace Launch</li>
                  <li>• Major Exchange Listings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Live <span className="text-purple-400">Stats</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
              <LoadingStats />
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
              <LoadingStats />
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
              <LoadingStats />
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
              <LoadingStats />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;