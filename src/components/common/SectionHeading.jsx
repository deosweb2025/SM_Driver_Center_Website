import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  center = true,
  dark = false
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full mb-3">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-white">
        {title}{' '}
        {highlightWord && (
          <span className="text-amber-400">{highlightWord}</span>
        )}
      </h2>

      <div
        className={`w-20 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full my-4 ${
          center ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-300'
          } ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

