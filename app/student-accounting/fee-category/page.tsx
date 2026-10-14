'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Edit, Trash2 } from 'lucide-react';

export default function FeeCategoryPage() {
  const [feeCategories, setFeeCategories] = useState([
    { id: 1, branch: 'Little Flower School', name: 'Board Fees', amount: '100', remarks: 'School admission fees' },
    { id: 2, branch: 'Little Flower School', name: 'Jan month fees', amount: '100', remarks: 'Jan month fee' },
    { id: 3, branch: 'Little Flower School', name: 'Admission fees', amount: '511', remarks: 'School admission fees' },
  ]);

  const [branch, setBranch] = useState('Little Flower School');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;
    setFeeCategories([
      ...feeCategories,
      {
        id: feeCategories.length + 1,
        branch,
        name,
        amount,
        remarks: remarks || 'Standard fee item',
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setName('');
    setAmount('');
    setRemarks('');
  };

  return (
    <ERPLayout pageTitle="Fee Category" breadcrumb={[{ label: 'Student Accounting' }, { label: 'Fees' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Fee Category Form (Matching img_05.png) */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Fee Category</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Fee category saved successfully!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Branch <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Little Flower School">Little Flower School</option>
                  <option value="East Campus Primary">East Campus Primary</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Fee Category Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Amount <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Remarks
                </label>
                <textarea
                  rows={3}
                  placeholder="Remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#1a1c20] border border-[#ff5252] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-5 py-2 rounded font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>⊕</span>
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>

          {/* Fee Category List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Fee Category List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Remarks</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {feeCategories.map((f) => (
                    <tr key={f.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-bold">{f.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{f.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{f.name}</td>
                      <td className="py-2.5 px-3 font-semibold text-[#00bcd4]">${f.amount}</td>
                      <td className="py-2.5 px-3 text-[#9ca3af]">{f.remarks}</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => alert(`Edit ${f.name}`)}
                          className="p-1 rounded bg-[#191b1f] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setFeeCategories(feeCategories.filter(i => i.id !== f.id))}
                          className="p-1 rounded bg-[#191b1f] text-[#ff5252] hover:bg-[#ff5252] hover:text-white transition-colors"
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
        </div>
      </div>
    </ERPLayout>
  );
}
