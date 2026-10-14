'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { Calendar, Clock, MapPin, Tag, Plus } from 'lucide-react';

export default function EventsPage() {
  const [events] = useState([
    {
      id: 1,
      title: 'Annual Sports Meet 2019',
      date: 'April 22 - April 24, 2019',
      time: '09:00 AM - 04:00 PM',
      venue: 'Main Athletics Ground',
      type: 'Sports',
      description: 'Track and field events for all student classes and inter-house championship.',
    },
    {
      id: 2,
      title: 'Cambridge Science & Robotics Fair',
      date: 'May 02, 2019',
      time: '10:00 AM - 02:00 PM',
      venue: 'Auditorium Hall B',
      type: 'Academic',
      description: 'Exhibition of student science projects, automated models, and software presentations.',
    },
    {
      id: 3,
      title: 'Second Term Parent-Teacher Conference',
      date: 'May 15, 2019',
      time: '08:30 AM - 01:00 PM',
      venue: 'Classrooms Complex Two & Three',
      type: 'Meeting',
      description: 'Quarterly academic review and student progress report card distribution.',
    },
  ]);

  return (
    <ERPLayout pageTitle="Events & Calendar" breadcrumb={[{ label: 'Events' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6">
        <div className="flex items-center justify-between border-b border-[#32363f] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#ff5252]" />
            <h1 className="text-xs font-bold text-white uppercase tracking-wider">Scheduled School Events & Calendar</h1>
          </div>
          <button
            onClick={() => alert('New Event Creation Dialog')}
            className="bg-[#ff5252] hover:bg-[#e04545] text-white text-xs px-3.5 py-1.5 rounded font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Event</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
          {events.map((ev) => (
            <div key={ev.id} className="p-4 rounded bg-[#1e2126] border border-[#33373f] hover:border-[#ff5252]/50 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5252]/20 text-[#ff8a80]">
                    {ev.type}
                  </span>
                </div>
                <h2 className="font-bold text-sm text-white mb-2">{ev.title}</h2>
                <div className="space-y-1.5 text-[#a0a6b2] text-[11px] mb-3">
                  <div className="flex items-center gap-1.5 text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5252]" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00bcd4]" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ffc107]" />
                    <span>{ev.venue}</span>
                  </div>
                </div>
                <p className="text-[#8e94a0] leading-relaxed">{ev.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2e323a] flex justify-end">
                <button
                  onClick={() => alert(`RSVP recorded for ${ev.title}`)}
                  className="text-xs text-[#00bcd4] hover:underline font-semibold"
                >
                  Register Attendance →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ERPLayout>
  );
}
