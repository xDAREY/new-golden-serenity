import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Shield, Users, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"

export default function GAPPPage() {
  const eligibilityRequirements = [
    "Child must be between 0 - 21 years of age",
    "Must be a Georgia resident",
    "Child must require a level of care typically provided in a hospital or nursing facility",
    // "Care must be safely provided in the home environment",
    "Services must be medically necessary and prescribed by a physician",
  ]

  const servicesIncluded = [
    {
      title: "Skilled Nursing Care",
      description:
        "Professional nursing services including medication administration, wound care, and health monitoring",
    },
    {
      title: "Personal Care Services",
      description: "Assistance with activities of daily living, bathing, dressing, and mobility support",
    },
    // {
    //   title: "Respite Care",
    //   description: "Temporary relief for family caregivers while ensuring continuous quality care for your child",
    // },
    {
      title: "Care Coordination",
      description: "Working with your healthcare team to ensure comprehensive, coordinated care",
    },
    {
      title: "Family Support",
      description: "Training and support for family members to help care for their child at home",
    },
    // {
    //   title: "Medical Equipment",
    //   description: "Access to necessary medical equipment and supplies for home care",
    // },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Contact us for a free consultation to discuss your child's needs and GAPP eligibility",
    },
    {
      step: "2",
      title: "Documentation Review",
      description: "We help gather and review all necessary medical documentation and physician orders",
    },
    {
      step: "3",
      title: "GAPP Application",
      description: "Our team assists with completing and submitting the GAPP application process",
    },
    {
      step: "4",
      title: "Care Plan Development",
      description: "Once approved, we develop a personalized care plan tailored to your child's specific needs",
    },
    {
      step: "5",
      title: "Care Implementation",
      description: "Our trained caregivers begin providing services according to the approved care plan",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90">
                  GAPP Certified Provider
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Georgia Pediatric Program (GAPP)
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Specialized home care services for children with complex medical needs through Georgia's GAPP program.
                  We're here to help your child thrive at home with professional, compassionate care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Started with GAPP
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="https://coachli.co/goldenserenity/SV-x0WIa">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gapp2.webp"
                  alt="Healthcare worker providing care to child in wheelchair"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Pediatric Specialists</p>
                    <p className="text-sm text-slate-600">GAPP Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GAPP */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                What is the Georgia Pediatric Program (GAPP)?
              </h2>
              <p className="text-lg text-slate-600">
                Understanding Georgia's specialized program for children with complex medical needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Georgia Pediatric Program (GAPP) is a Medicaid waiver program designed to provide comprehensive
                  home and community-based services for children 0 - 21 years of age with complex medical needs who would otherwise require
                  institutional care.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  GAPP allows eligible children to receive necessary medical care and support services in the comfort of
                  their own homes, promoting family unity while ensuring access to specialized healthcare services.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Key Benefits of GAPP
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Allows children to remain at home with family
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Provides access to specialized medical care
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Cover services for medically fragile kids from age 0 - 21
                    </li>
                    {/* <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Supports family caregivers with training and respite
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gapp4.jpg"
                    alt="Caregiver assisting with physical therapy"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">GAPP Eligibility Criteria</h2>
              <p className="text-lg text-slate-600">
                To qualify for GAPP services, children must meet specific eligibility requirements
              </p>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Eligibility Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* Services Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Services Included in GAPP</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive care services designed to meet the unique needs of each child and family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">How Golden Serenity Helps with GAPP</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our step-by-step process to help your family navigate the GAPP program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started with GAPP?"
        description="Our experienced team is here to help you navigate the GAPP application process and provide the specialized care your child needs."
        primaryButton={{
          text: "Contact Us Today",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Schedule Consultation",
          href: "https://coachli.co/goldenserenity/SV-x0WIa",
        }}
      />
    </div>
  )
}
