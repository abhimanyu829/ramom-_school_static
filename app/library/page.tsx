'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { BookOpen, Search, Plus, Trash2 } from 'lucide-react';

export default function LibraryPage() {
  const [books] = useState([
    { id: 1, title: 'Advanced Calculus & Analytical Geometry', isbn: '978-0-13-148185-1', author: 'George B. Thomas', publisher: 'Pearson', rack: 'Rack A-2', copies: 12, available: 9 },
    { id: 2, title: 'Concepts of Physics (Part I & II)', isbn: '978-8-17-709187-8', author: 'H.C. Verma', publisher: 'Bharati Bhawan', rack: 'Rack B-1', copies: 20, available: 18 },
    { id: 3, title: 'English Literature Anthology', isbn: '978-0-19-832400-3', author: 'Oxford Press Editors', publisher: 'Oxford University Press', rack: 'Rack C-4', copies: 25, available: 21 },
  ]);

  return (
    <ERPLayout pageTitle="Library" breadcrumb={[{ label: 'Library Management' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="flex items-center justify-between border-b border-[#32363f] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#ff5252]" />
            <h1 className="text-xs font-bold text-white uppercase tracking-wider">Book Repository & Stock</h1>
          </div>
          <button
            onClick={() => alert('New book registration dialog opened.')}
            className="bg-[#ff5252] hover:bg-[#e04545] text-white text-xs px-3.5 py-1.5 rounded font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Book</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
              <tr>
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Book Title</th>
                <th className="py-2.5 px-3">Author</th>
                <th className="py-2.5 px-3">ISBN</th>
                <th className="py-2.5 px-3">Rack</th>
                <th className="py-2.5 px-3 text-center">Available</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2e36]">
              {books.map((b) => (
                <tr key={b.id} className="hover:bg-[#282c34]">
                  <td className="py-3 px-3 text-[#ff5252] font-semibold">{b.id}</td>
                  <td className="py-3 px-3 font-medium text-white">{b.title}</td>
                  <td className="py-3 px-3 text-[#c7cbd2]">{b.author}</td>
                  <td className="py-3 px-3 font-mono text-[#8e94a0]">{b.isbn}</td>
                  <td className="py-3 px-3 text-[#00bcd4] font-medium">{b.rack}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded bg-[#4caf50]/20 text-[#81c784] font-bold">
                      {b.available} / {b.copies}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ERPLayout>
  );
}
