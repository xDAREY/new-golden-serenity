"use client"

import type React from "react"
import { db } from "@/lib/firebase"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Users, Shield, Clock, Phone, ArrowRight, CheckCircle, Briefcase } from "lucide-react"
import Link from "next/link"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { FileUpload } from "@/components/file-upload"
import { toast } from "sonner"

export default function ServicesPage() {
  const [formData, setFormData] = useState<{
    fullName: string
    email: string
    phone: string
    references: string
    education: string
    availability: string
    resume: string | null // ✅ fix: allow null here
  }>({
    fullName: "",
    email: "",
    phone: "",
    references: "",
    education: "",
    availability: "",
    resume: null, // ✅ initial value matches
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (url: string | null) => {
    setFormData((prev) => ({ ...prev, resume: url }))
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.resume) throw new Error("Please upload your resume.")

      await addDoc(collection(db, "applications"), {
        ...formData,
        createdAt: serverTimestamp(),
      })

      toast.success("Application submitted successfully!")
      setIsSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        references: "",
        education: "",
        availability: "",
        resume: null,
      }) // reset

    } catch (err) {
      console.error("Submission Error:", err)
      toast.error("Something went wrong while submitting. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }



  const services = [
    {
      title: "GAPP Pediatric Program",
      description: "Specialized care for children through Georgia's GAPP program with trained pediatric caregivers",
      icon: Heart,
      href: "/services/gapp-program",
      features: ["Medicaid covered", "Specialized training", "Family support", "Care coordination"],
    },
    {
      title: "Personal Care",
      description: "Assistance with daily living activities including bathing, dressing, and medication management",
      icon: Users,
      href: "/services/personal-care",
      features: ["ADL assistance", "Medication reminders", "Mobility support", "Personal hygiene"],
    },
    {
      title: "Veteran Support",
      description: "Dedicated care services for our nation's veterans with understanding of military culture",
      icon: Shield,
      href: "/services/veteran-support",
      features: ["Military understanding", "Honor and respect", "Specialized care"],
    },
    {
      title: "Companionship",
      description: "Social interaction and emotional support to combat isolation and loneliness",
      icon: Heart,
      href: "/services/companionship",
      features: ["Social activities", "Conversation", "Light housekeeping", "Transportation"],
    },
    {
      title: "Respite Care",
      description: "Temporary relief for family caregivers while ensuring continuous quality care",
      icon: Clock,
      href: "/services/respite-care",
      features: ["Flexible scheduling", "Short-term care", "Family relief", "Peace of mind"],
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock care and support services for clients with complex needs",
      icon: Phone,
      href: "/services/24-7-support",
      features: ["Continuous care", "Night care", "Medical monitoring"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90 mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 fade-in">
              Comprehensive Home Care Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed slide-up">
              From specialized pediatric care to veteran support, we offer a full range of professional home care
              services tailored to meet your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <service.icon className="h-8 w-8 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">Our Care Process</h2>
              <p className="text-lg text-slate-600 slide-up">
                We follow a comprehensive approach to ensure you receive the best possible care
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="slide-in-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Initial Assessment</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We begin with a thorough assessment of your needs, preferences, and medical requirements. Our care
                    coordinators meet with you and your family to understand your unique situation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Comprehensive needs evaluation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Medical history review</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Home environment assessment</span>
                    </li>
                  </ul>
                </div>
                <div className="relative slide-in-right">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/elderly5.jpg"
                      alt="Initial care assessment"
                      width={500}
                      height={375}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative slide-in-left">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/elderly4.jpg"
                      alt="Personalized care plan"
                      width={500}
                      height={375}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 slide-in-right">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Personalized Care Plan</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Based on our assessment, we develop a customized care plan tailored to your specific needs. This
                    plan outlines the services, schedule, and goals for your care.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Individualized service selection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Regular plan reviews and updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="slide-in-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">3. Caregiver Matching</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We carefully match you with caregivers who have the right skills, experience, and personality to
                    meet your needs and preferences, ensuring a positive and compatible relationship.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Skill and experience alignment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Personality compatibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">Consistent caregiver assignment</span>
                    </li>
                  </ul>
                </div>
                <div className="relative slide-in-right">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/elderly1.jpg"
                      alt="Caregiver matching"
                      width={500}
                      height={375}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Opportunities */}
      <section id="careers" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-accent text-white hover:bg-accent/90 mb-4">
                Join Our Team
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">Employment Opportunities</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto slide-up">
                We're looking for compassionate, dedicated professionals to join our team and help us provide
                exceptional care to our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6 slide-in-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Caregivers & CNAs</h3>
                    <p className="text-slate-600">
                      Join our team of compassionate caregivers providing direct care and support to our clients in
                      their homes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Administrative Support</h3>
                    <p className="text-slate-600">
                      Help our organization run smoothly with your administrative and organizational skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Care Coordinators</h3>
                    <p className="text-slate-600">
                      Coordinate care services and serve as a liaison between clients, families, and caregivers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 slide-in-right">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Competitive pay and benefits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Ongoing training and professional development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Supportive and inclusive work environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Opportunity to make a meaningful difference</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Career advancement opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="bg-white shadow-lg border-0 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Apply Today</CardTitle>
                <p className="text-slate-600">Fill out the form below to express your interest in joining our team.</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Application Received!</h3>
                    <p className="text-slate-600">
                      Thank you for your interest in joining our team. We'll review your application and contact you
                      soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-primary hover:bg-primary/90 text-white"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Information *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="references">References *</Label>
                      <Textarea
                        id="references"
                        name="references"
                        value={formData.references}
                        onChange={handleInputChange}
                        required
                        placeholder="Please provide at least two professional references with contact information"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education">Educational Background *</Label>
                      <Textarea
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        placeholder="Please list your educational background, certifications, and relevant training"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Textarea
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="Please indicate your availability (full-time, part-time, specific days/hours)"
                        rows={2}
                      />
                    </div>

                    <FileUpload id="resume" label="Resume" onChange={handleFileChange} required />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Take the first step towards quality home care. Contact us today to learn more about our services."
        primaryButton={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Book Appointment",
          href: "https://coachli.co/goldenserenity/SV-x0WIa"
        }}
      />
    </div>
  )
}
