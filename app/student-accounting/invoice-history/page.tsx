'use client';

import React, { useState, Suspense } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  GraduationCap,
  Printer,
  Receipt,
  CreditCard,
  CheckCircle2,
  History,
} from 'lucide-react';

function InvoiceHistoryContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'collect' ? 'collect' : 'invoice';
  const [activeTab, setActiveTab] = useState<'invoice' | 'history' | 'collect'>(initialTab);

  // Collect Fees Form
  const [paymentDate, setPaymentDate] = useState('2019-04-01');
  const [paymentAmount, setPaymentAmount] = useState('70');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [remarks, setRemarks] = useState('Second installment for Tuition & Admission');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [paidTotal, setPaidTotal] = useState(10);

  const handleCollectPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const added = parseFloat(paymentAmount) || 0;
    setPaidTotal((prev) => prev + added);
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setActiveTab('invoice');
    }, 1800);
  };

  const totalAmount = 711;
  const balance = Math.max(0, totalAmount - paidTotal);

  return (
    <div className="bg-[#24272d] border border-[#32363f] rounded shadow overflow-hidden">
      {/* TOP TABS BAR MATCHING img_06.png */}
      <div className="no-print flex items-center gap-6 border-b border-[#32363f] px-6 pt-3 bg-[#202328]">
        <button
          onClick={() => setActiveTab('invoice')}
          className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
            activeTab === 'invoice'
              ? 'text-[#ff5252]'
              : 'text-[#8b919e] hover:text-white'
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>Invoice</span>
          {activeTab === 'invoice' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
            activeTab === 'history'
              ? 'text-[#ff5252]'
              : 'text-[#8b919e] hover:text-white'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Payment History</span>
          {activeTab === 'history' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('collect')}
          className={`flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide transition-colors relative ${
            activeTab === 'collect'
              ? 'text-[#ff5252]'
              : 'text-[#8b919e] hover:text-white'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Collect Fees</span>
          {activeTab === 'collect' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
          )}
        </button>
      </div>

      {/* TAB 1: INVOICE PREVIEW (MATCHING img_06.png) */}
      {activeTab === 'invoice' && (
        <div className="p-6 md:p-8 space-y-6 text-xs erp-invoice-container">
          {/* INVOICE HEADER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#30343c] pb-6">
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#1e2126] border-2 border-[#ff5252] flex items-center justify-center shadow">
                <GraduationCap className="w-7 h-7 text-[#ff5252]" />
              </div>
              <div>
                <div className="text-base font-black tracking-wide text-[#ff5252]">ABHIBHIDEVELOPERS</div>
                <div className="text-[10px] uppercase font-bold text-[#9ca3af] -mt-1 tracking-wider">
                  School ERP
                </div>
              </div>
            </div>

            {/* Invoice Meta */}
            <div className="text-right sm:text-right space-y-0.5">
              <div className="text-sm font-bold text-white">Invoice No #294293</div>
              <div className="text-[#8e94a0] text-[11px]">Date : 01.04.2019</div>
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-[#00bcd4]/20 border border-[#00bcd4]/50 text-[#80deea]">
                  Partly Paid
                </span>
              </div>
            </div>
          </div>

          {/* INVOICE TO INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#a0a6b2] py-2">
            <div>
              <div className="font-bold text-white mb-1">Invoice To :</div>
              <div className="text-white font-medium">Angie Crowther</div>
              <div>909 Ingram Road Yadkinville. NC 27055</div>
              <div>Class : Two (Section B)</div>
              <div>Email : student@abhibhidevelopers.com</div>
            </div>

            <div className="md:text-right space-y-1">
              <div>Academic : <span className="text-white">2018-2019</span></div>
              <div>Branch : <span className="text-white">Little Flower School</span></div>
              <div>School Email : <span className="text-[#00bcd4]">admin@abhibhidevelopers.com</span></div>
            </div>
          </div>

          {/* INVOICE ITEMS TABLE */}
          <div className="overflow-x-auto border border-[#353942] rounded">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1b1d22] text-[#8e94a0] border-b border-[#353942]">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Category Name</th>
                  <th className="py-2.5 px-3">Remark</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2e36]">
                <tr>
                  <td className="py-3 px-3 text-[#ff5252] font-semibold">1</td>
                  <td className="py-3 px-3 text-white font-bold">Admission fees</td>
                  <td className="py-3 px-3 text-[#9ca3af]">School admission fees</td>
                  <td className="py-3 px-3 text-right font-semibold text-white">$511</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-[#ff5252] font-semibold">2</td>
                  <td className="py-3 px-3 text-white font-bold">Jan month fees</td>
                  <td className="py-3 px-3 text-[#9ca3af]">Jan month fee</td>
                  <td className="py-3 px-3 text-right font-semibold text-white">$100</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-[#ff5252] font-semibold">3</td>
                  <td className="py-3 px-3 text-white font-bold">Board Fees</td>
                  <td className="py-3 px-3 text-[#9ca3af]">School admission fees</td>
                  <td className="py-3 px-3 text-right font-semibold text-white">$100</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* TOTALS SUMMARY */}
          <div className="flex flex-col items-end pt-2">
            <div className="w-full sm:w-80 space-y-1.5 text-xs text-[#a0a6b2] bg-[#202328] p-4 rounded border border-[#30343c]">
              <div className="flex justify-between">
                <span>Total Amount :</span>
                <span className="font-semibold text-white">${totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Paid Amount :</span>
                <span className="font-semibold text-[#4caf50]">${paidTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount :</span>
                <span className="font-semibold text-white">$0</span>
              </div>
              <div className="border-t border-[#343840] pt-1.5 flex justify-between font-bold text-sm text-[#ff5252]">
                <span>Balance (USD) :</span>
                <span>${balance}</span>
              </div>
              <div className="text-[10px] text-[#717783] text-right font-mono uppercase tracking-wider">
                (SEVEN HUNDRED ONE)
              </div>
            </div>
          </div>

          {/* PRINT & ACTIONS */}
          <div className="no-print pt-4 border-t border-[#30343c] flex items-center justify-between">
            <button
              onClick={() => setActiveTab('collect')}
              className="text-[#ff5252] hover:underline font-semibold"
            >
              + Collect Balance Amount ($ {balance})
            </button>

            <button
              onClick={() => window.print()}
              className="bg-[#1e2126] border border-[#ff5252] text-white hover:bg-[#ff5252] px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff5252]" />
              <span>Print</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: PAYMENT HISTORY */}
      {activeTab === 'history' && (
        <div className="p-6 space-y-4 text-xs">
          <h3 className="font-bold text-white uppercase tracking-wider text-xs">
            Transaction Log for Invoice #294293
          </h3>

          <div className="overflow-x-auto border border-[#353942] rounded">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1b1d22] text-[#8e94a0] border-b border-[#353942]">
                <tr>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Transaction ID</th>
                  <th className="py-2.5 px-3">Method</th>
                  <th className="py-2.5 px-3">Paid By</th>
                  <th className="py-2.5 px-3">Remarks</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2e36]">
                <tr>
                  <td className="py-3 px-3 text-white font-mono">01.04.2019</td>
                  <td className="py-3 px-3 text-[#ff8a80] font-mono">TXN-948201</td>
                  <td className="py-3 px-3 text-[#c7cbd2]">Cash</td>
                  <td className="py-3 px-3 text-[#c7cbd2]">Bill Perez</td>
                  <td className="py-3 px-3 text-[#8e94a0]">Initial deposit at counter</td>
                  <td className="py-3 px-3 text-right font-bold text-[#4caf50]">$10.00</td>
                </tr>
                {paidTotal > 10 && (
                  <tr>
                    <td className="py-3 px-3 text-white font-mono">{paymentDate}</td>
                    <td className="py-3 px-3 text-[#ff8a80] font-mono">TXN-948288</td>
                    <td className="py-3 px-3 text-[#c7cbd2]">{paymentMethod}</td>
                    <td className="py-3 px-3 text-[#c7cbd2]">Bill Perez</td>
                    <td className="py-3 px-3 text-[#8e94a0]">{remarks}</td>
                    <td className="py-3 px-3 text-right font-bold text-[#4caf50]">
                      ${paidTotal - 10}.00
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: COLLECT FEES FORM */}
      {activeTab === 'collect' && (
        <div className="p-6 max-w-2xl mx-auto">
          {paymentSuccess && (
            <div className="mb-4 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
              <span>Fees collected successfully! Receipt updated.</span>
            </div>
          )}

          <form onSubmit={handleCollectPayment} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Date <span className="text-[#ff5252]">*</span>
              </label>
              <div className="md:col-span-9">
                <input
                  type="date"
                  required
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
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
                  required
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
                Method
              </label>
              <div className="md:col-span-9">
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Card">Card</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-2">
              <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3 pt-2">
                Remarks
              </label>
              <div className="md:col-span-9">
                <textarea
                  rows={3}
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Write Your Remarks"
                  className="w-full bg-[#1e2126] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 pt-3">
              <div className="md:col-start-4 md:col-span-9">
                <button
                  type="submit"
                  className="bg-[#ff5252] hover:bg-[#e04545] text-white px-5 py-2.5 rounded font-semibold text-xs transition-colors shadow"
                >
                  Fees Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default function InvoiceHistoryPage() {
  return (
    <ERPLayout pageTitle="Invoice History" breadcrumb={[{ label: 'Student Accounting' }, { label: 'Fees Pay / Invoice' }]}>
      <Suspense fallback={<div className="p-8 text-center text-[#9ca3af]">Loading Invoice...</div>}>
        <InvoiceHistoryContent />
      </Suspense>
    </ERPLayout>
  );
}
