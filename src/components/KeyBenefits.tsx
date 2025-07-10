import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Send, 
  CreditCard, 
  Zap, 
  Shield, 
  Settings 
} from 'lucide-react';

const KeyBenefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: Smartphone,
      title: 'Facilidad de Uso',
      description: 'Genera links de pago en segundos. Sin datáfono ni hardware costoso. Solo necesitas tu celular o computadora.'
    },
    {
      icon: Send,
      title: 'Multicanal',
      description: 'Envía links por WhatsApp, correo electrónico, redes sociales o mediante códigos QR.'
    },
    {
      icon: CreditCard,
      title: 'VARIOS MÉTODOS DE PAGO',
      description: 'Acepta tarjetas de crédito, débito, PSE, Nequi, Daviplata y más.'
    },
    {
      icon: Zap,
      title: 'Facturación Rápida',
      description: 'Envía cobros por cualquier canal digital de forma instantánea.'
    },
    {
      icon: Shield,
      title: 'Respaldo y seguridad',
      description: 'Cumplimos con los más altos estándares de seguridad financiera.'
    },
    {
      icon: Settings,
      title: 'Integración con ATIA',
      description: 'Automatiza el proceso de cobro directamente desde las conversaciones con tus clientes.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios <span className="bg-gradient-to-r from-[#004234] to-[#3bffc9] bg-clip-text text-transparent">Claves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué miles de negocios han elegido AtiaPay para revolucionar sus ventas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 hover:border-emerald-300 h-full group-hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special integration highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-[#004234] to-[#3bffc9] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Integración Completa con ATIA
                </h3>
                <p className="text-xl mb-6 text-white/80">
                  ATIA puede conectarse con tu software contable o sistema de inventario para brindar 
                  respuestas automáticas sobre disponibilidad, precios y facturación.
                </p>
                <p className="text-sm text-white/70">
                  * Las integraciones personalizadas tienen costo adicional. Escríbenos para cotizar según las herramientas que uses.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/images/ai-assistant.jpg"
                  alt="Asistente de IA"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefits;
