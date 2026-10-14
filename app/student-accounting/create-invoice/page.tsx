'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Filter, Receipt, CheckSquare, Square, DollarSign, CheckCircle2 } from 'lucide-react';

export default function CreateSingleInvoicePage() {
  const router = useRouter();
  const [branch, setBranch] = useState('Little Flower School');
  const [className, setClassName] = useState('Two');
  const [section, setSection] = useState('B');
  const [studentName, setStudentName] = useState('Angie Crowther');

  // Fee categories checkboxes matching img_07.png
  const [categories, setCategories] = useState([
    { id: 1, name: 'Admission fees', remarks: 'School admission fees', amount: 511, checked: true },
    { id: 2, name: 'Jan month fees', remarks: 'Jan month fee', amount: 100, checked: true },
    { id: 3, name: 'Board Fees', remarks: 'School admission fees', amount: 100, checked: true },
  ]);

  const [discount, setDiscount] = useState('0');
  const [date, setDate] = useState('2019-04-01');
  const [onlinePayment, setOnlinePayment] = useState('Enable');
  const [quickAmount, setQuickAmount] = useState('10');
  const [quickRemarks, setQuickRemarks] = useState('Initial fee deposit');
  const [quickMethod, setQuickMethod] = useState('Cash');
  const [saved, setSaved] = useState(false);

  const toggleCategory = (id: number) => {
    setCategories(
      categories.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
  };

  const totalAmount = categories
    .filter((c) => c.checked)
    .reduce((sum, c) => sum + c.amount, 0);

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      router.push('/student-accounting/invoice-history');
    }, 1200);
  };

  return (
    <ERPLayout pageTitle="Create Single Invoice" breadcrumb={[{ label: 'Student Accounting' }, { label: 'Fees' }]}>
      <div className="space-y-5">
        {/* TOP: Select Ground (Matching img_07.png) */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="border-b border-[#30343c] pb-2.5 mb-4">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Select Ground</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
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
                Class <span className="text-[#ff5252]">*</span>
              </label>
              <select
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
              </select>
            </div>

            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">
                Section <span className="text-[#ff5252]">*</span>
              </label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="B">B</option>
                <option value="A">A</option>
              </select>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#30343c] flex justify-end">
            <button
              onClick={() => alert('Filter reloaded with student records for Little Flower School Two B.')}
              className="bg-[#1b1d22] border border-[#383d47] hover:border-[#ff5252] text-[#d1d5db] hover:text-[#ff5252] px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* BOTTOM: Create Invoice Form */}
        <form onSubmit={handleCreateInvoice} className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow space-y-6 text-xs">
          <div className="border-b border-[#30343c] pb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-[#ff5252]" />
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Create Invoice</h2>
            </div>
          </div>

          {saved && (
            <div className="p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Invoice #294293 generated successfully! Redirecting to printable invoice history...</span>
            </div>
          )}

          {/* Fee Category Selection Table */}
          <div className="space-y-2">
            <div className="text-[#ff5252] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>💳</span>
              <span>Fee Category <span className="text-[#ff5252]">*</span></span>
            </div>

            <div className="overflow-x-auto border border-[#353942] rounded bg-[#1e2126]">
              <table className="w-full text-left">
                <thead className="bg-[#191b1f] text-[#8e94a0] border-b border-[#353942]">
                  <tr>
                    <th className="py-2.5 px-3 w-10">Select</th>
                    <th className="py-2.5 px-3">Category Name</th>
                    <th className="py-2.5 px-3">Remarks</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {categories.map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => toggleCategory(c.id)}
                      className="hover:bg-[#282c34] cursor-pointer transition-colors"
                    >
                      <td className="py-2.5 px-3">
                        <input
                          type="checkbox"
                          checked={c.checked}
                          onChange={() => {}}
                          className="rounded bg-[#1a1c20] border-[#383d47] text-[#ff5252]"
                        />
                      </td>
                      <td className="py-2.5 px-3 font-medium text-white">{c.name}</td>
                      <td className="py-2.5 px-3 text-[#9ca3af]">{c.remarks}</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-[#00bcd4]">${c.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Invoice Entry Fields */}
          <div className="space-y-3 pt-2">
            <div className="text-[#ff5252] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>📋</span>
              <span>Invoice Entry</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Total</label>
                <input
                  type="text"
                  readOnly
                  value={`$${totalAmount}`}
                  className="w-full bg-[#191b1f] border border-[#353942] rounded px-3 py-2 text-[#4caf50] font-bold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Discount</label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter Discount Amount"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Date <span className="text-[#ff5252]">*</span></label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Online Payment <span className="text-[#ff5252]">*</span></label>
                <select
                  value={onlinePayment}
                  onChange={(e) => setOnlinePayment(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Payment Fields */}
          <div className="space-y-3 pt-2">
            <div className="text-[#ff5252] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>💳</span>
              <span>Quick Payment</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Payment</label>
                <input
                  type="number"
                  value={quickAmount}
                  onChange={(e) => setQuickAmount(e.target.value)}
                  placeholder="Enter Payment Amount"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Remarks</label>
                <input
                  type="text"
                  value={quickRemarks}
                  onChange={(e) => setQuickRemarks(e.target.value)}
                  placeholder="Write Your Remarks"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Method</label>
                <select
                  value={quickMethod}
                  onChange={(e) => setQuickMethod(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>Bank Transfer</option>
                  <option>Online Card</option>
                </select>
              </div>
            </div>
          </div>

          {/* Student Details Fields */}
          <div className="space-y-3 pt-2">
            <div className="text-[#ff5252] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>👤</span>
              <span>Student Details</span>
            </div>

            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Student Name <span className="text-[#ff5252]">*</span></label>
              <select
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Angie Crowther">Angie Crowther (Roll: 10001 - Two B)</option>
                <option value="Brandon Stark">Brandon Stark (Roll: 10002 - Two A)</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-[#30343c] flex items-center justify-between">
            <Link
              href="/student-accounting/fees-pay"
              className="text-[#9ca3af] hover:text-white"
            >
              ← Cancel & View Invoice List
            </Link>

            <button
              type="submit"
              className="bg-[#ff5252] hover:bg-[#e04545] text-white font-bold text-xs px-6 py-2.5 rounded shadow transition-all"
            >
              Generate Invoice & Record
            </button>
          </div>
        </form>
      </div>
    </ERPLayout>
  );
}
