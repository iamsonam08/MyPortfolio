import React from 'react';
import { Shield, Building2, BookOpen, Users2, Sparkles, Search, MessageSquare } from 'lucide-react';

interface ProjectMockupPreviewProps {
  projectId: string;
  projectName: string;
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({ projectId, projectName }) => {
  const domainUrl = `${projectId.replaceAll('_', '-')}.app`;

  return (
    <div className="w-full aspect-[16/9] sm:aspect-[16/9] rounded-xl bg-[#FFFFFF] border border-black/10 overflow-hidden relative flex flex-col shadow-xs group">
      {/* Browser Window Titlebar */}
      <div className="bg-[#EFEFEF] px-3 py-1.5 border-b border-black/10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
        </div>

        <div className="bg-[#FFFFFF] border border-black/10 px-3 py-0.5 rounded-full text-[10px] font-mono text-[#4B5563] flex items-center gap-1.5 shadow-xs max-w-[180px] sm:max-w-[220px] truncate">
          <span className="text-[#10B981]">https://</span>
          <span className="font-semibold text-[#1E2525] truncate">{domainUrl}</span>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono text-[#055C5E] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="hidden sm:inline">Active</span>
        </div>
      </div>

      {/* Main Browser Window Content / Realistic Mockup Area */}
      <div className="p-2 bg-[#F8FAFC] flex-1 overflow-hidden relative text-[#1E2525] flex flex-col justify-between">
        
        {/* 1. LINEX: Hospital Queue Management Dashboard */}
        {projectId === 'linex' && (
          <div className="h-full flex flex-col justify-between space-y-1.5 text-[#1E2525]">
            {/* Top Bar with Hospital Branding, Search, Doctor Status */}
            <div className="bg-[#FFFFFF] p-1.5 rounded-lg border border-black/5 shadow-xs flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#055C5E] text-[#F2B64E] flex items-center justify-center shrink-0">
                  <Users2 className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-[#1E2525] leading-none">CityCare Hospital</div>
                  <div className="text-[8px] text-[#055C5E] font-medium">Queue & Token System</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden sm:flex items-center gap-1 bg-[#F1F5F9] px-2 py-0.5 rounded border border-black/5 text-[8px] text-[#64748B] w-36">
                <Search className="w-2.5 h-2.5 text-[#055C5E]" />
                <span className="truncate">Search patient / token...</span>
              </div>

              {/* Doctor Status */}
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#E0F2FE] text-[#0369A1] text-[8px] font-mono font-bold">
                  Dr. Sharma • Available
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#055C5E] text-[#F2B64E] text-[8px] font-mono font-bold">
                  TOKEN #A-104
                </span>
              </div>
            </div>

            {/* Main Content Grid with Sidebar & Queue Cards */}
            <div className="grid grid-cols-12 gap-1.5 flex-1 items-stretch">
              {/* Mini Sidebar */}
              <div className="col-span-2 bg-[#FFFFFF] rounded-lg p-1.5 border border-black/5 flex flex-col justify-between items-center text-[8px] space-y-1 text-[#055C5E]">
                <div className="p-1 rounded bg-[#055C5E] text-white w-full text-center font-bold">Queue</div>
                <div className="p-1 rounded hover:bg-slate-100 w-full text-center text-[#64748B]">Book</div>
                <div className="p-1 rounded hover:bg-slate-100 w-full text-center text-[#64748B]">Doctors</div>
                <div className="p-1 rounded hover:bg-slate-100 w-full text-center text-[#64748B]">Reports</div>
              </div>

              {/* Now Serving Token Card */}
              <div className="col-span-5 bg-[#055C5E] rounded-lg p-2 text-white flex flex-col justify-between shadow-xs">
                <div className="flex justify-between items-center text-[8px] font-mono text-[#F2B64E]">
                  <span className="uppercase font-bold">Current Token</span>
                  <span className="bg-white/20 px-1 rounded text-white text-[7px]">OPD Rm 02</span>
                </div>
                <div className="my-auto text-center">
                  <div className="text-xl sm:text-2xl font-black font-mono text-[#FFFFFF] tracking-tight">#A-104</div>
                  <div className="text-[8px] text-white/90">General Consultation</div>
                </div>
                <div className="pt-1 border-t border-white/20 flex items-center justify-between text-[7px] text-white/90 font-mono">
                  <span>Est. Wait: 3m</span>
                  <span className="text-[#F2B64E] font-bold">Next: #A-105</span>
                </div>
              </div>

              {/* Live Waiting Queue List */}
              <div className="col-span-5 bg-[#FFFFFF] rounded-lg p-1.5 border border-black/5 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-[8px] font-bold text-[#1E2525] border-b border-black/5 pb-1">
                  <span>Waiting Queue</span>
                  <span className="text-[7px] font-mono bg-[#E0F2FE] text-[#0369A1] px-1 rounded">12 Waiting</span>
                </div>
                <div className="space-y-1 text-[8px] pt-1">
                  <div className="flex items-center justify-between p-1 rounded bg-[#ECFDF5] text-[#1E2525]">
                    <span className="font-mono font-bold text-[#055C5E]">#A-104</span>
                    <span className="text-[7px] text-[#047857] font-semibold">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-[#FFFBEB] text-[#1E2525]">
                    <span className="font-mono font-bold text-[#1E2525]">#A-105</span>
                    <span className="text-[7px] text-[#B45309] font-semibold">Calling</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-[#F8FAFC] text-[#1E2525]">
                    <span className="font-mono font-bold text-[#1E2525]">#A-106</span>
                    <span className="text-[7px] text-[#64748B]">Next in line</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. EDUCOMICS: Modern AI Educational Comic Platform */}
        {projectId === 'educomics' && (
          <div className="h-full flex flex-col justify-between space-y-1.5">
            {/* Header with Lesson Selection & AI Prompt Input */}
            <div className="bg-[#FFFFFF] p-1.5 rounded-lg border border-black/5 shadow-xs flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1 shrink-0">
                <Sparkles className="w-3 h-3 text-[#055C5E]" />
                <span className="text-[9px] font-bold text-[#1E2525]">EduComics AI</span>
              </div>

              {/* AI Prompt Input Bar */}
              <div className="flex-1 bg-[#F1F5F9] px-2 py-0.5 rounded border border-black/5 text-[8px] text-[#334155] flex items-center justify-between">
                <span className="truncate">Prompt: "Explain Photosynthesis with solar hero..."</span>
                <span className="text-[7px] bg-[#055C5E] text-white px-1.5 py-0.2 rounded font-semibold ml-1 shrink-0">Generate</span>
              </div>

              <span className="px-1.5 py-0.5 rounded bg-[#F2B64E] text-[#1E2525] text-[7px] font-mono font-bold shrink-0">
                Export PDF
              </span>
            </div>

            {/* Comic Panel Canvas */}
            <div className="grid grid-cols-3 gap-1.5 flex-1">
              <div className="bg-[#FFFBEB] rounded-lg p-1.5 border border-[#F59E0B]/30 flex flex-col justify-between shadow-xs">
                <div className="text-[8px] font-bold text-[#B45309] flex justify-between items-center">
                  <span>Panel 1: Solar Energy</span>
                  <span className="text-[7px] font-mono text-[#D97706]">#1</span>
                </div>
                <div className="text-center my-auto py-1">
                  <span className="text-xl">☀️</span>
                  <div className="text-[8px] font-bold text-[#1E2525] mt-0.5">"I radiate photons!"</div>
                </div>
                <div className="text-[7px] text-[#B45309] bg-white/60 p-0.5 rounded text-center">Lesson: Light Energy</div>
              </div>

              <div className="bg-[#ECFDF5] rounded-lg p-1.5 border border-[#10B981]/30 flex flex-col justify-between shadow-xs">
                <div className="text-[8px] font-bold text-[#047857] flex justify-between items-center">
                  <span>Panel 2: Chloroplast</span>
                  <span className="text-[7px] font-mono text-[#059669]">#2</span>
                </div>
                <div className="text-center my-auto py-1">
                  <span className="text-xl">🍃</span>
                  <div className="text-[8px] font-bold text-[#1E2525] mt-0.5">"Absorbing H₂O & CO₂!"</div>
                </div>
                <div className="text-[7px] text-[#047857] bg-white/60 p-0.5 rounded text-center">Lesson: Chemical Conversion</div>
              </div>

              <div className="bg-[#F0FDFA] rounded-lg p-1.5 border border-[#055C5E]/30 flex flex-col justify-between shadow-xs">
                <div className="text-[8px] font-bold text-[#055C5E] flex justify-between items-center">
                  <span>Panel 3: Oxygen Output</span>
                  <span className="text-[7px] font-mono text-[#0891B2]">#3</span>
                </div>
                <div className="text-center my-auto py-1">
                  <span className="text-xl">🧪</span>
                  <div className="text-[8px] font-bold text-[#1E2525] mt-0.5">"Releasing Oxygen!"</div>
                </div>
                <div className="text-[7px] text-[#055C5E] bg-white/60 p-0.5 rounded text-center">Lesson: Life Cycle</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[7px] text-[#4B5563] px-1 font-mono">
              <span>Grade 6 Biology • Plant Science</span>
              <span className="text-[#055C5E] font-bold">Interactive Comic Studio</span>
            </div>
          </div>
        )}

        {/* 3. QUADX: College Companion Dashboard */}
        {projectId === 'quadx' && (
          <div className="h-full flex flex-col justify-between space-y-1.5">
            {/* Header: Student Profile, Notice Board Ticker, Campus Map */}
            <div className="bg-[#FFFFFF] p-1.5 rounded-lg border border-black/5 shadow-xs flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#055C5E] text-white font-bold text-[9px] flex items-center justify-center">
                  SY
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#1E2525] leading-none">Sonam Y. • CS 3rd Year</div>
                  <div className="text-[7px] text-[#055C5E]">QuadX College Portal</div>
                </div>
              </div>

              {/* Notice Ticker */}
              <div className="hidden sm:flex items-center gap-1 bg-[#FFFBEB] px-2 py-0.5 rounded border border-[#F59E0B]/30 text-[7px] text-[#B45309]">
                <span className="font-bold">Notice:</span>
                <span className="truncate">Mid-term Schedule Released</span>
              </div>

              <div className="flex items-center gap-1 text-[7px]">
                <span className="px-1.5 py-0.5 bg-[#ECFDF5] text-[#047857] rounded font-mono font-bold">Map</span>
                <span className="px-1.5 py-0.5 bg-[#055C5E] text-white rounded font-mono font-bold">Complaints</span>
              </div>
            </div>

            {/* QuadX Dashboard Grid */}
            <div className="grid grid-cols-12 gap-1.5 flex-1">
              {/* Timetable & Attendance */}
              <div className="col-span-5 bg-[#FFFFFF] rounded-lg p-1.5 border border-black/5 shadow-xs flex flex-col justify-between space-y-1">
                <div className="flex justify-between items-center border-b border-black/5 pb-1">
                  <span className="text-[8px] font-bold text-[#1E2525]">Today's Timetable</span>
                  <span className="text-[7px] font-mono text-[#047857] font-bold bg-[#ECFDF5] px-1 rounded">Attd: 92%</span>
                </div>

                <div className="space-y-1 text-[7px]">
                  <div className="p-1 rounded bg-[#F8FAFC] border-l-2 border-[#055C5E] flex justify-between">
                    <div>
                      <div className="font-bold text-[#1E2525]">Data Structures</div>
                      <div className="text-[#64748B]">10:00 AM • Room 302</div>
                    </div>
                    <span className="text-[#047857] font-bold">Present</span>
                  </div>
                  <div className="p-1 rounded bg-[#F8FAFC] border-l-2 border-[#F59E0B] flex justify-between">
                    <div>
                      <div className="font-bold text-[#1E2525]">Web Dev Lab</div>
                      <div className="text-[#64748B]">02:00 PM • Lab 04</div>
                    </div>
                    <span className="text-[#D97706] font-bold">Upcoming</span>
                  </div>
                </div>
              </div>

              {/* QuadX AI Chatbot & Services */}
              <div className="col-span-7 bg-[#FFFFFF] rounded-lg p-1.5 border border-black/5 shadow-xs flex flex-col justify-between space-y-1">
                <div className="flex justify-between items-center text-[8px] font-bold text-[#1E2525]">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-2.5 h-2.5 text-[#055C5E]" />
                    QuadX AI Assistant & Portals
                  </span>
                  <span className="text-[7px] font-mono text-[#055C5E]">Scholarship: Active</span>
                </div>

                {/* AI Chat snippet */}
                <div className="bg-[#F0FDFA] p-1 rounded border border-[#055C5E]/20 text-[7px] space-y-0.5">
                  <div className="font-bold text-[#055C5E]">AI Bot: "3 Internship opportunities match your profile!"</div>
                  <div className="text-[#64748B]">Ask anything about syllabus or campus notices...</div>
                </div>

                {/* Quick Badges */}
                <div className="grid grid-cols-3 gap-1 text-[7px] text-center font-bold">
                  <div className="bg-[#E0F2FE] text-[#0369A1] p-1 rounded">Scholarship ✓</div>
                  <div className="bg-[#ECFDF5] text-[#047857] p-1 rounded">Internships (3)</div>
                  <div className="bg-[#FEF3C7] text-[#B45309] p-1 rounded">Campus Map</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CRIME INTELLIGENCE DASHBOARD: Police Analytics Dashboard */}
        {projectId === 'crime-intelligence' && (
          <div className="h-full flex flex-col justify-between space-y-1.5 text-white">
            {/* Top Police Intel Header & Filters */}
            <div className="bg-[#0F172A] p-1.5 rounded-lg border border-white/10 shadow-xs flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[9px] font-extrabold text-white tracking-wide">METRO POLICE INTEL</span>
              </div>

              <div className="flex items-center gap-1 text-[7px] font-mono">
                <span className="px-1.5 py-0.5 bg-[#EF4444] text-white font-bold rounded">Hotspots Active</span>
                <span className="px-1.5 py-0.5 bg-[#1E293B] text-[#38BDF8] rounded border border-white/10">Filters: 24h</span>
              </div>
            </div>

            {/* Interactive Map & Timeline Grid */}
            <div className="grid grid-cols-12 gap-1.5 flex-1">
              {/* Map Canvas with Crime Hotspots */}
              <div className="col-span-7 bg-[#1E293B] rounded-lg p-1.5 relative overflow-hidden border border-white/10 shadow-xs flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:10px_10px]" />

                {/* Hotspot 1 */}
                <div className="absolute top-1/3 left-1/3 flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-[#EF4444]/40 animate-ping absolute" />
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-white" />
                </div>

                {/* Hotspot 2 */}
                <div className="absolute bottom-1/4 right-1/4 flex items-center justify-center">
                  <span className="w-8 h-8 rounded-full bg-[#F59E0B]/40 animate-ping absolute" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-white" />
                </div>

                <div className="relative z-10 flex justify-between items-center text-[7px] font-mono">
                  <span className="bg-black/70 px-1.5 py-0.5 rounded text-gray-300">Sector 4 Google Map</span>
                  <span className="bg-[#EF4444] px-1.5 py-0.5 rounded text-white font-bold">Heatmap Risk 88%</span>
                </div>

                <div className="relative z-10 bg-black/80 backdrop-blur-xs p-1 rounded border border-white/10 flex justify-between text-[7px] font-mono">
                  <span>Incidents: 1,284</span>
                  <span className="text-[#38BDF8]">Hotspots: 4</span>
                  <span className="text-[#10B981]">Resp: 4.2m</span>
                </div>
              </div>

              {/* Crime Statistics & Timeline */}
              <div className="col-span-5 bg-[#0F172A] rounded-lg p-1.5 border border-white/10 shadow-xs flex flex-col justify-between space-y-1">
                <div className="text-[8px] font-bold text-white border-b border-white/10 pb-1 flex justify-between items-center">
                  <span>Live Incident Feed</span>
                  <span className="text-[7px] font-mono text-[#38BDF8]">Analytics</span>
                </div>

                <div className="space-y-1 text-[7px]">
                  <div className="p-1 rounded bg-[#1E293B] border-l-2 border-[#EF4444] flex justify-between">
                    <div>
                      <div className="font-bold text-white">Precinct #04 Hotspot</div>
                      <div className="text-gray-400">10:42 AM • High Priority</div>
                    </div>
                  </div>
                  <div className="p-1 rounded bg-[#1E293B] border-l-2 border-[#10B981] flex justify-between">
                    <div>
                      <div className="font-bold text-white">Sector #02 Resolved</div>
                      <div className="text-gray-400">10:15 AM • Unit Patrol</div>
                    </div>
                  </div>
                </div>

                {/* Trend Bar chart */}
                <div className="flex items-end justify-between gap-1 h-5 pt-1 border-t border-white/10 px-1">
                  <div className="w-full bg-[#38BDF8]/30 h-[40%] rounded-t" />
                  <div className="w-full bg-[#38BDF8]/60 h-[70%] rounded-t" />
                  <div className="w-full bg-[#EF4444] h-[100%] rounded-t" />
                  <div className="w-full bg-[#38BDF8]/40 h-[50%] rounded-t" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMockupPreview;
