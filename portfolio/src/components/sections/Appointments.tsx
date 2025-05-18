'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock } from 'lucide-react';

export default function Appointments() {
  const [open, setOpen] = useState(false);

  return (
    <section id="appointments" className="py-16 md:py-20 scroll-mt-24">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Book an Appointment</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Have questions or want to collaborate? Lets connect over a quick call.
        </p>

        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded-full bg-purple-300 px-6 py-3 text-black font-semibold hover:bg-purple-400 transition-all shadow-lg"
        >
          <CalendarClock className="w-5 h-5" />
          Schedule a Call
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog
            as={motion.div}
            open={open}
            onClose={() => setOpen(false)}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-3xl sm:p-8 shadow-2xl"
            >
              <iframe
                src="https://calendly.com/parultv/appointment"
                className="w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <button
                className="mt-6 block mx-auto rounded-full bg-purple-300 px-5 py-2 text-black font-medium hover:bg-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
