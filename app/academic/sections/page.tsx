'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { Edit, Trash2 } from 'lucide-react';

export default function SectionControlPage() {
  const [sections, setSections] = useState([
    { id: 1, branch: 'Little Flower School', name: 'A', capacity: '40' },
    { id: 2, branch: 'Little Flower School', name: 'B', capacity: '35' },
    { id: 3, branch: 'Little Flower School', name: 'C', capacity: '30' },
  ]);

  const [selectedBranch, setSelectedBranch] = useState('Little Flower School');
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('40');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        branch: selectedBranch,
        name,
        capacity: capacity || '40',
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setName('');
  };

  return (
    <ERPLayout pageTitle="Section Control" breadcrumb={[{ label: 'Academic' }, { label: 'Class & Section' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow">
        {/* Top Tabs Bar Matching img_03.png */}
        <div className="flex items-center gap-4 border-b border-[#32363f] px-6 pt-3">
          <Link
            href="/academic/classes"
            className="flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide text-[#8b919e] hover:text-white transition-colors"
          >
            <span>🎓</span>
            <span>Class</span>
          </Link>

          <Link
            href="/academic/sections"
            className="flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide text-[#ff5252] relative"
          >
            <span>🏷️</span>
            <span>Section</span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
          </Link>
        </div>

        {/* 2-Column: Create Section & Section List */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Create Section Form */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Create Section</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Section created successfully!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4 text-xs">
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
                  Name <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. A"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Capacity
                </label>
                <input
                  type="number"
                  placeholder="e.g. 40"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
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

          {/* Section List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Section List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Section Name</th>
                    <th className="py-2.5 px-3">Capacity</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {sections.map((s) => (
                    <tr key={s.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{s.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{s.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">Section {s.name}</td>
                      <td className="py-2.5 px-3 text-[#9ca3af]">{s.capacity} Students</td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => alert(`Edit Section ${s.name}`)}
                          className="p-1 rounded bg-[#191b1f] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setSections(sections.filter(item => item.id !== s.id))}
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
