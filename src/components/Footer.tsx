import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Send,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Validación de email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validación de teléfono
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email no válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Teléfono no válido (mínimo 10 dígitos)';
    }

    if (!formData.business.trim()) {
      newErrors.business = 'El tipo de negocio es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Crear el mensaje para el email
      const emailBody = `
Nuevo contacto desde AtiaPay:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Negocio: ${formData.business}
Mensaje: ${formData.message}
      `;

      // Crear enlace mailto
      const mailtoLink = `mailto:ventas@airp.ws?subject=Nuevo contacto desde AtiaPay - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir cliente de email
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: ''
        });
      }, 4000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Error al enviar el formulario. Por favor intente nuevamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Demo section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="bg-gradient-to-r from-[#004234] to-[#3bffc9] bg-clip-text text-transparent">revolucionar</span> tu negocio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Únete a miles de empresarios que ya están automatizando sus ventas con AtiaPay
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/573022740452', '_blank');
              }}
              className="bg-gradient-to-r from-[#004234] to-[#3bffc9] text-white px-10 py-4 rounded-full text-xl font-bold hover:from-[#003228] hover:to-[#2ee6b8] transition-all duration-300 shadow-2xl hover:shadow-[#3bffc9]/20 mb-4"
            >
              SOLICITAR DEMO GRATIS AHORA
            </motion.button>
            <p className="text-sm text-gray-400">
              Sin compromiso • Configuración gratuita • Soporte incluido
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="contact-form"
            >
              <div className="bg-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Solicita tu demo personalizada
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-[#3bffc9] focus:border-transparent text-white placeholder-gray-400 ${
                            errors.name ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="Tu nombre"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-[#3bffc9] focus:border-transparent text-white placeholder-gray-400 ${
                            errors.email ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-[#3bffc9] focus:border-transparent text-white placeholder-gray-400 ${
                            errors.phone ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="+57 300 123 4567"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Tipo de negocio *
                        </label>
                        <input
                          type="text"
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-[#3bffc9] focus:border-transparent text-white placeholder-gray-400 ${
                            errors.business ? 'border-red-500' : 'border-gray-600'
                          }`}
                          placeholder="Ej: Restaurante, Tienda online"
                        />
                        {errors.business && (
                          <p className="text-red-400 text-sm mt-1">{errors.business}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cuéntanos sobre tu negocio
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3bffc9] focus:border-transparent text-white placeholder-gray-400 resize-none"
                        placeholder="¿Cómo podemos ayudarte a automatizar tus ventas?"
                      />
                    </div>
                    
                    {errors.submit && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                        <p className="text-red-400 text-sm">{errors.submit}</p>
                      </div>
                    )}
                    
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isLoading 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#004234] to-[#3bffc9] text-white hover:from-[#003228] hover:to-[#2ee6b8]'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>ENVIANDO...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>ENVIAR SOLICITUD</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-[#3bffc9] mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-[#3bffc9] mb-2">
                      ¡Solicitud enviada!
                    </h4>
                    <p className="text-gray-300">
                      Nos pondremos en contacto contigo muy pronto para programar tu demo personalizada.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Contacta con nuestro equipo
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estamos aquí para ayudarte a transformar tu negocio. Nuestro equipo de expertos 
                  te guiará en cada paso del proceso.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3bffc9] rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-gray-300">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3bffc9] rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">hola@atiapay.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3bffc9] rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Teléfono</h4>
                    <p className="text-gray-300">+57 (1) 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3bffc9] rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Oficina</h4>
                    <p className="text-gray-300">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-white mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#004234] hover:to-[#3bffc9] rounded-full flex items-center justify-center transition-all duration-300">
                    <Instagram className="text-gray-300 hover:text-white" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#004234] hover:to-[#3bffc9] rounded-full flex items-center justify-center transition-all duration-300">
                    <Facebook className="text-gray-300 hover:text-white" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#004234] hover:to-[#3bffc9] rounded-full flex items-center justify-center transition-all duration-300">
                    <MessageCircle className="text-gray-300 hover:text-white" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/atia-pay-logo-oficial.png" 
                alt="AtiaPay" 
                className="h-8 w-20 object-contain"
              />
              <span className="text-gray-300">© 2025 AtiaPay. Todos los derechos reservados.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#3bffc9] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#3bffc9] transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-[#3bffc9] transition-colors">Soporte</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
