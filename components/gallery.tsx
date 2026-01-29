"use client"

import { useState } from "react"

const galleryImages = [
  { id: 1, src: "/vendor-marketplace-shopping-experience.jpg", alt: "Shopping Experience" },
  { id: 2, src: "/local-vendors-displaying-products.jpg", alt: "Local Vendors" },
  { id: 3, src: "/customers-enjoying-food-deals.jpg", alt: "Food Deals" },
  { id: 4, src: "/fashion-items-on-sale.jpg", alt: "Fashion Deals" },
  { id: 5, src: "/electronics-store-display.png", alt: "Electronics" },
  { id: 6, src: "/happy-customers-with-purchases.jpg", alt: "Happy Customers" },
]

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Explore our vendor marketplace and the amazing deals available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-foreground px-6 py-2 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedId && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages.find((img) => img.id === selectedId)?.src || "/placeholder.svg"}
                alt="Gallery"
                className="w-full rounded-xl"
              />
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 bg-white text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
