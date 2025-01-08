import React from 'react';
import { X, Rocket, Shield, Brain, Target, Coins, Users } from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20">
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">GNews AI Whitepaper</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-purple-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-purple-400" />
              Introduction
            </h3>
            <p className="text-gray-300 leading-relaxed">
              GNews AI represents a revolutionary approach to crypto news analysis and investment opportunities, 
              leveraging advanced artificial intelligence to provide real-time insights and predictions.
            </p>
          </section>

          {/* Core Features */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-purple-400" />
              Core Features
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Token Sniper AI</h4>
                <p className="text-gray-300">AI-powered algorithm scanning new token launches in real-time to detect projects with high potential returns.</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Signal Intelligence</h4>
                <p className="text-gray-300">Personalized AI-generated alerts on emerging projects and significant market movements.</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Enhanced Security</h4>
                <p className="text-gray-300">Advanced security measures including smart contract audits and anti-bot mechanisms.</p>
              </div>
            </div>
          </section>

          {/* Tokenomics */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Coins className="h-6 w-6 text-purple-400" />
              Tokenomics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Token Distribution</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Public Sale: 40%</li>
                  <li>• Development: 20%</li>
                  <li>• Marketing: 15%</li>
                  <li>• Team: 15%</li>
                  <li>• Reserve: 10%</li>
                </ul>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Token Utility</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Access to Premium Features</li>
                  <li>• Governance Rights</li>
                  <li>• Staking Rewards</li>
                  <li>• Platform Fee Discounts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-400" />
              Security Measures
            </h3>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
              <ul className="text-gray-300 space-y-2">
                <li>• Smart Contract Audits by CertiK</li>
                <li>• Multi-Signature Wallet Implementation</li>
                <li>• Anti-Bot Protection</li>
                <li>• Liquidity Lock for 24 Months</li>
                <li>• Regular Security Updates</li>
              </ul>
            </div>
          </section>

          {/* Technology */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-400" />
              Technology Stack
            </h3>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
              <ul className="text-gray-300 space-y-2">
                <li>• Advanced AI Models for Market Analysis</li>
                <li>• Blockchain Integration for Transparency</li>
                <li>• Real-time Data Processing</li>
                <li>• Secure API Infrastructure</li>
              </ul>
            </div>
          </section>

          {/* Community */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-purple-400" />
              Community & Governance
            </h3>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed">
                GNews AI implements a DAO structure where token holders can participate in key decisions 
                regarding platform development, feature prioritization, and treasury management. This ensures 
                that the platform evolves according to community needs while maintaining transparency and 
                decentralization.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}