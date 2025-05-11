'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Appointments() {
  const [open, setOpen] = useState(false);

  return (
    <section id="appointments" className="py-32">
      <h2 className="font-display text-3xl font-bold mb-6 text-center">Book an Appointment</h2>
      <div className="text-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded bg-brand px-6 py-3 text-white font-semibold hover:bg-brand/90 transition-all"
        >
          Schedule a Call
        </button>
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
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-lg w-full shadow-xl"
            >
              <Dialog.Title className="text-xl font-semibold mb-4">Let’s talk!</Dialog.Title>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
                Drop me a line at <a className="underline" href="mailto:example@email.com">example@email.com</a> or pick a time below.
              </p>
              <iframe
                src="https://calendly.com/your-link?hide_event_type_details=1&hide_gdpr_banner=1"
                className="w-full h-96 rounded-lg border"
              />
              <button
                className="mt-6 rounded bg-brand px-4 py-2 text-white hover:bg-brand/90"
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
