'use client';

import { motion } from 'framer-motion';

const sessions = [
  {
    title: 'Job Coaching',
    length: '60 min',
    description:
      'Deep-dive on career direction, resume tweaks, networking tactics, and a personalized action plan.',
    url: 'https://calendly.com/parultv/work-in-canada-session-with-parul?',
  },
  {
    title: 'Study-in-Canada Strategy',
    length: '60 min',
    description:
      'Step-by-step guidance on programs, budgeting, visas, and settling in—tailored to your background.',
    url: 'https://calendly.com/parultv/studying-in-canada-session?',
  },
  {
    title: 'Resume & LinkedIn Audit',
    length: '45 min',
    description:
      'Live walkthrough of your résumé and profile with instant edits and tips to stand out to Canadian recruiters.',
    url: 'https://calendly.com/parultv/resume-linkedin-audit?',
  },
  {
    title: 'Mock Interview + Scorecard',
    length: '30 min',
    description:
      'A realistic practice interview, detailed feedback, and a scorecard so you know exactly where to improve.',
    url: 'https://calendly.com/parultv/resume-linkedin-audit-clone?',
  },
  {
    title: 'Speed Call',
    length: '15 min',
    description:
      'One quick but critical question? Get a rapid-fire answer and next steps without the wait.',
    url: 'https://calendly.com/parultv/mock-interview-score-clone?',
  },
];

export default function Appointments() {
  return (
    <section id="appointments" className="py-16 md:py-20 scroll-mt-24">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Book a 1-on-1 Consultation</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Welcome to my booking hub—pick the session that fits your challenge and let’s tackle your 🇨🇦 goals together.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto grid gap-6 md:grid-cols-2 px-4">
        {sessions.map(({ title, length, description, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 border border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                {title}
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  ({length})
                </span>
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
