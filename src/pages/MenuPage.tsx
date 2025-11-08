export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-white via-purple-50/40 to-pink-50/40 py-24">
      <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-brand/40 bg-white/80 px-10 py-16 text-center shadow-lg backdrop-blur">
        <h1 className="font-display text-4xl font-bold text-slate-900">Menu Coming Soon</h1>
        <p className="mt-4 text-lg text-slate-600">
          We&apos;re curating a luxurious collection of services. Check back shortly for the full salon
          menu or call us to chat with a stylist.
        </p>
        <a
          href="tel:+917022793131"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow transition hover:bg-brand-dark"
        >
          Call 070227 93131
        </a>
      </div>
    </div>
  )
}


