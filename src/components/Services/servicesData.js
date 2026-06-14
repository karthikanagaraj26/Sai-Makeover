import haircutImg    from '../../assets/Haircut.png'
import pedicureImg   from '../../assets/Pendicure.png'
import nailImg       from '../../assets/nail.png'
import bridalImg     from '../../assets/bridal.png'
import threadingImg  from '../../assets/waxing.png'
import mehendiImg    from '../../assets/Mehandi.png'
import haircolorImg  from '../../assets/Haircolor.png'

export const SERVICES = [
  {
    title: 'Hair Cut & Layer Cut',
    tag:   'Hair Cutting',
    icon:  '✂️',
    price: 'From ₹199',
    img:   haircutImg,
    desc:  'From classic trims to feather cuts, U-cuts, V-cuts and multi-layer cuts — our stylists shape your hair to suit your face structure and lifestyle perfectly.',
  },
  {
    title: 'Facial & D-Tan Cleanup',
    tag:   'Skincare',
    icon:  '🌸',
    price: 'From ₹399',
    /* TODO: replace with local Facial.png once added to src/assets */
    img:   'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
    desc:  'Fruit facial, gold facial, de-tan pack and cleanup using ayurvedic skin-safe products. Removes tan, opens pores and restores your natural glow.',
  },
  {
    title: 'Pedicure',
    tag:   'Foot Care',
    icon:  '🦶',
    price: 'From ₹349',
    img:   pedicureImg,
    desc:  'Relaxing foot soak, dead-skin scrub, cuticle care, nail shaping and moisturising massage. Your feet leave completely refreshed and soft.',
  },
  {
    title: 'Manicure',
    tag:   'Hand Care',
    icon:  '💎',
    price: 'From ₹299',
    /* TODO: replace with local Manicure.png once added to src/assets */
    img:   'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&q=80',
    desc:  'Hand soak, exfoliation, cuticle treatment, nail buffing and shape — topped with a nourishing hand massage. Soft, well-groomed hands that speak for themselves.',
  },
  {
    title: 'Nail Art & Extensions',
    tag:   'Nails',
    icon:  '💅',
    price: 'From ₹499',
    img:   nailImg,
    desc:  'Gel nails, acrylic extensions, ombre, 3D nail art, French tips and festival designs. From minimal chic to full bridal nail sets — every detail crafted to perfection.',
  },
  {
    title: 'Bridal Makeup',
    tag:   'Bridal',
    icon:  '👰',
    price: 'From ₹3,999',
    img:   bridalImg,
    desc:  'Airbrush foundation, HD base, dramatic eyes, perfect lip art and all-day setting. Covers full bridal, engagement, reception and mehendi looks.',
  },
  {
    title: 'Threading & Waxing',
    tag:   'Hair Removal',
    icon:  '✨',
    price: 'From ₹49',
    img:   threadingImg,
    desc:  'Precision eyebrow threading, upper-lip, chin and full-face threading. Rica wax, chocolate wax and full-body waxing — smooth, clean results that last weeks.',
  },
  {
    title: 'Mehendi Design',
    tag:   'Traditional',
    icon:  '🌺',
    price: 'From ₹299',
    img:   mehendiImg,
    desc:  'Bridal full-hand & feet mehendi, Arabic, Rajasthani and festive designs using 100% organic dark henna for deep colour and intricate artistry.',
  },
  {
    title: 'Hair Color & Highlights',
    tag:   'Hair Color',
    icon:  '🎨',
    price: 'From ₹799',
    img:   haircolorImg,
    desc:  'Global color, balayage, highlights, lowlights, streaks and fashion colors using ammonia-free professional brands. Includes conditioning treatment for colour-safe shine.',
  },
]
