const services = [
  {
    title: 'Precision Haircuts',
    description:
      'Tailored cuts for women, men, and kids with styling that matches your lifestyle.',
  },
  {
    title: 'Color & Highlights',
    description:
      'From rich global colours to face-framing highlights and expert root touch-ups.',
  },
  {
    title: 'Scalp & Hair Spa',
    description:
      'Relaxing rituals that nourish hair, relieve stress, and bring out natural shine.',
  },
  {
    title: 'Beauty Essentials',
    description:
      'Threading, waxing, manicures, pedicures, and express glow facials for every occasion.',
  },
]

const highlights = [
  {
    title: 'Bellandur’s Go-To Salon',
    description:
      'Trusted stylists delivering contemporary looks for the Green Glen community since day one.',
  },
  {
    title: 'Extended Hours',
    description:
      'We are open daily from 9:00 AM to 10:00 PM, so great hair always fits your schedule.',
  },
  {
    title: 'Relaxed Ambience',
    description:
      'Comfort-first interiors, soothing music, and premium products for a rejuvenating visit.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <header className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_rgba(255,255,255,0))]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-brand-dark shadow-sm backdrop-blur">
              Now open 9:00 AM – 10:00 PM daily
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
              SPIN Unisex Salon
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-left">
              Discover salon-perfect hair, skin, and nail services in the heart of Green Glen
              Layout. From reviving workday looks to prepping for special celebrations, our
              stylists craft styles that feel authentically you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-brand-dark hover:shadow-xl"
              >
                Call 070227 93131
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-base font-semibold text-slate-800 transition hover:border-brand hover:text-brand"
              >
                Plan Your Visit
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-rose-200/60 p-10 shadow-inner" />
                <div className="rounded-2xl bg-stone-200/70 p-10 shadow-inner" />
                <div className="rounded-2xl bg-amber-100/80 p-10 shadow-inner" />
                <div className="rounded-2xl bg-white/80 p-10 shadow-inner" />
              </div>
              <p className="mt-6 text-center text-sm font-medium uppercase tracking-wide text-slate-500">
                Crafted with premium hair & skin care brands
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8" id="services">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Signature Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Expert stylists. Contemporary techniques. A calming space built for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-transparent bg-white p-8 shadow-sm transition hover:border-brand/40 hover:shadow-lg"
              >
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-brand">
                  View price card in salon
                  <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 sm:px-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Why guests love SPIN
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We blend skilled artistry with warm hospitality so every visit feels like a
                mini-retreat. Whether you are dropping in for a quick trim or a full makeover, you
                are in expert hands.
              </p>
            </div>
            <div className="flex-1 space-y-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-stone-50/60 p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8" id="visit">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Visit us in Green Glen Layout
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Find us on the 1st Floor, Sai Sobagu, 3rd Cherry Lane, Green Glen Layout,
                  Bellandur, Bengaluru, Karnataka 560103. We are right in the neighbourhood,
                  minutes from the Outer Ring Road.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Salon Hours</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex justify-between">
                      <span>Monday – Sunday</span>
                      <span className="font-medium text-slate-800">9:00 AM – 10:00 PM</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-slate-500">
                    Walk-ins welcome. Appointments recommended for colour, spa, and bridal
                    services.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Make a reservation</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Call or WhatsApp us to block your slot, discuss custom looks, or plan bridal
                    packages.
                  </p>
                  <a
                    href="tel:+917022793131"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white shadow hover:bg-brand-dark"
                  >
                    +91 70227 93131
                  </a>
                  <p className="mt-3 text-xs text-slate-500">We respond within business hours.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                title="SPIN Unisex Salon location map"
                src="https://www.google.com/maps?q=SPIN+Unisex+Salon+Bellandur&output=embed"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/90">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                Ready for your next glow-up?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Swing by for a walk-in or ring us to reserve your favourite stylist.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white shadow hover:bg-brand-dark"
              >
                Book by Phone
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand hover:text-brand"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <h3 className="font-display text-2xl font-semibold text-white">SPIN Unisex Salon</h3>
            <p className="mt-3 text-sm text-slate-300">
              1st Floor, Sai Sobagu, 3rd Cherry Lane, Green Glen Layout, Bellandur, Bengaluru,
              Karnataka 560103
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Call:</span>{' '}
              <a href="tel:+917022793131" className="hover:text-brand-light">
                +91 70227 93131
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Hours:</span> Daily 9:00 AM – 10:00 PM
            </p>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} SPIN Unisex Salon. Crafted with care in Bengaluru.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
