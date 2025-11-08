const serviceCategories = [
  {
    name: 'Hair',
    description:
      "Women's & Men's haircuts, colour transformations, straightening, anti-frizz, highlights, spa rituals, botox, and signature styling.",
    image: '/hair.jpg',
  },
  {
    name: 'Skin',
    description:
      'Bleach & de-tan therapies, clean-up and premium facials, peel-off masks, and targeted skincare for instant radiance.',
    image: '/skin.jpg',
  },
  {
    name: 'Makeup',
    description:
      'Professional day-to-night looks, editorial finishes, party glam, and fresh, camera-ready glow for every celebration.',
    image: '/makeup.jpg',
  },
  {
    name: 'Nails',
    description:
      'Artistic nail extensions, long-lasting gel finishes, intricate nail art, and classic manicures with spa-grade care.',
    image: '/nails.jpg',
  },
  {
    name: 'Bridal',
    description:
      'Pre-bridal indulgences, wedding-day artistry, groom grooming, and curated packages that travel with you through every ceremony.',
    image: '/bridal.jpg',
  },
]

const heroHighlights = [
  '55+ premium studio locations across India',
  'Expert artists for hair, skin, bridal, and grooming',
  'Luxurious interiors crafted for relaxation',
]

const quickServices = [
  "Women's Haircut & Styling",
  "Men's Haircut & Grooming",
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
      '"I\'m so happy and relieved to have finally found my new hair salon! The staff is polite, friendly, and well-trained. 5-star service all the way!"',
    name: 'Priya S.',
    image: '/jenny.png',
  },
  {
    quote:
      '"The hairdresser was very informative on hair care and product recommendations. They truly know their craft and maintain excellent hygiene standards."',
    name: 'Arjun M.',
    image: '/gabril.png',
  },
  {
    quote:
      '"Gagan and the team are amazing! Close attention to detail, professional service, and I always leave feeling confident and refreshed."',
    name: 'Sneha R.',
    image: '/tony.png',
  },
]

const stats = [
  { value: '13+', label: 'Years' },
  { value: '3+', label: 'States' },
  { value: '100+', label: 'Branch' },
  { value: '1500+', label: 'Professionals' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="text-center text-white">
            <p className="text-lg font-light tracking-wide">Welcome to</p>
            <h1 className="mt-4 font-display text-6xl font-bold leading-tight sm:text-7xl lg:text-8xl drop-shadow-lg">
              SPIN
            </h1>
            <h2 className="mt-2 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl drop-shadow-lg">
              SALON
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed drop-shadow-md">
              SPIN is a unisex salon with multiple locations across India, offering expert beauty
              services. Our skilled team ensures you leave feeling confident and refreshed in a
              relaxing, luxurious ambiance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold uppercase tracking-wide text-purple-600 shadow-xl transition hover:bg-purple-50 hover:shadow-2xl hover:scale-105"
              >
                Call 070227 93131
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-white/20 backdrop-blur-sm"
              >
                Locate Us
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative -mt-8 mx-auto max-w-6xl px-6 sm:px-10 z-10">
        <div className="grid gap-4 md:grid-cols-3">
          {heroHighlights.map((highlight, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 p-6 shadow-xl text-center transition hover:shadow-2xl hover:-translate-y-1 hover:border-purple-200"
            >
              <p className="text-sm font-semibold text-purple-900">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <main className="bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              What We&apos;re Offering To
            </h2>
            <h3 className="mt-2 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Our Customers
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              At Spin Salon, we offer a wide range of services tailored to meet your every beauty
              and grooming need. From haircuts and styling to skincare, makeup, and wellness
              treatments, our curated offerings are designed to leave you looking and feeling
              fabulous. Discover the perfect blend of expertise, luxury, and personalized care in
              every service we provide.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {serviceCategories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl border border-purple-100"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="font-display text-2xl font-bold drop-shadow-lg">{category.name}</h3>
                </div>
              </div>
            ))}
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

        <section className="mx-auto mt-20 max-w-7xl px-6 py-20 sm:px-10">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Don&apos;t believe us?
            </h2>
            <h3 className="mt-2 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Hear it from our customers
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              At Spin Unisex Salon, our clients are at the heart of everything we do. Each
              experience is crafted with care, precision, and passion, leaving our clients feeling
              confident and radiant. But don&apos;t just take our word for it—here&apos;s what our
              valued clients have to say about their journey with us:
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-xl"
              >
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-brand/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mt-6 text-xl font-bold text-slate-900">{testimonial.name}</h4>
                <blockquote className="mt-4 text-center text-lg italic leading-relaxed text-slate-600">
                  {testimonial.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl px-6 py-20 sm:px-10">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 px-10 py-16 text-white shadow-2xl lg:px-20 lg:py-20">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                <span className="text-brand-light">Now</span> We Are
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-rose-100">
                From our humble beginnings to becoming a renowned name in the beauty and wellness
                industry, Spin Unisex Salon has grown into a symbol of excellence, innovation, and
                care. Starting with a single salon in Bangalore in 2011, we have expanded our reach
                across South India, creating a network of over 55+ centers that redefine beauty and
                wellness.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur transition hover:bg-white/20"
                >
                  <div className="font-display text-5xl font-bold text-white">{stat.value}</div>
                  <div className="mt-3 text-lg font-semibold text-rose-100">{stat.label}</div>
                </div>
              ))}
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
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 px-8 py-12 text-white shadow-xl sm:px-10 lg:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-3xl font-bold">Write Tips &amp; Win Rewards</h3>
                <p className="mt-3 font-display text-2xl font-semibold">
                  Your <span className="text-amber-200">Feedback</span> is Valuable for Us
                </p>
              </div>
              <a
                href="tel:+917022793131"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-brand"
              >
                Share Feedback
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 bg-slate-950 py-12 text-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">Support</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <a href="tel:+917022793131" className="hover:text-brand-light">
                    +91 70227 93131
                  </a>
                </p>
                <p>
                  <a href="tel:+919591113131" className="hover:text-brand-light">
                    +91 95911 13131
                  </a>
                </p>
                <p>
                  <a href="mailto:info@spinsalonbellandur.in" className="hover:text-brand-light">
                    info@spinsalonbellandur.in
                  </a>
                </p>
                <p className="text-slate-400">All day : 9:00AM - 10:00PM</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">Follow Us</h3>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://www.youtube.com/@SpinSalonOfficial"
                  className="text-slate-300 hover:text-brand-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
                <a
                  href="https://www.instagram.com/spinsalonofficial/"
                  className="text-slate-300 hover:text-brand-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/spinsalon.in/"
                  className="text-slate-300 hover:text-brand-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            Copyright © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
