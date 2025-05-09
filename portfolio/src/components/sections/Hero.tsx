import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white dark:from-indigo-700 dark:via-purple-700 dark:to-fuchsia-700">
      <div className="mx-auto max-w-4xl px-4 py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-yellow-300">[Name]</span>
          </h1>
          <p className="mt-4 text-lg max-w-prose">
            Lifestyle & travel creator with <strong>1M+</strong> followers across platforms. I help brands tell stories that stick.
          </p>
          <a href="#contact" className="inline-block mt-8 rounded bg-yellow-300 px-6 py-3 font-semibold text-black hover:bg-yellow-200">
            Work with me
          </a>
        </div>
        <div className="justify-self-center">
          <Image src="/headshot.jpg" alt="Influencer headshot" width={300} height={300} className="rounded-full shadow-xl w-60 h-60 object-cover" />
        </div>
      </div>
    </section>
  );
}