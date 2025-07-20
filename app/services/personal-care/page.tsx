import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function PersonalCarePage() {
  const services = [
    {
      title: "Bathing & Hygiene",
      description:
        "Assistance with bathing, showering, personal hygiene, and grooming to maintain dignity and cleanliness.",
    },
    {
      title: "Dressing & Grooming",
      description:
        "Help with dressing, undressing, and maintaining personal appearance including hair care and makeup application.",
    },
    {
      title: "Mobility Assistance",
      description:
        "Support with walking, transferring, and positioning to ensure safety and prevent falls or injuries.",
    },
    {
      title: "Medication Reminders",
      description: "Timely reminders to take prescribed medications according to healthcare provider instructions.",
    },
    {
      title: "Meal Preparation",
      description: "Preparation of nutritious meals and snacks according to dietary requirements and preferences.",
    },
    {
      title: "Light Housekeeping",
      description: "Maintaining a clean and safe living environment through light cleaning, laundry, and organization.",
    },
  ]

  const benefits = [
    "Maintains dignity and independence",
    "Reduces risk of falls and injuries",
    "Ensures proper nutrition and medication adherence",
    "Provides companionship and emotional support",
    "Offers peace of mind for family members",
    "Allows clients to remain in the comfort of their own homes",
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
                    Personal Care Services
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Compassionate assistance with daily living activities to help maintain independence, dignity, and
                    quality of life in the comfort of home.
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
                    src="/images/elderly4.jpg"
                    alt="Caregiver assisting elderly client"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Compassionate Care</p>
                      <p className="text-sm text-slate-600">Trained Professionals</p>
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
                Personal Care Services Overview
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Our personal care services are designed to help individuals maintain their independence while receiving
                the assistance they need with daily living activities.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At Golden Serenity Home Care, we understand that maintaining personal dignity and independence is
                essential to quality of life. Our personal care services provide compassionate assistance with
                activities of daily living (ADLs) that may have become challenging due to aging, illness, disability, or
                recovery from surgery.
              </p>

              <p>
                Our trained caregivers provide respectful, dignified assistance tailored to each client's unique needs
                and preferences. Whether you need help with bathing, dressing, mobility, or medication reminders, our
                team is here to support you while promoting maximum independence.
              </p>

              <p>
                We recognize that accepting help with personal care can be difficult. Our approach emphasizes respect,
                privacy, and maintaining the client's sense of control and autonomy throughout the care process. We work
                closely with clients and their families to develop personalized care plans that address specific needs
                while honoring preferences and routines.
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
                Our comprehensive personal care services include assistance with a wide range of daily activities
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
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefits of Personal Care Services</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our personal care services offer numerous benefits that enhance quality of life and promote wellbeing:
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
                    src="/images/elderly7.jpg"
                    alt="Caregiver assisting with medication"
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
                  Who Can Benefit from Personal Care Services?
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  Our personal care services are beneficial for a wide range of individuals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Seniors</h3>
                    <p className="text-slate-600">
                      Older adults who need assistance with daily activities but wish to maintain their independence and
                      continue living in their own homes.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those experiencing age-related limitations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Individuals with chronic conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those at risk of falls or injuries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Adults with Disabilities</h3>
                    <p className="text-slate-600">
                      Individuals with physical, cognitive, or developmental disabilities who require assistance with
                      daily living activities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those with mobility limitations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Individuals with neurological conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those needing support with daily routines</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Individuals Recovering from Surgery</h3>
                    <p className="text-slate-600">
                      People who need temporary assistance during recovery from surgery, illness, or hospitalization.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Post-operative recovery support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Short-term rehabilitation assistance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Transitional care from hospital to home</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Individuals with Chronic Conditions</h3>
                    <p className="text-slate-600">
                      Those living with chronic health conditions who need ongoing support with daily activities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Assistance with condition management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Support with medication adherence</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Help maintaining quality of life</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                  Our Approach to Personal Care
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  What sets Golden Serenity's personal care services apart
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">Person-Centered Care</h3>
                <p>
                  We believe in a person-centered approach that puts the client's needs, preferences, and goals at the
                  center of everything we do. Our care plans are highly individualized and adaptable to changing needs.
                </p>

                <h3 className="text-2xl font-bold text-slate-800">Dignity and Respect</h3>
                <p>
                  We provide personal care services with the utmost respect for each individual's dignity, privacy, and
                  personal choices. Our caregivers are trained to maintain professionalism while creating a comfortable,
                  supportive environment.
                </p>

                <h3 className="text-2xl font-bold text-slate-800">Safety First</h3>
                <p>
                  Safety is our top priority in all personal care activities. Our caregivers are trained in proper
                  techniques for transfers, mobility assistance, and fall prevention to ensure the safety and wellbeing
                  of our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white text-center rounded-3xl mt-16">
          <div className="container mx-auto px-4 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Learn More?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Contact us today to discuss how our Personal Care Services can help you or your loved one maintain
              independence and quality of life.
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
