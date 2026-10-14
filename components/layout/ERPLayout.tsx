'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  GraduationCap,
  Menu,
  Maximize2,
  Minimize2,
  Grid,
  Search,
  Calendar,
  Flag,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Building2,
  UserPlus,
  Users,
  Briefcase,
  BookOpen,
  Receipt,
  Landmark,
  CalendarDays,
  Library as LibraryIcon,
  Settings,
  LogOut,
  ExternalLink,
  CheckCircle2,
  Sliders,
  X,
  FileText,
  DollarSign,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ERPLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumb?: { label: string; href?: string }[];
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  subItems?: { label: string; href: string }[];
}

export default function ERPLayout({ children, pageTitle, breadcrumb = [] }: ERPLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [quickNavOpen, setQuickNavOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Accordion state for sidebar items
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    dashboard: true,
    academic: true,
    admission: true,
    studentAccounting: true,
    officeAccounting: true,
    studentDetails: true,
    employee: false,
    settings: true,
  });

  const toggleMenu = (id: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);


  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'All Branches', href: '/dashboard' },
      ],
    },
    {
      id: 'branch',
      label: 'Branch',
      icon: <Building2 className="w-4 h-4" />,
      href: '/branch',
    },
    {
      id: 'admission',
      label: 'Admission',
      icon: <UserPlus className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'Create Admission', href: '/admission/create' },
        { label: 'Multiple Import', href: '/admission/multiple-import' },
        { label: 'Category', href: '/admission/category' },
      ],
    },
    {
      id: 'studentDetails',
      label: 'Student Details',
      icon: <Users className="w-4 h-4" />,
      subItems: [
        { label: 'Student List', href: '/students' },
        { label: 'Student Profile (Angie)', href: '/students/profile' },
      ],
    },
    {
      id: 'parents',
      label: 'Parents',
      icon: <Users className="w-4 h-4" />,
      href: '/parents',
    },
    {
      id: 'employee',
      label: 'Employee',
      icon: <Briefcase className="w-4 h-4" />,
      subItems: [
        { label: 'Employee List', href: '/employee' },
        { label: 'Add Employee', href: '/employee/add' },
      ],
    },
    {
      id: 'academic',
      label: 'Academic',
      icon: <BookOpen className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'Control Classes', href: '/academic/classes' },
        { label: 'Section Control', href: '/academic/sections' },
        { label: 'Assign Class Teacher', href: '/academic/assign-teacher' },
      ],
    },
    {
      id: 'studentAccounting',
      label: 'Student Accounting',
      icon: <Receipt className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'Create Single Invoice', href: '/student-accounting/create-invoice' },
        { label: 'Fees Pay / Invoice', href: '/student-accounting/fees-pay' },
        { label: 'Fee Category', href: '/student-accounting/fee-category' },
        { label: 'Invoice History & Print', href: '/student-accounting/invoice-history' },
      ],
    },
    {
      id: 'officeAccounting',
      label: 'Office Accounting',
      icon: <Landmark className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'Under Group', href: '/office-accounting/under-group' },
        { label: 'Bank Account', href: '/office-accounting/bank-account' },
        { label: 'Ledger Account', href: '/office-accounting/ledger' },
        { label: 'Opening Balance', href: '/office-accounting/opening-balance' },
        { label: 'Create Voucher', href: '/office-accounting/voucher' },
      ],
    },
    {
      id: 'attendance',
      label: 'Attendance',
      icon: <CheckCircle2 className="w-4 h-4" />,
      href: '/attendance',
    },
    {
      id: 'library',
      label: 'Library',
      icon: <LibraryIcon className="w-4 h-4" />,
      href: '/library',
    },
    {
      id: 'events',
      label: 'Events',
      icon: <CalendarDays className="w-4 h-4" />,
      href: '/events',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4 text-[#ff5252]" />,
      subItems: [
        { label: 'Global Settings', href: '/settings/global' },
      ],
    },
  ];

  // Quick navigation all-pages list
  const showcasePages = [
    { name: 'Dashboard (All Branches)', path: '/dashboard', tag: 'Core Analytics' },
    { name: 'Control Classes', path: '/academic/classes', tag: 'Academic' },
    { name: 'Section Control', path: '/academic/sections', tag: 'Academic' },
    { name: 'Assign Class Teacher', path: '/academic/assign-teacher', tag: 'Academic' },
    { name: 'Student List', path: '/students', tag: 'Students' },
    { name: 'Student Profile (Angie Crowther)', path: '/students/profile', tag: 'Students' },
    { name: 'Create Admission', path: '/admission/create', tag: 'Admission' },
    { name: 'Multiple CSV Import', path: '/admission/multiple-import', tag: 'Admission' },
    { name: 'Student Category', path: '/admission/category', tag: 'Admission' },
    { name: 'Branch Management', path: '/branch', tag: 'Branch' },
    { name: 'Fee Category', path: '/student-accounting/fee-category', tag: 'Accounting' },
    { name: 'Create Single Invoice', path: '/student-accounting/create-invoice', tag: 'Accounting' },
    { name: 'Fees Pay / Invoice', path: '/student-accounting/fees-pay', tag: 'Accounting' },
    { name: 'Invoice History & Print', path: '/student-accounting/invoice-history', tag: 'Accounting' },
    { name: 'Under Group', path: '/office-accounting/under-group', tag: 'Office Accounting' },
    { name: 'Bank Account', path: '/office-accounting/bank-account', tag: 'Office Accounting' },
    { name: 'Ledger Account', path: '/office-accounting/ledger', tag: 'Office Accounting' },
    { name: 'Opening Balance', path: '/office-accounting/opening-balance', tag: 'Office Accounting' },
    { name: 'Create Voucher', path: '/office-accounting/voucher', tag: 'Office Accounting' },
    { name: 'Add Employee', path: '/employee/add', tag: 'HR & Staff' },
    { name: 'Global Settings & Themes', path: '/settings/global', tag: 'System Settings' },
    { name: 'Web Application Installer (5-Steps)', path: '/installer', tag: 'Setup Wizard' },
    { name: 'Cambridge High School Login', path: '/login', tag: 'Auth Portal' },
  ];

  const filteredPages = searchQuery.trim()
    ? showcasePages.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen bg-[#1c1e22] text-[#c7cbd2] flex flex-col font-sans">
      {/* TOP HEADER NAVBAR */}
      <header className="no-print h-14 bg-[#23262b] border-b border-[#30343c] flex items-center justify-between px-3 md:px-5 sticky top-0 z-40 select-none">
        {/* Left branding & toggles */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#ff5252] to-[#d63031] p-1 flex items-center justify-center shadow">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white flex items-center">
                <span className="text-[#ff5252]">ABHIBHI</span>DEVELOPERS
              </span>
              <span className="text-[9px] text-[#8e94a0] uppercase tracking-wider font-semibold -mt-1 hidden sm:block">
                School Management ERP
              </span>
            </div>
          </Link>

          {/* Desktop sidebar toggle button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
            title="Toggle Sidebar"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
            title="Open Mobile Navigation"
            aria-label="Open Mobile Navigation"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Fullscreen icon */}
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Grid Quick launcher icon */}
          <button
            onClick={() => setQuickNavOpen(true)}
            className="flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-[#ff5252] hover:bg-[#2c3037] transition-colors"
            title="Quick Module Menu"
          >
            <Grid className="w-4 h-4" />
          </button>
        </div>

        {/* Center Search Input with Instant Autocomplete */}
        <div className="relative flex-1 max-w-xs md:max-w-md mx-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search module, student, invoice, settings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 250)}
              className="w-full bg-[#191b1f] border border-[#343840] rounded px-3 py-1.5 text-xs text-white placeholder-[#68707d] focus:outline-none focus:border-[#ff5252] transition-colors pr-8"
            />
            <Search className="w-3.5 h-3.5 text-[#68707d] absolute right-2.5 top-2.5 pointer-events-none" />
          </div>

          {/* Search Dropdown Results */}
          {searchFocused && filteredPages.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#23262b] border border-[#363b44] rounded shadow-xl py-1 z-50 max-h-60 overflow-y-auto">
              <div className="px-3 py-1 text-[10px] uppercase font-semibold text-[#8b919e]">Quick Jump</div>
              {filteredPages.map((item, idx) => (
                <button
                  key={idx}
                  onMouseDown={() => {
                    router.push(item.path);
                    setSearchQuery('');
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-[#d1d5db] hover:bg-[#2e333b] hover:text-[#ff5252] flex items-center justify-between transition-colors"
                >
                  <span>{item.name}</span>
                  <span className="text-[10px] text-[#717783] bg-[#1a1c20] px-1.5 py-0.5 rounded">{item.tag}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right action icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Showcase Switcher Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-[#191b1f] p-1 rounded border border-[#30353d] text-[11px]">
            <Link
              href="/dashboard"
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                pathname === '/dashboard' ? 'bg-[#ff5252] text-white' : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              ERP Admin
            </Link>
            <Link
              href="/installer"
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                pathname === '/installer' ? 'bg-[#ff5252] text-white' : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Installer
            </Link>
            <Link
              href="/login"
              className={`px-2 py-0.5 rounded font-medium transition-colors ${
                pathname === '/login' ? 'bg-[#ff5252] text-white' : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Login Screen
            </Link>
          </div>

          {/* Calendar link */}
          <Link
            href="/events"
            className="flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
            title="Academic Calendar & Events"
          >
            <Calendar className="w-4 h-4" />
          </Link>

          {/* Language Flag */}
          <button
            onClick={() => alert('Language set to English (United States)')}
            className="flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
            title="Language"
          >
            <Flag className="w-4 h-4" />
          </button>

          {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative flex items-center justify-center w-8 h-8 rounded text-[#9ca3af] hover:text-white hover:bg-[#2c3037] transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ff5252]"></span>
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#23262b] border border-[#373c45] rounded-md shadow-2xl p-2 z-50 text-xs">
                <div className="font-semibold text-white px-2 py-1 border-b border-[#31363f] flex items-center justify-between">
                  <span>Notifications (3)</span>
                  <span className="text-[10px] text-[#ff5252] cursor-pointer">Mark all read</span>
                </div>
                <div className="py-1 divide-y divide-[#2d3139]">
                  <div className="p-2 hover:bg-[#2a2e35] rounded cursor-pointer">
                    <p className="text-white font-medium">New student enrolled: Angie Crowther</p>
                    <p className="text-[10px] text-[#8e94a0]">Class Two (B) - 10 mins ago</p>
                  </div>
                  <div className="p-2 hover:bg-[#2a2e35] rounded cursor-pointer">
                    <p className="text-white font-medium">Fee collection pending: #294293</p>
                    <p className="text-[10px] text-[#8e94a0]">Balance: $701.00 - 1 hour ago</p>
                  </div>
                  <div className="p-2 hover:bg-[#2a2e35] rounded cursor-pointer">
                    <p className="text-white font-medium">Class schedule updated</p>
                    <p className="text-[10px] text-[#8e94a0]">Academic Year 2018-2019</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User profile avatar dropdown */}
          <div className="relative ml-1">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded hover:bg-[#2c3037] transition-colors text-left"
            >
              <div className="w-7 h-7 rounded-full bg-[#ff5252]/20 border border-[#ff5252]/40 text-[#ff5252] flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div className="hidden xl:flex flex-col">
                <span className="text-xs font-medium text-white leading-tight">Super Admin</span>
                <span className="text-[10px] text-[#8e94a0] leading-tight">Cambridge High</span>
              </div>
              <ChevronDown className="w-3 h-3 text-[#7f8590]" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-[#23262b] border border-[#373c45] rounded-md shadow-2xl py-1 z-50 text-xs">
                <div className="px-3 py-2 border-b border-[#30353e]">
                  <p className="font-semibold text-white">Super Admin</p>
                  <p className="text-[11px] text-[#8e94a0]">superadmin@cambridge.edu</p>
                  <span className="inline-block mt-1 text-[9px] bg-[#ff5252]/20 text-[#ff5252] px-1.5 py-0.5 rounded">
                    Branch: Little Flower School
                  </span>
                </div>
                <Link
                  href="/students/profile"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="px-3 py-2 text-[#d1d5db] hover:bg-[#2c3037] hover:text-[#ff5252] flex items-center gap-2"
                >
                  <User className="w-3.5 h-3.5" /> Sample Student Profile
                </Link>
                <Link
                  href="/settings/global"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="px-3 py-2 text-[#d1d5db] hover:bg-[#2c3037] hover:text-[#ff5252] flex items-center gap-2"
                >
                  <Sliders className="w-3.5 h-3.5" /> Global Settings & Themes
                </Link>
                <Link
                  href="/installer"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="px-3 py-2 text-[#d1d5db] hover:bg-[#2c3037] hover:text-[#ff5252] flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Run App Installer
                </Link>
                <div className="border-t border-[#30353e] my-1"></div>
                <Link
                  href="/login"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="px-3 py-2 text-[#ff6b6b] hover:bg-[#2c3037] flex items-center gap-2 font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout to Login Screen
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER: SIDEBAR + CONTENT */}
      <div className="flex flex-1 relative overflow-hidden">
        {/* DESKTOP SIDEBAR */}
        <aside
          className={`no-print hidden md:flex flex-col bg-[#202328] border-r border-[#2d3138] transition-all duration-300 ease-in-out select-none overflow-y-auto ${
            sidebarOpen ? 'w-60 min-w-60' : 'w-16 min-w-16'
          }`}
          style={{ height: 'calc(100vh - 3.5rem)' }}
        >
          {/* Main header in sidebar */}
          <div className="px-4 py-2 text-[10px] font-bold text-[#717783] uppercase tracking-wider">
            {sidebarOpen ? 'Main' : '•'}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-2 space-y-0.5 pb-8 text-xs">
            {menuItems.map((item) => {
              const hasSub = item.subItems && item.subItems.length > 0;
              const isExpanded = expandedMenus[item.id];
              const isCurrent =
                item.href === pathname ||
                (item.subItems && item.subItems.some((s) => s.href === pathname));

              if (!hasSub) {
                return (
                  <Link
                    key={item.id}
                    href={item.href || '#'}
                    className={`flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                      isCurrent
                        ? 'bg-[#191b1f] text-[#ff5252] font-semibold border-l-2 border-[#ff5252]'
                        : 'text-[#9ca3af] hover:text-white hover:bg-[#262a30]'
                    } ${!sidebarOpen ? 'justify-center px-2' : ''}`}
                    title={!sidebarOpen ? item.label : undefined}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {sidebarOpen && <span>{item.label}</span>}
                  </Link>
                );
              }

              return (
                <div key={item.id} className="space-y-0.5">
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded transition-colors ${
                      isCurrent
                        ? 'text-white font-medium bg-[#262a30]/60'
                        : 'text-[#9ca3af] hover:text-white hover:bg-[#262a30]'
                    } ${!sidebarOpen ? 'justify-center px-2' : ''}`}
                    title={!sidebarOpen ? item.label : undefined}
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <span>{item.icon}</span>
                      {sidebarOpen && <span>{item.label}</span>}
                    </div>
                    {sidebarOpen && (
                      <span className="text-[#646a77] text-xs">
                        {isExpanded ? '−' : '+'}
                      </span>
                    )}
                  </button>

                  {/* Submenu items */}
                  {sidebarOpen && isExpanded && (
                    <div className="pl-7 pr-2 py-0.5 space-y-0.5">
                      {item.subItems?.map((sub, sidx) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sidx}
                            href={sub.href}
                            className={`block py-1.5 px-2 rounded text-[11px] transition-colors ${
                              isSubActive
                                ? 'text-[#ff5252] bg-[#191b1f] font-semibold flex items-center gap-1.5'
                                : 'text-[#8b919e] hover:text-white hover:bg-[#262a30]'
                            }`}
                          >
                            {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff5252]"></span>}
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Standalone Links */}
            <div className="pt-3 border-t border-[#2b2f36] my-2">
              <div className="px-2 pb-1 text-[9px] font-bold text-[#686f7c] uppercase tracking-wider">
                {sidebarOpen ? 'External Demo Screens' : ''}
              </div>
              <Link
                href="/installer"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded text-[11px] text-[#ff8a80] hover:bg-[#262a30] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                {sidebarOpen && <span>Web App Installer</span>}
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded text-[11px] text-[#81d4fa] hover:bg-[#262a30] transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 shrink-0" />
                {sidebarOpen && <span>Login Portal</span>}
              </Link>
            </div>
          </nav>
        </aside>

        {/* MOBILE DRAWER SIDEBAR */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <div className="relative w-72 max-w-[85%] bg-[#202328] h-full flex flex-col z-10 border-r border-[#2d3138] overflow-y-auto p-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#2d3138] mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-[#ff5252] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-white text-sm">
                    <span className="text-[#ff5252]">ABHIBHI</span>DEVELOPERS
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-7 h-7 rounded text-[#8e94a0] hover:text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1 text-xs">
                {menuItems.map((item) => (
                  <div key={item.id} className="py-0.5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded text-[#c7cbd2] hover:bg-[#2a2e35]"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <div>
                        <div className="px-3 py-1 text-[11px] font-semibold text-[#8b919e] flex items-center gap-2">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <div className="pl-6 space-y-0.5">
                          {item.subItems?.map((sub, sidx) => (
                            <Link
                              key={sidx}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-2 py-1.5 rounded text-xs ${
                                pathname === sub.href
                                  ? 'text-[#ff5252] font-semibold bg-[#191b1f]'
                                  : 'text-[#9ca3af] hover:text-white'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#2e323a] space-y-1 text-xs">
                <Link
                  href="/installer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[#ff8a80] rounded hover:bg-[#2a2e35]"
                >
                  🚀 Launch Web App Installer
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[#81d4fa] rounded hover:bg-[#2a2e35]"
                >
                  🔐 Go to Login Portal
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#1e2125] overflow-y-auto">
          {/* Breadcrumb Bar */}
          <div className="no-print bg-[#25282e] border-b border-[#30353d] px-4 py-2.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-2 text-xs">
              <Link href="/dashboard" className="text-[#ff5252] hover:underline flex items-center gap-1 font-semibold">
                <span>🏠</span>
                <span>Home</span>
              </Link>
              <span className="text-[#555b66]">/</span>
              <span className="text-white font-medium">{pageTitle}</span>
              {breadcrumb.map((b, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-[#555b66]">/</span>
                  {b.href ? (
                    <Link href={b.href} className="text-[#9ca3af] hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Quick action button / status */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] text-[#8e94a0] bg-[#1d2024] px-2 py-0.5 rounded border border-[#30343c]">
                Branch: Little Flower School (Active)
              </span>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="flex-1 p-3 sm:p-5 md:p-6">{children}</div>

          {/* FOOTER */}
          <footer className="no-print bg-[#202327] border-t border-[#2e3239] px-4 py-3 text-center text-[11px] text-[#717783]">
            2026 © All Rights Reserved - <span className="text-[#ff5252] font-medium">techtune</span> | ABHIBHIDEVELOPERS School Management ERP
          </footer>
        </main>
      </div>

      {/* QUICK MODULE LAUNCHER MODAL */}
      {quickNavOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#24272d] border border-[#3b404a] rounded-lg shadow-2xl max-w-2xl w-full p-5 text-xs text-[#d1d5db]">
            <div className="flex items-center justify-between pb-3 border-b border-[#343841]">
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-[#ff5252]" />
                <h3 className="text-sm font-bold text-white">ABHIBHIDEVELOPERS School ERP - All Modules Showcase</h3>
              </div>
              <button
                onClick={() => setQuickNavOpen(false)}
                className="w-7 h-7 rounded text-[#8e94a0] hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="py-2 text-[11px] text-[#8e94a0]">
              Click any module below to open its dedicated page. Every button, tab, and navigation path works seamlessly:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-1">
              {showcasePages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    router.push(item.path);
                    setQuickNavOpen(false);
                  }}
                  className={`text-left p-2.5 rounded border transition-colors flex flex-col justify-between ${
                    pathname === item.path
                      ? 'border-[#ff5252] bg-[#ff5252]/10 text-white'
                      : 'border-[#33373f] bg-[#1e2126] hover:border-[#ff5252]/50 hover:bg-[#282c33] text-[#cfd3db]'
                  }`}
                >
                  <span className="font-semibold text-xs leading-tight mb-1">{item.name}</span>
                  <span className="text-[10px] text-[#ff7979] uppercase tracking-wider">{item.tag}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#343841] flex justify-end">
              <button
                onClick={() => setQuickNavOpen(false)}
                className="px-4 py-1.5 bg-[#32363e] hover:bg-[#3d424c] text-white rounded font-medium text-xs transition-colors"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING QUICK NAVIGATOR BUTTON */}
      <div className="fixed bottom-4 right-4 z-40 no-print">
        <button
          onClick={() => setQuickNavOpen(true)}
          className="flex items-center gap-2 bg-[#ff5252] hover:bg-[#e04545] text-white font-semibold text-xs px-3.5 py-2 rounded-full shadow-lg border border-[#ff6b6b]/40 transition-transform hover:scale-105 active:scale-95"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Browse 17+ Pages</span>
        </button>
      </div>
    </div>
  );
}
