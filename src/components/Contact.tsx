import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiInstagram } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:deepikarthinikanche444@gmail.com',
    color: '#64ffda',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepikarthinikanche/',
    color: '#0077b5',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/deepikarthinikanche',
    color: '#e2e8f0',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/deepu_kanche',
    color: '#e1306c',
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '476b7aa9-5697-4a60-af9f-4dceaedd78f0',
          name: form.name,
          email: form.email,
          subject: form.subject || 'New Portfolio Contact',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#0a192f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#64ffda' }}>Get in touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Contact Me
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#64ffda,#38bdf8)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">Let's Work Together</h3>
            <p className="text-sm text-slate-400 mb-6">
              Available for full‑time opportunities, freelance projects, and collaborations. Let's build something amazing together! 🚀
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <FiCheckCircle size={48} style={{ color: '#34d399' }} />
                <p className="text-lg font-semibold text-white">Message Sent!</p>
                <p className="text-sm text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-sm mt-2" style={{ color: '#64ffda' }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2"
                    style={{ background: 'rgba(100,255,218,0.04)', border: '1px solid rgba(100,255,218,0.15)', focusRingColor: '#64ffda' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2"
                    style={{ background: 'rgba(100,255,218,0.04)', border: '1px solid rgba(100,255,218,0.15)' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all resize-none focus:ring-2"
                    style={{ background: 'rgba(100,255,218,0.04)', border: '1px solid rgba(100,255,218,0.15)' }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', boxShadow: '0 4px 20px rgba(100,255,218,0.25)' }}
                >
                  <FiSend size={15} />
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col gap-6"
          >
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-2">Let's Connect!</h4>
              <p className="text-sm text-slate-400 mb-6">
                I'm always open to discussing new opportunities, collaborating on exciting projects, or just having a chat about technology and innovation.
              </p>

              <div className="flex gap-4">
                {contactInfo.map(({ icon: Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={22} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
