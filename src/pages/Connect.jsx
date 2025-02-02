import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaFlask, FaGraduationCap, FaUserPlus, FaSearch, FaComments, FaMagic, FaArrowRight } from "react-icons/fa";

const FloatingPaths = ({ position }) => {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(99,102,241,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
  >
    <div className="text-center">
      <Icon className="text-indigo-600 text-4xl mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const HowItWorksStep = ({ number, title, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center mb-12"
  >
    <div className="w-1/2 p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="w-1/2 flex justify-center">
      <Icon className="text-indigo-600 text-5xl" />
    </div>
  </motion.div>
);

const ConnectLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      {/* Floating Paths Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        
        <div className="relative z-10 text-center">
          <motion.h1 className="text-9xl font-bold text-indigo-600 mb-6">
            CONNECT
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering students & faculty to collaborate, innovate, and achieve.
          </p>
          
          <motion.div className="flex justify-center space-x-4">
            <button
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition"
              onClick={() => navigate("/login")}
            >
              Get Started <FaArrowRight className="inline ml-2" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard icon={FaUserFriends} title="Academic Networking" description="Connect with peers & faculty across departments." />
          <FeatureCard icon={FaFlask} title="Research Collaboration" description="Join research projects and contribute to discoveries." />
          <FeatureCard icon={FaGraduationCap} title="Faculty Mentorship" description="Get personalized guidance from experienced faculty." />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">How It Works</h2>
        <div className="max-w-5xl mx-auto">
          <HowItWorksStep number={1} title="Create Your Profile" description="Showcase your skills and research interests." icon={FaUserPlus} />
          <HowItWorksStep number={2} title="Find Collaborators" description="Connect with students, faculty, and research teams." icon={FaSearch} />
          <HowItWorksStep number={3} title="Engage & Contribute" description="Join discussions, apply to projects, and share insights." icon={FaComments} />
        </div>
      </section>
      

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">Ready to Transform Your Academic Journey?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join Connect today and unlock a world of collaboration, innovation, and growth.
        </p>
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition"
          onClick={() => navigate("/login")}
        >
          Get Started <FaArrowRight className="inline ml-2" />
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConnectLanding;





