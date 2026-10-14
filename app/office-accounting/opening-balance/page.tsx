'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Trash2 } from 'lucide-react';

export default function OpeningBalancePage() {
  const [balances, setBalances] = useState([
    { id: 1, branch: 'Little Flower School', account: 'Main Campus Petty Cash', credit: '0.00', debit: '1,500.00' },
    { id: 2, branch: 'Little Flower School', account: 'Student Tuition Fee Account', credit: '18,420.00', debit: '0.00' },
  ]);

  const [branch, setBranch] = useState('Little Flower School');
  const [account, setAccount] = useState('Main Campus Petty Cash');
  const [type, setType] = useState('Debit');
  const [amount, setAmount] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    setBalances([
      ...balances,
      {
        id: balances.length + 1,
        branch,
        account,
        credit: type === 'Credit' ? parseFloat(amount).toFixed(2) : '0.00',
        debit: type === 'Debit' ? parseFloat(amount).toFixed(2) : '0.00',
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setAmount('');
  };

  return (
    <ERPLayout pageTitle="Opening Balance" breadcrumb={[{ label: 'Office Accounting' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Add Opening Balance Form (Matching img_06.png) */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Add Opening Balance</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Opening balance saved!
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
                  Ledger Account <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Main Campus Petty Cash">Main Campus Petty Cash</option>
                  <option value="Student Tuition Fee Account">Student Tuition Fee Account</option>
                  <option value="School Bus Fuel & Maintenance">School Bus Fuel & Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Credit/Debit <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Debit">Debit</option>
                  <option value="Credit">Credit</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Amount <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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

          {/* Opening Balance List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Opening Balance List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Ledger Account</th>
                    <th className="py-2.5 px-3">Credit</th>
                    <th className="py-2.5 px-3">Debit</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {balances.map((b) => (
                    <tr key={b.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{b.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{b.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{b.account}</td>
                      <td className="py-2.5 px-3 text-[#4caf50] font-mono">${b.credit}</td>
                      <td className="py-2.5 px-3 text-[#ff8a80] font-mono">${b.debit}</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => setBalances(balances.filter((i) => i.id !== b.id))}
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
