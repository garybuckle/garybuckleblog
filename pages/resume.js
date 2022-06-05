import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/Resume.module.css";
import { RiComputerLine } from "react-icons/ri";
import { RiCodeBoxLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

export default function Resume() {
  return (
    <Layout>
      <>
        <section className="ml-5 grid grid-cols-2 gap-12 my-6">
          <div>
            <h2 className={styles.labels}>Gary Buckle </h2>
            <h2 className="text-slate-800 text-2xl">
              Learning Tools Developer
            </h2>
          </div>
          <div>
            <h2 className={styles.labels}>
              Contact:
              <span>
                <a className={styles.infotext} href="mailto:buckle.g@mac.com">
                  {" "}
                  buckle.g@mac.com
                </a>
              </span>
            </h2>
            <h2 className={styles.labels}>
              Tel. Nr:
              <span className={styles.infotext}> 07712854250</span>
            </h2>
            <h2 className={styles.labels}>
              Location:{" "}
              <span className={styles.infotext}>
                11 Mentmore Rd, Leighton Buzzard, LU7 2NY UK
              </span>
            </h2>
          </div>

          <div className={styles.aboutme}>
            <h2 className={styles.labels}>About Me</h2>
            <h3 className="text-slate-800 text-2xl mb-8">
              Robotic Engineer | Software Developer Troubleshooter | Trainer |
              Mentor
            </h3>
            <p className={styles.descriptiontext}>
              I have over 40 years of experience in diverse areas such as
              Robotic Engineering, Learning and Development, Computing and
              Software Development. I have worked in Germany, France, Norway,
              Poland, Italy and been part of large projects. I have taught
              Control Systems and Robotic Programming Languages in major
              companies and suppliers. I have run my own business. I am a
              competent and accomplished Web Developer with first class
              communication skills.
            </p>
          </div>
          <div className={(styles.descriptiontext, styles.aboutme)}>
            <h2 className={styles.labels}>Relevant Experience</h2>
            <h3 className="text-slate-800 text-2xl mb-8">
              Engineering | Customer Service | Trainer | Software Developer
            </h3>
            <p>
              2018 - Present Learning Tools Developer Apple Inc - London, UK
            </p>
            <p>2011 - 2018 Technical Instructor Apple Inc - London, UK</p>
            <p>2007 - 2011 Mac Genius Apple Inc - Milton Keynes, UK</p>
            <p>2005 - 2007 Service Coordinator ABB Ltd - Milton Keynes, UK</p>
            <p>
              2000 - 2005 System Engineer / MD RAPT Solutions Ltd - Milton
              Keynes, UK
            </p>
            <p>1999 - 2000 Training Instructor ABB Ltd - Milton Keynes, UK</p>
            <p>1997 - 1998 System Engineer ABB Ltd - Milton Keynes, UK</p>
            <p>1991 - 1998 Service Techniker ABB Gmbh Friedberg ,Deutschland</p>
          </div>
        </section>
        <section className="ml-5">
          <h3 className={styles.labels}>Strengths</h3>

          <div className="flex flex-row flex-wrap gap-20">
            <div>
              <i>
                <RiComputerLine size="5rem" />
              </i>
              <p className="mt-2 text-slate-400 text-1xl">Hardware</p>
            </div>
            <div>
              <div>
                <i>
                  <RiCodeBoxLine size="5rem"></RiCodeBoxLine>
                </i>{" "}
                <p className="mt-2 text-slate-400 text-1xl">Software</p>
              </div>
            </div>
            <div>
              <i>
                <IoIosPeople size="5rem"></IoIosPeople>
              </i>
              <p className="mt-2 text-slate-400 text-1xl">Communication</p>
            </div>
            <div>
              <i>
                <FaMicrochip size="5rem"></FaMicrochip>
              </i>
              <p className="mt-2 text-slate-400 text-1xl">Electronics</p>
            </div>
            <div>
              <i>
                <RiCustomerServiceLine size="5rem"></RiCustomerServiceLine>
              </i>
              <p className="mt-2 text-slate-400 text-1xl">Customer Service</p>
            </div>
            <div>
              <i>
                <GiTeacher size="5rem"></GiTeacher>
              </i>
              <p className="mt-2 text-slate-400 text-1xl">Teacher</p>
            </div>
          </div>
        </section>

        <section className="ml-5  my-6">
          <div className="grid grid-cols-2 gap-12">
            {" "}
            <h2 className={styles.labels}>Skillset </h2>
          </div>{" "}
          <div>
            <h3 className={styles.labels}>General Skills</h3>
          </div>
        </section>
      </>
    </Layout>
  );
}
