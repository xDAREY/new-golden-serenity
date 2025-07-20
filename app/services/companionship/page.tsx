import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function CompanionshipPage() {
  const services = [
    {
      title: "Friendly Conversation",
      description: "Engaging discussions, active listening, and meaningful social interaction.",
    },
    {
      title: "Recreational Activities",
      description: "Games, hobbies, and activities tailored to interests and abilities.",
    },
    {
      title: "Community Outings",
      description: "Accompaniment to social events, religious services, and community activities.",
    },
    {
      title: "Light Housekeeping",
      description: "Assistance with maintaining a clean, safe, and organized living environment.",
    },
    {
      title: "Meal Preparation",
      description: "Help with planning and preparing nutritious meals and snacks.",
    },
    // {
    //   title: "Errands & Shopping",
    //   description: "Assistance with grocery shopping, picking up prescriptions, and other errands.",
    // },
  ]

  const benefits = [
    "Reduces feelings of loneliness and isolation",
    "Improves mental health and cognitive function",
    "Increases social engagement and quality of life",
    "Provides respite for family caregivers",
    "Helps maintain independence at home",
    "Creates meaningful relationships and emotional support",
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
                    Companionship Services
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed slide-up">
                    Meaningful social interaction and emotional support to combat loneliness and enhance quality of
                    life.
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
                    src="/images/elderly1.jpg"
                    alt="Caregiver providing companionship to elderly client"
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
                      <p className="font-semibold text-slate-800">Meaningful Connections</p>
                      <p className="text-sm text-slate-600">Combating Loneliness</p>
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
                Companionship Services Overview
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Social connection and emotional support are essential components of overall wellbeing
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At Golden Serenity Home Care, we understand that human connection is a fundamental need that contributes
                significantly to mental, emotional, and physical health. Our Companionship Services are designed to
                combat loneliness and isolation while providing meaningful social interaction and emotional support.
              </p>

              <p>
                Our compassionate caregivers serve as trusted companions who engage clients in conversation, shared
                activities, and community outings based on their interests and preferences. Beyond providing social
                interaction, our companions also assist with light housekeeping, meal preparation, and errands to help
                maintain independence and quality of life.
              </p>

              <p>
                Whether it's playing a favorite card game, reminiscing about cherished memories, attending community
                events, or simply enjoying conversation over a cup of tea, our companionship services create meaningful
                connections that enhance overall wellbeing and bring joy to everyday life.
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
                Our comprehensive companionship services include:
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
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefits of Companionship Services</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our companionship services offer numerous benefits that enhance quality of life:
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
                    src="/images/elderly8.jpg"
                    alt="Companionship and social interaction"
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
                  Who Can Benefit from Companionship Services?
                </h2>
                <p className="text-lg text-slate-600 slide-up">
                  Our companionship services are beneficial for a wide range of individuals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Seniors Living Alone</h3>
                    <p className="text-slate-600">
                      Older adults who live alone and may experience social isolation or loneliness.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those with limited social networks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Individuals who have lost a spouse or partner</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those with mobility limitations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800">Individuals with Health Challenges</h3>
                    <p className="text-slate-600">
                      People managing chronic conditions or recovering from illness who benefit from additional support.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those with chronic health conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Individuals recovering from surgery or illness</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">Those with cognitive impairments</span>
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
              Contact us today to discuss how our Companionship Services can enhance quality of life for you or your
              loved one.
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
