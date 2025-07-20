import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function GAPPProgramPage() {
  const services = [
    {
      title: "Skilled Nursing Care",
      description:
        "Professional nursing services including medication administration, wound care, and health monitoring.",
    },
    {
      title: "Personal Care Services",
      description: "Assistance with activities of daily living, bathing, dressing, and mobility support.",
    },
    // {
    //   title: "Respite Care",
    //   description: "Temporary relief for family caregivers while ensuring continuous quality care for your child.",
    // },
    {
      title: "Care Coordination",
      description: "Working with your healthcare team to ensure comprehensive, coordinated care.",
    },
    {
      title: "Family Support",
      description: "Training and support for family members to help care for their child at home.",
    },
    // {
    //   title: "Medical Equipment",
    //   description: "Access to necessary medical equipment and supplies for home care.",
    // },
  ]

  const eligibilityRequirements = [
    "Child must be between 0 - 21 years of age",
    "Must be a Georgia resident",
    // "Family income must meet Medicaid guidelines",
    "Child must require a level of care typically provided in a hospital or nursing facility",
    // "Care must be safely provided in the home environment",
    "Services must be medically necessary and prescribed by a physician",
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
                    GAPP Pediatric Program
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Specialized care for children with complex medical needs through Georgia's GAPP program.
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
                    src="/images/gapp3.webp"
                    alt="Caregiver providing care to child in GAPP program"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">GAPP Certified</p>
                      <p className="text-sm text-slate-600">Pediatric Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">GAPP Program Overview</h2>
              <p className="text-lg text-slate-600 slide-up">
                Understanding Georgia's specialized program for children with complex medical needs
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                The Georgia Pediatric Program (GAPP) is a Medicaid waiver program designed to provide comprehensive home
                and community-based services for children with complex medical needs who would otherwise require
                institutional care. As a GAPP-approved provider, Golden Serenity Home Care is committed to delivering
                exceptional care that allows these children to thrive in the comfort of their own homes.
              </p>

              <p>
                Our specialized pediatric care team includes nurses and caregivers with specific training in pediatric
                care, and the unique needs of children with complex medical conditions. We
                work closely with each child's healthcare providers, therapists, and family members to ensure
                coordinated, comprehensive care.
              </p>

              <p>
                We understand that caring for a child with complex medical needs can be challenging for families. Our
                GAPP services not only provide direct care for the child but also support and training for family
                caregivers, helping to create a sustainable care environment that promotes the child's health,
                development, and quality of life.
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
                Our comprehensive GAPP services include:
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

        {/* Eligibility Requirements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                  GAPP Eligibility Requirements
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  To qualify for GAPP services, children must meet specific eligibility criteria
                </p>
              </div>

              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {eligibilityRequirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{requirement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Note:</strong> Meeting these criteria does not guarantee approval. Each application is
                      reviewed individually, and approval is based on medical necessity and available program capacity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">How We Help with GAPP</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto slide-up">
                Our step-by-step process to help your family navigate the GAPP program
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Initial Consultation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We begin with a thorough consultation to understand your child's needs, medical history, and
                      current care situation. This helps us determine if GAPP services would be beneficial and
                      appropriate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Documentation Review</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We help gather and review all necessary medical documentation and physician orders required for
                      the GAPP application process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">GAPP Application</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our team assists with completing and submitting the GAPP application, ensuring all required
                      information is included and properly documented.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Care Plan Development</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Once approved, we develop a personalized care plan tailored to your child's specific needs,
                      including nursing care, personal care, and family support services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Care Implementation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our trained caregivers begin providing services according to the approved care plan, with regular
                      supervision and quality assurance checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white text-center rounded-3xl mt-16">
          <div className="container mx-auto px-4 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started with GAPP?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Our experienced team is here to help you navigate the GAPP application process and provide the specialized
              care your child needs.
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
