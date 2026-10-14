'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import {
  User,
  Lock,
  Building,
  Share2,
  Landmark,
  UploadCloud,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function AddEmployeePage() {
  const [saved, setSaved] = useState(false);
  const [skipBank, setSkipBank] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <ERPLayout pageTitle="Add Employee" breadcrumb={[{ label: 'Employee' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="border-b border-[#32363f] pb-3 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5252]">👔</span>
            <h1 className="text-sm font-bold text-white uppercase tracking-wider">Add Employee</h1>
          </div>
          <Link href="/employee" className="text-xs text-[#00bcd4] hover:underline">
            ← View Employee List
          </Link>
        </div>

        {saved && (
          <div className="mb-6 p-4 rounded bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
            <span>Employee staff member created successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8 text-xs">
          {/* SECTION 1: Employee Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Employee Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Legal Name"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Gender <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Religion</label>
                <input
                  type="text"
                  placeholder="Religion"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Blood group</label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Select</option>
                  <option>O+</option>
                  <option>A+</option>
                  <option>B+</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Date Of Birth</label>
                <input
                  type="date"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Mobile No <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mobile Phone"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Present Address <span className="text-[#ff5252]">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Present Address"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Permanent Address</label>
                <textarea
                  rows={2}
                  placeholder="Permanent Address"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Profile Picture</label>
              <div className="border-2 border-dashed border-[#383d47] hover:border-[#ff5252] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#1b1d22]">
                <UploadCloud className="w-8 h-8 text-[#ff5252] mb-1" />
                <span className="text-white">Drag and drop a file here or click</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: Login Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Login Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Email <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="staff@cambridge.edu"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Password <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Retype Password <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Retype Password"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Academic Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Academic Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Branch <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Little Flower School</option>
                  <option>East Campus Primary</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Designation <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Senior Teacher</option>
                  <option>Lecturer</option>
                  <option>Department Head</option>
                  <option>Accountant</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Department <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Science & Mathematics</option>
                  <option>Humanities & Languages</option>
                  <option>Finance & Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Joining Date <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="date"
                  defaultValue="2019-04-01"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Qualification <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. M.Sc. Mathematics, B.Ed."
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Role <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Teacher</option>
                  <option>Accountant</option>
                  <option>Librarian</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 4: Social Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <Share2 className="w-4 h-4" />
              <span>Social Links</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Facebook</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5252]">
                    <Facebook className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    placeholder="eg: https://www.facebook.com/username"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 pl-9 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Twitter</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5252]">
                    <Twitter className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    placeholder="eg: https://www.twitter.com/username"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 pl-9 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Linkedin</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5252]">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    placeholder="eg: https://www.linkedin.com/username"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 pl-9 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Bank Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4" />
                <span>Bank Details</span>
              </div>
              <label className="flex items-center gap-2 text-xs text-[#a0a6b2] cursor-pointer">
                <input
                  type="checkbox"
                  checked={skipBank}
                  onChange={(e) => setSkipBank(e.target.checked)}
                  className="rounded bg-[#1b1d22] border-[#353942] text-[#ff5252]"
                />
                <span>Skipped Bank Details</span>
              </label>
            </div>

            {!skipBank && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">Bank Name *</label>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">Account Holder *</label>
                  <input
                    type="text"
                    placeholder="Account Holder"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">Bank Branch *</label>
                  <input
                    type="text"
                    placeholder="Bank Branch"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">Bank Address</label>
                  <input
                    type="text"
                    placeholder="Bank Address"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">IFSC Code</label>
                  <input
                    type="text"
                    placeholder="IFSC Code"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a6b2] font-semibold mb-1">Account No *</label>
                  <input
                    type="text"
                    placeholder="Account No"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* SAVE BUTTON */}
          <div className="pt-6 border-t border-[#30343c] flex justify-end">
            <button
              type="submit"
              className="bg-[#ff5252] hover:bg-[#e04545] text-white px-8 py-2.5 rounded font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <span>⊕ Save</span>
            </button>
          </div>
        </form>
      </div>
    </ERPLayout>
  );
}
