import { motion } from 'motion/react';
import { Cpu, Battery, Camera, Wifi } from 'lucide-react';

const features = [
  {
    title: 'Neural Engine.',
    description: 'Advanced AI processing at the edge.',
    icon: <Cpu className="w-8 h-8 text-white/80" />,
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-br from-zinc-900 to-black',
  },
  {
    title: 'Vision.',
    description: 'Real-time object detection.',
    icon: <Camera className="w-8 h-8 text-white/80" />,
    colSpan: 'md:col-span-1',
    bg: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
  {
    title: 'Endurance.',
    description: 'Self-charging capabilities.',
    icon: <Battery className="w-8 h-8 text-white/80" />,
    colSpan: 'md:col-span-1',
    bg: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
  {
    title: 'Connected.',
    description: 'Always online with 6G speeds.',
    icon: <Wifi className="w-8 h-8 text-white/80" />,
    colSpan: 'md:col-span-2',
    bg: 'bg-gradient-to-br from-zinc-900 to-black',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Get the highlights.
          </h2>
          <p className="mt-4 text-xl text-white/60 font-medium">
            Explore the features that make it intelligent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl p-8 border border-white/10 ${feature.bg} ${feature.colSpan} flex flex-col justify-between min-h-[300px] group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="z-10">
                {feature.icon}
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg text-white/60 font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
