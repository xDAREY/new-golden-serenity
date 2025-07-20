import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function VeteranSupportPage() {
  const services = [
    {
      title: "Personal Care",
      description: "Assistance with activities of daily living tailored to the unique needs of veterans.",
    },
    // {
    //   title: "VA Benefits Navigation",
    //   description: "Help understanding and accessing available VA benefits and services.",
    // },
    {
      title: "Companionship",
      description: "Social interaction and emotional support from caregivers who understand military culture.",
    },
    {
      title: "Respite for Family Caregivers",
      description: "Relief for family members who are caring for veteran loved ones.",
    },
    {
      title: "Medication Management",
      description: "Assistance with medication reminders and adherence to treatment plans.",
    },
    {
      title: "Transportation",
      description: "Rides to VA medical appointments, therapy sessions, and community activities.",
    },
  ]

  const benefits = [
    "Care from providers who understand military culture",
    // "Assistance navigating VA benefits and services",
    "Support for veterans with service-related conditions",
    "Coordination with VA healthcare providers",
    "Respect for military service and sacrifice",
    "Specialized training in veteran-specific needs",
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
                    Veteran Support Services
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Dedicated care services for our nation's veterans, provided with the honor, respect, and
                    understanding they deserve.
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
                    src="/images/elderly6.jpg"
                    alt="Caregiver assisting veteran client"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Veteran-Owned</p>
                      <p className="text-sm text-slate-600">Serving Those Who Served</p>
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
                Veteran Support Services Overview
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Specialized care services designed specifically for veterans and their unique needs
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At Golden Serenity Home Care, we take pride in being a veteran-owned company that understands the unique
                needs and challenges faced by those who have served our country. Our Veteran Support Services are
                designed specifically to honor and care for veterans with the respect and dignity they deserve.
              </p>

              <p>
                Our caregivers receive specialized training to understand military culture, common service-related
                conditions, and the specific needs of veterans. We work closely with VA healthcare providers and help
                veterans navigate available benefits and services to ensure they receive the comprehensive care they
                need.
              </p>

              <p>
                Whether you're a veteran needing assistance with daily activities, managing service-related conditions,
                or simply seeking companionship from someone who understands your experiences, our team is here to
                provide compassionate, respectful care tailored to your unique needs.
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
                Our comprehensive veteran support services include:
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
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefits of Our Veteran Support Services</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our specialized veteran support services offer unique benefits:
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
                    src="/images/elderly9.webp"
                    alt="Veterans receiving care"
                    width={500}
                    height={375}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VA Benefits Navigation */}
        {/* <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">VA Benefits Navigation</h2>
                <p className="text-lg text-slate-600 slide-up">
                  We help veterans understand and access the benefits they've earned
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  Navigating the VA system can be complex and overwhelming. Our team has experience working with the VA
                  and can help veterans understand and access the benefits they've earned through their service. We can
                  assist with:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Understanding eligibility for VA healthcare benefits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Connecting with VA healthcare providers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Accessing VA Aid and Attendance benefits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Coordinating care with VA healthcare services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Finding transportation to VA medical appointments</span>
                  </li>
                </ul>

                <p>
                  Our goal is to ensure that veterans receive all the benefits and services they're entitled to, while
                  providing the additional support they need to maintain their independence and quality of life.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-16 bg-primary text-white text-center rounded-3xl mt-16">
          <div className="container mx-auto px-4 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Learn More?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Contact us today to discuss how our Veteran Support Services can help you or your loved one.
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
