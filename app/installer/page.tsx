'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  Shield,
  Code,
  Database,
  Server,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lock,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

export default function InstallerPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states for each step
  const [purchaseData, setPurchaseData] = useState({
    username: 'envato_buyer_2020',
    code: '8b42fc81-4231-4830-ba99-847291a9f390',
  });

  const [dbData, setDbData] = useState({
    hostname: 'localhost',
    dbName: 'abhibhidevelopers_school_db',
    username: 'root',
    password: '••••••••',
  });

  const [installData, setInstallData] = useState({
    schoolName: 'Cambridge High School',
    superadminName: 'Super Admin',
    superadminEmail: 'superadmin@cambridge.edu',
    superadminPassword: 'Password123!',
    timezone: '(GMT-11:00) Pacific, Midway',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { num: 1, label: 'Requirements', icon: <Shield className="w-4 h-4" /> },
    { num: 2, label: 'Purchase Code', icon: <Code className="w-4 h-4" /> },
    { num: 3, label: 'Database', icon: <Database className="w-4 h-4" /> },
    { num: 4, label: 'Install', icon: <Server className="w-4 h-4" /> },
    { num: 5, label: 'Completed', icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  const requirementsList = [
    { ext: 'PHP 5.6+', result: 'v.7.0.33', status: 'good' },
    { ext: 'MySQLi PHP Extension', result: 'Enabled', status: 'good' },
    { ext: 'OpenSSL PHP Extension', result: 'Enabled', status: 'good' },
    { ext: 'MBString PHP Extension', result: 'Enabled', status: 'good' },
    { ext: 'GD PHP Extension', result: 'Enabled', status: 'good' },
    { ext: 'Zip PHP Extension', result: 'Enabled', status: 'good' },
    { ext: 'allow_url_fopen', result: 'Enabled', status: 'good' },
    { ext: 'Internet Connection', result: 'Yes', status: 'good' },
    { ext: 'application/config/config.php Writable', result: 'Yes', status: 'good' },
    { ext: 'application/config/database.php Writable', result: 'Yes', status: 'good' },
    { ext: 'application/config/routes.php Writable', result: 'Yes', status: 'good' },
  ];

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6] text-[#333333] flex flex-col justify-between py-6 px-4">
      {/* Top Banner Navigation */}
      <div className="max-w-2xl mx-auto w-full flex items-center justify-between text-xs pb-4">
        <Link
          href="/dashboard"
          className="text-[#666666] hover:text-[#e74c3c] font-medium flex items-center gap-1.5 transition-colors"
        >
          <span>← Back to ERP Dashboard</span>
        </Link>
        <Link
          href="/login"
          className="text-[#e74c3c] hover:underline font-medium flex items-center gap-1.5 transition-colors"
        >
          <span>Go to Login Screen →</span>
        </Link>
      </div>

      {/* Main Installer Card */}
      <div className="max-w-2xl mx-auto w-full">
        {/* Header Logo Matching Screenshot */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-14 h-14 rounded-lg bg-[#1a1c22] border-2 border-[#ff5252] flex items-center justify-center shadow-md mb-2">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>
          <span className="text-xl font-black text-[#ff5252] tracking-wider">ABHIBHIDEVELOPERS</span>
          <span className="text-xs text-[#555555] font-semibold mt-0.5">Web Application Installer</span>
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-lg shadow-sm border border-[#e1e4e8] overflow-hidden">
          {/* Stepper Tabs Bar Matching Mockup */}
          <div className="border-b border-[#e1e4e8] px-4 pt-4 pb-2 bg-white">
            <div className="flex items-center justify-between relative">
              {steps.map((st) => {
                const isActive = currentStep === st.num;
                const isPassed = currentStep > st.num;
                return (
                  <button
                    key={st.num}
                    onClick={() => setCurrentStep(st.num)}
                    className={`flex items-center gap-1.5 text-xs font-semibold py-2 px-2 transition-all relative z-10 ${
                      isActive
                        ? 'text-[#ff5252]'
                        : isPassed
                        ? 'text-[#2ecc71]'
                        : 'text-[#888888] hover:text-[#555555]'
                    }`}
                  >
                    <span className={isActive ? 'text-[#ff5252]' : isPassed ? 'text-[#2ecc71]' : 'text-[#999999]'}>
                      {st.icon}
                    </span>
                    <span className="hidden sm:inline">{st.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252] -mb-2"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 1: Requirements */}
          {currentStep === 1 && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#eceff1] text-[#333333] font-bold text-left">
                      <th className="py-2.5 px-3">Extensions</th>
                      <th className="py-2.5 px-3 text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f4f7]">
                    {requirementsList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#fbfcfd]">
                        <td className="py-2.5 px-3 text-[#444444] font-medium">{row.ext}</td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="inline-block bg-[#4caf50] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                            {row.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-[#eceff1] flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={isProcessing}
                  className="bg-white hover:bg-[#f8f9fa] border border-[#d0d7de] text-[#333333] font-medium text-xs px-5 py-2 rounded shadow-xs transition-colors"
                >
                  {isProcessing ? 'Verifying...' : 'Start The Installation'}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Purchase Code */}
          {currentStep === 2 && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Envato Username *
                </label>
                <input
                  type="text"
                  value={purchaseData.username}
                  onChange={(e) => setPurchaseData({ ...purchaseData, username: e.target.value })}
                  placeholder="Enter Envato Username"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Purchase Code *
                </label>
                <input
                  type="text"
                  value={purchaseData.code}
                  onChange={(e) => setPurchaseData({ ...purchaseData, code: e.target.value })}
                  placeholder="Enter Item Purchase Code"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-[#eceff1] flex justify-end gap-2">
                <button
                  onClick={handleNext}
                  disabled={isProcessing}
                  className="bg-white hover:bg-[#f8f9fa] border border-[#d0d7de] text-[#333333] font-medium text-xs px-5 py-2 rounded shadow-xs transition-colors"
                >
                  {isProcessing ? 'Verifying License...' : 'Next Step'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Database */}
          {currentStep === 3 && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Hostname *
                </label>
                <input
                  type="text"
                  value={dbData.hostname}
                  onChange={(e) => setDbData({ ...dbData, hostname: e.target.value })}
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Database Name *
                </label>
                <input
                  type="text"
                  value={dbData.dbName}
                  onChange={(e) => setDbData({ ...dbData, dbName: e.target.value })}
                  placeholder="Database Name"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Username *
                </label>
                <input
                  type="text"
                  value={dbData.username}
                  onChange={(e) => setDbData({ ...dbData, username: e.target.value })}
                  placeholder="Database Username"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={dbData.password}
                  onChange={(e) => setDbData({ ...dbData, password: e.target.value })}
                  placeholder="Database Password"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-[#eceff1] flex justify-end gap-2">
                <button
                  onClick={handleNext}
                  disabled={isProcessing}
                  className="bg-white hover:bg-[#f8f9fa] border border-[#d0d7de] text-[#333333] font-medium text-xs px-5 py-2 rounded shadow-xs transition-colors"
                >
                  {isProcessing ? 'Connecting...' : 'Setup Database'}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Install */}
          {currentStep === 4 && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  School Name *
                </label>
                <input
                  type="text"
                  value={installData.schoolName}
                  onChange={(e) => setInstallData({ ...installData, schoolName: e.target.value })}
                  placeholder="School Name"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Superadmin Name *
                </label>
                <input
                  type="text"
                  value={installData.superadminName}
                  onChange={(e) => setInstallData({ ...installData, superadminName: e.target.value })}
                  placeholder="Superadmin Name"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Superadmin Email *
                </label>
                <input
                  type="email"
                  value={installData.superadminEmail}
                  onChange={(e) => setInstallData({ ...installData, superadminEmail: e.target.value })}
                  placeholder="Superadmin Email (Login Username)"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Superadmin Password *
                </label>
                <input
                  type="password"
                  value={installData.superadminPassword}
                  onChange={(e) => setInstallData({ ...installData, superadminPassword: e.target.value })}
                  placeholder="Superadmin Login Password"
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] mb-1.5">
                  Timezone *
                </label>
                <select
                  value={installData.timezone}
                  onChange={(e) => setInstallData({ ...installData, timezone: e.target.value })}
                  className="w-full border border-[#d0d7de] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#ff5252]"
                >
                  <option>(GMT-11:00) Pacific, Midway</option>
                  <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                  <option>(GMT+00:00) UTC / London</option>
                  <option>(GMT+06:00) Dhaka / Asia</option>
                </select>
              </div>

              <div className="mt-6 pt-4 border-t border-[#eceff1] flex justify-end gap-2">
                <button
                  onClick={handleNext}
                  disabled={isProcessing}
                  className="bg-white hover:bg-[#f8f9fa] border border-[#d0d7de] text-[#333333] font-medium text-xs px-5 py-2 rounded shadow-xs transition-colors"
                >
                  {isProcessing ? 'Installing System Tables...' : 'Install'}
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Completed */}
          {currentStep === 5 && (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4caf50]/10 text-[#4caf50] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-base font-bold text-[#333333]">
                Congratulations!! The installation was successfull
              </h2>
              <p className="text-xs text-[#666666]">
                Enter the url for login and follow the instructions :
              </p>
              <div className="pt-2">
                <Link
                  href="/login"
                  className="inline-block text-[#00bcd4] hover:underline font-semibold text-xs bg-[#e0f7fa] px-4 py-2 rounded border border-[#b2ebf2]"
                >
                  http://localhost/fresh/authentication → Proceed to Login
                </Link>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded bg-[#ff5252] text-white text-xs font-semibold hover:bg-[#e04545] transition-colors"
                >
                  Open ERP Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-[11px] text-[#777777] mt-6">
          2026 © All Rights Reserved - <span className="text-[#00bcd4]">techtune</span> | ABHIBHIDEVELOPERS
        </div>
      </div>
    </div>
  );
}
