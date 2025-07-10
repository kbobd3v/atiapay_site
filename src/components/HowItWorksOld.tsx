import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Bot, Link2, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  const steps = [
    {
      step: '1',
      icon: MessageCircle,
      title: 'El cliente te escribe',
      description: 'Por WhatsApp, Instagram, Messenger o sitio web.',
      details: 'Tu cliente inicia la conversación en su canal preferido',
      color: 'from-emerald-500 to-emerald-600',
      image: '/images/whatsapp-business.webp'
    },
    {
      step: '2',
      icon: Bot,
      title: 'ATIA responde automáticamente',
      description: 'Consulta el inventario, agenda la cita o toma el pedido.',
      details: 'La IA gestiona la conversación de manera natural y eficiente',
      color: 'from-cyan-500 to-cyan-600',
      image: '/images/ai-assistant.jpg'
    },
    {
      step: '3',
      icon: Link2,
      title: 'Genera el link de cobro al instante',
      description: 'Y lo comparte en el mismo chat.',
      details: 'Link seguro de pago creado automáticamente',
      color: 'from-blue-500 to-blue-600',
      image: '/images/mobile-payment.jpg'
    },
    {
      step: '4',
      icon: CreditCard,
      title: 'Tu cliente paga y listo',
      description: 'Tú solo ves crecer tus ventas.',
      details: 'Proceso completamente automatizado, sin tu intervención',
      color: 'from-purple-500 to-purple-600',
      image: '/images/secure-payment.jpg'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-600/20 to-cyan-600/20 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-20 right-20 w-32 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rotate-45"></div>
      <div className="absolute bottom-32 left-20 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent -rotate-45"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-emerald-400/30 rounded-xl rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            ¿Cómo <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">funciona</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En solo 4 pasos simples, AtiaPay transforma tu negocio en una máquina de ventas automática
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}
              >
                {/* Content */}
                <div className={`${isEven ? '' : 'md:col-start-2'}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white font-bold text-3xl mr-6 shadow-lg shadow-black/30`}>
                      {step.step}
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-black/30`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                    {step.title}
                  </h3>
                  
                  <p className="text-xl text-gray-200 mb-4">
                    {step.description}
                  </p>
                  
                  <p className="text-lg text-gray-400">
                    {step.details}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-8 flex items-center space-x-3">
                    {steps.map((_, stepIndex) => (
                      <div 
                        key={stepIndex}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          stepIndex <= index 
                            ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-400/30' 
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                  <div className="relative">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="rounded-3xl shadow-2xl shadow-black/40 w-full h-80 object-cover border-2 border-white/10"
                    />
                    
                    {/* Floating step number */}
                    <div className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r ${step.color} rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20`}>
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 blur-xl`}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              ¡Es así de simple!
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Tu negocio funcionará 24/7, atendiendo clientes, tomando pedidos y procesando pagos 
              mientras tú te enfocas en hacer crecer tu empresa.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-2xl hover:shadow-emerald-400/50"
            >
              EMPEZAR AHORA - DEMO GRATIS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
