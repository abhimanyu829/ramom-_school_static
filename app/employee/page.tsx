'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2, Mail, Phone, UserCheck } from 'lucide-react';

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Prof. Bill Perez',
      role: 'Teacher',
      designation: 'Senior Mathematics Faculty',
      department: 'Science & Mathematics',
      email: 'bill.perez@cambridge.edu',
      phone: '+1-202-555-0143',
      branch: 'Little Flower School',
    },
    {
      id: 2,
      name: 'Dr. Sarah Connor',
      role: 'Teacher',
      designation: 'Department Head',
      department: 'Humanities & Languages',
      email: 's.connor@cambridge.edu',
      phone: '+1-202-555-0188',
      branch: 'Little Flower School',
    },
    {
      id: 3,
      name: 'David Mitchell',
      role: 'Accountant',
      designation: 'Chief Bursar',
      department: 'Finance & Administration',
      email: 'd.mitchell@cambridge.edu',
      phone: '+1-202-555-0199',
      branch: 'Little Flower School',
    },
  ]);

  const [search, setSearch] = useState('');

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ERPLayout pageTitle="Employee List" breadcrumb={[{ label: 'Employee' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#32363f] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5252]">👔</span>
            <h1 className="text-xs font-bold text-white uppercase tracking-wider">Employee Staff Directory</h1>
          </div>

          <Link
            href="/employee/add"
            className="bg-[#ff5252] hover:bg-[#e04545] text-white px-3.5 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Employee</span>
          </Link>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-between gap-4 mb-4 text-xs">
          <div className="text-[#8e94a0]">Showing {filtered.length} active staff members</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1b1d22] border border-[#353942] rounded px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#ff5252]"
            />
          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#1a1c20] text-[#8e94a0] border-b border-[#32363f]">
              <tr>
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Name</th>
                <th className="py-2.5 px-3">Designation / Role</th>
                <th className="py-2.5 px-3">Department</th>
                <th className="py-2.5 px-3">Contact</th>
                <th className="py-2.5 px-3">Branch</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2e36]">
              {filtered.map((emp) => (
                <tr key={emp.id} className="hover:bg-[#282c34]">
                  <td className="py-3 px-3 text-[#ff5252] font-semibold">{emp.id}</td>
                  <td className="py-3 px-3">
                    <span className="text-white font-medium block">{emp.name}</span>
                    <span className="text-[10px] text-[#ff8a80]">{emp.role}</span>
                  </td>
                  <td className="py-3 px-3 text-[#c7cbd2]">{emp.designation}</td>
                  <td className="py-3 px-3 text-[#9ca3af]">{emp.department}</td>
                  <td className="py-3 px-3">
                    <div className="text-[#a0a6b2] flex items-center gap-1">
                      <Mail className="w-3 h-3 text-[#ff5252]" />
                      <span>{emp.email}</span>
                    </div>
                    <div className="text-[#717783] text-[10px] flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-[#00bcd4]" />
                      <span>{emp.phone}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-[#9ca3af]">{emp.branch}</td>
                  <td className="py-3 px-3 text-right space-x-1">
                    <button
                      onClick={() => alert(`View credentials for ${emp.name}`)}
                      className="p-1 rounded bg-[#191b1f] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-colors"
                      title="Profile"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setEmployees(employees.filter((i) => i.id !== emp.id))}
                      className="p-1 rounded bg-[#ff5252] hover:bg-[#d32f2f] text-white transition-colors"
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
      </div>
    </ERPLayout>
  );
}
