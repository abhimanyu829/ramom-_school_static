'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Edit, Trash2 } from 'lucide-react';

export default function UnderGroupPage() {
  const [groups, setGroups] = useState([
    { id: 1, branch: 'Little Flower School', name: 'Liabilities' },
    { id: 2, branch: 'Little Flower School', name: 'Income' },
    { id: 3, branch: 'Little Flower School', name: 'Expense' },
    { id: 4, branch: 'Little Flower School', name: 'Assets' },
    { id: 5, branch: 'Little Flower School', name: 'Equity' },
  ]);

  const [branch, setBranch] = useState('Little Flower School');
  const [accountGroupName, setAccountGroupName] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountGroupName) return;
    setGroups([
      ...groups,
      {
        id: groups.length + 1,
        branch,
        name: accountGroupName,
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setAccountGroupName('');
  };

  return (
    <ERPLayout pageTitle="Under Group" breadcrumb={[{ label: 'Office Accounting' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Add Account Group Form (Matching img_06.png) */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Add Account Group</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Account group saved successfully!
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
                  Account Group <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Current Assets"
                  value={accountGroupName}
                  onChange={(e) => setAccountGroupName(e.target.value)}
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

          {/* Account Group List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Account Group List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {groups.map((g) => (
                    <tr key={g.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{g.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{g.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{g.name}</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => alert(`Edit Group ${g.name}`)}
                          className="p-1 rounded bg-[#191b1f] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setGroups(groups.filter((i) => i.id !== g.id))}
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
