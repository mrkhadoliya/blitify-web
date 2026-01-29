"use client"

import { Star, MapPin, Percent, Heart, Clock, Shield, Sparkles, TrendingUp, ArrowRight, CheckCircle, Users, Zap } from "lucide-react"
import { useState } from "react"

const vendors = [
  {
    name: "Fresh & Delights",
    category: "Restaurant & Cafe",
    discount: "30%",
    rating: 4.8,
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    reviews: 124,
    open: true,
    featured: true,
    tags: ["Organic", "Vegan Options", "Free Delivery"],
  },
  {
    name: "Fashion Hub",
    category: "Clothing Store",
    discount: "50%",
    rating: 4.6,
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    reviews: 89,
    open: true,
    featured: true,
    tags: ["Trendy", "Sustainable", "Size Inclusive"],
  },
  {
    name: "Tech World",
    category: "Electronics",
    discount: "25%",
    rating: 4.7,
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80",
    reviews: 203,
    open: true,
    featured: false,
    tags: ["Latest Gadgets", "Warranty", "Installation"],
  },
  {
    name: "Green Wellness",
    category: "Beauty & Spa",
    discount: "40%",
    rating: 4.9,
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    reviews: 156,
    open: true,
    featured: true,
    tags: ["Natural", "Eco-Friendly", "Professional"],
  },
  {
    name: "Home Elegance",
    category: "Home Decor",
    discount: "35%",
    rating: 4.5,
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    reviews: 78,
    open: true,
    featured: false,
    tags: ["Modern", "Custom Designs", "Free Assembly"],
  },
  {
    name: "Bakery Dreams",
    category: "Bakery",
    discount: "20%",
    rating: 4.8,
    distance: "0.8 km",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    reviews: 245,
    open: true,
    featured: true,
    tags: ["Fresh Daily", "Gluten-Free", "Artisanal"],
  },
  {
    name: "Fit & Strong Gym",
    category: "Fitness Center",
    discount: "45%",
    rating: 4.7,
    distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    reviews: 167,
    open: true,
    featured: true,
    tags: ["24/7 Access", "Personal Trainers", "Classes"],
  },
  {
    name: "Book Haven",
    category: "Bookstore",
    discount: "30%",
    rating: 4.9,
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    reviews: 98,
    open: true,
    featured: false,
    tags: ["Rare Finds", "Coffee Shop", "Events"],
  },
]

const filters = [
  "All Vendors",
  "Trending",
  "Near Me",
  "High Discount",
  "Top Rated",
  "Featured",
]

export default function Vendors() {
  const [activeFilter, setActiveFilter] = useState("All Vendors")
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
    if (activeFilter === "Trending") return vendor.featured
    if (activeFilter === "Near Me") return parseFloat(vendor.distance) < 2
    if (activeFilter === "High Discount") return parseInt(vendor.discount) > 35
    if (activeFilter === "Top Rated") return vendor.rating >= 4.7
    if (activeFilter === "Featured") return vendor.featured
    return true
  })

  return (
    <section id="vendors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold">Verified & Trusted</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Featured Vendors
            </span>
            <br />
            <span className="text-foreground">Near You</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Discover top-rated local businesses offering incredible discounts and premium services
            right in your neighborhood.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground/70">Verified Vendors</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Star className="text-green-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.8</div>
                <div className="text-sm text-foreground/70">Avg Rating</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Users className="text-purple-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1.2K</div>
                <div className="text-sm text-foreground/70">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Zap className="text-amber-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-foreground/70">Live Deals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
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

        {/* Vendor Grid */}
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
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 font-bold shadow-lg">
                    <Percent size={14} />
                    {vendor.discount} OFF
                  </div>

                  {/* Featured Badge */}
                  {vendor.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-sm font-medium shadow-lg">
                      <TrendingUp size={14} />
                      Featured
                    </div>
                  )}

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(idx)
                    }}
                    className="absolute top-4 right-14 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Heart
                      size={18}
                      className={`${isLiked
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                        }`}
                    />
                  </button>

                  {/* Open Status */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-sm font-medium">Open Now</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{vendor.name}</h3>
                      <p className="text-sm text-foreground/60">{vendor.category}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground">{vendor.rating}</span>
                      <span className="text-sm text-foreground/60">({vendor.reviews})</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vendor.tags.slice(0, 2).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Distance & Time */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <MapPin size={16} />
                      {vendor.distance} away
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <Clock size={16} />
                      10-15 min
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full group/btn relative bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    <span className="flex items-center justify-center gap-2">
                      View Offers
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}