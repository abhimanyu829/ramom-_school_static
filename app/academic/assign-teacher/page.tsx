'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Edit, Trash2 } from 'lucide-react';

export default function AssignClassTeacherPage() {
  const [allocations, setAllocations] = useState([
    { id: 1, branch: 'Little Flower School', teacher: 'Prof. Bill Perez', class: 'Two', section: 'B' },
    { id: 2, branch: 'Little Flower School', teacher: 'Dr. Sarah Connor', class: 'Three', section: 'A' },
  ]);

  const [branch, setBranch] = useState('Little Flower School');
  const [className, setClassName] = useState('Two');
  const [section, setSection] = useState('B');
  const [teacher, setTeacher] = useState('Prof. Bill Perez');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAllocations([
      ...allocations,
      {
        id: allocations.length + 1,
        branch,
        teacher,
        class: className,
        section,
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <ERPLayout pageTitle="Assign Class Teacher" breadcrumb={[{ label: 'Academic' }, { label: 'Class & Section' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Class Teacher Allocation Form */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Class Teacher Allocation</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Teacher allocated successfully!
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
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                </select>
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Class Teacher <span className="text-[#ff5252]">*</span>
                </label>
                <select
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                >
                  <option value="Prof. Bill Perez">Prof. Bill Perez</option>
                  <option value="Dr. Sarah Connor">Dr. Sarah Connor</option>
                  <option value="David Mitchell">David Mitchell</option>
                </select>
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

          {/* Allocation List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Class Teacher Allocation List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Class Teacher</th>
                    <th className="py-2.5 px-3">Class</th>
                    <th className="py-2.5 px-3">Section</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {allocations.map((a) => (
                    <tr key={a.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{a.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{a.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{a.teacher}</td>
                      <td className="py-2.5 px-3 text-[#9ca3af]">{a.class}</td>
                      <td className="py-2.5 px-3 text-[#ff8a80]">Section {a.section}</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => setAllocations(allocations.filter(i => i.id !== a.id))}
                          className="p-1 rounded bg-[#191b1f] text-[#ff5252] hover:bg-[#ff5252] hover:text-white transition-colors"
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
