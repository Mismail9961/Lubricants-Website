"use client";

import { motion } from "framer-motion";

export default function PrimeSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-4 md:py-8">
      <div className="mx-auto max-w-[1500px] px-3 md:px-6">

        {/* Desktop Layout Grid */}
        <div
          className="
            grid gap-4 md:gap-6

            grid-cols-1

            lg:grid-cols-[1.6fr_1.6fr_1.15fr]
            lg:grid-rows-[345px_450px]

            lg:[grid-template-areas:'hero_hero_mechanic''info_text_power']
          "
        >
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden

              h-[220px]
              sm:h-[320px]
              lg:h-auto

              lg:[grid-area:hero]
            "
          >
            <img
              src="https://media.istockphoto.com/id/1126926765/photo/engine-start-and-stop-button.jpg?s=612x612&w=0&k=20&c=3cQ7-nXlz-K0P6EMYJ3BShsM6T05QBXOsH0W4gMZtf0="
              alt="PRIME Industrial Defense Activation"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent">
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                <h1 className="max-w-[180px] sm:max-w-[320px] text-white font-bold leading-[0.95] text-[28px] sm:text-[42px] lg:text-[58px]">
                  Secure Your
                  <br />
                  Assets with
                  <br />
                  PRIME
                </h1>
              </div>
            </div>
          </motion.div>

          {/* TOP RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              overflow-hidden

              h-[180px]
              sm:h-[260px]
              lg:h-auto

              lg:[grid-area:mechanic]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200"
              alt="Heavy Equipment Maintenance"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-[#f0f0f0]
              p-5 md:p-8
              lg:[grid-area:info]
            "
          >
            <div className="mb-8 md:mb-12 h-[60px] w-[60px] md:h-[95px] md:w-[95px] rounded-full bg-[#0A4D34]" />

            <p className="mb-6 text-[14px] md:text-[18px] leading-relaxed text-[#444]">
              Choosing PRIME means choosing unyielding structural integrity, 
              longevity, and advanced physical defense.
            </p>

            <p className="text-[14px] md:text-[18px] leading-relaxed text-[#444]">
              <span className="font-semibold text-black">
                Our treatments
              </span>{" "}
              are engineered to meet the strictest defensive metrics,
              ensuring an impenetrable barrier and absolute safety for
              components and heavy machinery across environments.
            </p>
          </motion.div>

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              bg-[#f0f0f0]
              p-5 md:p-8
              min-h-[220px]

              lg:[grid-area:text]
            "
          >
            <p className="max-w-[470px] text-[14px] md:text-[18px] leading-relaxed text-[#444] relative z-10">
              With a commitment to zero-failure tolerances and a forward-thinking
              approach to shielding, PRIME keeps your assets uncompromised — today 
              and into the future.
            </p>

            <img
              src="https://axionlubricants.com/Images/JounreyDiv4.webp"
              alt="Barrier Treatment Silhouette"
              className="
                absolute
                right-[-10px]
                bottom-[-10px]

                w-[180px]
                sm:w-[250px]
                md:w-[320px]
                lg:w-[430px]
                mix-blend-multiply
              "
            />
          </motion.div>

          {/* RIGHT BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden

              h-[260px]
              sm:h-[420px]
              lg:h-auto

              lg:[grid-area:power]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400"
              alt="High-Stress Machinery Protection"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35">
              <div className="absolute top-5 left-5 md:top-8 md:left-8">
                <h2 className="text-white font-bold leading-[1.05] text-[28px] sm:text-[42px] lg:text-[58px]">
                  Total Shielding.
                  <br />
                  Confidence in
                  <br />
                  Every Layer.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}