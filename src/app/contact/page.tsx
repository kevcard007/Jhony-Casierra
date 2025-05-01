import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4">
        Contact Paul
      </h1>
      <Separator className="mb-12 max-w-xs mx-auto" />

      <div className="max-w-2xl mx-auto">
        <div className="grid gap-8">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl mb-4">Get In Touch</h2>
            <p className="mb-6">
              Please use the contact form below to get in touch with Paul or his team.
              For artwork enquiries, commissions, or any other questions, we aim to respond within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#333334] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-black transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl mb-4">Contact Details</h2>
            <div className="space-y-3">
              <p>
                <strong>Phone:</strong> +44(0)1271 822844
              </p>
              <p>
                <strong>Email:</strong> info@paulkenton.com
              </p>
              <p>
                <strong>Address:</strong><br />
                Paul Kenton Ltd<br />
                Lower Whitestone<br />
                Chulmleigh<br />
                Devon<br />
                EX18 7NV<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
