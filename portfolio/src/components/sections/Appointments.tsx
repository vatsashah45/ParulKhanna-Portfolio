"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
export default function Appointments() {
  const [open, setOpen] = useState(false);
  return (
    <section id="appointments" className="py-24">
      <h2 className="font-display text-3xl font-bold mb-6">Book an Appointment</h2>
      <button onClick={() => setOpen(true)} className="rounded bg-brand px-6 py-3 text-white hover:bg-brand/90">
        Schedule a Call
      </button>
      <Dialog open={open} onClose={setOpen} className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
        <Dialog.Panel className="bg-white dark:bg-black rounded-lg p-6 max-w-lg w-full">
          <Dialog.Title className="text-xl font-semibold mb-4">Let's talk!</Dialog.Title>
          <p className="mb-4">Drop me a line at example@email.com or pick a time below.</p>
          <iframe
            src="https://calendly.com/your-link?hide_event_type_details=1&hide_gdpr_banner=1"
            className="w-full h-96 rounded"
          />
          <button className="mt-6 rounded bg-brand px-4 py-2 text-white" onClick={() => setOpen(false)}>
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}