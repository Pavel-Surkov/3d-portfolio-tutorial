import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 150 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" alt={title} />
          <h3 className="text-white text-[24	px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intriduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sint aliqua laborum velit Lorem ad labore non nostrud. Magna id esse
        Lorem nostrud aliquip sunt eiusmod esse consequat culpa duis culpa quis
        fugiat. Deserunt ex elit ipsum proident excepteur fugiat aliquip
        deserunt dolore. Cupidatat eu cupidatat enim dolor minim sint
        consectetur velit. Ut id ipsum tempor consequat ut tempor elit non
        excepteur occaecat cupidatat. Aliquip nisi sunt aute enim labore labore
        ullamco exercitation ea commodo excepteur sunt dolor.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
