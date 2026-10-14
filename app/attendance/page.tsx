'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Filter, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState('Two');
  const [selectedSection, setSelectedSection] = useState('B');
  const [date, setDate] = useState('2019-04-01');

  const [records, setRecords] = useState([
    { roll: '10001', name: 'Angie Crowther', registerNo: 'RSM-a3f6b61', status: 'Present' },
    { roll: '10002', name: 'Brandon Stark', registerNo: 'RSM-b4a1c90', status: 'Present' },
    { roll: '10003', name: 'Clara Oswald', registerNo: 'RSM-c7d2e44', status: 'Late' },
    { roll: '10004', name: 'David Dunn', registerNo: 'RSM-d8e3f55', status: 'Absent' },
  ]);

  const toggleStatus = (idx: number, status: string) => {
    const updated = [...records];
    updated[idx].status = status;
    setRecords(updated);
  };

  return (
    <ERPLayout pageTitle="Attendance" breadcrumb={[{ label: 'Daily Attendance' }]}>
      <div className="space-y-5">
        {/* Filter Card */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="border-b border-[#30343c] pb-2.5 mb-4">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Attendance Register</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Branch</label>
              <select className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white">
                <option>Little Flower School</option>
              </select>
            </div>
            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white"
              >
                <option value="Two">Class Two</option>
                <option value="Three">Class Three</option>
              </select>
            </div>
            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Section</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white"
              >
                <option value="B">Section B</option>
                <option value="A">Section A</option>
              </select>
            </div>
            <div>
              <label className="block text-[#a0a6b2] font-semibold mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white"
              />
            </div>
          </div>
        </div>

        {/* Attendance Sheet Table */}
        <div className="bg-[#24272d] border border-[#32363f] rounded p-5 shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
                <tr>
                  <th className="py-2.5 px-3">Roll</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Register No</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2e36]">
                {records.map((r, idx) => (
                  <tr key={r.roll} className="hover:bg-[#282c34]">
                    <td className="py-3 px-3 text-[#ff5252] font-bold">{r.roll}</td>
                    <td className="py-3 px-3 text-white font-medium">{r.name}</td>
                    <td className="py-3 px-3 text-[#8b919e] font-mono">{r.registerNo}</td>
                    <td className="py-3 px-3 text-center">
                      <div className="inline-flex rounded border border-[#353942] bg-[#1a1c20] p-0.5 gap-1">
                        {['Present', 'Late', 'Absent'].map((st) => (
                          <button
                            key={st}
                            onClick={() => toggleStatus(idx, st)}
                            className={`px-3 py-1 rounded text-[11px] font-semibold transition-colors ${
                              r.status === st
                                ? st === 'Present'
                                  ? 'bg-[#4caf50] text-white'
                                  : st === 'Late'
                                  ? 'bg-[#ff9800] text-white'
                                  : 'bg-[#ff5252] text-white'
                                : 'text-[#8e94a0] hover:text-white'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-[#30343c] flex justify-end">
            <button
              onClick={() => alert('Attendance roll updated successfully!')}
              className="bg-[#ff5252] hover:bg-[#e04545] text-white px-5 py-2 rounded text-xs font-semibold shadow"
            >
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
}
