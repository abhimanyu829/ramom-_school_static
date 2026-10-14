'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import {
  User,
  Users,
  Calendar,
  Building,
  Phone,
  Mail,
  MapPin,
  Lock,
  Receipt,
  Book,
  Award,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Printer,
  ShieldCheck,
} from 'lucide-react';

export default function StudentProfilePage() {
  const [openSection, setOpenSection] = useState<'basic' | 'fees' | 'books' | 'parents' | 'exams'>('basic');

  const toggleSection = (section: 'basic' | 'fees' | 'books' | 'parents' | 'exams') => {
    setOpenSection(openSection === section ? 'basic' : section);
  };

  return (
    <ERPLayout pageTitle="Student Profile" breadcrumb={[{ label: 'Student Details', href: '/students' }, { label: 'Angie Crowther' }]}>
      <div className="space-y-5">
        {/* HERO BANNER MATCHING img_16.png */}
        <div className="relative rounded overflow-hidden border border-[#373c45] shadow-lg">
          {/* Skyline gradient background */}
          <div className="h-48 sm:h-56 bg-gradient-to-r from-[#5a324a] via-[#462d3a] to-[#25282e] relative overflow-hidden flex items-center px-6">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6 w-full pb-2">
              {/* Photo Box */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded bg-[#202327] border-4 border-[#2c3037] p-2 flex flex-col items-center justify-center shadow-xl shrink-0">
                <div className="w-full flex-1 rounded bg-[#2a2d34] flex items-center justify-center text-[#ff5252]">
                  <User className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <span className="text-[11px] font-bold text-[#8e94a0] uppercase tracking-wider mt-1">Photo</span>
              </div>

              {/* Bio & Details */}
              <div className="flex-1 text-center sm:text-left text-xs">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Angie Crowther</h1>
                <p className="text-[#ff8a80] font-semibold text-xs mt-0.5">Student / Physically Challenged</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 mt-3 text-[#d1d5db] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <Users className="w-3 h-3" />
                    </span>
                    <span>David Williams (Guardian)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <Calendar className="w-3 h-3" />
                    </span>
                    <span>18.08.1996 (Age 22)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <Building className="w-3 h-3" />
                    </span>
                    <span>Class Two (B) - Roll: 10001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <Phone className="w-3 h-3" />
                    </span>
                    <span>+1336-679-5530</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <Mail className="w-3 h-3" />
                    </span>
                    <span>student@abhibhidevelopers.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff5252]/20 text-[#ff5252] flex items-center justify-center">
                      <MapPin className="w-3 h-3" />
                    </span>
                    <span>909 Ingram Road Yadkinville. NC 27055</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACCORDION PANELS MATCHING img_16.png */}
        <div className="space-y-3">
          {/* 1. Basic Details */}
          <div className="bg-[#24272d] border border-[#33373f] rounded overflow-hidden">
            <div
              onClick={() => toggleSection('basic')}
              className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#2a2d34] transition-colors select-none"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="text-[#ff5252]">👤</span>
                <span>Basic Details</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Student Login Credentials: Username: student@abhibhidevelopers.com | Status: Active');
                  }}
                  className="px-2.5 py-1 bg-[#1e2126] border border-[#ff5252] text-[#ff8a80] text-[11px] font-semibold rounded hover:bg-[#ff5252] hover:text-white transition-colors flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  <span>Authentication</span>
                </button>
                {openSection === 'basic' ? <ChevronUp className="w-4 h-4 text-[#8e94a0]" /> : <ChevronDown className="w-4 h-4 text-[#8e94a0]" />}
              </div>
            </div>

            {openSection === 'basic' && (
              <div className="p-5 border-t border-[#31353e] bg-[#202328] text-xs">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Registration No</span>
                    <span className="text-white font-mono font-bold mt-1 block">RSM-a3f6b61</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Admission Date</span>
                    <span className="text-white font-bold mt-1 block">2019-04-01</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Blood Group</span>
                    <span className="text-white font-bold mt-1 block">O+ Positive</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Religion</span>
                    <span className="text-white font-bold mt-1 block">Christianity</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Mother Tongue</span>
                    <span className="text-white font-bold mt-1 block">English</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[10px] text-[#717783] uppercase block font-semibold">Student Category</span>
                    <span className="text-[#00bcd4] font-bold mt-1 block">Special Support / Physically Challenged</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Fees */}
          <div className="bg-[#24272d] border border-[#33373f] rounded overflow-hidden">
            <div
              onClick={() => toggleSection('fees')}
              className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#2a2d34] transition-colors select-none"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="text-[#ff5252]">💳</span>
                <span>Fees & Invoices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#ff5252] bg-[#ff5252]/10 px-2 py-0.5 rounded font-semibold">
                  Pending Balance: $701.00
                </span>
                {openSection === 'fees' ? <ChevronUp className="w-4 h-4 text-[#8e94a0]" /> : <ChevronDown className="w-4 h-4 text-[#8e94a0]" />}
              </div>
            </div>

            {openSection === 'fees' && (
              <div className="p-5 border-t border-[#31353e] bg-[#202328] text-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Invoice #294293 (Academic Year 2018-2019)</span>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/student-accounting/invoice-history"
                      className="px-3 py-1 bg-[#1a1c20] border border-[#ff5252] text-[#ff8a80] hover:bg-[#ff5252] hover:text-white rounded text-xs font-medium transition-colors"
                    >
                      View Invoice #294293 →
                    </Link>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                      <tr>
                        <th className="py-2 px-3">#</th>
                        <th className="py-2 px-3">Category</th>
                        <th className="py-2 px-3">Remark</th>
                        <th className="py-2 px-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2e3239]">
                      <tr>
                        <td className="py-2 px-3 text-[#ff5252]">1</td>
                        <td className="py-2 px-3 text-white font-medium">Admission fees</td>
                        <td className="py-2 px-3 text-[#9ca3af]">School admission fees</td>
                        <td className="py-2 px-3 text-right font-semibold">$511.00</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-[#ff5252]">2</td>
                        <td className="py-2 px-3 text-white font-medium">Jan month fees</td>
                        <td className="py-2 px-3 text-[#9ca3af]">Jan month fee</td>
                        <td className="py-2 px-3 text-right font-semibold">$100.00</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-[#ff5252]">3</td>
                        <td className="py-2 px-3 text-white font-medium">Board Fees</td>
                        <td className="py-2 px-3 text-[#9ca3af]">School admission fees</td>
                        <td className="py-2 px-3 text-right font-semibold">$100.00</td>
                      </tr>
                    </tbody>
                    <tfoot className="border-t border-[#373c45] text-xs font-semibold bg-[#1a1c20]">
                      <tr>
                        <td colSpan={3} className="py-2 px-3 text-right text-[#a0a6b2]">Total Amount:</td>
                        <td className="py-2 px-3 text-right text-white">$711.00</td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="py-2 px-3 text-right text-[#a0a6b2]">Paid Amount:</td>
                        <td className="py-2 px-3 text-right text-[#4caf50]">$10.00</td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="py-2 px-3 text-right text-[#a0a6b2]">Due Balance:</td>
                        <td className="py-2 px-3 text-right text-[#ff5252]">$701.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* 3. Book Issue */}
          <div className="bg-[#24272d] border border-[#33373f] rounded overflow-hidden">
            <div
              onClick={() => toggleSection('books')}
              className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#2a2d34] transition-colors select-none"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="text-[#ff5252]">📖</span>
                <span>Book Issue</span>
              </div>
              {openSection === 'books' ? <ChevronUp className="w-4 h-4 text-[#8e94a0]" /> : <ChevronDown className="w-4 h-4 text-[#8e94a0]" />}
            </div>

            {openSection === 'books' && (
              <div className="p-5 border-t border-[#31353e] bg-[#202328] text-xs">
                <div className="p-4 bg-[#1a1c20] rounded border border-[#2e323a] text-center text-[#8e94a0]">
                  No library books currently overdue or unreturned.
                </div>
              </div>
            )}
          </div>

          {/* 4. Parent Information */}
          <div className="bg-[#24272d] border border-[#33373f] rounded overflow-hidden">
            <div
              onClick={() => toggleSection('parents')}
              className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#2a2d34] transition-colors select-none"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="text-[#ff5252]">👨‍👩‍👧</span>
                <span>Parent Information</span>
              </div>
              {openSection === 'parents' ? <ChevronUp className="w-4 h-4 text-[#8e94a0]" /> : <ChevronDown className="w-4 h-4 text-[#8e94a0]" />}
            </div>

            {openSection === 'parents' && (
              <div className="p-5 border-t border-[#31353e] bg-[#202328] text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[#717783] text-[10px] uppercase font-semibold">Father / Guardian Name</span>
                    <span className="text-white font-bold block mt-1">David Williams</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[#717783] text-[10px] uppercase font-semibold">Occupation</span>
                    <span className="text-white font-bold block mt-1">Software Engineer</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[#717783] text-[10px] uppercase font-semibold">Guardian Phone</span>
                    <span className="text-white font-bold block mt-1">+1336-679-5530</span>
                  </div>
                  <div className="p-3 bg-[#1a1c20] rounded border border-[#2e323a]">
                    <span className="text-[#717783] text-[10px] uppercase font-semibold">Annual Income</span>
                    <span className="text-white font-bold block mt-1">$85,000</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Exam Results */}
          <div className="bg-[#24272d] border border-[#33373f] rounded overflow-hidden">
            <div
              onClick={() => toggleSection('exams')}
              className="px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#2a2d34] transition-colors select-none"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="text-[#ff5252]">🚩</span>
                <span>Exam Results</span>
              </div>
              {openSection === 'exams' ? <ChevronUp className="w-4 h-4 text-[#8e94a0]" /> : <ChevronDown className="w-4 h-4 text-[#8e94a0]" />}
            </div>

            {openSection === 'exams' && (
              <div className="p-5 border-t border-[#31353e] bg-[#202328] text-xs">
                <div className="p-4 bg-[#1a1c20] rounded border border-[#2e323a] text-[#d1d5db]">
                  <div className="flex items-center justify-between border-b border-[#30353d] pb-2 mb-2 font-semibold text-white">
                    <span>First Term Exam 2018-2019</span>
                    <span className="text-[#4caf50]">Grade: A (GPA: 3.85)</span>
                  </div>
                  <p className="text-[11px] text-[#8e94a0]">Mathematics: 92/100 · Science: 88/100 · English: 95/100 · Social Studies: 90/100</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ERPLayout>
  );
}
