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
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const allCategories = [
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Food",
    color: "from-orange-500 to-red-500",
    deals: 1245,
    trending: true
  },
  {
    icon: Shirt,
    label: "Fashion & Clothing",
    color: "from-pink-500 to-rose-500",
    deals: 892,
    trending: true
  },
  {
    icon: Home,
    label: "Home & Decor",
    color: "from-blue-500 to-cyan-500",
    deals: 567,
    trending: false
  },
  {
    icon: Smartphone,
    label: "Electronics",
    color: "from-purple-500 to-indigo-500",
    deals: 1342,
    trending: true
  },
  {
    icon: ShoppingBag,
    label: "Grocery & Bakery",
    color: "from-green-500 to-emerald-500",
    deals: 2103,
    trending: false
  },
  {
    icon: Flower2,
    label: "Beauty & Wellness",
    color: "from-red-500 to-pink-500",
    deals: 745,
    trending: true
  },
  {
    icon: Hammer,
    label: "Hardware & Tools",
    color: "from-amber-500 to-orange-500",
    deals: 432,
    trending: false
  },
  {
    icon: Dumbbell,
    label: "Fitness & Sports",
    color: "from-cyan-500 to-teal-500",
    deals: 689,
    trending: true
  },
  {
    icon: Coffee,
    label: "Cafe & Beverages",
    color: "from-yellow-600 to-amber-600",
    deals: 987,
    trending: true
  },
  {
    icon: Music,
    label: "Music & Entertainment",
    color: "from-fuchsia-500 to-purple-500",
    deals: 345,
    trending: false
  },
  {
    icon: Camera,
    label: "Photography",
    color: "from-indigo-500 to-blue-500",
    deals: 234,
    trending: false
  },
  {
    icon: Sofa,
    label: "Furniture",
    color: "from-rose-500 to-red-500",
    deals: 456,
    trending: false
  },
  {
    icon: Utensils,
    label: "Kitchen Supplies",
    color: "from-lime-500 to-green-500",
    deals: 678,
    trending: true
  },
  {
    icon: Zap,
    label: "Appliances",
    color: "from-sky-500 to-blue-500",
    deals: 789,
    trending: false
  },
  {
    icon: Wind,
    label: "AC & Cooling",
    color: "from-teal-500 to-cyan-500",
    deals: 321,
    trending: false
  },
  {
    icon: Palette,
    label: "Art & Crafts",
    color: "from-violet-500 to-purple-500",
    deals: 543,
    trending: true
  },
  {
    icon: Bolt,
    label: "Footwear",
    color: "from-orange-500 to-red-500",
    deals: 876,
    trending: true
  },
  {
    icon: Pill,
    label: "Pharmacy & Medical",
    color: "from-emerald-500 to-green-500",
    deals: 654,
    trending: false
  },
  {
    icon: Heart,
    label: "Healthcare Products",
    color: "from-red-500 to-pink-500",
    deals: 432,
    trending: false
  },
  {
    icon: Briefcase,
    label: "Business Services",
    color: "from-slate-600 to-slate-800",
    deals: 987,
    trending: true
  },
  {
    icon: GamepadIcon,
    label: "Gaming & Toys",
    color: "from-purple-500 to-pink-500",
    deals: 765,
    trending: true
  },
  {
    icon: BookOpen,
    label: "Books & Stationery",
    color: "from-amber-500 to-orange-500",
    deals: 543,
    trending: false
  },
  {
    icon: Headphones,
    label: "Audio & Accessories",
    color: "from-blue-500 to-cyan-500",
    deals: 678,
    trending: true
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
    }, 3000) // Change slide every 3 seconds

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-8">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary font-semibold">Endless Possibilities</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Discover Amazing
            </span>
            <br />
            <span className="text-foreground">Categories</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Browse through 50+ categories and find incredible deals from verified vendors in your area.
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
                placeholder="Search categories..."
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
                {showAll ? "Show Less" : "Show All"}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <TrendingUp size={18} />
                Trending
              </button>
            </div>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">{allCategories.length}+</div>
              <div className="text-sm text-foreground/70">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-foreground/70">Vendors</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">5K+</div>
              <div className="text-sm text-foreground/70">Active Deals</div>
            </div>
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-foreground/70">Updates</div>
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
                    {/* Icon and Trending Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="text-white" size={28} />
                        </div>
                        {category.trending && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Lightning size={10} />
                              Hot
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

                    {/* Arrow and Explore Text */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                        Explore deals
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
                    View All Categories
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Trending Categories Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">🔥 Trending Now</h3>
              <p className="text-foreground/70">Most popular categories this week</p>
            </div>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span className="font-medium">View All Trending</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-xl"
            >
              <ChevronLeft className="text-foreground" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-xl"
            >
              <ChevronRight className="text-foreground" size={24} />
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="overflow-hidden rounded-2xl"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {trendingCategories.map((category, idx) => {
                  const Icon = category.icon
                  return (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0"
                    >
                      <div className="group relative mx-2">
                        <div className="relative overflow-hidden rounded-2xl">
                          {/* Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />

                          {/* Content */}
                          <div className="relative p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Icon className="text-white" size={32} />
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-white">{category.deals}</div>
                                <div className="text-white/80">active deals</div>
                              </div>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-4">{category.label}</h4>

                            <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-medium hover:bg-white/30 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                              Explore Now
                              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {trendingCategories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                      ? 'bg-primary w-6'
                      : 'bg-border hover:bg-foreground/30'
                    }`}
                />
              ))}
            </div>
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