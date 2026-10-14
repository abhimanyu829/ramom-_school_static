'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { List, PlusCircle, Trash2, CheckCircle2 } from 'lucide-react';

export default function VoucherPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [vouchers, setVouchers] = useState([
    {
      id: 1,
      voucherNo: 'VCH-2019-001',
      head: 'Classroom Projector Repair',
      credit: 'Main Campus Petty Cash',
      debit: 'Science Lab Consumables',
      method: 'Cash',
      amount: '150.00',
      date: '2019-04-01',
    },
    {
      id: 2,
      voucherNo: 'VCH-2019-002',
      head: 'School Library Magazine Subscription',
      credit: 'JPMorgan Chase (CHASE-992014)',
      debit: 'Library Acquisition Fund',
      method: 'Bank Transfer',
      amount: '320.00',
      date: '2019-03-28',
    },
  ]);

  const [form, setForm] = useState({
    branch: 'Little Flower School',
    head: '',
    creditLedger: 'Main Campus Petty Cash',
    debitLedger: 'School Bus Fuel & Maintenance',
    method: 'Cash',
    voucherNo: 'VCH-2019-003',
    amount: '0.00',
    date: '2019-04-01',
    description: '',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.head || !form.amount) return;
    setVouchers([
      ...vouchers,
      {
        id: vouchers.length + 1,
        voucherNo: form.voucherNo,
        head: form.head,
        credit: form.creditLedger,
        debit: form.debitLedger,
        method: form.method,
        amount: parseFloat(form.amount).toFixed(2),
        date: form.date,
      },
    ]);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setActiveTab('list');
    }, 1200);
  };

  return (
    <ERPLayout pageTitle="Voucher" breadcrumb={[{ label: 'Office Accounting' }]}>
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
            <span>Voucher List</span>
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
            <span>Create Voucher</span>
            {activeTab === 'create' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>
        </div>

        {/* Create Voucher Form */}
        {activeTab === 'create' && (
          <div className="p-6 max-w-4xl">
            {saved && (
              <div className="mb-4 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Voucher created successfully!</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Branch <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <select
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  >
                    <option value="Little Flower School">Little Flower School</option>
                    <option value="East Campus Primary">East Campus Primary</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Voucher Head <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    required
                    placeholder="Voucher Title / Purpose"
                    value={form.head}
                    onChange={(e) => setForm({ ...form, head: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Credit Ledger Account <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <select
                    value={form.creditLedger}
                    onChange={(e) => setForm({ ...form, creditLedger: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  >
                    <option>Main Campus Petty Cash</option>
                    <option>JPMorgan Chase (CHASE-992014)</option>
                    <option>Bank of America (BOFA-881290)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Debit Ledger Account <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <select
                    value={form.debitLedger}
                    onChange={(e) => setForm({ ...form, debitLedger: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  >
                    <option>School Bus Fuel & Maintenance</option>
                    <option>Science Lab Consumables</option>
                    <option>Staff Welfare Account</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Payment Method <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <select
                    value={form.method}
                    onChange={(e) => setForm({ ...form, method: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  >
                    <option>Cash</option>
                    <option>Bank Transfer</option>
                    <option>Cheque</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Voucher No <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="text"
                    required
                    value={form.voucherNo}
                    onChange={(e) => setForm({ ...form, voucherNo: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Amount <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                  Transaction Date <span className="text-[#ff5252]">*</span>
                </label>
                <div className="md:col-span-9">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-2">
                <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3 pt-2">
                  Description
                </label>
                <div className="md:col-span-9">
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Description of transaction"
                    className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 pt-3">
                <div className="md:col-start-4 md:col-span-9">
                  <button
                    type="submit"
                    className="bg-[#1e2126] border border-[#ff5252] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-5 py-2 rounded font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>⊕</span>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Voucher List View */}
        {activeTab === 'list' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Voucher No</th>
                    <th className="py-2.5 px-3">Head</th>
                    <th className="py-2.5 px-3">Credit Ledger</th>
                    <th className="py-2.5 px-3">Debit Ledger</th>
                    <th className="py-2.5 px-3">Method</th>
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {vouchers.map((v) => (
                    <tr key={v.id} className="hover:bg-[#282c34]">
                      <td className="py-3 px-3 text-[#ff5252] font-semibold">{v.id}</td>
                      <td className="py-3 px-3 font-mono font-medium text-white">{v.voucherNo}</td>
                      <td className="py-3 px-3 text-[#d1d5db]">{v.head}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{v.credit}</td>
                      <td className="py-3 px-3 text-[#9ca3af]">{v.debit}</td>
                      <td className="py-3 px-3 text-[#00bcd4]">{v.method}</td>
                      <td className="py-3 px-3 text-[#8b919e] font-mono">{v.date}</td>
                      <td className="py-3 px-3 text-right font-bold text-[#4caf50]">${v.amount}</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setVouchers(vouchers.filter((i) => i.id !== v.id))}
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
      </div>
    </ERPLayout>
  );
}
