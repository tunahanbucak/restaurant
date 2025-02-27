import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 lg:p-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Bizimle İletişime Geçin
      </h1>
      <p className="text-gray-600 mt-4 text-center">
        Sorularınız mı var? Bize mesaj gönderin, en kısa sürede size geri
        dönelim.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" />
            <p className="text-lg text-gray-700">+90 555 123 45 67</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" />
            <p className="text-lg text-gray-700">info@massimo.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" />
            <p className="text-lg text-gray-700">İstanbul, Türkiye</p>
          </div>
        </div>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-gray-700 font-medium">Adınız</label>
            <input
              type="text"
              placeholder="Adınızı girin"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">E-posta</label>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Mesajınız</label>
            <textarea
              rows={4}
              placeholder="Mesajınızı yazın..."
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
