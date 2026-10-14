'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { List, PlusCircle, Trash2, Edit } from 'lucide-react';

export default function BankAccountPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      branch: 'Little Flower School',
      bankName: 'JPMorgan Chase',
      accountNo: 'CHASE-992014',
      accountHolder: 'Cambridge High School Operations',
      ifscCode: 'CHASUS33',
      bankBranch: 'Norristown Main Branch',
      bankAddress: 'Main St, Norristown PA',
    },
    {
      id: 2,
      branch: 'Little Flower School',
      bankName: 'Bank of America',
      accountNo: 'BOFA-881290',
      accountHolder: 'Cambridge High Tuition Escrow',
      ifscCode: 'BOFAUS3N',
      bankBranch: 'Philadelphia Center',
      bankAddress: 'Market St, Philadelphia PA',
    },
  ]);

  const [form, setForm] = useState({
    branch: 'Little Flower School',
    bankName: '',
    accountNo: '',
    accountHolder: '',
    ifscCode: '',
    bankBranch: '',
    bankAddress: '',
  });

  const [saved, setSaved] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.bankName || !form.accountNo) return;
    setAccounts([
      ...accounts,
      {
        id: accounts.length + 1,
        ...form,
      },
    ]);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setActiveTab('list');
    }, 1200);
  };

  return (
    <ERPLayout pageTitle="Bank Account" breadcrumb={[{ label: 'Office Accounting' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow">
        {/* Top Tabs Bar Matching img_07.png */}
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
            <span>Bank List</span>
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
            <span>Create Bank</span>
            {activeTab === 'create' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>
        </div>

        {/* Bank List View */}
        {activeTab === 'list' && (
          <div className="p-6">
            <div className="flex items-center justify-between text-xs text-[#9ca3af] mb-4">
              <div className="flex items-center gap-1.5">
                <select className="bg-[#1b1d22] border border-[#353942] rounded px-2 py-1 text-white text-xs">
                  <option>10</option>
                  <option>25</option>
                </select>
                <span>records per page</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Bank Name</th>
                    <th className="py-2.5 px-3">Account No</th>
                    <th className="py-2.5 px-3">Account Holder</th>
                    <th className="py-2.5 px-3">IFSC / Routing</th>
                    <th className="py-2.5 px-3">Bank Branch</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {accounts.map((acc) => (
                    <tr key={acc.id} className="hover:bg-[#282c34]">
                      <td className="py-3 px-3 text-[#ff5252] font-semibold">{acc.id}</td>
                      <td className="py-3 px-3 text-[#c7cbd2]">{acc.branch}</td>
                      <td className="py-3 px-3 text-white font-medium">{acc.bankName}</td>
                      <td className="py-3 px-3 font-mono text-[#00bcd4]">{acc.accountNo}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{acc.accountHolder}</td>
                      <td className="py-3 px-3 text-[#8b919e] font-mono">{acc.ifscCode}</td>
                      <td className="py-3 px-3 text-[#8b919e]">{acc.bankBranch}</td>
                      <td className="py-3 px-3 text-right space-x-1">
                        <button
                          onClick={() => setAccounts(accounts.filter((i) => i.id !== acc.id))}
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
        )}

        {/* Create Bank View */}
        {activeTab === 'create' && (
          <div className="p-6 max-w-2xl">
            {saved && (
              <div className="mb-4 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs">
                ✓ Bank account created!
              </div>
            )}

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Branch <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Little Flower School">Little Flower School</option>
                  <option value="East Campus Primary">East Campus Primary</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Bank Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. JPMorgan Chase"
                  value={form.bankName}
                  onChange={(e) => setForm({ ...form, bankName: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Account No <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Bank Account Number"
                  value={form.accountNo}
                  onChange={(e) => setForm({ ...form, accountNo: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Account Holder"
                  value={form.accountHolder}
                  onChange={(e) => setForm({ ...form, accountHolder: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  IFSC / Swift / Routing Code
                </label>
                <input
                  type="text"
                  placeholder="Branch Code"
                  value={form.ifscCode}
                  onChange={(e) => setForm({ ...form, ifscCode: e.target.value })}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#ff5252] hover:bg-[#e04545] text-white px-5 py-2.5 rounded font-semibold transition-colors"
                >
                  Save Bank Account
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </ERPLayout>
  );
}
