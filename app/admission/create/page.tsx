'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import {
  UploadCloud,
  CheckCircle2,
  Calendar,
  Lock,
  Phone,
  Mail,
  User,
  Building,
  Bus,
  Home,
  BookOpen,
} from 'lucide-react';

export default function CreateAdmissionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [guardianExists, setGuardianExists] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <ERPLayout pageTitle="Create Admission" breadcrumb={[{ label: 'Admission' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="border-b border-[#32363f] pb-3 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5252]">🎓</span>
            <h1 className="text-sm font-bold text-white uppercase tracking-wider">Student Admission</h1>
          </div>
          <span className="text-xs text-[#8e94a0]">Fields marked with * are mandatory</span>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
            <span>Admission created successfully! Registration number generated: RSM-374f3f2.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 text-xs">
          {/* SECTION 1: Academic Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Academic Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Academic Year <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>2018-2019</option>
                  <option>2019-2020</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Register No <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="RSM-374f3f2"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Roll <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Roll Number"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Admission Date <span className="text-[#ff5252]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2019-04-01"
                    className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                  />
                </div>
              </div>

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
                  Class <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Section <span className="text-[#ff5252]">*</span>
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Section A</option>
                  <option>Section B</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Category
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>General</option>
                  <option>Special Support</option>
                  <option>Scholarship</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2: Student Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Student Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  First Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Last Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Gender
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Blood Group
                </label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Select</option>
                  <option>O+</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  placeholder="e.g. English"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Religion"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Caste
                </label>
                <input
                  type="text"
                  placeholder="Caste"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Mobile No
                </label>
                <input
                  type="text"
                  placeholder="Mobile Phone"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Present Address
                </label>
                <textarea
                  rows={2}
                  placeholder="Present Address"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>

            {/* Profile Picture Upload Dropzone */}
            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">
                Profile Picture
              </label>
              <div className="border-2 border-dashed border-[#383d47] hover:border-[#ff5252] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#1b1d22]">
                <UploadCloud className="w-8 h-8 text-[#ff5252] mb-2" />
                <span className="text-white font-medium text-xs">Drag and drop a file here or click</span>
                <span className="text-[10px] text-[#717783] mt-1">PNG, JPG or GIF up to 5MB</span>
              </div>
            </div>
          </div>

          {/* SECTION 3: Login Details */}
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
                  placeholder="Student Login Email"
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

          {/* SECTION 4: Guardian Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Guardian Details</span>
              </div>
              <label className="flex items-center gap-2 text-xs text-[#a0a6b2] font-normal cursor-pointer lowercase">
                <input
                  type="checkbox"
                  checked={guardianExists}
                  onChange={(e) => setGuardianExists(e.target.checked)}
                  className="rounded bg-[#1b1d22] border-[#353942] text-[#ff5252]"
                />
                <span>Guardian Already Exist</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Guardian Name"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Relation <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Father / Mother / Guardian"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Occupation <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Occupation"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Income
                </label>
                <input
                  type="text"
                  placeholder="Annual Income"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Education
                </label>
                <input
                  type="text"
                  placeholder="Education Level"
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
                  placeholder="Guardian Mobile"
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: Transport, Hostel & Previous School */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
                <Bus className="w-4 h-4" />
                <span>Transport Details</span>
              </div>
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Transport Route</label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>North Suburban Route 12</option>
                  <option>South Campus Line 4</option>
                  <option>None (Self Transport)</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#30343c] pb-2 text-[#ff5252] font-bold uppercase tracking-wider">
                <Home className="w-4 h-4" />
                <span>Hostel Details</span>
              </div>
              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">Hostel Name</label>
                <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]">
                  <option>Main Boys Hostel - Room 204</option>
                  <option>Girls Hall of Residence - Room 102</option>
                  <option>Day Scholar (No Hostel)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="pt-6 border-t border-[#30343c] flex justify-end">
            <button
              type="submit"
              className="bg-[#ff5252] hover:bg-[#e04545] text-white px-8 py-2.5 rounded font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <span>⊕ Save Admission</span>
            </button>
          </div>
        </form>
      </div>
    </ERPLayout>
  );
}
