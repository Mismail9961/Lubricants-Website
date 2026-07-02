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
  gradeLabel?: string; // exact headline override, e.g. "20W-50"
  standards?: string;
  compatibleBrandsCategory?: string; // e.g. "Motorcycles in high-load engine use"
  compatibleBrands?: string[]; // e.g. ["Honda CB150R", "Yamaha FZ", "Suzuki GR150"]
  generalCharacteristics?: string[];
  keyBenefits?: string[];
  availableFormats?: string[];
  usageRecommendations?: string;
  usageInstructions?: string;
  specifications?: string;
  typicalProperties?: Record<string, string>;
  testSpecifications?: TestSpecification[]; // detailed lab test report table
  image: string;
};

export const products: Product[] = [
  {
    slug: "protect-synthetic-20w-50",
    name: "PROTECT SYNTHETIC 20W-50 PREMIUM MOTOR OIL",
    tagline:
      "SYNTHETIC 20W-50 is a multipurpose premium grade engine oil of API SM, and it is designed to provide faster and cleaner engine protection to make sure of longer engine life.",
    standards: "API SM",
    generalCharacteristics: [
      "SYNTHETIC 20W-50 contains highly purified base oil and additives to meet API SM performance grade ensuring engines against deposit and wear problem.",
      "SYNTHETIC 20W-50 is applicable to Gasoline and CNG/LPG fueled engines.",
    ],
    usageRecommendations:
      "Recommended for gasoline and CNG/LPG-fueled passenger vehicles operating under normal to severe conditions, including high ambient temperatures. Suitable for both older and newer engines requiring API SM performance.",
    usageInstructions:
      "Drain old oil while the engine is warm, replace the oil filter, and refill to the manufacturer-specified level with PROTECT SYNTHETIC 20W-50. Check the level after a short run and top up as needed. Follow the vehicle manufacturer's recommended drain interval.",
    specifications:
      "Meets or exceeds engine oil specifications of major car manufacturers.",
    typicalProperties: {
      "SAE Grade": "20W-50",
      API: "SM",
      "Specific Gravity 15°C": "0.86",
      "Kinematic Viscosity cSt 40°C": "155.5",
      "Kinematic Viscosity cSt 100°C": "17.7",
      "Viscosity Index": "195",
      "Flash Point, °C": "246",
      "Pour Point, °C": "-27.5",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "mobil-1-0w-20",
    name: "Mobil 1™ 0W-20 Full Synthetic Motor Oil",
    tagline:
      "A growing list of automakers recommend 0W-20 low viscosity oils for their vehicles in an effort to optimize fuel economy. Likewise, the Mobil 1™, Mobil™ and Mobil Super™ lineup of 0W-20 oils has expanded to include choices for high mileage vehicles, trucks and SUVs, and coverage for those of you interested in extended drain oils.",
    generalCharacteristics: [
      "0W-20 motor oils can also be used where 5W-20 is recommended. The low‐viscosity, advanced full synthetic formulation of Mobil 1 0W-20 oils can help to increase engine efficiency and improve fuel economy versus higher viscosity oils.",
      "Many of our 0W-20 oils carry the dexos®1 approval specified for General Motors vehicles. Mobil 1™ ESP X2 0W-20 carries the dexosD™ approval for diesel engines. The dexos® specification and trademark are exclusive to General Motors, LLC.",
      "What do the numbers in 0W-20 mean? The numbers refer to the weight and thickness, or viscosity, of the oil. Motor oil gets thicker when it's cold and thinner when it heats up. The first number indicates the viscosity of the oil at a cold temperature, and the second number indicates the viscosity at operating temperatures.",
      "Compare to see different levels of protection these products offer and choose the one that meets your needs.",
    ],
    usageRecommendations:
      "Recommended for gasoline and hybrid passenger vehicles, including those requiring dexos1-approved oils, where the manufacturer specifies a 0W-20 or 5W-20 viscosity grade for improved fuel economy.",
    usageInstructions:
      "Warm the engine briefly, then drain the old oil completely, replace the oil filter, and refill with Mobil 1 0W-20 to the level shown on the dipstick. Verify the level after the first few minutes of running and top up if required.",
    specifications:
      "Meets or exceeds original equipment manufacturer requirements for 0W-20 viscosity motor oils, including dexos1-approved applications.",
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "mobil-10w-30",
    name: "Mobil™ 10W-30 Motor Oil",
    tagline:
      "The 10W-30 viscosity has all but disappeared as a primary recommendation for vehicles except for certain diesel engines, and today serves as a viscosity alternate choice.",
    generalCharacteristics: [
      "Many manufacturers have transitioned to 5W-30 motor oil viscosity, and 5W-30 or 0W-30 oil can be used in applications requiring a 10W-30 grade motor oil.",
      "We offer a variety of Mobil™ 10W-30 viscosity motor oils, including products designed for high mileage vehicles, and for those of you looking for an extended drain motor oil.",
      "What do the numbers in 10W-30 mean? The numbers refer to the weight and thickness, or viscosity, of the oil. Motor oil gets thicker when it's cold and thinner when it heats up. The first number indicates the viscosity of the oil at a cold temperature, and the second number indicates the viscosity at operating temperatures.",
      "Compare to see different levels of protection these products offer and choose the one that meets your needs.",
    ],
    usageRecommendations:
      "Suited to vehicles, including certain diesel applications, where the manufacturer specifies a 10W-30 viscosity grade, or as an alternate where 5W-30 or 0W-30 is recommended.",
    usageInstructions:
      "Drain the old oil with the engine warm, fit a new oil filter, and refill with Mobil 10W-30 to the correct level. Recheck the level once the oil has settled and top up as necessary.",
    specifications:
      "Meets or exceeds engine oil specifications for vehicles calling for a 10W-30 viscosity grade, including select diesel applications.",
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "mobil-10w-40",
    name: "Mobil™ 10W-40 Motor Oil",
    tagline:
      "The 10W-40 viscosity has all but disappeared as a primary recommendation for newer vehicles, and today serves as an alternate choice. Higher viscosity oil such as a 10W-40 can be useful for older engines burning or leaking oil.",
    generalCharacteristics: [
      "We offer Mobil™ 10W-40 high viscosity motor oils for use in vehicles with more than 75,000 miles, and a synthetic blend oil when cost is a consideration.",
      "What do the numbers in 10W-40 mean? The numbers refer to the weight and thickness, or viscosity, of the oil. Motor oil gets thicker when it's cold and thinner when it heats up. The first number indicates the viscosity of the oil at a cold temperature, and the second number indicates the viscosity at operating temperatures.",
      "Compare to see different levels of protection these products offer and choose the one that meets your needs.",
    ],
    usageRecommendations:
      "Best suited to older engines, high-mileage vehicles (over 75,000 miles), or engines that consume or leak oil and benefit from the added film strength of a higher-viscosity 10W-40 oil.",
    usageInstructions:
      "Drain the used oil while the engine is warm, replace the filter, and refill with Mobil 10W-40 to the specified level. Run the engine briefly, check for leaks, and top up the oil level as needed.",
    specifications:
      "Meets or exceeds engine oil specifications for high-mileage and older vehicles calling for a 10W-40 viscosity grade.",
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "petropec-dexron-iii-fully-synthetic",
    name: "Petropec Dexron III Fully Synthetic",
    tagline:
      "Petropec Dexron III Fully Synthetic is a top-tier automatic transmission fluid engineered for superior performance and protection. Crafted with cutting-edge synthetic technology, it surpasses the stringent Dexron III specifications, delivering exceptional lubrication and smooth gear transitions.",
    generalCharacteristics: [
      "This advanced formula offers outstanding resistance to oxidation, wear, and foaming, ensuring long-lasting transmission efficiency and extending the lifespan of your vehicle's transmission system.",
      "Petropec Dexron III Fully Synthetic also provides enhanced protection against rust and corrosion, maintaining critical transmission components in peak condition.",
      "Perfect for both modern and older vehicles, it guarantees consistent, high-quality performance across diverse driving conditions, making it an essential choice for maintaining optimal transmission health.",
    ],
    usageRecommendations:
      "Recommended for automatic transmissions in both modern and older vehicles that call for a Dexron III specification fluid, across a wide range of driving conditions.",
    usageInstructions:
      "With the vehicle level and the transmission at operating temperature, drain the old fluid, replace the filter or pan gasket if applicable, and refill with Petropec Dexron III to the level indicated on the dipstick or fill plug. Check the level again after a short drive.",
    specifications: "Exceeds Dexron III performance specifications for automatic transmission fluids.",
    typicalProperties: {
      Appearance: "Red",
      "Kinematic Viscosity @ 40 °C (cSt)": "39.85",
      "Kinematic Viscosity @ 100 °C (cSt)": "7.64",
      "Flash Point COC °C": "200",
      "Pour Point °C": "-36",
      "Viscosity Index": "164",
      "Specific Gravity @ 85 °F Kg/l": "0.8440",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },

  // ---------------------------------------------------------------------
  // PRIME LUBETECH — "PROTECT" range, sourced from Product Test Reports
  // ---------------------------------------------------------------------
  {
    slug: "protect-sn-10w-40",
    name: "PROTECT SN 10W-40 MOTOR OIL",
    tagline:
      "PROTECT SN 10W-40 is a premium grade multigrade engine oil formulated to deliver reliable protection and performance across a wide operating temperature range.",
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
      "Phosphorus": "0.08",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-5w-30",
    name: "PROTECT 5W-30 MOTOR OIL",
    tagline:
      "PROTECT 5W-30 is a low-viscosity engine oil designed to improve cold-start protection and support fuel efficiency in modern gasoline engines.",
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
      "Phosphorus": "0.08",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-0w-20",
    name: "PROTECT 0W-20 MOTOR OIL",
    tagline:
      "PROTECT 0W-20 is an ultra-low viscosity synthetic motor oil engineered for optimized fuel economy and fast cold-weather lubrication.",
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
      "Phosphorus": "0.08",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-10w-30",
    name: "PROTECT 10W-30 MOTOR OIL",
    tagline:
      "PROTECT 10W-30 is a versatile multigrade motor oil suited to a broad range of gasoline engines requiring reliable year-round protection.",
    generalCharacteristics: [
      "A versatile 10W-30 formulation with a viscosity index of 150, providing dependable protection across a broad temperature range for year-round use.",
    ],
    usageRecommendations:
      "Suitable for a wide range of gasoline engines in passenger cars and light-duty vehicles operating in normal conditions.",
    usageInstructions:
      "Drain the old oil with the engine warm, replace the filter, and refill with PROTECT 10W-30 to the specified level.",
    specifications: "Lab Ref: PL/LAB/0067 — Test Date: 5.8.2025",
    typicalProperties: {
      "SAE Grade": "10W-30",
      "Specific Gravity @ 60/60°F": "0.86",
      "Kinematic Viscosity cSt @ 100°C": "10.5",
      "Kinematic Viscosity cSt @ 40°C": "65",
      "Viscosity Index": "150",
      "Flash Point (COC), °C": "232",
      "Pour Point, °C": "-26",
      "Sulphated Ash, Wt.%": "0.1",
      "Phosphorus": "0.08",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-20w-50",
    name: "PROTECT 20W-50 MOTOR OIL",
    tagline:
      "PROTECT 20W-50 is a heavy-duty, high-viscosity motor oil formulated for strong film strength and dependable protection under high-temperature, high-load conditions.",
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
      "Phosphorus": "0.08",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-cvt",
    name: "PROTECT CVT FLUID",
    tagline:
      "PROTECT CVT is a specially formulated fluid for continuously variable transmissions, providing smooth power transfer and excellent low-temperature fluidity.",
    generalCharacteristics: [
      "A CVT-specific fluid with a viscosity index of 180, engineered for smooth power transfer between transmission components.",
      "A pour point of -51°C provides consistent fluidity in cold conditions.",
    ],
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
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-atf-dex-iii",
    name: "PROTECT ATF DEX III",
    tagline:
      "PROTECT ATF DEX III is an automatic transmission fluid meeting Dexron III performance requirements for smooth shifting and reliable transmission protection.",
    generalCharacteristics: [
      "An automatic transmission fluid with a viscosity index of 188, formulated to meet Dexron III performance requirements for smooth shifting and consistent protection.",
    ],
    usageRecommendations:
      "Recommended for automatic transmissions specifying a Dexron III fluid.",
    usageInstructions:
      "Drain the old fluid at operating temperature and refill with PROTECT ATF DEX III to the level indicated on the dipstick or fill plug.",
    specifications: "Lab Ref: PL/LAB/0069 — Test Date: 5.8.2025",
    typicalProperties: {
      "Specific Gravity @ 60/60°F": "0.85",
      "Kinematic Viscosity cSt @ 100°C": "7.4",
      "Kinematic Viscosity cSt @ 40°C": "34.2",
      "Viscosity Index": "188",
      "Flash Point (COC), °C": "216",
    },
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
  {
    slug: "protect-4t-sj-20w-50",
    name: "PROTECT 4T SJ 20W-50 MOTORCYCLE OIL",
    tagline:
      "PROTECT 4T SJ 20W-50 is a premium 4-stroke motorcycle engine oil of API SJ quality, formulated for strong wear protection and stable performance under demanding riding conditions.",
    standards: "API SJ",
    generalCharacteristics: [
      "A 4-stroke motorcycle oil of API SJ quality with a 20W-50 viscosity grade for stable performance under demanding riding conditions.",
      "A total base number of 8 mgKOH/g supports sustained wear protection over the service interval.",
    ],
    usageRecommendations:
      "Recommended for 4-stroke motorcycles requiring an API SJ, 20W-50 engine oil.",
    usageInstructions:
      "Drain the old oil while the engine is warm, replace the oil filter (if fitted), and refill with PROTECT 4T SJ 20W-50 to the level specified in the owner's manual.",
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
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },

  // ---------------------------------------------------------------------
  // AX-23 — ULTIMA (matches the reference test-report UI/UX)
  // ---------------------------------------------------------------------
  {
    slug: "ax-23-ultima",
    name: "AX-23 - ULTIMA",
    gradeLabel: "20W-50",
    tagline:
      "High-performance 4-stroke engine oil designed for motorcycles requiring superior protection, smooth operation, and thermal stability.",
    standards: "API SL",
    compatibleBrandsCategory: "Motorcycles in high-load engine use",
    compatibleBrands: ["Honda CB150R", "Yamaha FZ", "Suzuki GR150"],
    keyBenefits: [
      "Defends against wear and thermal degradation",
      "Enhances clutch life and shifting feel",
      "Ideal for hot climates and long trips",
    ],
    availableFormats: ["1L", "0.7L"],
    usageRecommendations:
      "Recommended for 4-stroke motorcycles requiring an API SL, 20W-50 engine oil, particularly in hot climates or under sustained high-load riding conditions.",
    usageInstructions:
      "Drain the old oil while the engine is warm, replace the oil filter (if fitted), and refill with AX-23 - ULTIMA to the level specified in the owner's manual. Check the level after a short ride and top up if required.",
    testSpecifications: [
      { test: "SAE Viscosity Grade", method: "SAE J 300", unit: "—", value: "20W50" },
      { test: "Density @ 15°C", method: "ASTM D 4052", unit: "kg/L", value: "0.878" },
      { test: "Flash Point", method: "ASTM D 92 / D93", unit: "°C", value: "248" },
      { test: "Pour Point", method: "ASTM D 97", unit: "°C", value: "-18" },
      { test: "Kinematic Viscosity @ 40°C", method: "ASTM D 445", unit: "cSt", value: "183.2" },
      { test: "Kinematic Viscosity @ 100°C", method: "ASTM D 445", unit: "cSt", value: "20.01" },
      { test: "Viscosity Index", method: "ASTM D 2270", unit: "—", value: "127" },
      { test: "Total Base Number (TBN)", method: "ASTM D 2896", unit: "mg KOH/g", value: "6.0" },
    ],
    image: "https://axionlubricants.com/Images/SinglePageProduct/ax-23-20w-50-1L.webp",
  },
];