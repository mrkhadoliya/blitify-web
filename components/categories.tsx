"use client"

import {
  ShoppingBag,
  UtensilsCrossed,
  Shirt,
  Home,
  Smartphone,
  Flower2,
  Hammer,
  Dumbbell,
  Coffee,
  Music,
  Camera,
  Sofa,
  Utensils,
  Zap,
  Wind,
  Palette,
  Bolt,
  Pill,
  Heart,
  Briefcase,
  GamepadIcon,
  BookOpen,
  Headphones,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Filter,
  Search,
  Zap as Lightning,
  ChevronLeft,
  MapPin,
  Shield,
  CheckCircle,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const allCategories = [
  {
    icon: ShoppingBag,
    label: "Grocery & Daily Needs",
    color: "from-green-500 to-emerald-500",
    deals: 2103,
    vendors: 345,
    trending: true,
    verified: true
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Food",
    color: "from-orange-500 to-red-500",
    deals: 1245,
    vendors: 278,
    trending: true,
    verified: true
  },
  {
    icon: Pill,
    label: "Pharmacy & Medical",
    color: "from-emerald-500 to-green-500",
    deals: 654,
    vendors: 156,
    trending: true,
    verified: true
  },
  {
    icon: Shirt,
    label: "Fashion & Clothing",
    color: "from-pink-500 to-rose-500",
    deals: 892,
    vendors: 234,
    trending: true,
    verified: true
  },
  {
    icon: Smartphone,
    label: "Electronics & Gadgets",
    color: "from-purple-500 to-indigo-500",
    deals: 1342,
    vendors: 189,
    trending: true,
    verified: true
  },
  {
    icon: Home,
    label: "Home Decor & Furnishing",
    color: "from-blue-500 to-cyan-500",
    deals: 567,
    vendors: 98,
    trending: false,
    verified: true
  },
  {
    icon: Flower2,
    label: "Beauty & Personal Care",
    color: "from-red-500 to-pink-500",
    deals: 745,
    vendors: 167,
    trending: true,
    verified: true
  },
  {
    icon: Bolt,
    label: "Footwear & Accessories",
    color: "from-orange-500 to-red-500",
    deals: 876,
    vendors: 145,
    trending: true,
    verified: true
  },
  {
    icon: Coffee,
    label: "Cafe & Beverages",
    color: "from-yellow-600 to-amber-600",
    deals: 987,
    vendors: 203,
    trending: true,
    verified: true
  },
  {
    icon: GamepadIcon,
    label: "Gaming & Toys",
    color: "from-purple-500 to-pink-500",
    deals: 765,
    vendors: 87,
    trending: true,
    verified: true
  },
  {
    icon: Dumbbell,
    label: "Fitness & Sports",
    color: "from-cyan-500 to-teal-500",
    deals: 689,
    vendors: 112,
    trending: true,
    verified: true
  },
  {
    icon: Hammer,
    label: "Hardware & Tools",
    color: "from-amber-500 to-orange-500",
    deals: 432,
    vendors: 76,
    trending: false,
    verified: true
  },
  {
    icon: Utensils,
    label: "Kitchen & Dining",
    color: "from-lime-500 to-green-500",
    deals: 678,
    vendors: 134,
    trending: true,
    verified: true
  },
  {
    icon: Zap,
    label: "Home Appliances",
    color: "from-sky-500 to-blue-500",
    deals: 789,
    vendors: 98,
    trending: false,
    verified: true
  },
  {
    icon: Wind,
    label: "AC & Cooling Solutions",
    color: "from-teal-500 to-cyan-500",
    deals: 321,
    vendors: 45,
    trending: false,
    verified: true
  },
  {
    icon: BookOpen,
    label: "Books & Stationery",
    color: "from-amber-500 to-orange-500",
    deals: 543,
    vendors: 89,
    trending: false,
    verified: true
  },
  {
    icon: Headphones,
    label: "Audio & Wearables",
    color: "from-blue-500 to-cyan-500",
    deals: 678,
    vendors: 92,
    trending: true,
    verified: true
  },
  {
    icon: Camera,
    label: "Photography & Studio",
    color: "from-indigo-500 to-blue-500",
    deals: 234,
    vendors: 43,
    trending: false,
    verified: true
  },
  {
    icon: Music,
    label: "Music & Entertainment",
    color: "from-fuchsia-500 to-purple-500",
    deals: 345,
    vendors: 56,
    trending: false,
    verified: true
  },
  {
    icon: Heart,
    label: "Healthcare & Wellness",
    color: "from-red-500 to-pink-500",
    deals: 432,
    vendors: 78,
    trending: false,
    verified: true
  },
  {
    icon: Sofa,
    label: "Furniture & Woodwork",
    color: "from-rose-500 to-red-500",
    deals: 456,
    vendors: 67,
    trending: false,
    verified: true
  },
  {
    icon: Palette,
    label: "Art & Handicrafts",
    color: "from-violet-500 to-purple-500",
    deals: 543,
    vendors: 82,
    trending: true,
    verified: true
  },
  {
    icon: Briefcase,
    label: "Local Services",
    color: "from-slate-600 to-slate-800",
    deals: 987,
    vendors: 203,
    trending: true,
    verified: true
  },
]

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAll, setShowAll] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trendingCategories = allCategories.filter(cat => cat.trending)
  const carouselRef = useRef<HTMLDivElement>(null)

  const displayedCategories = showAll ? allCategories : allCategories.slice(0, 12)

  // Filter categories based on search
  const filteredCategories = searchQuery
    ? allCategories.filter(cat =>
      cat.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : displayedCategories

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused || trendingCategories.length <= 3) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (trendingCategories.length - 2))
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, trendingCategories.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (trendingCategories.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (trendingCategories.length - 2)) % (trendingCategories.length - 2))
  }

  return (
    <section id="categories" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Updated with Blitify tagline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold">Jo Chahiye, Wahi Mile - All Verified!</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              500+ Product Categories
            </span>
            <br />
            <span className="text-foreground">From Verified Local Shops</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From grocery to electronics, pharmacy to fashion - every vendor is <span className="font-semibold text-primary">GST-verified</span> with physical shop authentication. Trusted discounts, right in your neighborhood.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-foreground/40" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search categories (e.g., grocery, electronics)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-border/50 bg-background/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/30 text-primary font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Filter size={18} />
                {showAll ? "Show Less" : "All Categories"}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Shield size={18} />
                Verified Only
              </button>
            </div>
          </div>

          {/* Category Stats - Updated with Blitify metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">{allCategories.length}+</div>
              <div className="text-sm text-foreground/70">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">10,000+</div>
              <div className="text-sm text-foreground/70">Free Vendors</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">15K+</div>
              <div className="text-sm text-foreground/70">Live Deals</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-foreground/70">GST Verified</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category, idx) => {
              const Icon = category.icon
              const isActive = activeCategory === idx

              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${isActive
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                      : ''
                    }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-95 transition-opacity duration-500`} />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon and Verification Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="text-white" size={28} />
                        </div>
                        {category.verified && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                              <CheckCircle size={10} />
                              GST
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{category.deals}</div>
                        <div className="text-white/80 text-sm">deals</div>
                      </div>
                    </div>

                    {/* Category Label */}
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {category.label}
                    </h3>

                    {/* Vendor Count */}
                    <div className="flex items-center gap-1 text-white/80 text-sm mb-3">
                      <MapPin size={14} />
                      <span>{category.vendors} verified vendors near you</span>
                    </div>

                    {/* Arrow and Explore Text */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                        View within 1km
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                        <ChevronRight className="text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Show More/Less Button */}
          {!searchQuery && allCategories.length > 12 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:border-primary hover:scale-[1.02] transition-all duration-300"
              >
                {showAll ? (
                  <>
                    Show Less Categories
                    <ArrowRight className="group-hover:-rotate-90 transition-transform" size={20} />
                  </>
                ) : (
                  <>
                    Explore All {allCategories.length} Categories
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/20">
            <Shield className="text-primary" size={24} />
            <span className="text-foreground font-medium">
              Every vendor is <span className="text-primary font-bold">GST verified</span> with physical shop photos. No ghost kitchens, no fake stores.
            </span>
            <CheckCircle className="text-green-500" size={20} />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}