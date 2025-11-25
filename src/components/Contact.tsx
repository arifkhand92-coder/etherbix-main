import { useState } from 'react';
import { Send, CheckCircle, Sparkles, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setFormData({ name: '', whatsapp: '', company: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us via WhatsApp or call directly – no email required!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Info Box */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Get Started Today</h3>
              </div>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Reach out to our AI marketing experts via WhatsApp or phone and discuss your business goals.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <div className="text-blue-100"><a href="tel:+919506060787">+91 9506060787</a></div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <div className="text-blue-100">
                      <a href="https://wa.me/919506060787" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name","whatsapp","company"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-2">
                      {field === "name" ? "Full Name" : field === "whatsapp" ? "WhatsApp Number" : "Company Name"}
                    </label>
                    <input
                      type={field === "whatsapp" ? "tel" : "text"}
                      id={field}
                      name={field}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder={field === "name" ? "John Doe" : field === "whatsapp" ? "+91 9876543210" : "Your Company"}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="I'm interested in..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you via WhatsApp or call
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Submitted!</h3>
                <p className="text-gray-600">
                  Thank you! We'll contact you soon via WhatsApp or phone.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
