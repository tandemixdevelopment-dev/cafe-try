import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо за вашу заявку! Мы свяжемся с вами вскоре.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-coffee">📞 Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-coffee">Свяжитесь с нами</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Имя</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee"
                placeholder="ваш@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Телефон</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee"
                placeholder="+7 (999) 999-99-99"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Сообщение</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-coffee resize-none"
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-coffee text-cream py-3 rounded-lg font-bold hover:bg-accent transition text-lg"
            >
              Отправить
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-coffee">Информация</h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold text-coffee mb-2">📍 Адрес</h3>
              <p className="text-gray-700">ул. Кофейная, 1</p>
              <p className="text-gray-700">Москва, 105000</p>
            </div>

            {/* Phone */}
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold text-coffee mb-2">📞 Телефон</h3>
              <a href="tel:+79999999999" className="text-accent hover:text-coffee transition">
                +7 (999) 999-99-99
              </a>
            </div>

            {/* Email */}
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold text-coffee mb-2">📧 Email</h3>
              <a href="mailto:info@coffeehaven.ru" className="text-accent hover:text-coffee transition">
                info@coffeehaven.ru
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold text-coffee mb-2">⏰ Режим работы</h3>
              <p className="text-gray-700">Пн-Пт: 07:00 - 21:00</p>
              <p className="text-gray-700">Сб-Вс: 08:00 - 22:00</p>
            </div>

            {/* Social Media */}
            <div className="bg-coffee text-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-accent transition">📘</a>
                <a href="#" className="text-2xl hover:text-accent transition">📷</a>
                <a href="#" className="text-2xl hover:text-accent transition">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-coffee">Как нас найти</h2>
        <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Интеграция карты (Google Maps или Яндекс Карты)</p>
        </div>
      </section>
    </div>
  )
}
