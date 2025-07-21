import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Award, CheckCircle, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { Calendar } from "@/components/ui/calendar"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through reliability, honesty, and consistent quality care.",
    },
    {
      icon: Award,
      title: "Dignity",
      description: "Respecting the independence and personal choices of every individual we serve.",
    },
    {
      icon: Users,
      title: "Excellence",
      description: "Continuously improving our services to exceed expectations and industry standards.",
    },
  ]

  const achievements = [
    "GAPP-Approved Provider",
    "Veteran-Owned and Operated",
    "50+ Satisfied Clients",
    "Licensed and Insured",
    "Background-Checked Caregivers",
    "24/7 Support Available",
  ]

  const ceoHighlights = [
    "5+ years in healthcare administration",
    "Former military service member",
    "Certified in healthcare management",
    "Passionate advocate for quality home care",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-slate-700 text-white hover:bg-slate-600 mb-6">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 fade-in">
              About Golden Serenity Home Care
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed slide-up">
              Founded on the principles of service, compassion, and excellence, we're dedicated to providing the highest
              quality home care services to families across Georgia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Golden Serenity Home Care, our mission is to enhance the quality of life for individuals and families
                by providing compassionate, professional, and personalized home care services. We believe that everyone
                deserves to age with dignity in the comfort of their own home.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a veteran-owned company, we understand the importance of service, dedication, and going above and
                beyond for those who have given so much. This commitment extends to every client we serve, regardless of
                their background or circumstances.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative slide-in-right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/elderly2.jpg"
                  alt="Golden Serenity Home Care team"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">30+</div>
                  <div className="text-sm text-slate-600">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">
                Founded by Veterans, Driven by Service
              </h2>
              <p className="text-lg text-slate-600 slide-up">
                Our story begins with a commitment to continue serving our community after military service.
              </p>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="aspect-square rounded-full overflow-hidden shadow-lg mx-auto max-w-xs">
                      <Image
                        src="/images/elderly8.jpg"
                        alt="Founder of Golden Serenity Home Care"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">A Legacy of Service</h3>
                    <p className="text-slate-600 leading-relaxed">
                      After serving our country with honor, our founders recognized the need for quality, compassionate
                      home care services in Georgia. Drawing from military values of integrity, dedication, and service
                      above self, Golden Serenity Home Care was established to fill this critical need in our community.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Our veteran background gives us a unique understanding of the challenges faced by military
                      families, seniors, and individuals with special needs. We bring the same level of commitment and
                      attention to detail that served us well in the military to every aspect of our home care services.
                    </p>
                    <div className="flex items-center space-x-4 pt-4">
                      <Badge variant="secondary" className="bg-slate-700 text-white">
                        Veteran-Owned
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        GAPP Certified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto slide-up">
              These values guide everything we do and shape the way we interact with our clients, their families, and
              our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 fade-in">Meet Our CEO</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto slide-up">
              Leading with vision, compassion, and a commitment to excellence in home care services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-2 relative">
                    <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                      <Image
                        src="/images/CEO.jpeg"
                        alt="Anu Ajayi, CEO of Golden Serenity Home Care"
                        width={400}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-white shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        CEO & Founder
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">Anu Ajayi</h3>
                        <p className="text-xl text-primary font-semibold mb-4">Chief Executive Officer</p>
                        <div className="flex items-center space-x-4 text-slate-600 mb-6">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">Buford, Georgia</span>
                          </div>
                            <div className="flex items-center space-x-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                              <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
                              </svg>
                              <span className="text-sm">Founded 2024</span>
                            </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed">
                          Anu Ajayi brings a unique combination of military discipline, healthcare expertise, and
                          entrepreneurial vision to Golden Serenity Home Care. As a veteran and healthcare professional,
                          she understands the importance of providing compassionate, reliable care to those who need it
                          most.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          Under her leadership, Golden Serenity has become a trusted GAPP-approved provider, serving
                          families throughout Georgia with dedication and excellence. Her commitment to maintaining the
                          highest standards of care while fostering a culture of compassion has made Golden Serenity a
                          leader in home care services.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-800">Professional Highlights</h4>
                        <div className="space-y-3">
                          {ceoHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="bg-primary/10 p-1 rounded-full mt-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-slate-600 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-200">
                        <blockquote className="italic text-slate-600 text-lg leading-relaxed">
                          "Our mission is simple: to provide the kind of care we would want for our own family members.
                          Every client deserves dignity, respect, and the highest quality of care in the comfort of
                          their own home."
                        </blockquote>
                        <cite className="text-primary font-semibold mt-2 block">— Anu Ajayi, CEO</cite>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience the Golden Serenity Difference?"
        description="Join the families who trust us with their most precious loved ones. Contact us today to learn more about our services."
        primaryButton={{
          text: "Contact Us Today",
          href: "/contact",
        }}
        secondaryButton={{
          text: "View Our Services",
          href: "/services",
        }}
      />
    </div>
  )
}
