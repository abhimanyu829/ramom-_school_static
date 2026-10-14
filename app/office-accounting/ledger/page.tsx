'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Edit, Trash2 } from 'lucide-react';

export default function LedgerAccountPage() {
  const [ledgers, setLedgers] = useState([
    { id: 1, branch: 'Little Flower School', name: 'Student Tuition Fee Account', group: 'Income' },
    { id: 2, branch: 'Little Flower School', name: 'School Bus Fuel & Maintenance', group: 'Expense' },
    { id: 3, branch: 'Little Flower School', name: 'Main Campus Petty Cash', group: 'Assets' },
  ]);

  const [branch, setBranch] = useState('Little Flower School');
  const [underGroup, setUnderGroup] = useState('Income');
  const [ledgerName, setLedgerName] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ledgerName) return;
    setLedgers([
      ...ledgers,
      {
        id: ledgers.length + 1,
        branch,
        name: ledgerName,
        group: underGroup,
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setLedgerName('');
  };

  return (
    <ERPLayout pageTitle="Ledger Account" breadcrumb={[{ label: 'Office Accounting' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Add Ledger Account Form (Matching img_05.png) */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Ledger Account</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Ledger account registered successfully!
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
                  Under Group <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={underGroup}
                  onChange={(e) => setUnderGroup(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                  <option value="Assets">Assets</option>
                  <option value="Liabilities">Liabilities</option>
                  <option value="Equity">Equity</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Ledger Account Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Science Lab Consumables"
                  value={ledgerName}
                  onChange={(e) => setLedgerName(e.target.value)}
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

          {/* Ledger Account List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Ledger Account List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Ledger Account</th>
                    <th className="py-2.5 px-3">Group</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {ledgers.map((l) => (
                    <tr key={l.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{l.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{l.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{l.name}</td>
                      <td className="py-2.5 px-3 text-[#00bcd4] font-medium">{l.group}</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => setLedgers(ledgers.filter((i) => i.id !== l.id))}
                          className="p-1 rounded bg-[#ff5252] hover:bg-[#d32f2f] text-white transition-colors"
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
