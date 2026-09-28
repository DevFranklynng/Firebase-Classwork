function Contact() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] px-6 py-20 md:px-12">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest">Contact Us</p>
        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Let's talk beauty.
        </h1>

        <form className="mt-10 grid gap-5">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none"
          />
          <textarea
            rows="6"
            placeholder="Your message"
            className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none"
          />
          <button className="w-fit rounded-full bg-black px-8 py-4 text-white">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
