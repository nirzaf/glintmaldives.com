import React, { useState } from 'react';
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine } from 'react-icons/ri';
import axios from 'axios';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

// Baserow API configuration
const BASEROW_API_CONFIG = {
  baseURL: 'https://api.baserow.io',
  tableId: '443316',
  token: (() => {
    const token = import.meta.env.VITE_BASEROW_API_TOKEN;
    console.log(token);
    if (!token) {
      console.error('VITE_BASEROW_API_TOKEN is not set in environment variables');
      return '';
    }
    return token;
  })()
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo: ContactInfo[] = [
    {
      icon: <RiMapPin2Line className="w-6 h-6" />,
      title: "Our Address",
      details: ["H. Thuniveli, Boduthakurufaanu Magu", "Male' City, 20066", "Republic of Maldives"]
    },
    {
      icon: <RiTimeLine className="w-6 h-6" />,
      title: "Open Hours",
      details: ["Sunday - Thursday", "9:00 AM - 5:00 PM"]
    },
    {
      icon: <RiMailLine className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@glintmaldives.com", "support@glintmaldives.com"]
    },
    {
      icon: <RiPhoneLine className="w-6 h-6" />,
      title: "Call Us",
      details: ["+960 300 6999", "+960 300 7999"]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!BASEROW_API_CONFIG.token) {
      setSubmitStatus('error');
      setErrorMessage('API configuration error. Please contact support.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await axios({
        method: 'POST',
        url: `${BASEROW_API_CONFIG.baseURL}/api/database/rows/table/${BASEROW_API_CONFIG.tableId}/?user_field_names=true`,
        headers: {
          'Authorization': `Token ${BASEROW_API_CONFIG.token}`,
          'Content-Type': 'application/json'
        },
        data: {
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message
        }
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrorMessage('Authentication error. Please contact support.');
        } else {
          setErrorMessage(error.response?.data?.error || 'Failed to send message. Please try again.');
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our services or to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-secondary'
                    }`}
                  >
                    <span>Send Message</span>
                    <RiSendPlaneLine className="w-5 h-5" />
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 font-medium">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 font-medium">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159097.348826552!2d73.2403564!3d3.1120982500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48875c4083c3fe8d%3A0x1488c51f95e352a7!2sGlint%20Maldives!5e0!3m2!1sen!2sae!4v1738967424367!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glint Maldives Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
