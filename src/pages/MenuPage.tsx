import { useState } from 'react'
import { menuData } from '../data/menuData'

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<'hair' | 'skin'>('hair')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/40 to-pink-50/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of professional hair and skin care services
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('hair')}
            className={`px-8 py-3 rounded-full font-semibold uppercase tracking-widest transition ${
              activeTab === 'hair'
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                : 'bg-white text-slate-700 border border-slate-300 hover:border-purple-400'
            }`}
          >
            Hair Services
          </button>
          <button
            onClick={() => setActiveTab('skin')}
            className={`px-8 py-3 rounded-full font-semibold uppercase tracking-widest transition ${
              activeTab === 'skin'
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                : 'bg-white text-slate-700 border border-slate-300 hover:border-purple-400'
            }`}
          >
            Skin Services
          </button>
        </div>

        {activeTab === 'hair' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Women's Services</h2>
              <div className="grid gap-8">
                {menuData.hair.women.map((category, categoryIndex) => {
                  if (category.items.length === 0) return null

                  return (
                    <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4">
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-purple-50/50 transition"
                            >
                              <span className="text-slate-700 font-medium">{item.name}</span>
                              <span className="text-purple-600 font-bold text-lg whitespace-nowrap ml-4">
                                ₹{item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Men's Services</h2>
              <div className="grid gap-8">
                {menuData.hair.men.map((category, categoryIndex) => {
                  if (category.items.length === 0) return null

                  return (
                    <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-4">
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-blue-50/50 transition"
                            >
                              <span className="text-slate-700 font-medium">{item.name}</span>
                              <span className="text-blue-600 font-bold text-lg whitespace-nowrap ml-4">
                                ₹{item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {menuData.skin.map((category, categoryIndex) => {
              if (category.items.length === 0) return null

              return (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-purple-50/50 transition"
                        >
                          <span className="text-slate-700 font-medium">{item.name}</span>
                          <span className="text-purple-600 font-bold text-lg whitespace-nowrap ml-4">
                            ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <p className="text-slate-600 mb-4">
            <strong>Note:</strong> GST 5% applicable. All prices are onwards.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            For appointments or inquiries, call us today!
          </p>
          <a
            href="tel:+917022793131"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:shadow-xl hover:scale-105"
          >
            Call 070227 93131
          </a>
        </div>
      </div>
    </div>
  )
}


