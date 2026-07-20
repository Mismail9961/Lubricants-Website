export type TestSpecification = {
  test: string;
  method: string;
  unit: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "Lubricants" | "ATF/GearOil" | "Special Products";
  gradeLabel?: string;
  standards?: string;
  compatibleBrandsCategory?: string;
  compatibleBrands?: string[];
  generalCharacteristics?: string[];
  keyBenefits?: string[];
  availableFormats?: string[];
  usageRecommendations?: string;
  usageInstructions?: string;
  specifications?: string;
  typicalProperties?: Record<string, string>;
  testSpecifications?: TestSpecification[];
  image: string;
};

export const products: Product[] = [
  // ---------------------------------------------------------------------
  // PRIME LUBETECH — "PROTECT" range, sourced from Product Test Reports
  // ---------------------------------------------------------------------
  {
    slug: "protect-sn-10w-40",
    name: "PROTECT SN 10W-40 MOTOR OIL",
    tagline:
      "PROTECT SN 10W-40 is a premium grade multigrade engine oil formulated to deliver reliable protection and performance across a wide operating temperature range.",
    category: "Lubricants",
    standards: "API SN",
    generalCharacteristics: [
      "Formulated with a 10W-40 viscosity grade and a viscosity index of 163 for stable film strength across a wide temperature range.",
      "A flash point of 232°C and a pour point of -26°C give dependable protection from cold starts through high-temperature operation.",
    ],
    usageRecommendations:
      "Recommended for gasoline engines in passenger cars and light commercial vehicles operating under normal to moderately severe conditions.",
    usageInstructions:
      "Drain the old oil while the engine is warm, replace the oil filter, and refill with PROTECT SN 10W-40 to the level specified by the vehicle manufacturer.",
    specifications: "Lab Ref: PL/LAB/0065 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "10W-40",
      "Specific Gravity @ 60/60°F": "0.86",
      "Kinematic Viscosity cSt @ 100°C": "14.2",
      "Kinematic Viscosity cSt @ 40°C": "90",
      "Viscosity Index": "163",
      "Flash Point (COC), °C": "232",
      "Pour Point, °C": "-26",
      "Sulphated Ash, Wt.%": "0.1",
      Phosphorus: "0.08",
    },
    image: "/P5.png",
  },
  {
    slug: "protect-10w-30",
    name: "PROTECT 10W-30 MOTOR OIL",
    tagline:
      "PROTECT 10W-30 is a low-viscosity engine oil designed to improve cold-start protection and support fuel efficiency in modern gasoline engines.",
    category: "Lubricants",
    generalCharacteristics: [
      "A low-viscosity 10W-30 formulation with a viscosity index of 169 for quick cold-start lubrication and consistent protection at operating temperature.",
      "A pour point of -32°C supports reliable oil flow in cold-weather conditions.",
    ],
    usageRecommendations:
      "Recommended for modern gasoline engines where the manufacturer specifies a 10W-30 viscosity grade for improved fuel efficiency.",
    usageInstructions:
      "Drain the old oil with the engine warm, fit a new filter, and refill with PROTECT 10W-30 to the manufacturer-specified level.",
    specifications: "Lab Ref: PL/LAB/0065 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "10W-30",
      "Specific Gravity @ 60/60°F": "0.85",
      "Kinematic Viscosity cSt @ 100°C": "10.6",
      "Kinematic Viscosity cSt @ 40°C": "60",
      "Viscosity Index": "169",
      "Flash Point (COC), °C": "232",
      "Pour Point, °C": "-32",
      "Sulphated Ash, Wt.%": "0.1",
      Phosphorus: "0.08",
    },
    image: "/P4.png",
  },
  {
    slug: "protect-0w-20",
    name: "PROTECT 0W-20 MOTOR OIL",
    tagline:
      "PROTECT 0W-20 is an ultra-low viscosity synthetic motor oil engineered for optimized fuel economy and fast cold-weather lubrication.",
    category: "Lubricants",
    generalCharacteristics: [
      "An ultra-low viscosity 0W-20 synthetic formulation with a viscosity index of 169, designed for rapid cold-start lubrication and optimized fuel economy.",
      "A pour point of -32°C ensures reliable flow even in cold ambient conditions.",
    ],
    usageRecommendations:
      "Recommended for gasoline and hybrid engines where the manufacturer specifies a 0W-20 viscosity grade.",
    usageInstructions:
      "Drain the old oil while warm, replace the oil filter, and refill with PROTECT 0W-20 to the correct level shown on the dipstick.",
    specifications: "Lab Ref: PL/LAB/0066 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "0W-20",
      "Specific Gravity @ 60/60°F": "0.845",
      "Kinematic Viscosity cSt @ 100°C": "8.5",
      "Kinematic Viscosity cSt @ 40°C": "45",
      "Viscosity Index": "169",
      "Flash Point (COC), °C": "232",
      "Pour Point, °C": "-32",
      "Sulphated Ash, Wt.%": "0.1",
      Phosphorus: "0.08",
    },
    image: "/P2.png",
  },
  {
    slug: "protect-20w-50",
    name: "PROTECT 20W-50 MOTOR OIL",
    tagline:
      "PROTECT 20W-50 is a heavy-duty, high-viscosity motor oil formulated for strong film strength and dependable protection under high-temperature, high-load conditions.",
    category: "Lubricants",
    generalCharacteristics: [
      "A heavy-duty 20W-50 formulation with strong film strength, a flash point of 238°C, and a pour point of -9°C.",
      "Suited to high-temperature and high-load operating conditions where a heavier oil film is beneficial.",
    ],
    usageRecommendations:
      "Recommended for older engines, high-mileage vehicles, and applications operating in high ambient temperatures where a heavier oil film is beneficial.",
    usageInstructions:
      "Drain the old oil while the engine is warm, fit a new filter, and refill with PROTECT 20W-50 to the manufacturer-specified level.",
    specifications: "Lab Ref: PL/LAB/0068 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "20W-50",
      "Specific Gravity @ 60/60°F": "0.878",
      "Kinematic Viscosity cSt @ 100°C": "20",
      "Kinematic Viscosity cSt @ 40°C": "178",
      "Viscosity Index": "130",
      "Flash Point (COC), °C": "238",
      "Pour Point, °C": "-9",
      "Sulphated Ash, Wt.%": "0.1",
      Phosphorus: "0.08",
    },
    image: "/P1.png",
  },
  {
    slug: "protect-cvt",
    name: "PROTECT CVT FLUID",
    tagline:
      "PROTECT CVT is a specially formulated fluid for continuously variable transmissions, providing smooth power transfer and excellent low-temperature fluidity.",
    category: "ATF/GearOil",
    generalCharacteristics: [
      "A CVT-specific fluid with a viscosity index of 180, engineered for smooth power transfer between transmission components.",
      "A pour point of -51°C provides consistent fluidity in cold conditions.",
    ],
    availableFormats: ["1L"],
    usageRecommendations:
      "Recommended for vehicles equipped with continuously variable transmissions (CVT) that call for a dedicated CVT fluid.",
    usageInstructions:
      "With the transmission at operating temperature, drain the old fluid and refill with PROTECT CVT to the level indicated by the manufacturer. Recheck the level after a short drive.",
    specifications: "Lab Ref: PL/LAB/0069 — Test Date: 5.8.2025",
    typicalProperties: {
      "Kinematic Viscosity cSt @ 100°C": "7.3",
      "Kinematic Viscosity cSt @ 40°C": "34",
      "Viscosity Index": "180",
      "Flash Point (COC), °C": "200",
      "Pour Point, °C": "-51",
    },
    image: "/P8.png",
  },
  {
    slug: "protect-atf-dex-iii",
    name: "PROTECT FLOW DEX III ATF",
    tagline:
      "PROTECT FLOW DEX III is an automatic transmission fluid meeting Dexron III performance requirements for smooth shifting and reliable transmission protection.",
    category: "ATF/GearOil",
    generalCharacteristics: [
      "An automatic transmission fluid with a viscosity index of 188, formulated to meet Dexron III performance requirements for smooth shifting and consistent protection.",
    ],
    availableFormats: ["4L"],
    usageRecommendations:
      "Recommended for automatic transmissions specifying a Dexron III fluid.",
    usageInstructions:
      "Drain the old fluid at operating temperature and refill with PROTECT FLOW DEX III to the level indicated on the dipstick or fill plug.",
    specifications: "Lab Ref: PL/LAB/0069 — Test Date: 5.8.2025",
    typicalProperties: {
      "Specific Gravity @ 60/60°F": "0.85",
      "Kinematic Viscosity cSt @ 100°C": "7.4",
      "Kinematic Viscosity cSt @ 40°C": "34.2",
      "Viscosity Index": "188",
      "Flash Point (COC), °C": "216",
    },
    image: "/P11.png",
  },
  {
    slug: "protect-4t-sj-20w-50",
    name: "PROTECT SUPER 4T MO 20W-50 MOTORCYCLE OIL",
    tagline:
      "PROTECT SUPER 4T MO 20W-50 is a premium 4-stroke motorcycle engine oil of API SJ quality, formulated for strong wear protection and stable performance under demanding riding conditions.",
    category: "Lubricants",
    standards: "API SJ",
    generalCharacteristics: [
      "A 4-stroke motorcycle oil of API SJ quality with a 20W-50 viscosity grade for stable performance under demanding riding conditions.",
      "A total base number of 8 mgKOH/g supports sustained wear protection over the service interval.",
    ],
    availableFormats: ["700ML", "800ML"],
    usageRecommendations:
      "Recommended for 4-stroke motorcycles requiring an API SJ, 20W-50 engine oil.",
    usageInstructions:
      "Drain the old oil while the engine is warm, replace the oil filter (if fitted), and refill with PROTECT SUPER 4T MO 20W-50 to the level specified in the owner's manual.",
    specifications: "Lab Ref: PL/LAB/0070 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "20W-50",
      API: "SJ",
      "Specific Gravity @ 60/60°F": "0.875",
      "Kinematic Viscosity cSt @ 100°C": "19",
      "Kinematic Viscosity cSt @ 40°C": "168",
      "Viscosity Index": "128",
      "Flash Point (COC), °C": "238",
      "Pour Point, °C": "-9",
      "Total Base Number, mgKOH/g": "8",
    },
    image: "/P9.png",
  },
  {
    slug: "protect-5w-30",
    name: "PROTECT 5W-30 MOTOR OIL",
    tagline:
      "PROTECT 5W-30 is a low-viscosity engine oil designed to improve cold-start protection and support fuel efficiency in modern gasoline engines.",
    category: "Lubricants",
    generalCharacteristics: [
      "A low-viscosity 5W-30 formulation with a viscosity index of 169 for quick cold-start lubrication and consistent protection at operating temperature.",
      "A pour point of -32°C supports reliable oil flow in cold-weather conditions.",
    ],
    usageRecommendations:
      "Recommended for modern gasoline engines where the manufacturer specifies a 5W-30 viscosity grade for improved fuel efficiency.",
    usageInstructions:
      "Drain the old oil with the engine warm, fit a new filter, and refill with PROTECT 5W-30 to the manufacturer-specified level.",
    specifications: "Lab Ref: PL/LAB/0065 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "5W-30",
      "Specific Gravity @ 60/60°F": "0.85",
      "Kinematic Viscosity cSt @ 100°C": "10.6",
      "Kinematic Viscosity cSt @ 40°C": "60",
      "Viscosity Index": "169",
      "Flash Point (COC), °C": "232",
      "Pour Point, °C": "-32",
      "Sulphated Ash, Wt.%": "0.1",
      Phosphorus: "0.08",
    },
    image: "/P7.png",
  },
  {
    slug: "protect-coolant-red",
    name: "PROTECT PREMIUM LONG LIFE COOLANT (RED)",
    tagline:
      "PROTECT Premium Long Life Coolant is a 100% concentrated formula that protects the cooling system from freezing, boil-over, and corrosion year-round.",
    category: "Special Products",
    generalCharacteristics: [
      "A 100% concentrate long-life coolant offering freeze protection down to around -37°C and boil-over protection up to around +135°C when diluted per manufacturer guidelines.",
      "Red-dyed formulation for easy identification and leak detection in the cooling system.",
    ],
    availableFormats: ["1L"],
    usageRecommendations:
      "Recommended for passenger car and light commercial vehicle cooling systems; dilute with water per the vehicle manufacturer's recommended ratio before use.",
    usageInstructions:
      "With the engine cold, drain the old coolant, flush the system if required, and refill with PROTECT Premium Long Life Coolant diluted to the recommended ratio. Bleed the system and top up as needed once the engine reaches operating temperature.",
    typicalProperties: {
      Concentration: "100% Concentrate",
      "Freeze Protection": "-37°C (diluted)",
      "Boil-Over Protection": "+135°C (diluted, pressurized)",
      Color: "Red",
    },
    image: "/P12.png",
  },
  {
    slug: "protect-coolant-green",
    name: "PROTECT PREMIUM LONG LIFE COOLANT (GREEN)",
    tagline:
      "PROTECT Premium Long Life Coolant is a 100% concentrated formula that protects the cooling system from freezing, boil-over, and corrosion year-round.",
    category: "Special Products",
    generalCharacteristics: [
      "A 100% concentrate long-life coolant offering freeze protection down to around -37°C and boil-over protection up to around +135°C when diluted per manufacturer guidelines.",
      "Green-dyed formulation for easy identification and leak detection in the cooling system.",
    ],
    availableFormats: ["1L"],
    usageRecommendations:
      "Recommended for passenger car and light commercial vehicle cooling systems; dilute with water per the vehicle manufacturer's recommended ratio before use.",
    usageInstructions:
      "With the engine cold, drain the old coolant, flush the system if required, and refill with PROTECT Premium Long Life Coolant diluted to the recommended ratio. Bleed the system and top up as needed once the engine reaches operating temperature.",
    typicalProperties: {
      Concentration: "100% Concentrate",
      "Freeze Protection": "-37°C (diluted)",
      "Boil-Over Protection": "+135°C (diluted, pressurized)",
      Color: "Green",
    },
    image: "/P13.png",
  },
  {
    slug: "protect-coolant-blue",
    name: "PROTECT PREMIUM LONG LIFE COOLANT (BLUE)",
    tagline:
      "PROTECT Premium Long Life Coolant is a 100% concentrated formula that protects the cooling system from freezing, boil-over, and corrosion year-round.",
    category: "Special Products",
    generalCharacteristics: [
      "A 100% concentrate long-life coolant offering freeze protection down to around -37°C and boil-over protection up to around +128°C when diluted per manufacturer guidelines.",
      "Blue-dyed formulation for easy identification and leak detection in the cooling system.",
    ],
    availableFormats: ["1L"],
    usageRecommendations:
      "Recommended for passenger car and light commercial vehicle cooling systems; dilute with water per the vehicle manufacturer's recommended ratio before use.",
    usageInstructions:
      "With the engine cold, drain the old coolant, flush the system if required, and refill with PROTECT Premium Long Life Coolant diluted to the recommended ratio. Bleed the system and top up as needed once the engine reaches operating temperature.",
    typicalProperties: {
      Concentration: "100% Concentrate",
      "Freeze Protection": "-37°C (diluted)",
      "Boil-Over Protection": "+128°C (diluted, pressurized)",
      Color: "Blue",
    },
    image: "/P14.png",
  },
  {
    slug: "protect-brake-fluid-dot3",
    name: "PROTECT HEAVY DUTY BRAKE FLUID DOT-3",
    tagline:
      "PROTECT Heavy Duty Brake Fluid DOT-3 is a glycol-ether based fluid engineered to protect the brake system and deliver consistent pedal response under demanding conditions.",
    category: "Special Products",
    standards: "DOT-3",
    generalCharacteristics: [
      "A DOT-3 rated, glycol-ether based brake fluid formulated for reliable hydraulic performance across a wide range of operating temperatures.",
      "Heavy-duty formulation designed to protect brake system components from corrosion and wear.",
    ],
    keyBenefits: [
      "Protects brake system components against corrosion",
      "Maintains consistent pedal feel under heavy braking conditions",
      "Meets DOT-3 boiling point and viscosity requirements",
    ],
    availableFormats: ["350CC"],
    usageRecommendations:
      "Recommended for hydraulic brake and clutch systems in passenger cars and light commercial vehicles specifying a DOT-3 fluid.",
    usageInstructions:
      "Top up or bleed the brake system with PROTECT Heavy Duty Brake Fluid DOT-3 to the level marked on the reservoir. Avoid mixing with fluids of a different specification and do not allow the container to remain open, as brake fluid absorbs moisture from the air.",
    specifications: "Lab Ref: PL/LAB/00XX — Test Date: TBD",
    typicalProperties: {
      "DOT Rating": "DOT-3",
      "Dry Boiling Point, °C": "205",
      "Wet Boiling Point, °C": "140",
      "Kinematic Viscosity @ -40°C, cSt": "1500 max",
      "Kinematic Viscosity @ 100°C, cSt": "1.5 min",
      "pH Value": "7.0–11.5",
      Color: "Amber/Clear",
    },
    image: "/P15.png",
  },
];
