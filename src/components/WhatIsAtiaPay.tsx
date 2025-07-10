import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, MessageCircle, CreditCard, TrendingUp } from 'lucide-react';

const WhatIsAtiaPay = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Link,
      title: 'Genera links de pago en segundos',
      description: 'Crea enlaces de cobro instantáneamente sin necesidad de hardware costoso.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Automatiza ventas con IA',
      description: 'ATIA gestiona conversaciones en WhatsApp e Instagram automáticamente.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: CreditCard,
      title: 'Recibe pagos con múltiples métodos',
      description: 'Acepta tarjetas de crédito, débito, PSE, Nequi, Daviplata y más.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Vende 24/7 sin esfuerzo',
      description: 'ATIA trabaja mientras duermes, incrementando tus ventas automáticamente.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="que-es-atia-pay" className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full translate-y-40 blur-3xl"></div>
      

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            ¿Qué es <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">AtiaPay</span>?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            AtiaPay es la evolución del cobro digital. Una solución que combina lo mejor de los pagos sin datáfono 
            con la potencia de la inteligencia artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 hover:border-emerald-300/50 h-full hover:bg-white/15 group-hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors drop-shadow-lg">
                    {feature.title}
                  </h3>
                  
                  <p className="text-emerald-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default WhatIsAtiaPay;
