import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { products } from "../src/db/schema.js";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

const CATALOG = [
  {
    slug: "titan-hammer-drill",
    name: "Titan 20V Rotary Hammer Drill",
    category: "Power Tools",
    description:
      "Brushless motor delivering 2.5 Joules of impact energy. 4-mode selector for drilling, hammer drilling, chiseling, and bit alignment. Includes 4.0Ah battery and rapid charger.",
    priceCents: 24900,
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
  {
    slug: "apex-concrete-mixer",
    name: "Apex 5 cu. ft. Concrete Mixer",
    category: "Machinery",
    description:
      "Heavy-duty 1/2 HP electric motor with direct drive gearbox. Steel drum with IP45 water resistance rating, dual mixing blades, and reinforced steel frame with flat-free tires.",
    priceCents: 49900,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    slug: "vortex-circular-saw",
    name: "Vortex Cordless Circular Saw",
    category: "Power Tools",
    description:
      "7-1/4 inch magnesium shoe with 5800 RPM clearing speed. Bevel capacity up to 57 degrees with positive stops at 45 and 22.5. Integrated LED work light and dust blower.",
    priceCents: 17900,
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
  {
    slug: "vector-laser-measure",
    name: "Vector 165ft Laser Measure",
    category: "Measurement",
    description:
      "Accurate up to +/- 1/16 inch. Real-time distance, area, volume, and indirect Pythagoras measurements. Backlit color display with Bluetooth data sync to companion app.",
    priceCents: 8900,
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
  },
  {
    slug: "ironclad-safety-harness",
    name: "Ironclad Full Body Harness",
    category: "Safety Equipment",
    description:
      "5-point adjustment system with breathable back/shoulder padding. High-strength polyester webbing, forged steel dorsal D-ring, and quick-connect chest and leg buckles.",
    priceCents: 11900,
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80",
  },
  {
    slug: "vulcan-hydraulic-jack",
    name: "Vulcan 20-Ton Bottle Jack",
    category: "Machinery",
    description:
      "Heavy-duty steel construction with bypass valve protection. Operating pressure up to 20 tons, ideal for heavy equipment lifting, industrial rigging, and structural support.",
    priceCents: 7900,
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
  },
  {
    slug: "quantum-angle-grinder",
    name: "Quantum 4.5-Inch Angle Grinder",
    category: "Power Tools",
    description:
      "11 Amp motor running at 11,000 RPM. Paddle switch with safety lock-off, tool-free guard adjustment, and multi-position vibration-reducing side handle.",
    priceCents: 6900,
    imageUrl: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
  },
  {
    slug: "summit-extension-ladder",
    name: "Summit 24ft Extension Ladder",
    category: "Equipment",
    description:
      "Fiberglass non-conductive side rails rated for 300 lbs (Type IA). Traction-Tred D-rungs, dual-action feet for hard or soft surfaces, and durable Maxlock rung locks.",
    priceCents: 28900,
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    slug: "voltmaster-generator",
    name: "VoltMaster 5500W Generator",
    category: "Machinery",
    description:
      "Gas-powered OHV engine with electric start. 5500 running watts / 6500 surge watts. 5-gallon fuel tank provides up to 10 hours of run time at 50% load.",
    priceCents: 64900,
    imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80",
  },
  {
    slug: "pro-nailer-90",
    name: "Pro-Framing Pneumatic Nailer",
    category: "Power Tools",
    description:
      "Accepts 21-degree round head framing nails. Lightweight magnesium housing, tool-free depth of drive adjustment, and selectable trigger for sequential or bump firing.",
    priceCents: 18900,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    slug: "tundra-wheelbarrow",
    name: "Tundra 6 cu. ft. Wheelbarrow",
    category: "Equipment",
    description:
      "Heavy-gauge steel tray with front braces and steel rivets. Square-front design for easy dumping, dual pneumatic tires for stability, and ergonomic wood handles.",
    priceCents: 13900,
    imageUrl: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
  },
  {
    slug: "solaris-welding-helmet",
    name: "Solaris Auto-Darkening Helmet",
    category: "Safety Equipment",
    description:
      "Large 3.86\" x 2.17\" viewing area with 4 arc sensors. Variable shade 5-13, optical clarity 1/1/1/1, and grinding mode profile. Solar cell plus replaceable battery.",
    priceCents: 14900,
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
  {
    slug: "matrix-table-saw",
    name: "Matrix 10-Inch Jobsite Table Saw",
    category: "Power Tools",
    description:
      "Rack and pinion fence system for fast, smooth adjustments. 15 Amp high-torque motor, 32-1/2 inch rip capacity, and rolling folding stand for quick setup.",
    priceCents: 52900,
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
  {
    slug: "cyclone-shop-vac",
    name: "Cyclone 12-Gallon Wet/Dry Vac",
    category: "Equipment",
    description:
      "6.5 Peak HP motor provides powerful suction for heavy-duty cleanup. Includes 7 ft hose, cartridge filter, foam sleeve, and multiple utility nozzles. Built-in drain port.",
    priceCents: 11900,
    imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
  },
  {
    slug: "torque-master-set",
    name: "TorqueMaster 1/2-Inch Wrench Set",
    category: "Hand Tools",
    description:
      "Click-style heavy-duty micrometer torque wrench (50-250 ft-lb). Chrome vanadium steel construction with reversible 72-tooth ratchet head. Includes protective case.",
    priceCents: 9900,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/9/547705615/UZ/XX/SS/3959002/torque-master-torque-wrench-160-r-500x500.jpg",
  },
  {
    slug: "torrent-sump-pump",
    name: "Torrent 1/2 HP Sump Pump",
    category: "Machinery",
    description:
      "Cast iron construction with vertical float switch. Pumps up to 4300 GPH at 0 ft head. Thermal overload protection and clogged-resistant vortex impeller design.",
    priceCents: 15900,
    imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80",
  },
  {
    slug: "horizon-laser-level",
    name: "Horizon 3x360 Green Laser Level",
    category: "Measurement",
    description:
      "Three 360-degree high-visibility green laser planes. Self-leveling within 4 degrees, pulse mode extends range up to 200 feet with receiver. Magnetic pivoting base.",
    priceCents: 21900,
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
  },
  {
    slug: "impact-driver-kit",
    name: "MaxForce 20V Impact Driver",
    category: "Power Tools",
    description:
      "Delivers 1,820 in-lbs of torque in a compact 5.1-inch design. 3-speed selector with Precision Drive mode. 3-LED ring light ensures shadow-free workspace illumination.",
    priceCents: 13900,
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
];

async function main() {
  const rows = CATALOG.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    description: p.description,
    priceCents: p.priceCents,
    currency: "inr",
    imageUrl: p.imageUrl,
    active: true,
  }));

  for (const row of rows) {
    await db
      .insert(products)
      .values(row)
      .onConflictDoUpdate({
        target: products.slug,
        set: {
          name: row.name,
          category: row.category,
          description: row.description,
          priceCents: row.priceCents,
          currency: row.currency,
          imageUrl: row.imageUrl,
          active: row.active,
        },
      });
  }
  console.log(`Seed complete (${CATALOG.length} products upserted).`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});