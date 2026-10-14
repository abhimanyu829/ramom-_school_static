'use client';

import React, { useState } from 'react';
import ERPLayout from '@/components/layout/ERPLayout';
import { UploadCloud, Download, CheckCircle2, FileSpreadsheet } from 'lucide-react';

export default function MultipleImportPage() {
  const [branch, setBranch] = useState('Little Flower School');
  const [className, setClassName] = useState('Two');
  const [section, setSection] = useState('B');
  const [imported, setImported] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    setImported(true);
    setTimeout(() => setImported(false), 4000);
  };

  const handleDownloadSample = () => {
    const csvContent = "data:text/csv;charset=utf-8,FirstName,LastName,Gender,Birthday,AdmissionDate,Category,Roll,GuardianEmail\nJohn,Doe,Male,2005-01-26,2019-01-26,1,10004,parent@example.com";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sample_student_import.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ERPLayout pageTitle="Multiple Import" breadcrumb={[{ label: 'Admission' }]}>
      <div className="bg-[#24272d] border border-[#32363f] rounded shadow p-6 max-w-4xl">
        <div className="flex items-center justify-between border-b border-[#30343c] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-[#ff5252]" />
            <h1 className="text-sm font-bold text-white uppercase tracking-wider">Multiple Import</h1>
          </div>
          <button
            onClick={handleDownloadSample}
            className="px-3 py-1.5 bg-[#1e2126] border border-[#ff5252] text-[#ff8a80] hover:bg-[#ff5252] hover:text-white rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Sample Import File</span>
          </button>
        </div>

        {/* Instructions Box matching img_11.png */}
        <div className="bg-[#1e2126] border border-[#30343c] rounded p-4 mb-6 text-xs text-[#a0a6b2] space-y-1.5">
          <div className="font-bold text-white mb-1">Instructions :</div>
          <p>1. Download the first sample file.</p>
          <p>2. Open the downloaded &apos;csv&apos; file and carefully fill the details of the student.</p>
          <p>3. The date you are trying to enter the &quot;Birthday&quot; and &quot;AdmissionDate&quot; column make sure the date format is Y-m-d (2019-01-26).</p>
          <p>4. Do not import the duplicate &quot;roll number&quot; (unique in class). Register No generated automatically.</p>
          <p>5. The Category name comes from another table, so for the &quot;Category&quot;, enter Category ID (found on Category page).</p>
          <p>6. If the guardian is present, enter &quot;Guardian Email&quot; address, otherwise leave column blank.</p>
        </div>

        {imported && (
          <div className="mb-4 p-3 bg-[#4caf50]/20 border border-[#4caf50]/40 text-[#81c784] rounded text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
            <span>CSV Batch imported successfully! 15 new students enrolled into Class Two (B).</span>
          </div>
        )}

        {/* Import Form */}
        <form onSubmit={handleImport} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
            <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
              Branch <span className="text-[#ff5252]">*</span>
            </label>
            <div className="md:col-span-9">
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Little Flower School">Little Flower School</option>
                <option value="East Campus Primary">East Campus Primary</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
            <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
              Class <span className="text-[#ff5252]">*</span>
            </label>
            <div className="md:col-span-9">
              <select
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="Two">Class Two</option>
                <option value="Three">Class Three</option>
                <option value="Four">Class Four</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2">
            <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3">
              Section <span className="text-[#ff5252]">*</span>
            </label>
            <div className="md:col-span-9">
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full bg-[#1b1d22] border border-[#353942] rounded px-3 py-2 text-white focus:outline-none focus:border-[#ff5252]"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>
          </div>

          {/* Select CSV Dropzone */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-2 pt-2">
            <label className="md:col-span-3 text-right text-[#a0a6b2] font-medium pr-3 pt-4">
              Select CSV File <span className="text-[#ff5252]">*</span>
            </label>
            <div className="md:col-span-9">
              <div
                onClick={() => setFileName('batch_students_apr2019.csv')}
                className="border-2 border-dashed border-[#383d47] hover:border-[#ff5252] rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#1b1d22]"
              >
                <UploadCloud className="w-9 h-9 text-[#ff5252] mb-2" />
                <span className="text-white font-medium">
                  {fileName ? `Selected: ${fileName}` : 'Drag and drop a file here or click'}
                </span>
                <span className="text-[10px] text-[#717783] mt-1">.CSV formats only</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 pt-4">
            <div className="md:col-start-4 md:col-span-9">
              <button
                type="submit"
                className="bg-[#1e2126] border border-[#ff5252] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-6 py-2.5 rounded font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
              >
                <span>⊕</span>
                <span>Import</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </ERPLayout>
  );
}
