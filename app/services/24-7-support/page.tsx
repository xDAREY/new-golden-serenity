import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function SupportPage() {
  const services = [
    {
      title: "Overnight Care",
      description: "Continuous supervision and assistance during nighttime hours for safety and peace of mind.",
    },
    {
      title: "Live-In Care",
      description: "Full-time caregivers who live in the home to provide around-the-clock support.",
    },
    {
      title: "Shift-Based Care",
      description: "Multiple caregivers working in shifts to ensure continuous coverage throughout the day and night.",
    },
    // {
    //   title: "Emergency Response",
    //   description: "Immediate assistance during emergencies with protocols for rapid intervention.",
    // },
    {
      title: "Medication Management",
      description: "Round-the-clock medication reminders and assistance with proper administration.",
    },
    {
      title: "Complex Care Needs",
      description: "Specialized care for individuals with advanced medical needs requiring constant monitoring.",
    },
  ]

  const benefits = [
    "Continuous safety monitoring and fall prevention",
    "Peace of mind for family members at all hours",
    // "Immediate response to emergencies or changes in condition",
    "Consistent care without gaps in coverage",
    "Support for clients with complex or advanced care needs",
    "Reduced hospitalizations through preventive monitoring",
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <BackButton href="/services" />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32 rounded-3xl mb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90">
                    Our Services
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight fade-in">
                    24/7 Support Services
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Round-the-clock care and support services for clients with complex needs requiring continuous
                    assistance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <Link href="https://coachli.co/goldenserenity/SV-x0WIa">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/24:7nurse.avif"
                    alt=" professional care team"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Always Available</p>
                      <p className="text-sm text-slate-600">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                24/7 Support Services Overview
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Continuous care for those who need around-the-clock support and monitoring
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At Golden Serenity Home Care, we understand that some individuals require continuous care and monitoring
                due to complex medical needs, advanced age, or specific health conditions. Our 24/7 Support Services
                provide round-the-clock care to ensure safety, comfort, and peace of mind at all hours of the day and
                night.
              </p>

              <p>
                Our team of professional caregivers works in coordinated shifts to provide seamless, uninterrupted care.
                We develop comprehensive care plans that address both daytime and nighttime needs, including medication
                management, mobility assistance, personal care, and emergency response protocols.
              </p>

              <p>
                Whether you need overnight supervision for a loved one with dementia who experiences sundowning,
                continuous monitoring for someone with complex medical needs, or the security of knowing help is always
                available, our 24/7 support services provide the continuous care and attention necessary for those who
                need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">Services Included</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto slide-up">
                Our comprehensive 24/7 support services include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-6 slide-in-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefits of 24/7 Support Services</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our round-the-clock care services offer numerous benefits:
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative slide-in-right">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/elderly11.jpeg"
                    alt="24/7 care and medication management"
                    width={500}
                    height={375}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Benefit */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                  All Golden Serenity Homecare Client Benefit from 24/7 Support Services
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  Our round-the-clock care is particularly beneficial for:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Individuals with Complex Medical Needs</h3>
                    <p className="text-slate-600">
                      Those requiring continuous monitoring and care due to advanced medical conditions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Advanced chronic conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Post-surgical recovery with complications</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Multiple medication requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Individuals with Cognitive Impairments</h3>
                    <p className="text-slate-600">
                      Those with dementia, Alzheimer's, or other conditions requiring constant supervision.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Wandering risk or sundowning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Safety concerns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Need for consistent routine and care</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white text-center rounded-3xl mt-16">
          <div className="container mx-auto px-4 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Learn More?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Contact us today to discuss how our 24/7 Support Services can provide the continuous care your loved one
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100">
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="https://coachli.co/goldenserenity/SV-x0WIa">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
