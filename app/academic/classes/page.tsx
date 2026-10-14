'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { Edit, Trash2, Check } from 'lucide-react';

export default function ControlClassesPage() {
  const [classes, setClasses] = useState([
    { id: 1, branch: 'Little Flower School', name: 'Two', numeric: '2', sections: ['A', 'B'] },
    { id: 2, branch: 'Little Flower School', name: 'Three', numeric: '3', sections: ['A', 'B', 'C'] },
    { id: 3, branch: 'Little Flower School', name: 'Four', numeric: '4', sections: ['A'] },
  ]);

  const [selectedBranch, setSelectedBranch] = useState('Little Flower School');
  const [className, setClassName] = useState('');
  const [classNumeric, setClassNumeric] = useState('');
  const [selectedSections, setSelectedSections] = useState<string[]>(['A']);
  const [saved, setSaved] = useState(false);

  const availableSections = ['A', 'B', 'C', 'D'];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!className) return;
    setClasses([
      ...classes,
      {
        id: classes.length + 1,
        branch: selectedBranch,
        name: className,
        numeric: classNumeric || '1',
        sections: selectedSections,
      },
    ]);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setClassName('');
    setClassNumeric('');
  };

  const toggleSection = (sec: string) => {
    if (selectedSections.includes(sec)) {
      setSelectedSections(selectedSections.filter((s) => s !== sec));
    } else {
      setSelectedSections([...selectedSections, sec]);
    }
  };

  return (
    <ERPLayout pageTitle="Control Classes" breadcrumb={[{ label: 'Academic' }, { label: 'Class & Section' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow">
        {/* Top Tabs Bar Matching img_01.png */}
        <div className="flex items-center gap-4 border-b border-[#32363f] px-6 pt-3">
          <Link
            href="/academic/classes"
            className="flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide text-[#ff5252] relative"
          >
            <span>🎓</span>
            <span>Class</span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5252]"></span>
          </Link>

          <Link
            href="/academic/sections"
            className="flex items-center gap-2 pb-2.5 text-xs font-semibold tracking-wide text-[#8b919e] hover:text-white transition-colors"
          >
            <span>🏷️</span>
            <span>Section</span>
          </Link>
        </div>

        {/* 2-Column Grid: Create Class & Class List */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Create Class Form */}
          <div className="lg:col-span-5 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">✍️</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Create Class</h2>
            </div>

            {saved && (
              <div className="mb-3 p-2 bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/30 rounded text-xs">
                ✓ Class registered successfully!
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
                  placeholder="e.g. Class Two"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1">
                  Class Numeric <span className="text-[#ff5252]">*</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 2"
                  value={classNumeric}
                  onChange={(e) => setClassNumeric(e.target.value)}
                  className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
                />
              </div>

              <div>
                <label className="block text-[#a0a6b2] font-semibold mb-1 flex items-center justify-between">
                  <span>Section <span className="text-[#ff5252]">*</span></span>
                  <span className="text-[10px] text-[#ffc107] italic font-normal">You can add multi section</span>
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {availableSections.map((sec) => (
                    <button
                      type="button"
                      key={sec}
                      onClick={() => toggleSection(sec)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                        selectedSections.includes(sec)
                          ? 'border-[#ff5252] bg-[#ff5252]/20 text-[#ff8a80]'
                          : 'border-[#383d47] bg-[#1a1c20] text-[#9ca3af] hover:border-[#666]'
                      }`}
                    >
                      {selectedSections.includes(sec) && <Check className="w-3 h-3" />}
                      <span>Section {sec}</span>
                    </button>
                  ))}
                </div>
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

          {/* Class List Table */}
          <div className="lg:col-span-7 bg-[#212429] border border-[#31353e] rounded p-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#31353e] mb-4">
              <span className="text-[#ff5252]">📋</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-wider">Class List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Class Name</th>
                    <th className="py-2.5 px-3">Numeric</th>
                    <th className="py-2.5 px-3">Section</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2e36]">
                  {classes.map((c) => (
                    <tr key={c.id} className="hover:bg-[#282c34]">
                      <td className="py-2.5 px-3 text-[#ff5252] font-semibold">{c.id}</td>
                      <td className="py-2.5 px-3 text-[#c7cbd2]">{c.branch}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{c.name}</td>
                      <td className="py-2.5 px-3 text-[#9ca3af]">{c.numeric}</td>
                      <td className="py-2.5 px-3">
                        <div className="flex gap-1 flex-wrap">
                          {c.sections.map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-[#1e2126] border border-[#3a3f49] text-[10px] text-[#ff8a80]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-right space-x-1">
                        <button
                          onClick={() => alert(`Edit ${c.name}`)}
                          className="p-1 rounded bg-[#191b1f] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setClasses(classes.filter(item => item.id !== c.id))}
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
