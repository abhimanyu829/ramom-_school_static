'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { PlusCircle, List, Edit, Trash2, Building, Save } from 'lucide-react';

export default function BranchPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [branches, setBranches] = useState([
    {
      id: 1,
      branchName: 'Little Flower School',
      schoolName: 'Cambridge High School',
      email: 'littleflower@cambridge.edu',
      mobile: '+1267-529-7641',
      currency: 'USD',
      symbol: '$',
      city: 'Norristown',
      state: 'PA',
    },
    {
      id: 2,
      branchName: 'East Campus Primary',
      schoolName: 'Cambridge High School',
      email: 'eastprimary@cambridge.edu',
      mobile: '+1267-529-7642',
      currency: 'USD',
      symbol: '$',
      city: 'Philadelphia',
      state: 'PA',
    },
  ]);

  const [form, setForm] = useState({
    branchName: '',
    schoolName: 'Cambridge High School',
    email: '',
    mobileNo: '',
    currency: 'USD',
    currencySymbol: '$',
    city: '',
    state: '',
    address: '',
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.branchName) return;
    setBranches([
      ...branches,
      {
        id: branches.length + 1,
        branchName: form.branchName,
        schoolName: form.schoolName,
        email: form.email,
        mobile: form.mobileNo,
        currency: form.currency,
        symbol: form.currencySymbol,
        city: form.city,
        state: form.state,
      },
    ]);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    setForm({
      branchName: '',
      schoolName: 'Cambridge High School',
      email: '',
      mobileNo: '',
      currency: 'USD',
      currencySymbol: '$',
      city: '',
      state: '',
      address: '',
    });
  };

  return (
    <ERPLayout pageTitle="Branch">
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow">
        {/* Top Tabs Bar Matching img_02.png */}
        <div className="flex items-center gap-4 border-b border-[#32363f] px-6 pt-3">
          <button
            onClick={() => setActiveTab('list')}
            className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
              activeTab === 'list'
                ? 'text-[#ff5252]'
                : 'text-[#8b919e] hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Branch List</span>
            {activeTab === 'list' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('create')}
            className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
              activeTab === 'create'
                ? 'text-[#ff5252]'
                : 'text-[#8b919e] hover:text-white'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Create Branch</span>
            {activeTab === 'create' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>
        </div>

        {/* Create Branch Form */}
        {activeTab === 'create' && (
          <div className="p-6 max-w-4xl">
            {saveSuccess && (
              <div className="mb-4 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs">
                ✓ Branch saved successfully! Added to branch directory.
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Branch Name <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    required
                    value={form.branchName}
                    onChange={(e) => setForm({ ...form, branchName: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  School Name <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    required
                    value={form.schoolName}
                    onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Email <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Mobile No
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    value={form.mobileNo}
                    onChange={(e) => setForm({ ...form, mobileNo: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Currency <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    value={form.currency}
                    onChange={(e) => setForm({ ...form, currency: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Currency Symbol <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    value={form.currencySymbol}
                    onChange={(e) => setForm({ ...form, currencySymbol: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  City
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  State
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
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
                    rows={3}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 pt-3">
                <div className="md:col-start-4 md:col-span-9">
                  <button
                    type="submit"
                    className="bg-[#1e2126] border border-[#ff5252] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-5 py-2 rounded font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>⊕</span>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Branch List Table */}
        {activeTab === 'list' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1e2126] text-[#9ca3af] font-semibold border-b border-[#353942]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch Name</th>
                    <th className="py-2.5 px-3">School Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Mobile No</th>
                    <th className="py-2.5 px-3">Currency</th>
                    <th className="py-2.5 px-3">City / State</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2e3239]">
                  {branches.map((b) => (
                    <tr key={b.id} className="hover:bg-[#2a2d34]">
                      <td className="py-3 px-3 text-[#ff5252] font-bold">{b.id}</td>
                      <td className="py-3 px-3 text-white font-medium">{b.branchName}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{b.schoolName}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{b.email}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{b.mobile}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{b.currency} ({b.symbol})</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{b.city}, {b.state}</td>
                      <td className="py-3 px-3 text-right space-x-1.5">
                        <button
                          onClick={() => alert(`Editing ${b.branchName}`)}
                          className="p-1 rounded bg-[#1e2126] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete ${b.branchName}?`)) {
                              setBranches(branches.filter(item => item.id !== b.id));
                            }
                          }}
                          className="p-1 rounded bg-[#1e2126] text-[#ff5252] hover:bg-[#ff5252] hover:text-white transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </ERPLayout>
  );
}
