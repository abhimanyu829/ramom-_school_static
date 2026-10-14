'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import {
  Settings,
  Palette,
  Image as ImageIcon,
  Save,
  CheckCircle2,
  Upload,
  GraduationCap,
} from 'lucide-react';

export default function GlobalSettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'theme' | 'logo'>('general');
  const [savedMsg, setSavedMsg] = useState(false);

  // General Settings state matching g_setting.png
  const [general, setGeneral] = useState({
    instituteName: 'Cambridge High School',
    instituteCode: 'RSM-',
    codeAsPrefix: true,
    mobileNo: '+1267-529-7641',
    address: '4458 Quincy Street Norristown. <br> PA 19403',
    currency: 'USD',
    currencySymbol: '$',
    language: 'English',
    smsProvider: 'Disabled',
    academicSession: '2018-2019',
    timezone: '(GMT+06:00) Dhaka',
    animations: 'fadeInUp',
  });

  // Theme Settings state matching image_9.jpg
  const [theme, setTheme] = useState({
    bgImage: 'http://d.revaxarts-themes.com/_img/bg.png',
    bgRepeat: 'repeat',
    bgAttachment: 'fixed',
    bgColor: 'F3F3F3',
    textColor: '585858',
    linkColor: '111111',
    rulerTop: 'E5E5E5',
    rulerBottom: 'F9F9F9',
    sidebarBgImage: 'http://d.revaxarts-themes.com/_img/noise.gif',
    sidebarRepeat: 'repeat-y',
    sidebarBgColor: '333333',
    sidebarTextColor: 'F1F1F1',
    sidebarLinkColor: 'F1F1F1',
    sidebarActive: '111111',
    sidebarActiveText: 'F1F1F1',
    sidebarRulerTop: '222222',
    sidebarRulerBottom: '444444',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <ERPLayout pageTitle="Global Settings" breadcrumb={[{ label: 'Settings' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow">
        {/* Top Tabs Bar Matching g_setting.png & image_9.jpg */}
        <div className="flex items-center gap-6 border-b border-[#32363f] px-6 pt-3 bg-[#202328]">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
              activeTab === 'general'
                ? 'text-[#ff5252]'
                : 'text-[#8b919e] hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>General Settings</span>
            {activeTab === 'general' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('theme')}
            className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
              activeTab === 'theme'
                ? 'text-[#ff5252]'
                : 'text-[#8b919e] hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Theme Settings</span>
            {activeTab === 'theme' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('logo')}
            className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
              activeTab === 'logo'
                ? 'text-[#ff5252]'
                : 'text-[#8b919e] hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Logo</span>
            {activeTab === 'logo' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>
        </div>

        {savedMsg && (
          <div className="m-6 mb-0 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings updated successfully!</span>
          </div>
        )}

        {/* TAB 1: GENERAL SETTINGS (MATCHING g_setting.png) */}
        {activeTab === 'general' && (
          <form onSubmit={handleSave} className="p-6 md:p-8 space-y-4 max-w-4xl text-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Institute Name
              </label>
              <div className="md:col-span-9">
                <input
                  type="text"
                  value={general.instituteName}
                  onChange={(e) => setGeneral({ ...general, instituteName: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Institution Code
              </label>
              <div className="md:col-span-9 space-y-2">
                <input
                  type="text"
                  value={general.instituteCode}
                  onChange={(e) => setGeneral({ ...general, instituteCode: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
                <label className="flex items-center gap-2 text-[11px] text-[#8e94a0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={general.codeAsPrefix}
                    onChange={(e) => setGeneral({ ...general, codeAsPrefix: e.target.checked })}
                    className="rounded bg-[#1e2126] border-[#353942] text-[#ff5252]"
                  />
                  <span>The Institute Code will be used as the prefix for Student (Registration No).</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Mobile No
              </label>
              <div className="md:col-span-9">
                <input
                  type="text"
                  value={general.mobileNo}
                  onChange={(e) => setGeneral({ ...general, mobileNo: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3 pt-2">
                Address
              </label>
              <div className="md:col-span-9">
                <textarea
                  rows={2}
                  value={general.address}
                  onChange={(e) => setGeneral({ ...general, address: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Currency
              </label>
              <div className="md:col-span-9">
                <input
                  type="text"
                  value={general.currency}
                  onChange={(e) => setGeneral({ ...general, currency: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Currency Symbol
              </label>
              <div className="md:col-span-9">
                <input
                  type="text"
                  value={general.currencySymbol}
                  onChange={(e) => setGeneral({ ...general, currencySymbol: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Language
              </label>
              <div className="md:col-span-9">
                <select
                  value={general.language}
                  onChange={(e) => setGeneral({ ...general, language: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Sms Service Provider
              </label>
              <div className="md:col-span-9">
                <select
                  value={general.smsProvider}
                  onChange={(e) => setGeneral({ ...general, smsProvider: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>Disabled</option>
                  <option>Twilio</option>
                  <option>Nexmo</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Academic Session
              </label>
              <div className="md:col-span-9">
                <select
                  value={general.academicSession}
                  onChange={(e) => setGeneral({ ...general, academicSession: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>2018-2019</option>
                  <option>2019-2020</option>
                  <option>2020-2021</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Timezone
              </label>
              <div className="md:col-span-9">
                <select
                  value={general.timezone}
                  onChange={(e) => setGeneral({ ...general, timezone: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>(GMT+06:00) Dhaka</option>
                  <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                  <option>(GMT+00:00) UTC / London</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Animations
              </label>
              <div className="md:col-span-9">
                <select
                  value={general.animations}
                  onChange={(e) => setGeneral({ ...general, animations: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>fadeInUp</option>
                  <option>fadeIn</option>
                  <option>none</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 pt-4">
              <div className="md:col-start-4 md:col-span-9">
                <button
                  type="submit"
                  className="bg-[#ff5252] hover:bg-[#e04545] text-white px-6 py-2.5 rounded font-bold text-xs transition-colors shadow"
                >
                  Save Global Settings
                </button>
              </div>
            </div>
          </form>
        )}

        {/* TAB 2: THEME SETTINGS (MATCHING image_9.jpg) */}
        {activeTab === 'theme' && (
          <form onSubmit={handleSave} className="p-6 md:p-8 space-y-6 max-w-4xl text-xs">
            {/* Color Swatch Bar */}
            <div>
              <div className="font-bold text-white text-sm mb-2">Colors</div>
              <div className="flex items-center gap-2">
                <span className="text-[#a0a6b2] text-xs">Themes:</span>
                <div className="flex items-center gap-1.5 p-1 bg-[#1e2126] border border-[#353942] rounded">
                  {['#000000', '#0000ff', '#ffffff', '#556b2f', '#ff8c00', '#20b2aa', '#e91e63', '#ff9800'].map(
                    (color, cidx) => (
                      <button
                        type="button"
                        key={cidx}
                        onClick={() => alert(`Theme preset ${color} activated!`)}
                        style={{ backgroundColor: color }}
                        className="w-5 h-5 rounded-xs border border-white/20 hover:scale-110 transition-transform"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* General Settings Section */}
            <div className="space-y-3 pt-2">
              <div className="font-bold text-white text-sm border-b border-[#30343c] pb-1.5">General</div>

              <div>
                <label className="block text-[#a0a6b2] mb-1">Background Image</label>
                <input
                  type="text"
                  value={theme.bgImage}
                  onChange={(e) => setTheme({ ...theme, bgImage: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#a0a6b2]">Background repeat:</span>
                  {['repeat', 'no-repeat', 'repeat-x', 'repeat-y'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="bgRepeat"
                        checked={theme.bgRepeat === opt}
                        onChange={() => setTheme({ ...theme, bgRepeat: opt })}
                        className="text-[#ff5252]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#a0a6b2]">Background attachment:</span>
                  {['scroll', 'fixed'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="bgAttachment"
                        checked={theme.bgAttachment === opt}
                        onChange={() => setTheme({ ...theme, bgAttachment: opt })}
                        className="text-[#ff5252]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Code Inputs Matching image_9.jpg */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">BG Color:</label>
                  <input
                    type="text"
                    value={theme.bgColor}
                    onChange={(e) => setTheme({ ...theme, bgColor: e.target.value })}
                    className="w-20 bg-[#f3f3f3] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Textcolor:</label>
                  <input
                    type="text"
                    value={theme.textColor}
                    onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
                    className="w-20 bg-[#585858] text-white border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Linkcolor:</label>
                  <input
                    type="text"
                    value={theme.linkColor}
                    onChange={(e) => setTheme({ ...theme, linkColor: e.target.value })}
                    className="w-20 bg-[#111111] text-white border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Ruler top:</label>
                  <input
                    type="text"
                    value={theme.rulerTop}
                    onChange={(e) => setTheme({ ...theme, rulerTop: e.target.value })}
                    className="w-20 bg-[#e5e5e5] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Ruler bottom:</label>
                  <input
                    type="text"
                    value={theme.rulerBottom}
                    onChange={(e) => setTheme({ ...theme, rulerBottom: e.target.value })}
                    className="w-20 bg-[#f9f9f9] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="space-y-3 pt-4 border-t border-[#30343c]">
              <div className="font-bold text-white text-sm border-b border-[#30343c] pb-1.5">Sidebar</div>

              <div>
                <label className="block text-[#a0a6b2] mb-1">Sidebar Background Image</label>
                <input
                  type="text"
                  value={theme.sidebarBgImage}
                  onChange={(e) => setTheme({ ...theme, sidebarBgImage: e.target.value })}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#a0a6b2]">Sidebar Background repeat:</span>
                {['repeat', 'no-repeat', 'repeat-x', 'repeat-y'].map((opt) => (
                  <label key={opt} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="sidebarRepeat"
                      checked={theme.sidebarRepeat === opt}
                      onChange={() => setTheme({ ...theme, sidebarRepeat: opt })}
                      className="text-[#ff5252]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">BG Color:</label>
                  <input
                    type="text"
                    value={theme.sidebarBgColor}
                    onChange={(e) => setTheme({ ...theme, sidebarBgColor: e.target.value })}
                    className="w-20 bg-[#333333] text-white border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Textcolor:</label>
                  <input
                    type="text"
                    value={theme.sidebarTextColor}
                    onChange={(e) => setTheme({ ...theme, sidebarTextColor: e.target.value })}
                    className="w-20 bg-[#f1f1f1] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Linkcolor:</label>
                  <input
                    type="text"
                    value={theme.sidebarLinkColor}
                    onChange={(e) => setTheme({ ...theme, sidebarLinkColor: e.target.value })}
                    className="w-20 bg-[#f1f1f1] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Active:</label>
                  <input
                    type="text"
                    value={theme.sidebarActive}
                    onChange={(e) => setTheme({ ...theme, sidebarActive: e.target.value })}
                    className="w-20 bg-[#111111] text-white border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#8e94a0] mb-0.5">Active Text:</label>
                  <input
                    type="text"
                    value={theme.sidebarActiveText}
                    onChange={(e) => setTheme({ ...theme, sidebarActiveText: e.target.value })}
                    className="w-20 bg-[#f1f1f1] text-black border border-[#353942] rounded px-2 py-1 font-mono text-center"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#ff5252] hover:bg-[#e04545] text-white px-6 py-2.5 rounded font-bold text-xs transition-colors shadow"
              >
                Save Theme Colors
              </button>
            </div>
          </form>
        )}

        {/* TAB 3: LOGO (MATCHING g_setting.png) */}
        {activeTab === 'logo' && (
          <div className="p-6 md:p-8 space-y-6 max-w-4xl text-xs">
            <div className="font-bold text-white text-sm border-b border-[#30343c] pb-2 flex items-center gap-2">
              <span className="text-[#ff5252]">🍃</span>
              <span>Logo</span>
            </div>

            {/* 3 Logo Preview Panels matching g_setting.png */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* System Logo */}
              <div className="space-y-2">
                <span className="text-[#8e94a0] font-semibold">System Logo</span>
                <div className="h-36 rounded bg-[#1e2126] border border-[#353942] flex items-center justify-center p-4">
                  <div className="w-16 h-16 rounded-lg bg-[#24272d] border-2 border-[#ff5252] flex items-center justify-center shadow">
                    <GraduationCap className="w-10 h-10 text-[#ff5252]" />
                  </div>
                </div>
              </div>

              {/* Text Logo */}
              <div className="space-y-2">
                <span className="text-[#8e94a0] font-semibold">Text Logo</span>
                <div className="h-36 rounded bg-[#1e2126] border border-[#353942] flex items-center justify-center p-4">
                  <div className="flex items-center gap-2 bg-[#25282e] px-4 py-2 rounded border border-[#33373f]">
                    <div className="w-6 h-6 rounded bg-[#ff5252] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-sm tracking-wide text-white">
                      <span className="text-[#ff5252]">ABHIBHI</span>DEVELOPERS
                    </span>
                  </div>
                </div>
              </div>

              {/* Printing Logo */}
              <div className="space-y-2">
                <span className="text-[#8e94a0] font-semibold">Printing Logo</span>
                <div className="h-36 rounded bg-[#1e2126] border border-[#353942] flex items-center justify-center p-4">
                  <div className="flex items-center gap-2 bg-[#25282e] px-4 py-2 rounded border border-[#33373f]">
                    <div className="w-6 h-6 rounded bg-[#1e2126] border border-[#ff5252] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-[#ff5252]" />
                    </div>
                    <div className="text-left">
                      <span className="block font-black text-xs text-[#ff5252]">ABHIBHIDEVELOPERS</span>
                      <span className="block text-[8px] uppercase tracking-wider text-white">School ERP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Background Sliders */}
            <div className="pt-6 border-t border-[#30343c] space-y-3">
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span className="text-[#ff5252]">🚪</span>
                <span>Login Background</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[#8e94a0] font-semibold block mb-1">Slider 1</span>
                  <div className="h-32 rounded bg-[#2a1c22] border border-[#353942] overflow-hidden flex items-center justify-center text-xs text-[#a0a6b2]">
                    [ Desk / Notebook Workspace ]
                  </div>
                </div>
                <div>
                  <span className="text-[#8e94a0] font-semibold block mb-1">Slider 2</span>
                  <div className="h-32 rounded bg-[#1b2230] border border-[#353942] overflow-hidden flex items-center justify-center text-xs text-[#a0a6b2]">
                    [ Keyboard / Dark Lab ]
                  </div>
                </div>
                <div>
                  <span className="text-[#8e94a0] font-semibold block mb-1">Slider 3</span>
                  <div className="h-32 rounded bg-[#27261d] border border-[#353942] overflow-hidden flex items-center justify-center text-xs text-[#a0a6b2]">
                    [ Color Pencils & Stationeries ]
                  </div>
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => alert('Background assets refreshed!')}
                  className="bg-[#1e2126] border border-[#ff5252] text-white hover:bg-[#ff5252] px-5 py-2 rounded font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ERPLayout>
  );
}
