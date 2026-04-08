"use client"

import { Star, MapPin, Percent, Heart, Clock, Shield, Sparkles, TrendingUp, ArrowRight, CheckCircle, Users, Zap, Store, Award, Gem } from "lucide-react"
import { useState } from "react"

const vendors = [
  {
    name: "Fresh Mart",
    category: "Grocery & Bakery",
    discount: "40%",
    rating: 4.8,
    distance: "350 m",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    reviews: 124,
    open: true,
    verified: true,
    gst: "27ABCDE1234F1Z5",
    tags: ["Fresh Stock", "Home Delivery", "GST Bill"],
    dealCount: 45
  },
  {
    name: "Sharma Electronics",
    category: "Electronics & Appliances",
    discount: "25%",
    rating: 4.6,
    distance: "420 m",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    reviews: 89,
    open: true,
    verified: true,
    gst: "27BCDE5678F2G6T",
    tags: ["Brand Warranty", "Installation", "Exchange"],
    dealCount: 28
  },
  {
    name: "City Medical Hall",
    category: "Pharmacy & Wellness",
    discount: "15%",
    rating: 4.9,
    distance: "280 m",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
    reviews: 203,
    open: true,
    verified: true,
    gst: "27EFGH9012I3H8U",
    tags: ["Prescription", "24/7", "Home Delivery"],
    dealCount: 62
  },
  {
    name: "Fashion Street",
    category: "Clothing & Fashion",
    discount: "50%",
    rating: 4.7,
    distance: "550 m",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    reviews: 156,
    open: true,
    verified: true,
    gst: "27IJKL3456M4N9P",
    tags: ["Latest Trends", "All Sizes", "Alterations"],
    dealCount: 73
  },
  {
    name: "Kapoor Home Store",
    category: "Home & Decor",
    discount: "35%",
    rating: 4.5,
    distance: "680 m",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    reviews: 78,
    open: true,
    verified: true,
    gst: "27MNOP7890Q5R2S",
    tags: ["Modern Designs", "Free Assembly", "Custom"],
    dealCount: 34
  },
  {
    name: "The Sweet Shop",
    category: "Bakery & Sweets",
    discount: "20%",
    rating: 4.8,
    distance: "180 m",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    reviews: 245,
    open: true,
    verified: true,
    gst: "27QRST1234U6V3W",
    tags: ["Fresh Baked", "Sugar Free", "Custom Cakes"],
    dealCount: 51
  },
  {
    name: "Wellness Pharmacy",
    category: "Medical Store",
    discount: "12%",
    rating: 4.7,
    distance: "450 m",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    reviews: 167,
    open: true,
    verified: true,
    gst: "27UVWX5678Y7Z4A",
    tags: ["All Medicines", "Healthcare", "Free Delivery"],
    dealCount: 89
  },
  {
    name: "Readers Paradise",
    category: "Books & Stationery",
    discount: "30%",
    rating: 4.9,
    distance: "720 m",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    reviews: 98,
    open: true,
    verified: true,
    gst: "27YZAB9012C8D5E",
    tags: ["All Genres", "School Supplies", "Gifts"],
    dealCount: 42
  },
]

const filters = [
  "Near Me (1km)",
  "All Vendors",
  "GST Verified",
  "High Discount",
  "Top Rated",
  "Newly Added",
]

export default function Vendors() {
  const [activeFilter, setActiveFilter] = useState("Near Me (1km)")
  const [likedVendors, setLikedVendors] = useState<number[]>([])
  const [activeVendor, setActiveVendor] = useState(0)

  const toggleLike = (index: number) => {
    if (likedVendors.includes(index)) {
      setLikedVendors(likedVendors.filter(i => i !== index))
    } else {
      setLikedVendors([...likedVendors, index])
    }
  }

  const filteredVendors = vendors.filter(vendor => {
    if (activeFilter === "Near Me (1km)") return parseFloat(vendor.distance) <= 1000
    if (activeFilter === "GST Verified") return vendor.verified
    if (activeFilter === "High Discount") return parseInt(vendor.discount) >= 30
    if (activeFilter === "Top Rated") return vendor.rating >= 4.7
    if (activeFilter === "Newly Added") return vendor.dealCount > 50
    return true
  })

  return (
    <section id="vendors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8">
            <Shield className="text-primary" size={18} />
            <span className="text-primary font-semibold">100% GST Verified Vendors</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Trusted Local Shops
            </span>
            <br />
            <span className="text-foreground">Within 1km Radius</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Every shop is physically verified with GST registration and shop photos.
            Real discounts from real businesses near you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Store className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/70">Vendors</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground/70">GST Verified</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Gem className="text-purple-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/70">Categories</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Award className="text-amber-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-foreground/70">Free Vendors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'border-2 border-border/50 text-foreground/70 hover:border-primary/30 hover:text-foreground'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredVendors.map((vendor, idx) => {
            const isLiked = likedVendors.includes(idx)
            const isActive = activeVendor === idx

            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${isActive ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}
                onMouseEnter={() => setActiveVendor(idx)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-lg z-10">
                    <CheckCircle size={14} />
                    GST Verified
                  </div>

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold shadow-lg">
                    <Percent size={14} />
                    {vendor.discount} OFF
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{vendor.name}</h3>
                      <p className="text-sm text-foreground/60">{vendor.category}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground text-sm">{vendor.rating}</span>
                      <span className="text-xs text-foreground/60">({vendor.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vendor.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <MapPin size={16} className="text-primary" />
                      <span className="font-medium">{vendor.distance}</span>
                      <span className="text-foreground/50">•</span>
                      <Clock size={16} className="text-foreground/50" />
                      <span className="text-foreground/50">5-10 min</span>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-foreground/60">{vendor.dealCount} active deals</span>

                    </div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-700 to-white rounded-full"
                        style={{ width: `${Math.min(100, (vendor.dealCount / 100) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-primary/20">
            <Shield className="text-primary" size={24} />
            <div className="text-left">
              <p className="text-foreground font-semibold">Every shop is physically verified</p>
              <p className="text-sm text-foreground/60">GST documents and shop photos on file</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}