"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { db } from "@/lib/firebase"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const form = document.getElementById("contact-form") as HTMLFormElement
    if (!form) return

    const handleSubmit = (event: Event) => {
      event.preventDefault()
      setIsSubmitting(true)

      const formData = new FormData(form)
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          setIsSubmitting(false)
          if (response.ok) {
            setIsSubmitted(true)
            form.reset()
          } else {
            alert("There was a problem sending your message. Please try again.")
          }
        })
        .catch((error) => {
          setIsSubmitting(false)
          alert("There was a problem sending your message. Please try again.")
        })
    }

    form.addEventListener("submit", handleSubmit)

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        form.reset()
      }
    }

    window.addEventListener("pageshow", handlePageShow)

    return () => {
      form.removeEventListener("submit", handleSubmit)
      window.removeEventListener("pageshow", handlePageShow)
    }
  }, [])

  const faqs = [
    {
      question: "What services does Golden Serenity Home Care provide?",
      answer:
        "We provide comprehensive home care services including personal care, GAPP pediatric program support, veteran care, companionship, respite care, and 24/7 support services.",
    },
    {
      question: "Do you accept Medicaid and insurance?",
      answer:
        "Yes, we accept Medicaid and work with various insurance providers. We're also a GAPP-approved provider for Georgia's Pediatric Program.",
    },
    {
      question: "What areas do you serve in Georgia?",
      answer:
        "We provide services throughout Georgia, with our main office located in Buford. Contact us to confirm service availability in your specific area.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "You can get started by calling us at (404) 823-4521, filling out our contact form, or scheduling an appointment online. We'll conduct a free consultation to assess your needs.",
    },
    {
      question: "Are your caregivers licensed and insured?",
      answer:
        "Yes, all our caregivers are thoroughly screened, licensed, insured, and receive ongoing training. We maintain the highest standards of professionalism and care.",
    },
    {
      question: "What makes Golden Serenity different from other home care providers?",
      answer:
        "As a veteran-owned, GAPP-approved provider, we bring military values of service and dedication to everything we do. We specialize in complex care needs and provide personalized, compassionate service.",
    },
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90 mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to learn more about our home care services? We're here to answer your questions and help you get
              started with quality, compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to help you and your family. Reach out to us using any of the methods below, and we'll
                  respond promptly to discuss your care needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                        <a
                          href="tel:404-823-4521"
                          className="text-lg text-slate-600 hover:text-primary transition-colors"
                        >
                          (404) 823-4521
                        </a>
                        <p className="text-sm text-slate-500 mt-1">Available during business hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                        <a
                          href="mailto:info@goldenserenityhomecare.org"
                          className="text-lg text-slate-600 hover:text-primary transition-colors"
                        >
                          info@goldenserenityhomecare.org
                        </a>
                        <p className="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Address</h3>
                        <p className="text-lg text-slate-600">Golden Serenity Home Care</p>
                        <p className="text-lg text-slate-600">Buford, Georgia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Business Hours</h3>
                        <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:30 PM</p>
                        <p className="text-slate-600">Saturday - Sunday: Closed</p>
                        <p className="text-sm text-slate-500 mt-2">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Send Us a Message</CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                      <p className="text-slate-600">
                        Thank you for contacting us. We'll respond to your message within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 bg-primary hover:bg-primary/90 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setIsSubmitting(true)

                        const form = e.target as HTMLFormElement
                        const data = new FormData(form)

                        const contactData = {
                          name: data.get("name"),
                          email: data.get("email"),
                          phone: data.get("phone"),
                          message: data.get("message"),
                          createdAt: Timestamp.now(),
                        }

                        try {
                          await addDoc(collection(db, "contacts"), contactData)
                          setIsSubmitted(true)
                          form.reset()
                          toast.success("Your message has been sent successfully!")
                        } catch (error) {
                          toast.error("There was a problem sending your message. Please try again.")
                          console.error("Error submitting contact form:", error)
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="w-full"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full"
                          placeholder="Tell us about your care needs or ask any questions you may have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-white"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Location</h2>
            <p className="text-lg text-slate-600">
              Proudly serving families throughout Georgia from our Buford location
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6506867.588398296!2d-85.6051641!3d32.9604879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4cfef7c4bc7a1%3A0x9fa30978b3962720!2sGeorgia%2C%20USA!5e0!3m2!1sen!2s!4v1696513285589!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Golden Serenity Home Care</h3>
                    <p className="text-slate-600">Buford, Georgia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Service Area</h3>
                    <p className="text-slate-600">
                      We provide services throughout Georgia. Contact us to confirm availability in your area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and how we can help your family
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-md border-0">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-semibold text-slate-800 pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Experience the Golden Serenity Difference</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our compassionate team is ready to provide the personalized care your family deserves. Contact us today
                to learn more about how we can help.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="tel:404-823-4521">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (404) 823-4521
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/elderly12.jpg"
                  alt="Caregiver and elderly client sharing a warm moment"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
