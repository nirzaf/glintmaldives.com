import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiStoreLine, RiBarChartBoxLine, RiCalendarTodoLine, RiPaintBrushLine } from 'react-icons/ri'

export default function Home() {
  const services = [
    {
      icon: RiStoreLine,
      title: 'MEP Studies',
      link: '/mep-studies',
    },
    {
      icon: RiBarChartBoxLine,
      title: 'System Design',
      link: '/system-design',
    },
    {
      icon: RiCalendarTodoLine,
      title: 'Engineering Calculations',
      link: '/engineering-calculations',
    },
    {
      icon: RiPaintBrushLine,
      title: 'Planning & Coordination',
      link: '/planning-and-coordination',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/img/hero-bg.jpg)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Glint Maldives
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              Excellence in Civil, Painting, Electrical, Plumbing, Fire Systems & Solar
            </h2>
            <Link
              to="/#about"
              className="btn btn-primary text-lg"
            >
              Get Started
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all group"
                >
                  <div className="text-primary text-3xl mb-4">
                    <service.icon />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/img/about.jpg"
                alt="About Glint Maldives"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-primary">Glint Maldives</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Glint Maldives is a leading provider of construction and engineering services in the Maldives.
                We specialize in delivering high-quality solutions across civil works, MEP systems, and renewable energy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Professional Team
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Quality Workmanship
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Innovative Solutions
                </li>
              </ul>
              <Link
                to="/services"
                className="btn btn-primary"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
