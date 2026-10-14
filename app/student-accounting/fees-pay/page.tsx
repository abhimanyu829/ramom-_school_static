'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Filter, Search, Trash2, CheckCircle2, ChevronLeft, ChevronRight, Plus, Target } from 'lucide-react';

export default function FeesPayInvoicePage() {
  const router = useRouter();
  const [branch, setBranch] = useState('Little Flower School');
  const [className, setClassName] = useState('Two');
  const [section, setSection] = useState('All Sections');
  const [type, setType] = useState('Both Invoices');
  const [searchQuery, setSearchQuery] = useState('');

  const [invoices, setInvoices] = useState([
    {
      id: 1,
      student: 'Angie Crowther',
      registerNo: 'RSM-a3f6b61',
      roll: '10001',
      categories: ['Admission fees', 'Jan month fees', 'Board Fees'],
      status: 'Partly Paid',
      createdBy: 'Bill Perez',
      date: '01.04.2019',
      invoiceNo: '#294293',
    },
    {
      id: 2,
      student: 'Angie Crowther',
      registerNo: 'RSM-a3f6b61',
      roll: '10001',
      categories: ['Admission fees', 'Jan month fees', 'Board Fees'],
      status: 'Partly Paid',
      createdBy: 'Bill Perez',
      date: '31.03.2019',
      invoiceNo: '#294292',
    },
    {
      id: 3,
      student: 'Angie Crowther',
      registerNo: 'RSM-a3f6b61',
      roll: '10001',
      categories: ['Admission fees', 'Jan month fees'],
      status: 'Partly Paid',
      createdBy: 'Bill Perez',
      date: '31.03.2019',
      invoiceNo: '#294291',
    },
  ]);

  const filtered = invoices.filter((inv) =>
    inv.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.registerNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ERPLayout pageTitle="Fees Pay / Invoice" breadcrumb={[{ label: 'Student Accounting' }, { label: 'Fees' }]}>
      <div className="space-y-5">
        {/* SELECT GROUND FILTER MATCHING img_08.png */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="border-b border-[#30343c] pb-2.5 mb-4">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Select Ground</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
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
                <option value="All Sections">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>

            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">
                Type <span className="text-[#ff5252]">*</span>
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Both Invoices">Both Invoices</option>
                <option value="Paid Invoices">Paid Invoices</option>
                <option value="Unpaid Invoices">Unpaid Invoices</option>
              </select>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#30343c] flex justify-end">
            <button
              onClick={() => alert(`Applied Ground Filter: ${branch} | Class ${className}`)}
              className="bg-[#1b1d22] border border-[#383d47] hover:border-[#ff5252] text-[#d1d5db] hover:text-[#ff5252] px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* INVOICE LIST TABLE */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#30343c] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Invoice List</h2>
            </div>

            <Link
              href="/student-accounting/create-invoice"
              className="bg-[#ff5252] hover:bg-[#e04545] text-white text-xs px-3 py-1.5 rounded font-semibold flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Single Invoice</span>
            </Link>
          </div>

          {/* Table Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
            <div className="flex items-center gap-1.5 text-[#9ca3af]">
              <select className="bg-[#1b1d22] border border-[#353942] rounded px-2 py-1 text-white text-xs">
                <option>10</option>
                <option>25</option>
              </select>
              <span>records per page</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#9ca3af]">Search:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search invoices..."
                className="bg-[#1b1d22] border border-[#353942] rounded px-3 py-1 text-white text-xs focus:outline-none focus:border-[#ff5252]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#1b1d22] text-[#8e94a0] border-b border-[#30343c]">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-3">Register No</th>
                  <th className="py-2.5 px-3">Roll</th>
                  <th className="py-2.5 px-3">Fee Category</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3">Created By</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2e36]">
                {filtered.map((inv) => (
                  <tr key={inv.id} className="hover:bg-[#282c34] transition-colors">
                    <td className="py-3 px-3 text-[#ff5252] font-semibold">{inv.id}</td>
                    <td className="py-3 px-3 font-medium text-white">
                      <Link href="/students/profile" className="hover:text-[#ff5252] hover:underline">
                        {inv.student}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-[#8b919e] font-mono text-[11px]">{inv.registerNo}</td>
                    <td className="py-3 px-3 text-[#a0a6b2]">{inv.roll}</td>
                    <td className="py-3 px-3">
                      <div className="space-y-0.5 text-[11px] text-[#cfd3db]">
                        {inv.categories.map((c, cidx) => (
                          <div key={cidx}>{c}</div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-[#00bcd4]/20 border border-[#00bcd4]/50 text-[#80deea]">
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-[#a0a6b2]">{inv.createdBy}</td>
                    <td className="py-3 px-3 text-[#8b919e] font-mono">{inv.date}</td>
                    <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                      {/* Collect Button matching yellow highlighted box in screenshot */}
                      <Link
                        href={`/student-accounting/invoice-history?tab=collect&id=${inv.id}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1e2126] border border-[#3b404a] text-white hover:bg-[#ff5252] hover:border-[#ff5252] text-xs font-medium transition-colors"
                      >
                        <span>⊙</span>
                        <span>Collect</span>
                      </Link>
                      {/* Delete Button */}
                      <button
                        onClick={() => {
                          if (confirm(`Delete invoice ${inv.invoiceNo}?`)) {
                            setInvoices(invoices.filter((i) => i.id !== inv.id));
                          }
                        }}
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

          {/* Footer pagination matching screenshot */}
          <div className="flex flex-wrap items-center justify-between pt-4 mt-2 border-t border-[#30343c] text-xs text-[#8e94a0]">
            <div>Showing 1 to {filtered.length} of {filtered.length} entries</div>
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 rounded bg-[#1b1d22] border border-[#33373f] text-[#8e94a0]">
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button className="px-2.5 py-1 rounded bg-[#ff5252] text-white font-bold">1</button>
              <button className="px-2 py-1 rounded bg-[#1b1d22] border border-[#33373f] text-[#8e94a0]">
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
}
