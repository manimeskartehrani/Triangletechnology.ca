"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { plans } from "../constants";
import Button from "../components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl text-center tracking-tighter font-medium"
        >
          Flexible pricing for business of all sizes
        </motion.h3>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-10 flex w-full max-w-xs rounded-3xl border border-white/15 p-2 backdrop-blur"
        >
          <button
            className={clsx("w-1/2 py-2 rounded-2xl text-sm font-medium", {
              "text-white": monthly,
              "text-white/60": !monthly,
            })}
            onClick={() => setMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={clsx("w-1/2 py-2 rounded-2xl text-sm font-medium", {
              "text-white": !monthly,
              "text-white/60": monthly,
            })}
            onClick={() => setMonthly(false)}
          >
            Annual
          </button>

          <motion.div
            layout
            className={clsx(
              "absolute top-2 left-2 h-[calc(100%-16px)] w-[calc(50%-8px)] rounded-xl overflow-hidden transition-transform duration-500 bg-gradient-to-bl from-[rgba(140,69,255,.3)] to-transparent shadow-[0_0_25px_rgba(140,69,255,0.6)] -z-2",
              !monthly && "translate-x-full"
            )}
          />
        </motion.div>

        {/* Cards */}
        <motion.div className="scroll-hide relative mt-12 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={clsx(
                "relative flex flex-col sm:mt-6 items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-lg backdrop-blur transition-transform duration-300 ease-in-out",
                index === 1 &&
                  "bg-gradient-to-b from-[rgba(140,69,255,.3)] to-transparent border z-10 sm:scale-[1.02] lg:scale-[1.1]",
                " hover:scale-[1.07] hover:duration-300 hover:shadow-[0_0_25px_rgba(140,69,255,0.6)] hover:z-20" // Add hover effect here
              )}
            >
              <img
                src={plan.logo}
                alt={plan.title}
                className={clsx(
                  "mb-6 object-contain drop-shadow-xl",
                  index === 1 ? "w-28 h-28" : "w-20 h-20"
                )}
              />

              <div
                className={clsx(
                  "uppercase text-sm font-semibold mb-4 border-2 px-4 py-1 rounded-full",
                  index === 1
                    ? "border-[#C8EA80] text-p3"
                    : "border-[#2EF2FF] text-p1"
                )}
              >
                {plan.title}
              </div>

              <div
                className={clsx(
                  "flex items-baseline mb-2 text-3xl font-semibold",
                  index === 1 ? "text-[#C8EA80]" : "text-white/80"
                )}
              >
              
                <div className="flex flex-col items-center text-center">
                  {monthly ? (
                    // Monthly Pricing
                    <div className="text-3xl font-bold text-p4">
                      $
                      <CountUp
                        start={Number(plan.priceYearly)}
                        end={Number(plan.priceYearly) * 0.1}
                        duration={0.4}
                        preserveValue
                      />
                      <span className="ml-0 text-base font-normal text-white/60 ">
                        {monthly ? "/mo" : "/year"}
                      </span>
                    </div>
                  ) : (
                    // Yearly Pricing with discount

                    <div className="text-3xl font-bold text-p4 flex items-baseline gap-2">
                      <span className="line-through text-gray-400 text-xl">
                        ${plan.priceYearly}
                      </span>
                      <span className="text-[#C8EA80]">
                        $
                        <CountUp
                          start={Number(plan.priceYearly)}
                          end={Number(plan.priceYearly) * 0.8}
                          duration={0.5}
                          preserveValue
                        />
                      </span>
                      <span className="ml-0 text-base font-normal text-white/60 ">
                        {monthly ? "/mo" : "/year"}
                      </span>
                    </div>
                  )}
                  {monthly ? (
                    ""
                  ) : (
                    <span className="text-sm ">
                      ({`save ${Number(plan.priceYearly) * 0.2}`})
                    </span>
                  )}
                </div>
              </div>

              <p className="text-center text-sm mb-6 text-white/80">
                {plan.caption}
              </p>

              <ul className="mb-6 space-y-3 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <img
                      src="/plans/check.png"
                      alt="check"
                      className="w-7 h-7 mt-0"
                    />
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button text="Get Started" size="w-full" />

              {index === 1 && (
                <p className="text-sm mt-4 text-[#C8EA80] text-center">
                  — Limited time offer —
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
