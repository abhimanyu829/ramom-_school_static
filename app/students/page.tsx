'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Filter,
  Search,
  Eye,
  IdCard,
  Trash2,
  User,
  ChevronLeft,
  ChevronRight,
  Plus,
} from 'lucide-react';

export default function StudentListPage() {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState('Little Flower School');
  const [selectedClass, setSelectedClass] = useState('Two');
  const [selectedSection, setSelectedSection] = useState('All Sections');
  const [searchQuery, setSearchQuery] = useState('');

  const [students, setStudents] = useState([
    {
      id: 1,
      roll: '10001',
      name: 'Angie Crowther',
      age: '22',
      registerNo: 'RSM-a3f6b61',
      class: 'Two',
      section: 'B',
      guardian: 'David Williams',
      feeProgress: 11,
      gender: 'Female',
    },
    {
      id: 2,
      roll: '10002',
      name: 'Brandon Stark',
      age: '16',
      registerNo: 'RSM-b4a1c90',
      class: 'Two',
      section: 'A',
      guardian: 'Ned Stark',
      feeProgress: 75,
      gender: 'Male',
    },
    {
      id: 3,
      roll: '10003',
      name: 'Clara Oswald',
      age: '18',
      registerNo: 'RSM-c7d2e44',
      class: 'Two',
      section: 'B',
      guardian: 'Arthur Oswald',
      feeProgress: 100,
      gender: 'Female',
    },
  ]);

  const filtered = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.registerNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.roll.includes(searchQuery);
    const matchesClass = selectedClass === 'All' || s.class === selectedClass;
    const matchesSection = selectedSection === 'All Sections' || s.section === selectedSection;
    return matchesSearch && matchesClass && matchesSection;
  });

  return (
    <ERPLayout pageTitle="Student List" breadcrumb={[{ label: 'Student Details' }]}>
      <div className="space-y-5">
        {/* TOP FILTER CARD: Select Ground (Matching img_09.png) */}
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
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
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
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
                <option value="All">All Classes</option>
              </select>
            </div>

            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">
                Section <span className="text-[#ff5252]">*</span>
              </label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="All Sections">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#30343c] flex justify-end">
            <button
              onClick={() => alert(`Applied Filter: ${selectedBranch} | Class ${selectedClass} | ${selectedSection}`)}
              className="bg-[#1b1d22] border border-[#383d47] hover:border-[#ff5252] text-[#d1d5db] hover:text-[#ff5252] px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* BOTTOM CARD: Student List Table */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#30343c] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#ff5252]">🎓</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Student List</h2>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/admission/create"
                className="bg-[#ff5252] hover:bg-[#e04545] text-white text-xs px-3 py-1.5 rounded font-semibold flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Admission</span>
              </Link>
            </div>
          </div>

          {/* Table Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
            <div className="flex items-center gap-1.5 text-[#9ca3af]">
              <select className="bg-[#1b1d22] border border-[#353942] rounded px-2 py-1 text-white text-xs">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>records per page</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#9ca3af]">Search:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students..."
                className="bg-[#1b1d22] border border-[#353942] rounded px-3 py-1 text-white text-xs focus:outline-none focus:border-[#ff5252]"
              />
            </div>
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#1b1d22] text-[#8e94a0] border-b border-[#30343c]">
                <tr>
                  <th className="py-2.5 px-3">Photo</th>
                  <th className="py-2.5 px-3">Roll</th>
                  <th className="py-2.5 px-3">Name</th>
                  <th className="py-2.5 px-3">Age</th>
                  <th className="py-2.5 px-3">Register No</th>
                  <th className="py-2.5 px-3">Class</th>
                  <th className="py-2.5 px-3">Section</th>
                  <th className="py-2.5 px-3">Guardian Name</th>
                  <th className="py-2.5 px-3">Fee Progress</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2e36]">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-[#282c34] transition-colors">
                    <td className="py-3 px-3">
                      <div className="w-8 h-8 rounded-full bg-[#1e2126] border border-[#3c424e] flex items-center justify-center text-[#ff5252]">
                        <User className="w-4 h-4" />
                      </div>
                    </td>
                    <td className="py-3 px-3 text-[#ff5252] font-semibold">{s.roll}</td>
                    <td className="py-3 px-3 font-medium text-white">
                      <Link href="/students/profile" className="hover:text-[#ff5252] hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-[#9ca3af]">{s.age}</td>
                    <td className="py-3 px-3 text-[#8b919e] font-mono text-[11px]">{s.registerNo}</td>
                    <td className="py-3 px-3 text-[#c7cbd2]">{s.class}</td>
                    <td className="py-3 px-3 text-[#c7cbd2]">{s.section}</td>
                    <td className="py-3 px-3 text-[#9ca3af]">{s.guardian}</td>
                    <td className="py-3 px-3 w-40">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[#8e94a0] w-7">{s.feeProgress}%</span>
                        <div className="flex-1 bg-[#191b1f] h-2 rounded-full overflow-hidden border border-[#33373f]">
                          <div
                            className={`h-full rounded-full ${
                              s.feeProgress > 80 ? 'bg-[#4caf50]' : s.feeProgress > 30 ? 'bg-[#00bcd4]' : 'bg-[#ff5252]'
                            }`}
                            style={{ width: `${s.feeProgress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right space-x-1 whitespace-nowrap">
                      {/* ID Card button */}
                      <button
                        onClick={() => alert(`Generate ID Card for ${s.name} (${s.registerNo})`)}
                        className="p-1.5 rounded bg-[#1b1d22] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        title="ID Card"
                      >
                        <IdCard className="w-3.5 h-3.5" />
                      </button>
                      {/* View Profile button */}
                      <Link
                        href="/students/profile"
                        className="inline-block p-1.5 rounded bg-[#1b1d22] text-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors"
                        title="View Profile"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      {/* Delete button */}
                      <button
                        onClick={() => {
                          if (confirm(`Remove student ${s.name}?`)) {
                            setStudents(students.filter(item => item.id !== s.id));
                          }
                        }}
                        className="p-1.5 rounded bg-[#1b1d22] text-[#ff5252] hover:bg-[#ff5252] hover:text-white transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer pagination */}
          <div className="flex flex-wrap items-center justify-between pt-4 mt-2 border-t border-[#30343c] text-xs text-[#8e94a0]">
            <div>Showing 1 to {filtered.length} of {filtered.length} entries</div>
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 rounded bg-[#1b1d22] border border-[#33373f] text-[#8e94a0] hover:text-white">
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button className="px-2.5 py-1 rounded bg-[#ff5252] text-white font-bold">1</button>
              <button className="px-2 py-1 rounded bg-[#1b1d22] border border-[#33373f] text-[#8e94a0] hover:text-white">
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
}
