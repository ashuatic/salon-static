const serviceCategories = [
  {
    name: 'Hair',
    description:
      'Women’s & Men’s haircuts, colour transformations, straightening, anti-frizz, highlights, spa rituals, botox, and signature styling.',
  },
  {
    name: 'Skin',
    description:
      'Bleach & de-tan therapies, clean-up and premium facials, peel-off masks, and targeted skincare for instant radiance.',
  },
  {
    name: 'Makeup',
    description:
      'Professional day-to-night looks, editorial finishes, party glam, and fresh, camera-ready glow for every celebration.',
  },
  {
    name: 'Nails',
    description:
      'Artistic nail extensions, long-lasting gel finishes, intricate nail art, and classic manicures with spa-grade care.',
  },
  {
    name: 'Bridal',
    description:
      'Pre-bridal indulgences, wedding-day artistry, groom grooming, and curated packages that travel with you through every ceremony.',
  },
]

const heroHighlights = [
  '55+ premium studio locations across India',
  'Expert artists for hair, skin, bridal, and grooming',
  'Luxurious interiors crafted for relaxation',
]

const quickServices = [
  'Women’s Haircut & Styling',
  'Men’s Haircut & Grooming',
  'Hair Colouring & Highlights',
  'Hair Straightening & Anti-Frizz Treatments',
  'Hair Spa & Scalp Rituals',
  'Oil Massage Therapy',
  'Hair Botox & Gloss',
  'Root Touch-Up',
  'Professional Hair Wash & Blow Dry',
  'Beard Styling & Colour',
  'Face & Body Threading / Waxing',
  'Bleach & De-Tan Treatments',
  'Clean-Up & Premium Facials',
  'Anti-Ageing / Vitamin C / Charcoal Masks',
  'Basic & Premium Mani-Pedi',
  'Body Polishing',
  'Nail Extensions & Art',
  'Bridal & Party Makeup',
  'Custom Salon Packages',
]

const testimonials = [
  {
    quote:
      '“Absolutely love this place! The team at Spin Salon is incredible. I came in for a haircut and walked out feeling like a whole new person.”',
    name: 'Jenny Wilson',
  },
  {
    quote:
      '“The best salon experience I’ve ever had! The staff is so friendly and professional, and they truly know their craft. Highly recommend the hair spa.”',
    name: 'Gabril Wilson',
  },
  {
    quote:
      '“Spin Salon is my go-to for all things beauty. From nails to facials, they’ve nailed it every time. Five stars all the way!”',
    name: 'Tony Ruiz',
  },
]

const stats = [
  { value: '13+', label: 'Years of Expertise' },
  { value: '3+', label: 'States Across India' },
  { value: '100+', label: 'Studio Locations' },
  { value: '1500+', label: 'Beauty Professionals' },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-amber-50 text-slate-800">
      <header className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-28 sm:px-10 lg:flex-row lg:items-center lg:gap-20 lg:py-36">
          <div className="flex-1 text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-rose-100">
              Welcome to SPIN Salon
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Experience Luxury Beauty & Grooming at SPIN Unisex Salon
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-rose-100">
              SPIN is a nationwide destination for expert hair, skin, and bridal artistry. Step into
              indulgent interiors, meet dedicated stylists, and leave feeling confident, radiant, and
              ready for every occasion.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-brand-dark"
              >
                Call 070227 93131
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
              >
                Locate Us
              </a>
            </div>
          </div>
          <div className="flex-1 space-y-6 rounded-3xl bg-white/10 p-8 backdrop-blur">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/20 bg-white/5 p-5 text-sm font-medium text-rose-100"
              >
                {highlight}
              </div>
            ))}
            <p className="text-xs uppercase tracking-[0.35em] text-rose-100/80">
              Crafted by India’s premier beauty collective
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto -mt-16 max-w-6xl px-6 sm:px-10">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 md:p-12">
            <h2 className="text-center font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              What We&apos;re Offering to Our Customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
              At SPIN Salon, each service is a signature experience—crafted by specialists, elevated
              by premium products, and delivered in soothing, luxurious surroundings.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {serviceCategories.map((category) => (
                <div
                  key={category.name}
                  className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
                >
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
                  <span className="mt-auto text-xs font-semibold uppercase tracking-widest text-brand">
                    Explore services →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Complete Salon Menu
                </h2>
                <p className="mt-3 max-w-xl text-base text-slate-600">
                  Discover the full spectrum of SPIN Salon artistry—from everyday grooming to
                  high-glam transformations and wedding journeys.
                </p>
              </div>
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full border border-brand px-6 py-2 text-sm font-semibold uppercase tracking-widest text-brand transition hover:bg-brand hover:text-white"
              >
                Speak to a Stylist
              </a>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {quickServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-brand/40 hover:bg-white"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 md:p-12">
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Don&apos;t Believe Us? Hear It from Our Customers
              </h2>
              <p className="text-base text-slate-600">
                Every visit is a personalised ritual. Our guests trust us with their biggest
                milestones and everyday glow-ups because we make luxury feel effortless.
              </p>
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.name}
                    className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/40 p-6 shadow-sm"
                  >
                    <blockquote className="text-base italic text-slate-700">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand">
                      {testimonial.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-10 text-white shadow-xl">
              <h3 className="font-display text-2xl font-semibold">
                Now We Are a Nationwide Beauty Movement
              </h3>
              <p className="text-sm text-rose-100">
                From our first Bangalore studio in 2011 to a network that spans the South of India,
                SPIN Salon is synonymous with premium beauty, innovation, and care.
              </p>
              <dl className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/10 p-4 text-center">
                    <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-100">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 font-display text-3xl font-semibold text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10" id="visit">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5 md:p-12">
              <div>
                <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Visit SPIN Salon – Bellandur, Bengaluru
                </h2>
                <p className="mt-3 max-w-xl text-base text-slate-600">
                  1st Floor, Sai Sobagu, 3rd Cherry Lane, Green Glen Layout, Bellandur, Bengaluru,
                  Karnataka 560103.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Daily Hours: <span className="font-semibold text-slate-700">9:00 AM – 10:00 PM</span>
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Book Your Session</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Call us for appointments, bridal trials, or curated packages.
                  </p>
                  <a
                    href="tel:+917022793131"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow transition hover:bg-brand-dark"
                  >
                    +91 70227 93131
                  </a>
                  <p className="mt-3 text-xs text-slate-500">
                    We respond rapidly during salon hours (9:00 AM – 10:00 PM).
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Head Office</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    No.1243, 1st Block, Above Kanti Sweets, Near Axis Bank, Vidyaranyapura, Bangalore – 560 097
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Support: +91 72040 63131 · Franchisee: +91 76194 53131
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="SPIN Unisex Salon Bellandur Map"
                src="https://www.google.com/maps?q=SPIN+Unisex+Salon+Bellandur&output=embed"
                className="h-full min-h-[340px] w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl sm:px-10 lg:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-3xl font-semibold">
                  Write Tips &amp; Win Rewards with SPIN Salon
                </h3>
                <p className="mt-3 max-w-xl text-sm text-rose-100">
                  Your feedback powers the SPIN experience. Share your glow-up story, recommend
                  favourite stylists, and unlock exclusive salon perks.
                </p>
              </div>
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
              >
                Share Feedback
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 bg-slate-950 py-12 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <h3 className="font-display text-2xl font-semibold text-white">SPIN Unisex Salon</h3>
            <p className="text-sm text-slate-400">
              1st Floor, Sai Sobagu, 3rd Cherry Lane, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103
            </p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} SPIN Salon. All Rights Reserved.</p>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Call:</span>{' '}
              <a href="tel:+917022793131" className="hover:text-brand-light">
                +91 70227 93131
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Salon Hours:</span> 9:00 AM – 10:00 PM
            </p>
            <p>
              <span className="font-semibold text-white">Support:</span> +91 72040 63131 · +91 76194 53131
            </p>
            <p className="text-xs text-slate-500">feedback@spinsalon.in · feedback.spin@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
