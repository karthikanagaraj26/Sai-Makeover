import { useReveal } from '../../hooks/useReveal'
import aboutImg from '../../assets/about.png'
import './About.css'

const FEATURES = [
  { icon: '🌿', title: '100% Skin-Safe Products',    desc: 'Paraben-free, dermatologist-approved products trusted by Indian skin types' },
  { icon: '👑', title: 'Indian Skin Expertise',       desc: 'Our artists understand every skin tone — wheatish, dusky, fair and everything between' },
  { icon: '✦',  title: 'Five-Star Hygiene Standards', desc: 'Single-use tools, UV-sterilised equipment & FSSAI-certified salon hygiene' },
]

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="about">
      <div
        ref={ref}
        className={`about__inner ${visible ? 'reveal-left visible' : 'reveal-left'}`}
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Image */}
        <div className={`about__image-wrap ${visible ? 'reveal-left visible' : 'reveal-left'}`}>
          <div className="about__image-frame">
            <img
              src={aboutImg}
              alt="Sai Makeover"
              loading="lazy"
            />
            <div className="about__image-badge">
              <span className="about__badge-num">10+</span>
              <span className="about__badge-txt">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about__ornament" />
        </div>

        {/* Text */}
        <div className={`about__text ${visible ? 'reveal-right visible' : 'reveal-right'}`}>
          <p className="section-tag">Our Story</p>
          <h2 className="section-title">Born to Celebrate<br /><em>Indian Beauty</em></h2>
          <div className="divider" />
          <p className="about__desc">
            Founded in 2025, Sai Makeover began with one simple belief — every Indian woman carries a
            unique, timeless beauty that deserves to be celebrated. From a modest studio to a full-service
            luxury parlour, our journey has been fuelled by the trust of thousands of women who became family.
          </p>
          <p className="about__desc">
            Our specialists are trained in both classical Indian beauty rituals and the latest international
            techniques. Whether it's a weekday glow-up or a once-in-a-lifetime bridal transformation, every
            appointment receives the same dedication and care.
          </p>
          <div className="about__features">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="about__feature">
                <div className="about__feature-icon">{icon}</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
