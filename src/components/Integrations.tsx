import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageCircle, 
  Mail, 
  Calculator, 
  ShoppingBag, 
  Bot,
  Smartphone,
  Globe,
  Settings
} from 'lucide-react';

const Integrations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const integrationCategories = [
    {
      title: 'Canales de Comunicación',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      integrations: [
        { name: 'WhatsApp Business', icon: MessageCircle, available: true },
        { name: 'Facebook Messenger', icon: MessageCircle, available: true },
        { name: 'Correo Electrónico', icon: Mail, available: true },
        { name: 'Redes Sociales', icon: Globe, available: true },
        { name: 'Sitio Web', icon: Globe, available: true },
        { name: 'SMS', icon: Smartphone, available: true }
      ]
    },
    {
      title: 'Herramientas de Gestión',
      icon: Settings,
      color: 'from-blue-500 to-blue-600',
      integrations: [
        { name: 'Sistemas Contables', icon: Calculator, available: true },
        { name: 'CRM', icon: Settings, available: true },
        { name: 'Facturación Electrónica', icon: Calculator, available: true },
        { name: 'E-commerce', icon: ShoppingBag, available: true },
        { name: 'Inventarios', icon: ShoppingBag, available: true },
        { name: 'ERP', icon: Settings, available: true }
      ]
    },
    {
      title: 'Asistente Virtual',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      integrations: [
        { name: 'ATIA AI Assistant', icon: Bot, available: true },
        { name: 'Generación automática de links', icon: Bot, available: true },
        { name: 'Análisis conversacional', icon: Bot, available: true },
        { name: 'Aprendizaje continuo', icon: Bot, available: true },
        { name: 'Respuestas personalizadas', icon: Bot, available: true },
        { name: 'Integración con APIs', icon: Bot, available: true }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-16 left-16 w-24 h-0.5 bg-gradient-to-r from-emerald-300 to-transparent rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-32 h-0.5 bg-gradient-to-r from-teal-300 to-transparent -rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">Integraciones</span> Disponibles
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            AtiaPay se conecta con tus herramientas favoritas para crear un ecosistema completo de ventas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {integrationCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:bg-white/25"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white shadow-lg`}>
                  <div className="flex items-center space-x-3">
                    <CategoryIcon size={32} />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Integration list */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.integrations.map((integration, integrationIndex) => {
                      const IntegrationIcon = integration.icon;
                      return (
                        <div 
                          key={integrationIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <IntegrationIcon className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <span className="text-white font-medium">{integration.name}</span>
                          </div>
                          <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special ATIA + ATIAPAY section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
        >
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ATIA + ATIAPAY
              </h3>
              <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
                La integración perfecta entre inteligencia artificial y pagos digitales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Ventas Conversacionales</h4>
                <p className="text-emerald-50 mb-6 leading-relaxed">
                  La integración con ATIA permite que la IA genere automáticamente links de pago 
                  durante conversaciones de WhatsApp, facilitando ventas conversacionales y cobros 
                  inmediatos sin salir del chat.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-50">Generación automática de links</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-50">Cobros dentro del chat</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-50">Confirmación automática</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-50">Seguimiento de pagos</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="/images/digital-transformation.png"
                  alt="Transformación digital"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        </motion.div>

        {/* Custom integrations note */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            ¿Necesitas una integración personalizada?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Las integraciones personalizadas tienen costo adicional. Escríbenos para cotizar 
            según las herramientas específicas que uses en tu negocio.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg"
          >
            SOLICITAR COTIZACIÓN
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
