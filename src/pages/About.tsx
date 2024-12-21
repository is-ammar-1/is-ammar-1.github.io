export default function About() {
  return (
    <div className="bg-black min-h-screen text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About AK Attire</h1>
            <p className="text-gray-300 mb-4">
              Founded in 2024, AK Attire represents the perfect blend of contemporary style and timeless elegance. 
              Our mission is to provide high-quality clothing that empowers individuals to express their unique personality 
              through fashion.
            </p>
            <p className="text-gray-300 mb-4">
              We believe in sustainable fashion and ethical manufacturing practices. Each piece in our collection is 
              carefully crafted using premium materials, ensuring both comfort and durability.
            </p>
            <p className="text-gray-300">
              Our commitment to excellence extends beyond our products to our customer service, ensuring that every 
              shopping experience with AK Attire is exceptional.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
              alt="Fashion Workshop" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}