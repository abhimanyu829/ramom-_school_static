'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  GraduationCap,
  Calendar,
  Building,
  DollarSign,
  Receipt,
  Bus,
  Home,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

export default function DashboardPage() {
  const [calendarView, setCalendarView] = useState<'month' | 'week' | 'day' | 'list'>('month');
  const [currentMonth, setCurrentMonth] = useState('April 2019');

  // Interactive calendar mock dates
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  // Events on specific days
  const events: Record<number, { title: string; type: 'exam' | 'holiday' | 'meeting' }[]> = {
    5: [{ title: 'Mid-Term Evaluation', type: 'exam' }],
    14: [{ title: 'Bengali New Year', type: 'holiday' }],
    21: [{ title: 'Parent-Teacher Meeting', type: 'meeting' }],
    28: [{ title: 'Fee Clearance Deadline', type: 'exam' }],
  };

  return (
    <ERPLayout pageTitle="All Branch Dashboard">
      <div className="space-y-5">
        {/* TOP ROW: CASH BOOK & ANNUAL FEE SUMMARY CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Cash Book Of April */}
          <div className="lg:col-span-5 bg-[#25282e] border border-[#33373f] rounded p-4 flex flex-col justify-between shadow">
            <div className="flex items-center justify-between pb-3 border-b border-[#30343c]">
              <h2 className="text-sm font-semibold text-white">Cash Book Of April</h2>
              <span className="text-[10px] text-[#ff5252] bg-[#ff5252]/10 px-2 py-0.5 rounded font-medium">
                Live Overview
              </span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center">
              {/* SVG Donut Chart Matching Mockup */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background track */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1d2024" strokeWidth="14" />
                  {/* Cash Slice (Cyan #00b0ff) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#00b0ff"
                    strokeWidth="14"
                    strokeDasharray="238.76"
                    strokeDashoffset="75"
                    strokeLinecap="round"
                  />
                  {/* Bank Slice (Pink #ff4081) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#ff4081"
                    strokeWidth="14"
                    strokeDasharray="238.76"
                    strokeDashoffset="170"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Badge Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#1e2126] border border-[#393e47] flex items-center justify-center text-[#ff5252] shadow-inner">
                    <DollarSign className="w-5 h-5 text-[#ff5252]" />
                  </div>
                  <span className="text-xs font-bold text-white mt-1">$18,420</span>
                </div>
              </div>

              {/* Legends matching screenshot */}
              <div className="flex items-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00b0ff]"></span>
                  <span className="text-[#9ca3af]">By Cash ($11,200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff4081]"></span>
                  <span className="text-[#9ca3af]">By Bank ($7,220)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#30343c] flex items-center justify-between text-[11px] text-[#717783]">
              <span>Reconciled through Little Flower School</span>
              <Link href="/office-accounting/voucher" className="text-[#00b0ff] hover:underline">
                View Vouchers →
              </Link>
            </div>
          </div>

          {/* Annual Fee Summary Line Chart */}
          <div className="lg:col-span-7 bg-[#25282e] border border-[#33373f] rounded p-4 flex flex-col justify-between shadow">
            <div className="flex items-center justify-between pb-3 border-b border-[#30343c]">
              <h2 className="text-sm font-semibold text-white">Annual Fee Summary</h2>
              <div className="flex items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#e91e63]"></span>
                  <span className="text-[#9ca3af]">Total</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#00bcd4]"></span>
                  <span className="text-[#9ca3af]">Collected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#ff9800]"></span>
                  <span className="text-[#9ca3af]">Remaining</span>
                </div>
              </div>
            </div>

            {/* Interactive Graph Simulation */}
            <div className="py-4">
              <div className="h-44 w-full relative flex items-end">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[9px] text-[#555a64]">
                  <div className="border-b border-[#2e3239] pb-0.5">1.0M</div>
                  <div className="border-b border-[#2e3239] pb-0.5">0.6M</div>
                  <div className="border-b border-[#2e3239] pb-0.5">0.2M</div>
                  <div className="border-b border-[#2e3239] pb-0.5">0.0</div>
                </div>

                {/* SVG Curve lines */}
                <svg className="w-full h-full relative z-10" viewBox="0 0 500 150" preserveAspectRatio="none">
                  {/* Total Line (Magenta) */}
                  <path
                    d="M 10 110 Q 70 80 130 90 T 250 60 T 370 50 T 490 35"
                    fill="none"
                    stroke="#e91e63"
                    strokeWidth="2.5"
                  />
                  {/* Collected Line (Cyan) */}
                  <path
                    d="M 10 130 Q 70 110 130 115 T 250 90 T 370 80 T 490 60"
                    fill="none"
                    stroke="#00bcd4"
                    strokeWidth="2.5"
                  />
                  {/* Remaining Line (Orange) */}
                  <path
                    d="M 10 140 Q 70 135 130 130 T 250 110 T 370 100 T 490 90"
                    fill="none"
                    stroke="#ff9800"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* Points */}
                  <circle cx="130" cy="90" r="3.5" fill="#e91e63" />
                  <circle cx="250" cy="60" r="3.5" fill="#e91e63" />
                  <circle cx="370" cy="50" r="3.5" fill="#e91e63" />
                  <circle cx="490" cy="35" r="3.5" fill="#e91e63" />
                </svg>
              </div>

              {/* Month X-axis labels */}
              <div className="grid grid-cols-12 text-center text-[10px] text-[#717783] mt-2 pt-1 border-t border-[#30343c]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#30343c] flex items-center justify-between text-[11px] text-[#717783]">
              <span>FY 2018-2019 Academic Year Audit</span>
              <Link href="/student-accounting/fees-pay" className="text-[#ff5252] hover:underline">
                Fee Collection Register →
              </Link>
            </div>
          </div>
        </div>

        {/* 4 STRENGTH COUNTER CARDS (MATCHING SCREENSHOT) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Employee */}
          <Link
            href="/employee"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <Users className="w-5 h-5 text-[#8b919e] group-hover:text-[#ff5252] transition-colors" />
              <span className="text-2xl font-bold text-white">14</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Employee</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#5c6bc0] h-full w-2/3"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              TOTAL STRENGTH
            </div>
          </Link>

          {/* Students */}
          <Link
            href="/students"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <GraduationCap className="w-5 h-5 text-[#ff5252]" />
              <span className="text-2xl font-bold text-[#ff5252]">186</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Students</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#ff5252] h-full w-4/5"></div>
            </div>
            <div className="text-[10px] text-[#ff5252] uppercase tracking-wider font-semibold mt-1">
              TOTAL STRENGTH
            </div>
          </Link>

          {/* Parents */}
          <Link
            href="/parents"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <Users className="w-5 h-5 text-[#00bcd4]" />
              <span className="text-2xl font-bold text-white">162</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Parents</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#00bcd4] h-full w-3/4"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              TOTAL STRENGTH
            </div>
          </Link>

          {/* Teachers */}
          <Link
            href="/academic/assign-teacher"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <Briefcase className="w-5 h-5 text-[#ab47bc]" />
              <span className="text-2xl font-bold text-white">22</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Teachers</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#ab47bc] h-full w-1/2"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              TOTAL STRENGTH
            </div>
          </Link>
        </div>

        {/* MIDDLE ROW: STUDENT QUANTITY & WEEKEND ATTENDANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Student Quantity */}
          <div className="lg:col-span-5 bg-[#25282e] border border-[#33373f] rounded p-4 flex flex-col justify-between shadow">
            <div className="flex items-center justify-between pb-3 border-b border-[#30343c]">
              <h2 className="text-sm font-semibold text-white">Student Quantity</h2>
              <span className="text-[10px] text-[#8e94a0]">By Class Distribution</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1d2024" strokeWidth="12" />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="12"
                    strokeDasharray="238.76"
                    strokeDashoffset="90"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#ff9800"
                    strokeWidth="12"
                    strokeDasharray="238.76"
                    strokeDashoffset="180"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#9e9e9e]" />
                  <span className="text-xs text-[#9e9e9e] font-semibold mt-1">186 Enrolled</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4caf50]"></span>
                  <span className="text-[#9ca3af]">Class One (102)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff9800]"></span>
                  <span className="text-[#9ca3af]">Class Two (84)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#30343c] text-[11px] text-[#717783] flex justify-between">
              <span>Section A & B active</span>
              <Link href="/academic/classes" className="text-[#ff5252] hover:underline">
                Manage Classes →
              </Link>
            </div>
          </div>

          {/* Weekend Attendance Inspection */}
          <div className="lg:col-span-7 bg-[#25282e] border border-[#33373f] rounded p-4 flex flex-col justify-between shadow">
            <div className="flex items-center justify-between pb-3 border-b border-[#30343c]">
              <h2 className="text-sm font-semibold text-white">Weekend Attendance Inspection</h2>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#00bcd4]"></span>
                  <span className="text-[#9ca3af]">Employee</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#ff5252]"></span>
                  <span className="text-[#9ca3af]">Student</span>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="h-40 w-full flex items-end justify-between px-4 pt-4 border-b border-[#30343c]">
                {[
                  { date: '26-Mar', emp: 90, stu: 95 },
                  { date: '27-Mar', emp: 92, stu: 88 },
                  { date: '28-Mar', emp: 85, stu: 92 },
                  { date: '29-Mar', emp: 95, stu: 96 },
                  { date: '30-Mar', emp: 88, stu: 90 },
                  { date: '31-Mar', emp: 40, stu: 35 },
                  { date: '01-Apr', emp: 96, stu: 98 },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5 flex-1 max-w-[50px]">
                    <div className="w-full flex items-end justify-center gap-1.5 h-28">
                      <div
                        className="w-3 bg-[#00bcd4] rounded-t transition-all"
                        style={{ height: `${item.emp}%` }}
                        title={`Employee: ${item.emp}%`}
                      ></div>
                      <div
                        className="w-3 bg-[#ff5252] rounded-t transition-all"
                        style={{ height: `${item.stu}%` }}
                        title={`Student: ${item.stu}%`}
                      ></div>
                    </div>
                    <span className="text-[10px] text-[#717783] whitespace-nowrap">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#30343c] text-[11px] text-[#717783] flex justify-between">
              <span>Overall Attendance: 93.4%</span>
              <Link href="/attendance" className="text-[#00bcd4] hover:underline">
                Detailed Log →
              </Link>
            </div>
          </div>
        </div>

        {/* 4 LOWER COUNTER CARDS (MATCHING SCREENSHOT) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Admission */}
          <Link
            href="/admission/create"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <Users className="w-5 h-5 text-[#8b919e] group-hover:text-[#ff5252] transition-colors" />
              <span className="text-2xl font-bold text-white">48</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Admission</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#00bcd4] h-full w-3/5"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              INTERVAL 30 DAYS
            </div>
          </Link>

          {/* Voucher */}
          <Link
            href="/office-accounting/voucher"
            className="bg-[#25282e] border border-[#33373f] hover:border-[#ff5252]/50 rounded p-4 transition-all block group"
          >
            <div className="flex items-center justify-between">
              <Receipt className="w-5 h-5 text-[#ff5252]" />
              <span className="text-2xl font-bold text-[#ff5252]">19</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Voucher</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#ff5252] h-full w-2/3"></div>
            </div>
            <div className="text-[10px] text-[#ff5252] uppercase tracking-wider font-semibold mt-1">
              TOTAL NUMBER
            </div>
          </Link>

          {/* Transport */}
          <div className="bg-[#25282e] border border-[#33373f] rounded p-4 block">
            <div className="flex items-center justify-between">
              <Bus className="w-5 h-5 text-[#00bcd4]" />
              <span className="text-2xl font-bold text-white">6</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Transport</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#00bcd4] h-full w-1/2"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              TOTAL ROUTE
            </div>
          </div>

          {/* Hostel */}
          <div className="bg-[#25282e] border border-[#33373f] rounded p-4 block">
            <div className="flex items-center justify-between">
              <Home className="w-5 h-5 text-[#ab47bc]" />
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <div className="text-xs text-[#9ca3af] mt-1">Hostel</div>
            <div className="w-full bg-[#1b1d22] h-1 rounded mt-3 overflow-hidden">
              <div className="bg-[#ab47bc] h-full w-2/5"></div>
            </div>
            <div className="text-[10px] text-[#6d7380] uppercase tracking-wider font-semibold mt-1">
              TOTAL ROOM
            </div>
          </div>
        </div>

        {/* CALENDAR SECTION (MATCHING SCREENSHOT) */}
        <div className="bg-[#25282e] border border-[#33373f] rounded p-4 shadow">
          {/* Calendar top controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#30343c]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Previous month')}
                className="w-7 h-7 rounded bg-[#1e2126] border border-[#343840] text-[#9ca3af] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => alert('Next month')}
                className="w-7 h-7 rounded bg-[#1e2126] border border-[#343840] text-[#9ca3af] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentMonth('April 2019')}
                className="px-2.5 py-1 rounded bg-[#1e2126] border border-[#343840] text-xs text-[#d1d5db] hover:text-white transition-colors"
              >
                Today
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Calendar className="w-4 h-4 text-[#ff5252]" />
              <span>{currentMonth}</span>
            </div>

            {/* View Mode Buttons */}
            <div className="flex items-center bg-[#1e2126] border border-[#343840] rounded p-0.5 text-xs">
              {(['month', 'week', 'day', 'list'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCalendarView(mode)}
                  className={`px-2.5 py-1 rounded capitalize transition-colors ${
                    calendarView === mode
                      ? 'bg-[#ff5252] text-white font-medium'
                      : 'text-[#8b919e] hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Month Calendar Grid */}
          <div className="mt-3">
            {/* Days header */}
            <div className="grid grid-cols-7 text-center font-medium text-xs text-[#8e94a0] py-2 bg-[#1f2227] rounded-t border-b border-[#30343c]">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* Calendar dates grid */}
            <div className="grid grid-cols-7 border-l border-t border-[#30343c]">
              {daysInMonth.map((day) => {
                const dayEvents = events[day];
                const isToday = day === 15;
                return (
                  <div
                    key={day}
                    className={`min-h-[70px] sm:min-h-[85px] p-1.5 border-r border-b border-[#30343c] relative flex flex-col justify-between hover:bg-[#2a2d34] transition-colors ${
                      isToday ? 'bg-[#ff5252]/5' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-semibold ${
                          isToday
                            ? 'w-5 h-5 rounded-full bg-[#ff5252] text-white flex items-center justify-center -ml-0.5'
                            : 'text-[#a0a6b2]'
                        }`}
                      >
                        {day}
                      </span>
                    </div>

                    {/* Day events if any */}
                    <div className="space-y-1 mt-1">
                      {dayEvents?.map((ev, eidx) => (
                        <div
                          key={eidx}
                          className={`text-[9px] sm:text-[10px] px-1 py-0.5 rounded truncate font-medium ${
                            ev.type === 'exam'
                              ? 'bg-[#ff5252]/20 text-[#ff8a80] border border-[#ff5252]/40'
                              : ev.type === 'holiday'
                              ? 'bg-[#4caf50]/20 text-[#81c784] border border-[#4caf50]/40'
                              : 'bg-[#00bcd4]/20 text-[#80deea] border border-[#00bcd4]/40'
                          }`}
                          title={ev.title}
                        >
                          {ev.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ERPLayout>
  );
}
