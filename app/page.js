import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #e8f4ff 100%)",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mt-[-6rem] sm:mt-[-3rem]">
            <div className="relative z-30 pb-4">
              <h1 className="text-7xl sm:text-9xl md:text-9xl font-normal mb-4 sm:mb-8 gradient-text-secondary relative" style={{ 
                textShadow: "0px 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.4)",
                paddingBottom: "0.1em"
              }}>
                Yoga Ginger
              </h1>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-text drop-shadow-md relative z-20">
              Move With The Breath, Experience The Journey
            </h1>

          </div>
        </div>
        
        {/* Full-width beach image section */}
        <div className="absolute bottom-0 left-0 right-0 h-80 z-10 w-screen">
          {/* Beach image background with fading effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div 
              className="w-full h-full"
              style={{
                background: `
                  linear-gradient(to bottom, 
                    rgba(248, 249, 250, 1) 0%, 
                    rgba(248, 249, 250, 0.05) 25%, 
                    rgba(248, 249, 250, 0.05) 65%, 
                    rgba(248, 249, 250, 0.5) 80%,
                    rgba(248, 249, 250, 1) 95%
                  ),
                  url('/images/beach.webp')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center 35%',
                opacity: 0.75
              }}
            ></div>
          </div>
          
          {/* Buttons with relative positioning to appear on top of the image */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center" style={{ top: "-40px" }}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/schedule" className="btn-primary shadow-lg text-lg py-3 px-8">
                View Schedule
              </Link>
              <Link
                href="/about"
                className="py-3 px-8 border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] bg-white bg-opacity-80 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Studio Brief Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-secondary drop-shadow-md">
                  Your Sanctuary for Hot Yoga
                </h2>
                <p className="text-gray-700 mb-4">
                Move with your breath, experience the journey with Yoga Ginger in downtown Ocean City, NJ.  With its bohemian free spirited ambiance, you will feel alive and know that change will take place.
                </p>
                <p className="text-gray-700 mb-6">
                Our studio focuses on proper alignment, suppleness in your asanas, and challenges you to become comfortable with the uncomfortable.  Yoga Ginger welcomes all levels, beginner through advanced.
                </p>
                <Link
                  href="/about"
                  className="text-[var(--primary-blue)] font-medium hover:text-[var(--primary-pink)] transition-colors"
                >
                  More about our studio →
                </Link>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl bg-white p-2">
                {/* Studio image */}
                <div className="h-80 w-full overflow-hidden">
                  <Image
                    src="/images/yg-sidewalk.jpg"
                    alt="Yoga Ginger Studio"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
