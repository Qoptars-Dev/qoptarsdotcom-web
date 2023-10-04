import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Timeline } from "flowbite-react";

export default function VerticalTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="max-w-[280px] sm:max-w-md mx-auto my-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, delay: 1 * 0.4 }}
            >
              <Timeline.Content>
                <Timeline.Time>August 2020</Timeline.Time>
                <Timeline.Title className="text-gray-100 font-Mont font-medium">
                  Company Founded.
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-400">
                    Built First Prototype and started working with initial
                    users.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </motion.div>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, delay: 2 * 0.4 }}
            >
              <Timeline.Content>
                <Timeline.Time>October 2021</Timeline.Time>
                <Timeline.Title className="text-gray-100 font-Mont font-medium">
                  Pre-Incubation at IIT Hyderabad
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-400">
                    Prototype Version 2 was developed and tested. Got selected
                    for Pre-Incubation Support at IIT Hyderabad.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </motion.div>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, delay: 3 * 0.4 }}
            >
              <Timeline.Content>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Title className="text-gray-100 font-Mont font-medium">
                  Built Our First MVP(Minimal Viable Product).
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-400">
                    Tested our MVP with several clients. We received valuable
                    feedback that helped us to refine our product to better suit
                    the market.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </motion.div>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, delay: 4 * 0.4 }}
            >
              <Timeline.Content>
                <Timeline.Time>October 2022</Timeline.Time>
                <Timeline.Title className="text-gray-100 font-Mont font-medium">
                  Launched a FPV Product.
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-400">
                    Launched AirSonic S, a durable FPV drone. Started getting
                    pre-orders for AirSonic S.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </motion.div>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, delay: 5 * 0.4 }}
            >
              <Timeline.Content>
                <Timeline.Time>January 2023</Timeline.Time>
                <Timeline.Title className="text-gray-100 font-Mont font-medium">
                  Incubation Support.
                </Timeline.Title>
                <Timeline.Body>
                  <p className="text-gray-400">
                    Got selected for Incubation Support at IIT Hyderabad and
                    received funding. Launched AirCine. Vayu Drone is coming
                    soon.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </motion.div>
          </Timeline.Item>
        </Timeline>
      </motion.div>
    </section>
  );
}
