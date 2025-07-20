import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function RespiteCarePage() {
  const services = [
    {
      title: "Short-Term Care",
      description: "Temporary care while family caregivers take a break, travel, or attend to personal needs.",
    },
    {
      title: "Overnight Care",
      description: "Supervision and assistance during evening and overnight hours to ensure safety and comfort.",
    },
    {
      title: "Weekend Coverage",
      description: "Care services provided during weekends to give family caregivers regular scheduled breaks.",
    },
    {
      title: "Vacation Coverage",
      description: "Extended care during family vacations or trips to maintain continuity of care.",
    },
    // {
    //   title: "Emergency Relief",
    //   description: "Rapid response care when family caregivers face unexpected situations or emergencies.",
    // },
    {
      title: "Regular Scheduled Breaks",
      description: "Consistent, planned respite to prevent caregiver burnout and support sustainable care.",
    },
  ]

  const benefits = [
    "Prevents caregiver burnout and stress",
    "Allows family caregivers to rest and recharge",
    "Maintains care recipient's routine and comfort",
    "Provides professional care during family absences",
    "Supports sustainable long-term family caregiving",
    "Improves overall family relationships and dynamics",
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
                    Respite Care Services
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Temporary relief for family caregivers while ensuring continuous quality care for your loved one.
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
                    src="/images/elderly3.jpg"
                    alt="Professional caregiver providing respite care"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Caregiver Relief</p>
                      <p className="text-sm text-slate-600">Rest & Recharge</p>
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
                Respite Care Services Overview
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Supporting family caregivers with temporary relief while maintaining quality care
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At Golden Serenity Home Care, we understand that caring for a loved one can be both rewarding and
                challenging. Our Respite Care Services provide temporary relief for family caregivers while ensuring
                your loved one continues to receive the highest quality care in your absence.
              </p>

              <p>
                Caregiver burnout is a real concern that can affect both the caregiver's health and the quality of care
                they provide. Taking regular breaks is essential for sustainable caregiving. Our professional caregivers
                step in seamlessly to maintain your loved one's routine, provide companionship, and assist with daily
                activities while you take the time you need to rest, attend to personal matters, or simply recharge.
              </p>

              <p>
                Whether you need a few hours each week, overnight coverage, weekend relief, or extended support during a
                vacation, our flexible respite care services can be tailored to meet your specific needs and schedule.
                We work closely with families to ensure a smooth transition and continuity of care that provides peace
                of mind for everyone involved.
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
                Our comprehensive respite care services include:
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
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefits of Respite Care</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our respite care services offer numerous benefits for both caregivers and care recipients:
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
                    src="/images/elderly10.png"
                    alt="Professional caregivers providing respite care"
                    width={500}
                    height={375}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Consider Respite Care */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                  When to Consider Respite Care
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  Recognizing when it's time for respite care can help prevent caregiver burnout
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Signs of Caregiver Stress</h3>
                    <p className="text-slate-600">
                      Consider respite care if you're experiencing these common signs of caregiver stress:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Feeling constantly tired or overwhelmed</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Sleeping too much or too little</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Gaining or losing weight</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Feeling irritable or impatient</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Losing interest in activities you once enjoyed</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Planned Life Events</h3>
                    <p className="text-slate-600">
                      Consider scheduling respite care during these important life events:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Family vacations or travel</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Important work commitments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Medical appointments for yourself</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Special family events or celebrations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Regular scheduled self-care time</span>
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
              Contact us today to discuss how our Respite Care Services can support you and your loved one.
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
