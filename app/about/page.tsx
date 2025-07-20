import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import { CTASection } from "@/components/cta-section"

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
                  <div className="text-2xl font-bold text-slate-800">50+</div>
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
