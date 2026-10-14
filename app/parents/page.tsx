'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import { Users, Mail, Phone, MapPin, Eye } from 'lucide-react';

export default function ParentsPage() {
  const [parents] = useState([
    {
      id: 1,
      name: 'David Williams',
      student: 'Angie Crowther (Class Two B)',
      email: 'd.williams@example.com',
      phone: '+1336-679-5530',
      occupation: 'Software Engineer',
      address: '909 Ingram Road Yadkinville. NC 27055',
    },
    {
      id: 2,
      name: 'Ned Stark',
      student: 'Brandon Stark (Class Two A)',
      email: 'ned.stark@example.com',
      phone: '+1336-555-0199',
      occupation: 'Civil Administrator',
      address: '42 Winterfell Ave, PA',
    },
  ]);

  return (
    <ERPLayout pageTitle="Parents" breadcrumb={[{ label: 'Parents' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="flex items-center gap-2 border-b border-[#32363f] pb-3 mb-6">
          <Users className="w-4 h-4 text-[#ff5252]" />
          <h1 className="text-xs font-bold text-white uppercase tracking-wider">Parents & Guardians Directory</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {parents.map((p) => (
            <div key={p.id} className="p-4 rounded bg-[#1e2126] border border-[#33373f] hover:border-[#ff5252]/50 transition-colors">
              <div className="flex items-center justify-between border-b border-[#2d3139] pb-2 mb-3">
                <span className="font-bold text-sm text-white">{p.name}</span>
                <span className="text-[10px] text-[#00bcd4] bg-[#00bcd4]/10 px-2 py-0.5 rounded font-medium">
                  {p.occupation}
                </span>
              </div>
              <div className="space-y-1.5 text-[#a0a6b2]">
                <div className="text-white font-medium">Child: {p.student}</div>
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#ff5252]" /> {p.phone}</div>
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#00bcd4]" /> {p.email}</div>
                <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#ffc107]" /> {p.address}</div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#2d3139] flex justify-end">
                <Link
                  href="/students/profile"
                  className="text-xs text-[#ff5252] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Eye className="w-3 h-3" />
                  <span>View Student Profile →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ERPLayout>
  );
}
