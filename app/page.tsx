import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Heart, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatCard, StatCardProps } from "@/components/stat-card"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sade",
      content:
        "Golden Serenity Home Care provided exceptional pediatric care for my daughter, and I’m so thankful for their support. Rebekah was incredibly compassionate and  she made my daughter feel safe, seen, and truly cared for. And AJ, our coordinator, was always responsive, thoughtful, and made everything seamless. Their kindness and professionalism brought real peace of mind to our family. We wholeheartedly recommend Golden Serenity to any family seeking loving, reliable home care.",
      rating: 5,
    },
    {
      name: "Jadiel Adorno",
      content:
        "I am very pleased with Golden Serenity's customer services and all that they have to offer.  Thank you.",
      rating: 5,
    },
       {
      name: "Jesse & Nora Verdejo",
      content:
        "Great customer service and attentive to details!",
      rating: 5,
    },
    {
      name: "Da Re",
      content:
        "Golden serenity home care provided exceptional service, they also took it upon themselves to stay in touch, so grateful to them.",
      rating: 5,
    },
    {
      name: "Father Iris",
      content:
        "Golden Serenity Home Care LLC has truly lived up to its name. From the very beginning, their team demonstrated genuine compassion, professionalism, and dedication. The caregivers are not only well-trained but also incredibly kind and attentive, treating their clients like family. They were responsive to our needs, created a care plan that was tailored specifically for our loved one, and maintained clear communication every step of the way. What stood out the most was their reliability and the peace of mind they gave us, knowing our loved one was in safe, capable, and caring hands. I highly recommend Golden Serenity Home Care LLC to anyone looking for quality, dependable, and heartfelt home care services.",
      rating: 5,
    },
  ]

  const stats: StatCardProps[] = [
    { label: "Veteran-Owned", value: "100%", icon: "shield" },
    { label: "GAPP Provider", value: "Certified", icon: "award" },
    { label: "Clients Served", value: "50+", icon: "users" },
    { label: "Serving Georgia", value: "Statewide", icon: "heart" },
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90 animate-fade-in">
                  GAPP-Approved Provider
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">We Care About You</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Trusted GAPP-Approved Home Care in Georgia. Providing compassionate, professional care services with
                  dignity and respect.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white hover:scale-105 transition-transform">
                  <a href="https://coachli.co/goldenserenity/SV-x0WIa" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <Image
                  src="/images/gapp.jpg"
                  alt="Compassionate caregivers providing home care services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">GAPP Certified</p>
                    <p className="text-sm text-slate-600">Georgia Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Golden Serenity Home Care?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're committed to providing exceptional home care services with the highest standards of professionalism
              and compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
        {/* Why Choose Us */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Trusted Care You Can Count On</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">GAPP Approved</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Certified provider for Georgia's Pediatric Program with specialized training and expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Medicaid Accepted</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      We work with Medicaid and insurance providers to make care accessible and affordable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Veteran-Owned</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Founded and operated by veterans who understand the importance of service and dedication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Trusted Caregivers</h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Thoroughly screened, trained, and compassionate caregivers committed to your wellbeing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform w-full sm:w-auto text-sm sm:text-base"
                >
                  <Link href="/services">
                    <span className="block sm:inline">Learn More About Our Care Standards</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline sm:inline" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/elderly4.jpg"
                  alt="Professional caregiver assisting elderly client"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">What Our Families Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients and their families have to say about our care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Take the first step towards quality home care. Schedule a consultation with our team today."
        primaryButton={{
          text: "Book Appointment",
          href: "https://coachli.co/goldenserenity/SV-x0WIa",
        }}
      />
    </div>
  )
}
