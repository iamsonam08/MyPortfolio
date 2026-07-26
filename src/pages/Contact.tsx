import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { DownloadResumeButton } from '../components/DownloadResumeButton';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Send,
  CheckCircle2,
  FileText,
  ExternalLink,
  Copy,
  Sparkles,
  ArrowRight,
  MessageSquare,
  User,
  Check,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

// ==========================================
// CONTACT DATA
// ==========================================

const CONTACT_INFO = [
  {
    id: 'email',
    label: 'Email',
    value: 'yadusonam08@gmail.com',
    href: 'mailto:yadusonam08@gmail.com',
    subtext: 'Preferred for formal & engineering inquiries',
    icon: Mail,
    copyable: true,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 7249853561',
    rawValue: '7249853561',
    href: 'tel:+917249853561',
    subtext: 'Available during Indian Standard Time (IST)',
    icon: Phone,
    copyable: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Baramati, Pune, Maharashtra, India',
    href: 'https://maps.google.com/?q=Baramati,Pune,Maharashtra,India',
    subtext: 'Open to Remote & On-site Roles',
    icon: MapPin,
    copyable: false,
  },
];

const PROFESSIONAL_LINKS = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'sonam-yadav-949489316',
    url: 'https://www.linkedin.com/in/sonam-yadav-949489316/',
    description: 'Professional experience, achievements & academic updates.',
    icon: Linkedin,
    badge: 'Professional Profile',
  },
  {
    id: 'github',
    platform: 'GitHub',
    username: 'iamsonam08',
    url: 'https://github.com/iamsonam08',
    description: 'Open source repositories, full-stack & AI projects codebase.',
    icon: Github,
    badge: 'Code Repositories',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'iamsonam08_06',
    url: 'https://leetcode.com/u/iamsonam08_06/',
    description: '300+ solved Data Structures & Algorithms problems.',
    icon: Code2,
    badge: '300+ Problems Solved',
  },
];

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard network dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div id="page-contact" className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            CONTACT
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight">
          Let's Connect
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          I'm always open to discussing Software Engineering, AI, Full Stack Development, internships, collaborations and exciting opportunities.
        </p>
      </motion.div>

      {/* SECTION 1 — CONTACT INFORMATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Mail className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Contact Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_INFO.map((info, idx) => {
            const Icon = info.icon;
            const isCopied = copiedId === info.id;

            return (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="saas-card p-6 flex flex-col justify-between space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                      {info.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#0F172A] dark:text-white break-all">
                      {info.value}
                    </h3>
                    <p className="text-xs text-[#475569] dark:text-[#D1D5DB] mt-1">
                      {info.subtext}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    href={info.href}
                    target={info.id === 'location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3 flex-1 flex items-center justify-center gap-1.5 font-semibold"
                  >
                    <span>{info.id === 'location' ? 'View Map' : info.id === 'phone' ? 'Call Now' : 'Send Email'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                  </motion.a>

                  {info.copyable && (
                    <motion.button
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      type="button"
                      onClick={() => handleCopy(info.id, info.rawValue || info.value)}
                      className="p-2 rounded-xl border border-[#E2E8F0] dark:border-[#374151] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] text-[#475569] dark:text-[#D1D5DB] transition-colors cursor-pointer"
                      title={`Copy ${info.label}`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2 — PROFESSIONAL LINKS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Globe className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Professional Links
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFESSIONAL_LINKS.map((link, idx) => {
            const Icon = link.icon;

            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="saas-card p-6 flex flex-col justify-between space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-1 rounded-md">
                      {link.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#0F172A] dark:text-white">
                      {link.platform}
                    </h3>
                    <p className="text-xs font-mono text-[#0F766E] dark:text-[#5EEAD4] mt-0.5">
                      @{link.username}
                    </p>
                    <p className="text-xs text-[#475569] dark:text-[#D1D5DB] leading-relaxed mt-2">
                      {link.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full py-2 px-4 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Visit {link.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — CONTACT FORM */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <MessageSquare className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Send a Direct Message
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="saas-card p-6 sm:p-8 max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#0F766E]/10 border-2 border-[#0F766E] dark:border-[#5EEAD4] flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-[#0F172A] dark:text-white">{formData.name}</span>. I have received your message regarding "<span className="italic">{formData.subject}</span>" and will get back to you shortly at <span className="font-semibold text-[#0F766E] dark:text-[#5EEAD4]">{formData.email}</span>.
                  </p>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary py-2 px-5 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#475569] dark:text-[#D1D5DB]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sonam Yadav"
                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-[#0F172A] dark:text-white focus:outline-hidden focus:border-[#0F766E] dark:focus:border-[#5EEAD4] focus:ring-2 focus:ring-[#0F766E]/20 transition-all placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#475569] dark:text-[#D1D5DB]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yadusonam08@gmail.com"
                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-[#0F172A] dark:text-white focus:outline-hidden focus:border-[#0F766E] dark:focus:border-[#5EEAD4] focus:ring-2 focus:ring-[#0F766E]/20 transition-all placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Engineering Internship / Full Stack Opportunity"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-[#0F172A] dark:text-white focus:outline-hidden focus:border-[#0F766E] dark:focus:border-[#5EEAD4] focus:ring-2 focus:ring-[#0F766E]/20 transition-all placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sonam, I reviewed your AI and Full Stack portfolio and would like to discuss..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-[#0F172A] dark:text-white focus:outline-hidden focus:border-[#0F766E] dark:focus:border-[#5EEAD4] focus:ring-2 focus:ring-[#0F766E]/20 transition-all placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B] resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-end w-full">
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-3 px-7 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-8 sm:p-10 border-2 border-[#0F766E] dark:border-[#5EEAD4] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0F766E]/10 border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Let's Build Something Meaningful Together
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
              I'm actively looking for internships, Software Engineering and AI opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href="mailto:yadusonam08@gmail.com"
              className="btn-primary py-2.5 px-6 text-sm font-semibold rounded-xl"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </motion.a>

            <DownloadResumeButton className="btn-secondary py-2.5 px-6 text-sm font-semibold rounded-xl" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
