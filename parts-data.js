const PARTS_DATA = [
  {
    id: "p001",
    name: "Hex Nut 3/8\"-32 (Switchcraft)",
    category: "Hardware",
    partType: "Nut",
    specs: "3/8\"-32 thread, nickel plated copper alloy, 12.7mm across flats, 2.39mm thick",
    application: "Mounting nut for Switchcraft and most USA-made 1/4\" jacks. Fits amps, guitars, pedals. The most common jack nut you'll encounter.",
    tags: ["jack", "switchcraft", "fender", "gibson", "usa", "imperial", "1/4 inch", "panel mount"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com/ProductDetail/Switchcraft/P10001", partNumber: "502-P10001", price: 0.46, notes: "Ships same day, free shipping over $50" },
      { name: "DigiKey", url: "https://www.digikey.com/en/products/detail/switchcraft-inc/P10001/1288574", partNumber: "P10001", price: 0.46, notes: "" },
      { name: "Full Compass", url: "https://www.fullcompass.com/prod/192521", partNumber: "P10001", price: 0.19, notes: "Price at qty 10+" }
    ],
    notes: "Stock 20-25. This is the one you'll use on 90% of US-made gear."
  },
  {
    id: "p002",
    name: "Hex Nut M9 x 0.75 (Metric Jack Nut)",
    category: "Hardware",
    partType: "Nut",
    specs: "M9 x 0.75mm fine thread, nickel plated",
    application: "Mounting nut for import/Asian 1/4\" jacks. Squier, Epiphone, Korean/Chinese/Indonesian pedals and budget amps.",
    tags: ["jack", "metric", "import", "squier", "epiphone", "m9"],
    vendors: [
      { name: "GuitarRepairParts.com", url: "https://guitarrepairparts.com/products/metric-output-jack-nut-washer-and-locking-star-washer-m9-thread-nickel", partNumber: "M9 set", price: null, notes: "Includes nut, dress washer, and star lockwasher. Only source for M9 star washer." }
    ],
    notes: "NOT M10. Hardware stores don't carry M9. Close to 3/8\"-32 but NOT interchangeable — will cross-thread."
  },
  {
    id: "p003",
    name: "Hex Nut 7/16\"-20",
    category: "Hardware",
    partType: "Nut",
    specs: "7/16\"-20 thread, nickel or zinc plated",
    application: "Larger barrel panel-mount jacks on vintage Fender and Marshall amp chassis.",
    tags: ["jack", "amp", "fender", "marshall", "vintage", "chassis"],
    vendors: [
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "Amp-specific supplier" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "", price: null, notes: "Tubes and More" }
    ],
    notes: "Less common. Only need a few on hand."
  },
  {
    id: "p004",
    name: "Flat Washer 3/8\"-32 (Switchcraft)",
    category: "Hardware",
    partType: "Washer",
    specs: "3/8\"-32, nickel plated",
    application: "Dress washer for Switchcraft 1/4\" jacks. Goes between nut and panel for clean finish.",
    tags: ["jack", "switchcraft", "washer", "dress", "panel mount"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "502-S10001", price: null, notes: "Match qty to hex nuts" }
    ],
    notes: "Stock same quantity as 3/8\"-32 hex nuts."
  },
  {
    id: "p005",
    name: "Internal Tooth Star Lockwasher 3/8\"",
    category: "Hardware",
    partType: "Washer",
    specs: "3/8\" internal tooth, phosphor bronze or steel",
    application: "Goes under jack nut to prevent loosening and provide chassis ground contact. Essential — this is what previous techs forget to reinstall.",
    tags: ["jack", "lockwasher", "star washer", "ground", "anti-rotation"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Search '3/8-32 internal tooth lockwasher'" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "000-5579-NA (Amphenol)", price: 0.64, notes: "Phosphor bronze" }
    ],
    notes: "The single most important washer for keeping jacks tight."
  },
  {
    id: "p006",
    name: "Dress Nut for 1/4\" Jack (Recessed)",
    category: "Hardware",
    partType: "Nut",
    specs: "3/8\"-32 thread, smooth exterior, with O-ring seal",
    application: "Hides threaded bushing for a clean look. Fits Switchcraft #11, #12B, Neutrik NYS229/230. For pedal builds and premium installs.",
    tags: ["jack", "dress nut", "recessed", "switchcraft", "neutrik", "pedal", "finish"],
    vendors: [
      { name: "Love My Switches", url: "https://lovemyswitches.com/dress-nut-and-o-ring-set-for-1-4-jacks/", partNumber: "", price: null, notes: "Check enclosure wall thickness: fits 1.3-2.3mm" }
    ],
    notes: "Nice upgrade for custom pedal builds."
  },
  {
    id: "p007",
    name: "Cup Washer #6 (Fender Back Panel)",
    category: "Hardware",
    partType: "Washer",
    specs: "Countersunk finishing washer, #6, nickel plated brass. ID: 3/16\", OD: 3/8\"",
    application: "Fender combo amp and head back panels. Sits under oval Phillips head wood screw to protect tolex from screw head damage.",
    tags: ["fender", "amp", "cabinet", "back panel", "cup washer", "finishing washer", "tolex"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/Washer-Fender-Cabinet-Backboard-Mounting/dp/B003AYNSCA", partNumber: "003-7215-049", price: null, notes: "Genuine Fender 12-pack" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com/products/finishing-washer-nickel-plated-countersunk-flush-fender", partNumber: "S-HXFW", price: null, notes: "Both flush (blackface) and flanged (later) styles" },
      { name: "Angela Instruments", url: "https://angelainstruments.com/products/12-fender-nickel-philips-amp-back-panel-mounting-screws-and-cup-beauty-washers-bcw", partNumber: "", price: null, notes: "Combo pack: 12 screws + 12 cup washers" }
    ],
    notes: "Two styles: early tea cup (blonde/brown 1960-65) and later flush countersunk (blackface 1966+). #6 for combos/heads, #8 for extension cabs."
  },
  {
    id: "p008",
    name: "Flat Head Machine Screw 6-32",
    category: "Hardware",
    partType: "Screw",
    specs: "6-32 thread, flat head Phillips, countersunk, stainless steel, 3/8\" to 1/2\" length",
    application: "Chassis mounting, eyelet board standoffs for Fender AB763 Deluxe Reverb and similar amp builds. Requires countersunk hole.",
    tags: ["screw", "chassis", "amp build", "fender", "deluxe reverb", "ab763", "standoff", "flush mount"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/dp/B073RYNBZZ", partNumber: "", price: null, notes: "304 stainless, various lengths" },
      { name: "Monster Bolts", url: "https://monsterbolts.com/products/mach-phil-flat-stain-6-32", partNumber: "", price: null, notes: "Buy exact quantities" }
    ],
    notes: "Verify 6-32 vs 8-32 for your specific chassis before ordering standoffs. Dry fit first."
  },
  {
    id: "p009",
    name: "Flat Head Machine Screw 8-32",
    category: "Hardware",
    partType: "Screw",
    specs: "8-32 thread, flat head Phillips, countersunk, stainless steel, 3/8\" to 1/2\" length",
    application: "Chassis mounting, eyelet board standoffs. Beefier alternative to 6-32 for amp builds.",
    tags: ["screw", "chassis", "amp build", "standoff", "flush mount"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/dp/B073RYVR2F", partNumber: "", price: null, notes: "304 stainless, 100 pack" },
      { name: "Monster Bolts", url: "https://monsterbolts.com/products/mach-phil-flat-stain-8-32", partNumber: "", price: null, notes: "Buy exact quantities" }
    ],
    notes: "Monster Bolts also has matching hex nuts. They don't carry standoffs — use Mouser/DigiKey for those (Keystone Electronics or RAF brand)."
  },
  {
    id: "p010",
    name: "SIP-1A05 Reed Relay 5V",
    category: "Electronic Component",
    partType: "Relay",
    specs: "5V DC, SPST-NO, 1A, 4-pin SIP, 450-550Ω coil, normally open",
    application: "Signal switching, isolation buffer circuits. Use with 220Ω series resistor when powered from 9V.",
    tags: ["relay", "reed", "5v", "spst", "switching", "buffer"],
    vendors: [
      { name: "Amazon (HiLetgo)", url: "https://www.amazon.com/HiLetgo-SIP-1A05-Switch-Resistance-450-550ohm/dp/B09KGYPWPP", partNumber: "SIP-1A05", price: null, notes: "5-pack, ships from Amazon fulfillment. Prime eligible." }
    ],
    notes: "If running from 9V, add 220Ω series resistor to coil to drop voltage. Easier to source on Prime than the 12V version."
  },
  {
    id: "p011",
    name: "SIP-1A12 Reed Relay 12V",
    category: "Electronic Component",
    partType: "Relay",
    specs: "12V DC, SPST-NO, 1A, 4-pin SIP, ~1000Ω coil, normally open",
    application: "Signal switching, isolation buffer circuits. Runs directly off 9V with no series resistor (draws ~9mA at 9V).",
    tags: ["relay", "reed", "12v", "spst", "switching", "buffer"],
    vendors: [
      { name: "Amazon (XYwsh)", url: "https://www.amazon.com/3Pcs-SIP-1A12-Switch-Relay-4Pins/dp/B0B1MCCJ4S", partNumber: "SIP-1A12", price: null, notes: "3-pack. Check Prime eligibility — most listings ship from China." }
    ],
    notes: "Preferred for 9V circuits since no series resistor needed. Same pinout/form factor as SIP-1A05."
  },
  {
    id: "p012",
    name: "2N3904 NPN Transistor",
    category: "Electronic Component",
    partType: "Transistor",
    specs: "NPN, TO-92, 40V, 200mA, hFE 100-300",
    application: "General purpose switching. Relay driver, buffer circuits, signal amplification.",
    tags: ["transistor", "npn", "switching", "to-92", "driver"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/s?k=2N3904", partNumber: "2N3904", price: null, notes: "Widely available in bulk packs" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "2N3904", price: null, notes: "Various manufacturers" }
    ],
    notes: "Workhorse NPN. Always keep a bag on hand."
  },
  {
    id: "p013",
    name: "1N4148 Signal Diode",
    category: "Electronic Component",
    partType: "Diode",
    specs: "75V, 200mA, fast switching, DO-35 glass body",
    application: "Flyback/snubber diode across relay coils, signal clipping, general purpose small signal.",
    tags: ["diode", "signal", "flyback", "snubber", "protection", "clipping"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/s?k=1N4148", partNumber: "1N4148", price: null, notes: "Bulk packs cheap" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "1N4148", price: null, notes: "" }
    ],
    notes: "Can substitute 1N4007 for flyback duty if that's what you have — it's overkill but works fine."
  },
  {
    id: "p014",
    name: "1N4007 Rectifier Diode",
    category: "Electronic Component",
    partType: "Diode",
    specs: "1000V, 1A, DO-41",
    application: "Flyback/snubber diode (substitute for 1N4148), rectifier circuits, general purpose.",
    tags: ["diode", "rectifier", "flyback", "1n400x", "protection"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/s?k=1N4007", partNumber: "1N4007", price: null, notes: "" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "1N4007", price: null, notes: "" }
    ],
    notes: "Top of the 1N400x series (1N4001-4007). Overkill for flyback but fine. 1N4008 is NOT a real part number."
  },
  {
    id: "p015",
    name: "1590A Pedal Enclosure",
    category: "Enclosure",
    partType: "Enclosure",
    specs: "92 x 38 x 31mm (3.6\" x 1.5\" x 1.2\"), diecast aluminum",
    application: "Smallest standard pedal enclosure. Good for simple utility circuits (buffers, A/B switches). Will NOT fit a 9V battery internally alongside two jacks.",
    tags: ["enclosure", "pedal", "1590a", "aluminum", "diy", "stomp box"],
    vendors: [
      { name: "Amazon (DaierTek)", url: "https://www.amazon.com/DaierTek-1590A-Enclosure-Aluminum-Unfinished/dp/B07VPF244B", partNumber: "1590A", price: null, notes: "" },
      { name: "Amazon (3-pack w/ step drill + PCBs)", url: "https://www.amazon.com/1590A-small-pedal-enclosure-unpainted/dp/B06XDCPYS1", partNumber: "", price: null, notes: "Includes step drill and prototype PCBs" }
    ],
    notes: "Too small for internal 9V battery. Use 1590B if battery needed, or add DC jack for external power."
  },
  {
    id: "p016",
    name: "1590B Pedal Enclosure",
    category: "Enclosure",
    partType: "Enclosure",
    specs: "112 x 61 x 32mm (4.4\" x 2.4\" x 1.3\"), diecast aluminum",
    application: "Standard pedal enclosure. Fits two jacks, 9V battery, and a small circuit comfortably. Most common DIY pedal size.",
    tags: ["enclosure", "pedal", "1590b", "aluminum", "diy", "stomp box"],
    vendors: [
      { name: "Amazon (DaierTek)", url: "https://www.amazon.com/DaierTek-1590B-Enclosure-Aluminum-Unfinished/dp/B07VPF244B", partNumber: "1590B", price: null, notes: "" }
    ],
    notes: "Go-to size for most single-effect pedal builds."
  },
  {
    id: "p017",
    name: "9V Battery Snap Connector",
    category: "Hardware",
    partType: "Connector",
    specs: "I-type or T-type, red/black leads, ~15cm wire length",
    application: "Internal battery connection for pedals, utility boxes, and any 9V battery-powered circuit.",
    tags: ["battery", "9v", "snap", "connector", "power", "pedal"],
    vendors: [
      { name: "Amazon (Parts Express)", url: "https://www.amazon.com/Parts-Express-Battery-Clip-Pack/dp/B01IFP0N3U", partNumber: "", price: null, notes: "Standard I-type" },
      { name: "Amazon (LampVPath)", url: "https://www.amazon.com/LampVPath-Battery-Connector-Plastic-Housing/dp/B079HYPCZD", partNumber: "", price: null, notes: "20-pack bulk, strong snap design" }
    ],
    notes: "Always keep extras. They corrode from battery leakage and need replacing."
  },
  {
    id: "p018",
    name: "10kΩ Resistor 1/4W",
    category: "Electronic Component",
    partType: "Resistor",
    specs: "10kΩ, 1/4W, 5% carbon film or metal film",
    application: "Base resistor for transistor switching circuits, pull-up/pull-down, general purpose.",
    tags: ["resistor", "10k", "base", "bias", "pull-up"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/s?k=10k+ohm+resistor+1%2F4w", partNumber: "", price: null, notes: "Bulk assortment kits are cheapest" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Stock staple. Buy assortment kits with common values."
  },
  {
    id: "p019",
    name: "220Ω Resistor 1/4W",
    category: "Electronic Component",
    partType: "Resistor",
    specs: "220Ω, 1/4W, 5% carbon film or metal film",
    application: "Series resistor for dropping 9V to ~5V across SIP-1A05 relay coil. LED current limiting.",
    tags: ["resistor", "220", "series", "relay", "led", "current limiting"],
    vendors: [
      { name: "Amazon", url: "https://www.amazon.com/s?k=220+ohm+resistor", partNumber: "", price: null, notes: "" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Needed when running SIP-1A05 (5V relay) from 9V supply."
  },

  // ── FENDER ELECTRONIC COMPONENTS ────────────────────────────────────────

  {
    id: "p021",
    name: "Orange Drop Capacitor .022µF 600V",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: ".022µF (22nF), 600V, polypropylene film/foil, ±10%, axial leads, Kemet/SBE 715P series",
    application: "Tone stack coupling cap in Fender AB763 and AA763 circuits — bright channel, bass/middle/treble network. Found in nearly every Fender amp schematic. Also ubiquitous in pedal signal paths.",
    tags: ["capacitor", "coupling", "tone", ".022", "orange drop", "fender", "blackface", "film", "715p", "kemet"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com/ProductDetail/Kemet/715P223K", partNumber: "715P223K", price: null, notes: "Kemet (SBE) — the genuine Orange Drop" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "715P223K", price: null, notes: "" },
      { name: "Mojotone", url: "https://www.mojotone.com/products/orange-drop-0-022uf-600v-715p-series-capacitor", partNumber: "", price: null, notes: "Sold individually" }
    ],
    notes: "The single most-used signal cap in Fender repair. Stock at least 10. The 715P series is the original 'Orange Drop' — now manufactured by Kemet. Do not confuse with cheaper polyester film caps."
  },
  {
    id: "p022",
    name: "Orange Drop Capacitor .047µF 600V",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: ".047µF (47nF), 600V, polypropylene film/foil, ±10%, axial leads, Kemet/SBE 715P series",
    application: "Tremolo circuit coupling, bass tone network, and various signal path positions in Fender blackface/silverface. Common in pedal builds.",
    tags: ["capacitor", "coupling", ".047", "orange drop", "fender", "tremolo", "film", "715p"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "715P473K", price: null, notes: "Search 715P473K" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "715P473K", price: null, notes: "" }
    ],
    notes: "Second most-used Orange Drop value after .022µF. Keep both on hand."
  },
  {
    id: "p023",
    name: "Orange Drop Capacitor .1µF 400V",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: ".1µF (100nF), 400V, polypropylene film/foil, ±10%, axial leads, Kemet/SBE 715P series",
    application: "Larger coupling positions and reverb circuit in Fender amps. Used at reverb driver output, some PI coupling positions, and cathode-follower coupling.",
    tags: ["capacitor", "coupling", ".1uf", "orange drop", "fender", "reverb", "film", "715p"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "715P104K", price: null, notes: "Search 715P104K" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "715P104K", price: null, notes: "" }
    ],
    notes: "400V is sufficient for signal positions. Use 600V in positions close to the B+ rail to be safe."
  },
  {
    id: "p024",
    name: "Electrolytic Capacitor 22µF 25V Radial",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: "22µF, 25V, electrolytic, radial leads, 105°C rated, 5mm or 6.3mm body diameter",
    application: "Cathode bypass on 12AX7 preamp stages — increases stage gain by bypassing cathode resistor at audio frequencies. Fender spec was 25µF/25V; 22µF is the accepted modern equivalent.",
    tags: ["capacitor", "electrolytic", "cathode bypass", "22uf", "25v", "preamp", "12ax7", "radial"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Nichicon or Panasonic, 22µF/25V radial, 105°C" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "", price: null, notes: "" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=22uf+25v+electrolytic+capacitor", partNumber: "", price: null, notes: "Bulk packs available" }
    ],
    notes: "Always use 105°C rated in amp applications — the environment is harsh. Polarity matters: striped lead is negative. Radial is fine; bend leads if replacing axial original."
  },
  {
    id: "p025",
    name: "Sprague Atom 22µF 450V Axial",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: "22µF, 450V, electrolytic, axial leads, 85°C, Sprague Atom series",
    application: "Power supply filter in Fender B+ sections — screen supply filtering, secondary B+ nodes, bias supply decoupling. Period-correct replacement for original Mallory/Sprague units in blackface/silverface amps.",
    tags: ["capacitor", "electrolytic", "filter cap", "b+", "power supply", "sprague", "atom", "22uf", "450v", "axial", "fender"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "C-ET22-450", price: null, notes: "Sprague Atom or equivalent" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Sprague Atom or F&T equivalent" }
    ],
    notes: "Reform old capacitors before applying full voltage to aged amps — bring voltage up slowly over 30-60 minutes with a variac. Sprague Atom is period-correct and physically compatible with original mounting clips."
  },
  {
    id: "p026",
    name: "F&T Electrolytic 47µF 500V Axial",
    category: "Electronic Component",
    partType: "Capacitor",
    specs: "47µF, 500V, electrolytic, axial leads, F&T (Frolyt-Tantal) German manufacture",
    application: "Main B+ filter capacitor in Fender amps. Replaces original 40µF/450V and 50µF/450V values in blackface Deluxe Reverb, Princeton Reverb, and similar. 500V rating gives headroom above the original 450V spec.",
    tags: ["capacitor", "filter cap", "b+", "power supply", "f&t", "47uf", "500v", "axial", "deluxe reverb", "fender", "german"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "C-ET47-500", price: null, notes: "F&T German electrolytic" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "F&T is a well-regarded German brand for audio-grade electrolytics. Going significantly above the original capacitance (e.g., 100µF where 40µF was original) can affect amp feel and response. 47µF for a 40µF position is fine."
  },
  {
    id: "p027",
    name: "CTS 250kΩ Audio Taper Potentiometer",
    category: "Electronic Component",
    partType: "Potentiometer",
    specs: "250kΩ, audio (logarithmic) taper, 3/8\" bushing, split shaft, ±20%, 2W, single-gang",
    application: "Volume and tone controls in Fender blackface/silverface preamp sections. The standard Fender preamp pot value. Fits original pot holes in vintage Fender chassis.",
    tags: ["potentiometer", "pot", "250k", "audio taper", "cts", "volume", "tone", "fender", "preamp", "split shaft"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "R-V250K-A", price: null, notes: "CTS, split shaft, audio taper" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "CTS and Alpha options available" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Alpha brand if CTS not in stock" }
    ],
    notes: "Confirm split shaft vs solid shaft before ordering — skirted blackface Fender knobs require solid shaft with set screw. Most blackface controls are audio taper; bass controls are sometimes linear (type B). CTS is original supplier; Alpha is an acceptable substitute."
  },
  {
    id: "p028",
    name: "CTS 1MΩ Audio Taper Potentiometer",
    category: "Electronic Component",
    partType: "Potentiometer",
    specs: "1MΩ, audio (logarithmic) taper, 3/8\" bushing, split or solid shaft, ±20%, 2W",
    application: "Presence control in Fender amp power amp sections (some models). Also used in guitar volume circuits. Less common than 250kΩ in amp work but important to stock.",
    tags: ["potentiometer", "pot", "1m", "1meg", "audio taper", "cts", "presence", "fender"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "R-V1M-A", price: null, notes: "" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Check the schematic — Presence on some Fenders is 1MΩ reverse (anti-log) taper. Verify before ordering. Keep one or two on hand."
  },
  {
    id: "p029",
    name: "9-Pin Noval Tube Socket",
    category: "Electronic Component",
    partType: "Tube Socket",
    specs: "9-pin noval, chassis mount, ceramic (preferred) or phenolic, with optional shield/ground ring, 0.900\" panel hole",
    application: "Preamp tube socket for 12AX7, 12AT7, 12AY7, 12AU7, ECC83/ECC81. All Fender preamp stages use these.",
    tags: ["tube socket", "9 pin", "noval", "12ax7", "12at7", "preamp", "fender", "ceramic", "phenolic"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "P-ST9-505", price: null, notes: "Ceramic 9-pin with shield cup" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "Ceramic and phenolic options" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Belton/Cinch 9-pin chassis mount" }
    ],
    notes: "Ceramic preferred for all positions — more heat-resistant and less microphonic than phenolic. If replacing, check whether original has a shield cup (ground ring) — Fender circuits often depend on it for screening. Check pin tension on old sockets; worn sockets cause intermittent dropout that looks like bad tubes."
  },
  {
    id: "p030",
    name: "8-Pin Octal Tube Socket",
    category: "Electronic Component",
    partType: "Tube Socket",
    specs: "8-pin octal, chassis mount, ceramic or phenolic, 1.125\" panel hole",
    application: "Power tube and rectifier sockets for 6L6GC, 6V6GT, EL34, 5AR4/GZ34, 5Y3 in Fender amps. Larger mounting hole than noval.",
    tags: ["tube socket", "8 pin", "octal", "6l6", "6v6", "5ar4", "gz34", "power tube", "rectifier", "fender"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "P-ST8-209", price: null, notes: "Ceramic octal, chassis mount" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" },
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Belton/Cinch 8-pin octal" }
    ],
    notes: "Ceramic strongly preferred for power positions — heat is significant. Belton (made by Cinch) is reliable. Worn socket contacts are a common cause of intermittent power tube issues — check before blaming the tube."
  },
  {
    id: "p031",
    name: "Accutronics 8BB2C1B Reverb Tank",
    category: "Electronic Component",
    partType: "Reverb Tank",
    specs: "3-spring, long (17\") tank, input 800Ω, output 2250Ω, medium decay, same-end connectors, insulated input, vertical mount",
    application: "Replacement reverb tank for Fender Deluxe Reverb, Princeton Reverb, and similar medium-sized Fender tube amps. Decoding: 8=long 3-spring, BB=800Ω in/2250Ω out, 2=medium decay, C=same-end connectors, 1=insulated input, B=vertical.",
    tags: ["reverb tank", "reverb", "accutronics", "belton", "8bb2c1b", "fender", "deluxe reverb", "princeton reverb", "spring reverb"],
    vendors: [
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "A-TRB-8BB2C1B", price: null, notes: "Genuine Accutronics/Belton" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "VERIFY part number against the label on the original tank before ordering — Fender used different tanks in different models and years. Wrong impedance tank will work poorly. Super Reverb uses a different model (longer decay, different impedance). The decay and impedance specs matter more than brand."
  },
  {
    id: "p032",
    name: "12AX7 / ECC83 Preamp Tube",
    category: "Electronic Component",
    partType: "Vacuum Tube",
    specs: "12AX7/ECC83, dual triode, 9-pin noval, 300V max plate, amplification factor µ=100",
    application: "Preamp gain stages in virtually all Fender tube amps. V1 input, reverb recovery, tremolo oscillator, phase inverter driver. The most tone-critical tube in the signal chain.",
    tags: ["tube", "12ax7", "ecc83", "preamp", "triode", "fender", "vacuum tube", "gain", "v1"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Wide current-production and NOS selection" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-12AX7-TUNG", price: null, notes: "Tung-Sol, JJ ECC83S, and Mullard reissue" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "V1 has the most impact on tone and noise floor. JJ ECC83S is a reliable budget option. Tung-Sol 12AX7 is a popular mid-range choice. Avoid unbranded Chinese tubes in V1 — noise and microphonics vary wildly. Note: reverb driver position in many Fenders uses 12AT7, not 12AX7 — check schematic."
  },
  {
    id: "p033",
    name: "12AT7 / ECC81 Driver Tube",
    category: "Electronic Component",
    partType: "Vacuum Tube",
    specs: "12AT7/ECC81, dual triode, 9-pin noval, 300V max plate, amplification factor µ=60, medium gain",
    application: "Reverb driver in many Fender amps — one triode drives the reverb tank, one recovers signal. Also used as phase inverter in some circuits. Lower gain than 12AX7.",
    tags: ["tube", "12at7", "ecc81", "reverb driver", "phase inverter", "fender", "triode", "medium gain"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-12AT7", price: null, notes: "JJ, Tung-Sol, Sovtek options" }
    ],
    notes: "Deluxe Reverb AB763: 12AT7 at V4 (reverb driver). Do NOT substitute 12AX7 in a 12AT7 reverb driver position — different bias requirements, higher gain can cause oscillation. Always check which position you're replacing."
  },
  {
    id: "p034",
    name: "6V6GT Power Tube",
    category: "Electronic Component",
    partType: "Vacuum Tube",
    specs: "6V6GT, beam power tetrode, 8-pin octal, 315V max plate, 14W plate dissipation, class AB",
    application: "Output stage in Fender Champ, Princeton, Deluxe, Deluxe Reverb, Vibro Champ. Always replaced in matched pairs. The quintessential small-Fender power tube.",
    tags: ["tube", "6v6", "6v6gt", "power tube", "output", "fender", "champ", "deluxe reverb", "princeton", "octal"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Matched pairs available, specify" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-6V6GT", price: null, notes: "" }
    ],
    notes: "Most Fender small amps run 6V6s at 420-450V — above the 315V spec. This is intentional but shortens tube life. JJ 6V6S is built for higher voltages and is a good choice here. Always re-bias after replacement. Bias target is typically 70% max plate dissipation — reference the schematic for exact procedure."
  },
  {
    id: "p035",
    name: "6L6GC Power Tube",
    category: "Electronic Component",
    partType: "Vacuum Tube",
    specs: "6L6GC, beam power tetrode, 8-pin octal, 500V max plate, 30W plate dissipation, class AB",
    application: "Output stage in Fender Twin Reverb, Bassman, Showman, Bandmaster Reverb, Pro Reverb, Vibrolux Reverb. Typically pairs or quads.",
    tags: ["tube", "6l6", "6l6gc", "power tube", "output", "fender", "twin reverb", "bassman", "octal"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Matched pairs and quads available" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-6L6GC", price: null, notes: "" }
    ],
    notes: "Twin Reverb takes a matched quad. Always re-bias after tube change. Tung-Sol 6L6GCM and Sovtek 5881 are popular current-production choices. Sylvania 6L6GC is the NOS benchmark. Use a bias probe — do not guess on a 100W amp."
  },
  {
    id: "p036",
    name: "5AR4 / GZ34 Rectifier Tube",
    category: "Electronic Component",
    partType: "Vacuum Tube",
    specs: "5AR4/GZ34, full-wave rectifier, 8-pin octal, 425V max B+ per half, 250mA max current",
    application: "Tube rectifier in Fender Deluxe Reverb, Princeton Reverb, Vibrolux Reverb, Pro Reverb. Responsible for 'sag' — the dynamic compression characteristic of vintage Fender tone.",
    tags: ["tube", "5ar4", "gz34", "rectifier", "fender", "deluxe reverb", "princeton reverb", "sag", "octal"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-5AR4", price: null, notes: "JJ, Sovtek, Mullard reissue" }
    ],
    notes: "5AR4 and GZ34 are identical specs — different naming conventions (US vs European). Solid-state rectifier substitutes (Weber Copper Cap, etc.) remove sag AND raise B+ voltage by 30-50V — verify filter caps can handle the higher voltage before swapping. Many customers specifically want the tube rectifier sound; document clearly if you substitute."
  },
  {
    id: "p037",
    name: "#47 Pilot Lamp 6.3V",
    category: "Electronic Component",
    partType: "Lamp",
    specs: "#47, 6.3V, 0.15A (0.94W), T-3-1/4 glass envelope, Ba9s bayonet base",
    application: "Pilot indicator lamp in Fender blackface and silverface amps. Illuminates behind red or amber jewel lens on front panel.",
    tags: ["lamp", "bulb", "pilot light", "#47", "6.3v", "bayonet", "ba9s", "fender", "indicator"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "L-#47", price: null, notes: "Genuine #47 incandescent" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com/products/dial-lamp-47-t-3-14-63v-015a-bayonet-base", partNumber: "#47", price: null, notes: "" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=%2347+pilot+lamp+6.3v+bayonet", partNumber: "#47", price: null, notes: "Buy a 10-pack — they burn out" }
    ],
    notes: "LED substitutes exist (6.3V LED with Ba9s base) and run cooler/last longer. For period-correct repair, use incandescent. LED versions eliminate the warm incandescent glow — some customers notice and prefer the original character. Always stock a few."
  },

  // ── FENDER HARDWARE ──────────────────────────────────────────────────────

  {
    id: "p038",
    name: "Switchcraft 11 Mono Open Circuit Jack",
    category: "Hardware",
    partType: "Jack",
    specs: "1/4\", mono, open circuit, 2-conductor (tip + sleeve), panel mount, 3/8\"-32 thread",
    application: "Standard Fender amp input and speaker output jacks. No switching contacts — signal present regardless of whether a plug is inserted. The most basic amp jack.",
    tags: ["jack", "switchcraft", "11", "mono", "input", "output", "fender", "amp", "open circuit"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com/ProductDetail/Switchcraft/11", partNumber: "502-11", price: null, notes: "" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "SC1085-ND", price: null, notes: "" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "P-J11", price: null, notes: "" }
    ],
    notes: "Use with p001 (3/8\"-32 nut), p004 (dress washer), and p005 (star lockwasher). Switchcraft quality is noticeably better than import jacks — use genuine Switchcraft for amp inputs."
  },
  {
    id: "p039",
    name: "Switchcraft 12A Mono Switching Jack",
    category: "Hardware",
    partType: "Jack",
    specs: "1/4\", mono, normally closed circuit (breaks when plug inserted), 3-lug, panel mount, 3/8\"-32 thread",
    application: "Effects loop send/return jacks — connects send directly to return when nothing plugged in (completes series loop). Footswitch jacks. Channel switching jacks in Fender amps.",
    tags: ["jack", "switchcraft", "12a", "switching", "normally closed", "effects loop", "footswitch", "fender"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com/ProductDetail/Switchcraft/12A", partNumber: "502-12A", price: null, notes: "" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "", price: null, notes: "" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "P-J12A", price: null, notes: "" }
    ],
    notes: "The NC (normally closed) contact shorts the two non-tip lugs together when empty, breaking that short when a plug is inserted. Installing a regular open-circuit jack in an effects loop will mute the amp when the loop is unplugged — critical to get right."
  },
  {
    id: "p040",
    name: "Red Jewel Lens (Fender Pilot Light)",
    category: "Hardware",
    partType: "Lens",
    specs: "Red faceted plastic, snap-in mount, ~0.45\" (11.5mm) diameter, fits standard chassis pilot hole",
    application: "Pilot light cover on Fender blackface and silverface combo amps and heads. Snaps into chassis hole over the #47 lamp.",
    tags: ["jewel", "lens", "pilot light", "red", "fender", "blackface", "silverface", "indicator", "cosmetic"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "H-JEWEL-RED", price: null, notes: "Standard red faceted snap-in" },
      { name: "Mojotone", url: "https://www.mojotone.com", partNumber: "", price: null, notes: "" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "Multiple colors available" }
    ],
    notes: "Also available in green and amber. Measure the chassis hole before ordering — a few vintage models use a non-standard diameter. Plastic body gets brittle with age; handle carefully during removal."
  },
  {
    id: "p041",
    name: "IEC C14 Power Entry Module",
    category: "Hardware",
    partType: "Power Entry",
    specs: "IEC 320 C14, panel mount, 10A/250V, with integrated fuse holder, snap-in or screw mount",
    application: "AC power inlet for amp chassis. Common modern upgrade for Fender blackface/silverface amps with original hard-wired captive power cords — adds detachable IEC cable.",
    tags: ["iec", "power entry", "ac inlet", "fender", "mod", "upgrade", "power cord", "chassis", "c14"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Schurter 4301.1402 — filter+fuse versions available" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "", price: null, notes: "Schurter and Schaffner brands" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=IEC+C14+power+entry+module+fuse", partNumber: "", price: null, notes: "Stick to Schurter/Schaffner — avoid no-name units" }
    ],
    notes: "Requires chassis modification (punch or file rectangular opening). Get the version with integrated fuse holder. Some versions include EMI filter — useful near noisy environments. Schurter is the quality standard for this part."
  },
  {
    id: "p042",
    name: "Rubber Wire Grommet (Chassis)",
    category: "Hardware",
    partType: "Grommet",
    specs: "Rubber, snap-in panel mount, common sizes: 3/8\" ID, 1/2\" ID, 5/8\" ID",
    application: "Protect wiring where it passes through chassis cutouts — AC line cord entry, transformer leads, speaker wiring. Prevents insulation damage from sharp chassis edges.",
    tags: ["grommet", "chassis", "wire protection", "safety", "ac", "fender", "amp", "insulation"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "", price: null, notes: "Heyco or Essentra brands — specify ID and panel thickness" },
      { name: "McMaster-Carr", url: "https://www.mcmaster.com", partNumber: "", price: null, notes: "Widest size selection" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=rubber+wire+grommet+assortment", partNumber: "", price: null, notes: "Assortment kits cover 3/8\" to 1\" ID" }
    ],
    notes: "Cracked or missing grommets where AC line enters the chassis are a pass-fail safety item. Never leave a sharp chassis edge in contact with wire insulation — it cuts through over time creating a shock or fire hazard. Measure the panel hole diameter and wire bundle OD before ordering."
  },
  {
    id: "p043",
    name: "Fender Skirted Knob (Black, Set Screw)",
    category: "Hardware",
    partType: "Knob",
    specs: "Black plastic, skirted (skirt) style, set screw (3/32\" hex allen), fits 1/4\" (6.35mm) solid shaft pot, ~1.4\" OD",
    application: "Control knobs for Fender blackface and silverface amps. Volume, Bass, Middle, Treble, Reverb, Speed, Intensity, Presence controls.",
    tags: ["knob", "skirted", "fender", "blackface", "silverface", "control", "black", "solid shaft", "set screw"],
    vendors: [
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "P-K506", price: null, notes: "Skirted black knob, solid shaft" },
      { name: "Mojotone", url: "https://www.mojotone.com", partNumber: "", price: null, notes: "" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Blackface controls use solid-shaft pots with set-screw knobs — NOT split shaft. Confirm pot shaft type before ordering knobs. Don't overtighten the set screw; cross-threading ruins the knob and shaft both. Chicken-head pointer knobs are a different style used on some Fender controls — verify visually."
  },
  {
    id: "p044",
    name: "Rubber Cabinet Feet (Dome Style, ~1\")",
    category: "Hardware",
    partType: "Feet",
    specs: "Dome/mushroom style, ~1\" (25mm) OD, rubber, screw-mount with #6 or #8 wood screw, ~3/8\" height",
    application: "Bottom feet for Fender combo amp and head cabinets. Protects cabinet bottom and provides non-slip contact.",
    tags: ["feet", "rubber", "cabinet", "fender", "amp", "dome", "mushroom", "bottom"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com", partNumber: "", price: null, notes: "Pack of 4, correct size for Fender combos" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" },
      { name: "Parts Express", url: "https://www.parts-express.com", partNumber: "", price: null, notes: "Generic speaker cabinet feet — measure existing first" }
    ],
    notes: "Fender used slightly different foot sizes across eras — measure the existing OD before ordering. Most are ~1\" OD. Replace all four at once for even contact."
  },
  {
    id: "p045",
    name: "Plastic Cabinet Corners",
    category: "Hardware",
    partType: "Corner",
    specs: "Black ABS plastic, 3-sided dog-leg style, 1-3/8\" to 1-3/4\" leg length, with pre-drilled mounting holes",
    application: "Corner protection for amp heads, extension cabs, and larger combo amps. Protects tolex at cabinet corners from impact damage.",
    tags: ["corners", "cabinet", "plastic", "amp", "protection", "cosmetic", "fender"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com", partNumber: "", price: null, notes: "Sold in sets of 8, multiple sizes" },
      { name: "Parts Express", url: "https://www.parts-express.com", partNumber: "", price: null, notes: "Multiple sizes available" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Measure the original corner leg length and cabinet corner radius before ordering. Pre-drill into MDF to avoid splitting. Short Phillips wood screws, not drywall screws."
  },

  // ── CABINET & COVERING ───────────────────────────────────────────────────

  {
    id: "p046",
    name: "Black Tolex (Fender Blackface)",
    category: "Cabinet & Covering",
    partType: "Tolex",
    specs: "Black vinyl with textured grain pattern, sold by the yard (~54\" wide rolls)",
    application: "Cabinet covering for Fender blackface (1964-1967) and silverface amps. Also used on Fender reissues and current production. The most common Fender tolex pattern.",
    tags: ["tolex", "vinyl", "cabinet", "covering", "black", "fender", "blackface", "silverface", "cosmetic"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com/amp-parts/Tolex-Grill-Cloth/TOLEX", partNumber: "", price: null, notes: "Most accurate pattern for Fender blackface/silverface" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "Sold per yard" },
      { name: "Mojo Musical Supply", url: "https://www.mojomusicalsupply.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Measure cabinet surface area and buy 15-20% extra. Corners are the hardest part — score the tolex at corners, fold in stages, and take your time. Use contact cement (p050). Mojotone's black tolex pattern is widely considered most accurate for blackface. For brown-era amps, Mojotone carries brown and oxblood tolex as well."
  },
  {
    id: "p047",
    name: "Wheat Grille Cloth (Fender Blackface / Silverface)",
    category: "Cabinet & Covering",
    partType: "Grille Cloth",
    specs: "Wheat/cream woven textile, sold by the yard (~36-54\" wide)",
    application: "Standard grille cloth for Fender blackface (1964-1967) and silverface (1968-1981) combos and heads. The most common Fender grille cloth.",
    tags: ["grille cloth", "wheat", "cream", "fender", "blackface", "silverface", "cabinet", "cosmetic"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com/amp-parts/Tolex-Grill-Cloth", partNumber: "", price: null, notes: "Wheat grille cloth, per yard" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" },
      { name: "Mojo Musical Supply", url: "https://www.mojomusicalsupply.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Cut 2-3\" extra on all sides to wrap and staple to the back of the grille frame. Pull tension tight and even — uneven pull shows as waves through the cloth. Use 1/4\" or 3/8\" crown staples."
  },
  {
    id: "p048",
    name: "Salt & Pepper Grille Cloth (Fender Tweed Era)",
    category: "Cabinet & Covering",
    partType: "Grille Cloth",
    specs: "Black and white woven pattern, sold by the yard",
    application: "Original grille cloth for Fender tweed amps — late 1950s Champ, Bassman, Harvard, Deluxe, Princeton. Also used on some vintage Ampeg and Gibson combos from the same era.",
    tags: ["grille cloth", "salt and pepper", "tweed", "fender", "vintage", "cosmetic", "cabinet", "1950s"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com/amp-parts/Tolex-Grill-Cloth", partNumber: "", price: null, notes: "Tweed-era salt & pepper pattern" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Early 50s vs late 50s patterns differ slightly. Verify the specific year of the amp with reference photos before ordering. Mojotone's pattern is close for most late-50s tweed Fenders."
  },
  {
    id: "p049",
    name: "Tweed Cabinet Cloth",
    category: "Cabinet & Covering",
    partType: "Tolex",
    specs: "Natural cotton tweed (lacquered), sold by the yard",
    application: "Original Fender tweed-era cabinet covering (late 1940s-1960). Tweed Champ, Bassman, Deluxe, Princeton, Harvard. Requires lacquer overcoat after installation for period-correct finish and water resistance.",
    tags: ["tweed", "cabinet", "covering", "fender", "vintage", "1950s", "cosmetic", "lacquer"],
    vendors: [
      { name: "Mojotone", url: "https://www.mojotone.com/amp-parts/Tolex-Grill-Cloth/TOLEX", partNumber: "", price: null, notes: "Lacquered tweed cloth" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Harder to work with than vinyl tolex — corners require careful V-cuts and overlapping folds. Requires nitrocellulose lacquer overcoat for durability. Apply contact cement to the cabinet and back of cloth. Finishing with lacquer also darkens the tweed slightly — test on a scrap first."
  },
  {
    id: "p050",
    name: "Contact Cement (Tolex/Cabinet)",
    category: "Cabinet & Covering",
    partType: "Adhesive",
    specs: "Neoprene-based contact cement, solvent-based, brush or roller application. Common brands: DAP Weldwood Original, 3M Fastbond 30.",
    application: "Adhering tolex, vinyl, and tweed cloth to amp cabinets. Apply thin coat to both surfaces, allow to tack (5-15 min), then press together. Bond is immediate and permanent — no repositioning.",
    tags: ["contact cement", "adhesive", "tolex", "tweed", "cabinet", "dap", "weldwood", "3m"],
    vendors: [
      { name: "Home Depot", url: "https://www.homedepot.com", partNumber: "00272 (DAP Weldwood Original, 32 oz)", price: null, notes: "Also at Lowe's and hardware stores" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=DAP+Weldwood+original+contact+cement", partNumber: "", price: null, notes: "1 qt and 1 gal sizes" }
    ],
    notes: "Use solvent-based ONLY (original formula, tan color). Water-based Weldwood is for wood, not vinyl — it will not bond tolex reliably and can cause adhesion failure over time. Test on a scrap of tolex first; some vinyl formulations are sensitive to the solvents. Work in a well-ventilated area. Once both tacked surfaces meet, the bond is permanent."
  },

  // ── PEAVEY ───────────────────────────────────────────────────────────────

  {
    id: "p051",
    name: "EL84 Output Tube (Peavey Classic 30)",
    category: "Peavey",
    partType: "Vacuum Tube",
    specs: "EL84/6BQ5, 9-pin noval, 300V max plate, 12W plate dissipation, class AB push-pull. Classic 30 uses a matched quad (4 tubes). B+ is ~400V — above the standard spec, so use EL84M/7189-rated tubes.",
    application: "Output power stage in Peavey Classic 30. The C30 runs EL84s harder than most European designs — B+ is ~400V vs the typical 300V European rail. This stresses standard EL84s. Use Sovtek EL84M (7189-rated) or JJ EL84 for longevity.",
    tags: ["tube", "el84", "6bq5", "peavey", "classic 30", "output", "power tube", "noval", "quad"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Order matched quad; specify EL84M/7189 grade for higher voltage tolerance" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-EL84-SOVT-M", price: null, notes: "Sovtek EL84M — 7189 rated, preferred for C30 B+ voltage" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "JJ EL84 also acceptable; avoid ultra-budget tubes at this voltage" }
    ],
    notes: "The Classic 30's ~400V B+ is the critical fact here — standard EL84 tubes are rated 300V max plate. Sovtek EL84M and JJ EL84 are the two most field-proven choices. Bias is FIXED (non-adjustable) — no bias probe needed, but also no correction possible if tubes are out of spec. The heater circuit is wired in series (not parallel) — when one tube's heater socket lifts off the PCB, ALL four heaters go dark. This is the #1 silent-output failure mode on Classic 30s. Reflow ALL four output tube socket solder joints whenever you do a tube swap."
  },
  {
    id: "p052",
    name: "12AX7 Preamp Tubes — Peavey Classic 30 Set (V1-V3)",
    category: "Peavey",
    partType: "Vacuum Tube",
    specs: "Three 12AX7/ECC83 dual triodes. V1: input gain / clean channel; V2: second gain stage / OD channel (switching adds V2 into chain); V3: phase inverter driver. Heaters wired in series on +36VDC rail — replace all three with same brand/lot to maintain equal heater voltage distribution.",
    application: "Full preamp tube set for Peavey Classic 30. Tubes are labeled V1-V3 viewed left to right from the REAR of the chassis. The C30 is not a true 2-channel design — the channel switch adds V2 into the signal chain for the OD channel.",
    tags: ["tube", "12ax7", "ecc83", "preamp", "peavey", "classic 30", "v1", "v2", "v3", "triode"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Order a matched set of 3; Tung-Sol and JJ ECC83S both popular" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-12AX7-TUNG", price: null, notes: "Tung-Sol 12AX7 — reliable, low-noise" }
    ],
    notes: "CRITICAL: The Classic 30 heater circuit runs all three 12AX7 heaters in SERIES on a +36VDC supply (not the standard 6.3VAC parallel wiring). If you mix tube brands, each tube draws different heater current, which unequally distributes the 36V across three different internal resistances — one tube may run too hot, one too cool. Always replace all three at once with same brand and ideally same production lot. Sovtek 12AX7LPS is frequently recommended for V3 (PI driver) for its lower noise floor."
  },
  {
    id: "p053",
    name: "Classic 30 Electrolytic Recap Kit (PCK-30)",
    category: "Peavey",
    partType: "Capacitor Kit",
    specs: "Full electrolytic capacitor replacement set for original mid-1990s Peavey Classic 30. Kit contents: (2) 47µF/500V, (3) 22µF/500V, (2) 2200µF/50V, (1) 100µF/25V, (9) 22µF/50V, (2) 10µF/50V, (1) 2.2µF/50V. NOT for Classic 30 II (2013+ reissue).",
    application: "Power supply filter capacitor replacement for aged Classic 30s. The HT filter caps (47µF and 22µF at 500V) are the first to fail — they can leak, short, or lose capacitance. A shorted HT filter cap will take out the rectifier diode bridge. The small 22µF/50V cathode bypass caps also dry out and cause tone/gain degradation.",
    tags: ["capacitor", "electrolytic", "recap", "peavey", "classic 30", "filter cap", "power supply", "kit"],
    vendors: [
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/peaveycapkits.htm", partNumber: "PCK-30", price: 76.95, notes: "Original mid-1990s Classic 30 only — not the reissue" },
      { name: "Reverb (individual kit)", url: "https://reverb.com/item/23826265-peavey-classic-30-recap-kit-power-supply-filter-capacitor-set-f-t-nichicon", partNumber: "", price: null, notes: "F&T/Nichicon sourced caps" }
    ],
    notes: "Always recap when the amp is in for a full service or when the owner reports tone loss, low output, or hum. The two 47µF/500V HT filter caps are the primary failure points. If one has failed, replace both plus the four bridge rectifier diodes (1N4007 or equivalent). The folded PCB design makes access difficult — take photos before disconnecting any board jumpers. The inter-board jumpers are uninsulated and crack with repeated flexing; replace any that show stress cracks. KIT IS FOR ORIGINAL 1990s MODEL ONLY — confirm serial number era before ordering."
  },
  {
    id: "p054",
    name: "Classic 30 Tube Socket Solder Reflow",
    category: "Peavey",
    partType: "Repair Note",
    specs: "N/A — documented failure mode, not a stocked part. Tube socket terminal pins lift from PCB pads due to thermal cycling and mechanical stress from plug-in heavy tubes.",
    application: "Peavey Classic 30 and Delta Blues — both share the same PCB-mounted tube socket design. The most common cause of total or intermittent output failure after ruling out tubes. EL84 heaters are wired in series; a single lifted pin kills all four output tube heaters simultaneously. JJ EL84 pins are slightly undersized and can arc.",
    tags: ["peavey", "classic 30", "tube socket", "solder", "reflow", "repair", "pcb trace", "failure mode"],
    vendors: [],
    notes: "When a Classic 30 has no output and all four EL84s are dark (no heater glow), suspect a lifted tube socket pin before anything else. Reflow ALL solder joints on the output tube socket PCB with fresh rosin-core solder and a temperature-controlled iron (~350°C). Also check the uninsulated inter-board jumper wires — they crack from flexing. Do not use JJ EL84s if arcing has occurred (pin OD is slightly undersized) — use Sovtek EL84M or Electro-Harmonix instead. This repair is free except for solder and time; alert the customer before spending money on new tubes."
  },
  {
    id: "p055",
    name: "6L6GC Output Tubes — Peavey Classic 50 (Quad)",
    category: "Peavey",
    partType: "Vacuum Tube",
    specs: "6L6GC, beam power tetrode, 8-pin octal, 500V max plate, 30W dissipation. Classic 50 uses four 6L6GC tubes in class AB push-pull configuration. Fixed bias with adjustable trim pot (unlike Classic 30). Bias supply derived from -27V secondary rail.",
    application: "Output power stage in Peavey Classic 50 (50W). The Classic 50 uses a FIXED bias with a bias adjustment trim pot — unlike the Classic 30, bias CAN be set. Factory spec is approximately -55V grid bias. The -27V supply rail feeds the bias circuit, the reverb opamp, and the relay control — a failing 4558 opamp can drag down this rail and cook the output tubes.",
    tags: ["tube", "6l6gc", "6l6", "peavey", "classic 50", "output", "power tube", "octal", "quad", "fixed bias"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Matched quad; Tung-Sol 6L6GCM or Sovtek 5881 both reliable" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-6L6GC", price: null, notes: "" }
    ],
    notes: "Unlike the Classic 30, the Classic 50 has adjustable bias — check it whenever replacing output tubes. Factory spec is approximately -55V at the power tube grids. Bias is set via trim pot on the main PCB. CRITICAL DIAGNOSTIC: If output tubes are cooking or burning up repeatedly, check for -27V at pin 4 of the reverb 4558 opamp before assuming a tube problem. A bad 4558 drags down the -27V rail, which collapses the grid bias supply and removes bias protection from the output stage. Replace the 4558 first. Also: Peavey's standby switch topology leaves B+ on the output tube plates even in standby — always switch off BOTH standby and power before swapping tubes."
  },
  {
    id: "p056",
    name: "Classic 50 Electrolytic Recap Kit (PCK-50)",
    category: "Peavey",
    partType: "Capacitor Kit",
    specs: "Full electrolytic replacement set for original mid-1990s Peavey Classic 50. Kit contents: (3) 47µF/500V, (2) 22µF/500V, (1) 2200µF/50V radial, (1) 1000µF/35V radial, (8) 22µF/50V, (3) 2.2µF/50V. NOT for Classic 50 II (2013+ reissue).",
    application: "Power supply and cathode bypass capacitor replacement for the original Classic 50. Three HT filter caps at 47µF/500V — one more than the Classic 30 due to higher power. Cathode bypass caps on 12AX7 stages dry out and cause loss of gain and altered tone.",
    tags: ["capacitor", "electrolytic", "recap", "peavey", "classic 50", "filter cap", "power supply", "kit"],
    vendors: [
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/peaveycapkits.htm", partNumber: "PCK-50", price: 69.95, notes: "Original mid-1990s Classic 50 only — not the reissue" }
    ],
    notes: "Same general notes as Classic 30 recap, but three HT caps instead of two. Verify model year before ordering — 2013+ Classic 50 II has a different PCB layout and cap complement. After recap, verify the -27V supply rail is correct before powering under load."
  },
  {
    id: "p057",
    name: "MJ15015 / MJ15016 Power Transistors (Peavey Bandit Transtube)",
    category: "Peavey",
    partType: "Transistor",
    specs: "MJ15015: NPN, TO-3 metal can, 120V, 15A, 180W. MJ15016: PNP complement, TO-3 metal can, 120V, 15A, 180W. Complementary pair for class AB push-pull output stage. Older Bandits may list 2N3055A (NPN) and 2N6228 (PNP) as alternates.",
    application: "Main output transistors in Peavey Bandit 112 Transtube and related solid-state amps (Solo, Delta Blues SS, Studio Pro). Mounted on the heat sink. Peavey service literature lists MJ15015/MJ15016 as the primary replacements. Peavey internal part numbers: 83100 (MJ15015) and 73100 (MJ15016).",
    tags: ["transistor", "power transistor", "peavey", "bandit", "transtube", "mj15015", "mj15016", "to-3", "solid state", "output stage"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "511-MJ15015 / 511-MJ15016", price: null, notes: "ON Semiconductor, TO-3 metal can" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "MJ15015-ND / MJ15016-ND", price: null, notes: "Standard stock items" },
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com", partNumber: "", price: null, notes: "Amp-specific source for these" }
    ],
    notes: "Always replace as a matched complementary pair. Use thermal compound (non-conductive silicone) on all TO-3 contacts to the heat sink — the cases are electrically live on these transistors. Use insulating mica washers and shoulder washers to isolate the case from the chassis. Failure to isolate will create a direct short to ground. After replacement, confirm DC offset at the speaker output terminal is under 50mV before connecting a speaker. Check bias current per schematic. Older amp revisions used 2N3055A/2N6228 — MJ15015/16 are direct upgrades."
  },
  {
    id: "p058",
    name: "4558 Dual Op-Amp (Peavey Bandit / Classic 50 / Transtube)",
    category: "Peavey",
    partType: "IC / Op-Amp",
    specs: "RC4558 / NJM4558 / LM4558 — dual op-amp, DIP-8, ±18V supply, unity-gain stable, 1MHz GBW. Pin-compatible across all manufacturer variants.",
    application: "Reverb send/receive circuit in Classic 50 and Classic 30 (reverb opamp). Tone-shaping and signal stages in Bandit Transtube. The Classic 50's 4558 at the reverb position is especially critical — it sits on the -27V rail, and a failing 4558 drags down the bias supply and destroys output tubes.",
    tags: ["op-amp", "ic", "4558", "rc4558", "peavey", "classic 50", "bandit", "transtube", "reverb", "dip-8"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "595-RC4558P", price: null, notes: "TI RC4558P, DIP-8, standard" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "296-14269-5-ND", price: null, notes: "NJM4558D (JRC) — popular audio variant" },
      { name: "Amazon", url: "https://www.amazon.com/s?k=RC4558+DIP-8", partNumber: "RC4558", price: null, notes: "Buy a strip of 10 — cheap and commonly needed" }
    ],
    notes: "The NJM4558D (JRC) is considered a slightly warmer-sounding variant and is popular in boutique pedals — but for amp repair any standard RC4558 or LM4558 is fine. For the Classic 50 specifically: when output tubes keep failing, replace the 4558 in the reverb circuit BEFORE replacing tubes. The -27V rail collapse caused by a bad 4558 is the #1 misdiagnosed cause of repeated output tube failure on Classic 50s. Confirm pin orientation before installing — DIP-8 chips are easily reversed."
  },
  {
    id: "p059",
    name: "Peavey DDT Circuit — Failure Notes",
    category: "Peavey",
    partType: "Repair Note",
    specs: "DDT (Distortion Detection Technology/Technique) — Peavey's proprietary limiter circuit used in solid-state power amps (CS series, PV series, bass amps). Compares input to output; engages when clipping or current limiting is detected. Implemented around a JFET and electrolytic coupling capacitors.",
    application: "Peavey CS-series (CS800, CS1000, CS4000) and PV-series power amps. When DDT LED lights and won't clear, or when amp is stuck in limiting on power-up, suspect aged electrolytics in the DDT circuit. Key suspects: electrolytic NP cap on the input board (behind input jacks), C203 on U200 input, C207 across the DDT JFET, C206 on the U100 output.",
    tags: ["peavey", "ddt", "distortion detection", "cs800", "cs1000", "pv series", "limiter", "repair", "electrolytic"],
    vendors: [],
    notes: "The DDT circuit itself is reliable in Peavey's own assessment — failures are almost always aging electrolytic capacitors on the associated input/output nodes rather than the core circuit topology. When a PV or CS amp powers up with the DDT LED permanently lit and no audio, start with C203, C206, and C207. These are small-value electrolytics (typically 10µF-47µF at 25-50V). Also check the NP (non-polarized) electrolytic at the input board. The JFET in the DDT circuit (J111 or similar) can fail but is less common. After recapping, verify by measuring input vs output tracking at low levels."
  },
  {
    id: "p060",
    name: "Peavey Valveking 112/212 — Tubes and Known Issues",
    category: "Peavey",
    partType: "Repair Note",
    specs: "Power tubes: four 6L6GC in class AB. Preamp tubes: three 12AX7. Phase inverter: 12AT7 (not 12AX7 despite chassis label). Total: 3x 12AX7 + 1x 12AT7 + 4x 6L6GC. Heater circuit runs three 12AX7 heaters in SERIES on DC supply (same as Classic 30) — must replace all three with same brand.",
    application: "Peavey Valveking 112 (50W) and 212 (100W). Fixed bias with NO factory adjustment pot — the amp leaves the factory at a conservative (cool) bias point. A bias adjustment mod (adding a trim pot) is a common and relatively simple modification. Some techs add a bias probe tap as part of a service.",
    tags: ["peavey", "valveking", "vk112", "vk212", "6l6gc", "12ax7", "12at7", "fixed bias", "hum", "repair", "tubes"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Full retube kits available for Valveking" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "Three known Valveking issues: (1) HUM — very common. Caused by the DC-heated series heater circuit. Different-brand preamp tubes draw different heater currents and create an unequal DC voltage split that shows up as 60Hz hum. Fix: replace all three 12AX7s with the same brand from the same lot. (2) FIXED BIAS — runs cool from factory. Redplated tubes are unlikely, but tone is compromised. Bias mod is popular; adds trim pot at R63. (3) PHASE INVERTER TUBE — the chassis silk-screen says 12AX7 for all preamp positions, but the PI position (V4 in some revisions) uses a 12AT7. Check the schematic for your specific revision before ordering."
  },
  {
    id: "p061",
    name: "Peavey OEM Parts — Sourcing Reference",
    category: "Peavey",
    partType: "Sourcing Note",
    specs: "Peavey Electronics Corporation maintains an active parts department for legacy and current models. Schematics are available by request via serial number. Direct ordering available by phone and email.",
    application: "Sourcing Peavey-specific items: transformers, knobs, logo badges, plastic chassis parts, potentiometers, and model-specific PCBs that are not available from third-party amp suppliers.",
    tags: ["peavey", "oem", "parts", "sourcing", "transformer", "schematic", "support"],
    vendors: [
      { name: "Peavey Parts Dept (phone)", url: "https://peavey.com/contact-us/", partNumber: "", price: null, notes: "1-800-752-7896 — toll-free; M-F 8am-5pm Central" },
      { name: "Peavey Parts Dept (email)", url: "https://peavey.com/contact-us/", partNumber: "", price: null, notes: "[email protected]" },
      { name: "Full Compass", url: "https://www.fullcompass.com/brand/pve-peavey/accessories/parts-replacement-service/", partNumber: "", price: null, notes: "Authorized Peavey service distributor; OEM parts stocked" },
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/peavey.htm", partNumber: "", price: null, notes: "Third-party; Peavey-spec caps, pots, hardware" },
      { name: "British Audio", url: "https://britishaudio.com/collections/peavey-parts", partNumber: "", price: null, notes: "Small selection of Peavey-specific hardware" }
    ],
    notes: "Peavey will email or fax the schematic for virtually any amp they ever made if you provide the serial number — call their service line. For transformers (output and power), Peavey OEM is often the best price point; Mercury Magnetics does NOT catalog most Peavey models. Third-party suppliers (Full Compass, Amp Repair Parts) stock common consumables. Cabinet tolex: Peavey used a distinctive dark charcoal/black textured vinyl, not identical to Fender black tolex — Mojotone, Amplified Parts, and New Old Sounds each carry close-match patterns; order a sample before committing to a full re-cover."
  },

  // ── MESA BOOGIE ──────────────────────────────────────────────────────────

  {
    id: "p062",
    name: "Mesa Boogie Dual Rectifier — Tubes & Configuration",
    category: "Mesa Boogie",
    partType: "Repair Note",
    specs: "Power tubes: 4x 6L6GC (stock) or 4x EL34 (switchable). Rectifier tubes: 2x 5U4GB (tube rectifier mode). Preamp tubes: typically 5x 12AX7. Output: 100W class AB. Bias: fixed (non-adjustable, factory resistor-set). B+ varies by rectifier mode.",
    application: "Mesa Boogie Dual Rectifier Solo Head and combos (all revisions, 1989–present). The bias switch on the rear panel MUST match the tube type installed — wrong switch position with mismatched tubes will burn output tubes and potentially char resistors in the bias supply.",
    tags: ["mesa boogie", "dual rectifier", "6l6gc", "el34", "5u4gb", "rectifier", "power tube", "fixed bias", "100w"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Matched quads for 6L6 or EL34; specify Dual Rectifier application" },
      { name: "Mesa Boogie Store", url: "https://store.mesaboogie.com", partNumber: "", price: null, notes: "Mesa-branded 6L6 and 5U4GB; factory-tested and matched" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-6L6GC / T-EL34 / T-5U4GB", price: null, notes: "" }
    ],
    notes: "BIAS IS FIXED — Mesa hard-wires resistors to factory-set values. There is NO bias pot and NO adjustment needed or possible without circuit modification. When swapping between 6L6 and EL34, flip the BIAS SELECT switch on the rear panel BEFORE installing tubes — failure to do this is the most common cause of immediate tube failure and burned bias supply resistors. The rectifier switch selects between the two 5U4GB tubes (tube rect) and solid-state diodes. Tube rectifier mode produces lower B+ and characteristic sag; SS mode increases B+ by ~30-50V and hardens attack. When troubleshooting intermittent output, check the relay switching circuit and VTL5C1 opto-isolator (channel switching) before suspecting tubes or transformers."
  },
  {
    id: "p063",
    name: "5U4GB Rectifier Tube (Mesa Boogie Dual / Triple Rectifier)",
    category: "Mesa Boogie",
    partType: "Vacuum Tube",
    specs: "5U4GB, full-wave rectifier, 8-pin octal, 400V max B+ per half, 275mA max current, 5V 3A heater. Dual Rectifier uses 2x 5U4GB; Triple Rectifier uses 3x 5U4GB (number active varies with power mode selection).",
    application: "Tube rectification in Mesa Boogie Dual Rectifier and Triple Rectifier. Both tubes must be replaced as a pair on the Dual Rec. The 5U4GB is a heavier-duty version of the 5U4 — do NOT substitute 5AR4/GZ34 (different current rating and recovery characteristics).",
    tags: ["tube", "5u4gb", "rectifier", "mesa boogie", "dual rectifier", "triple rectifier", "octal", "sag"],
    vendors: [
      { name: "Mesa Boogie Store", url: "https://store.mesaboogie.com/products/rectifier-tube-5u4gb.html", partNumber: "5U4GB", price: null, notes: "Factory-matched for Rectifier series" },
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Sovtek or Electro-Harmonix 5U4GB" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "T-5U4GB", price: null, notes: "" }
    ],
    notes: "The 5U4GB is distinct from the 5AR4/GZ34 — do not substitute. Mesa's own branded 5U4GB is re-labeled Sovtek production and is reliable. When the amp is in SS rectifier mode, the 5U4GBs are bypassed (not stressed) — they only fail in tube rectifier mode. Replace both simultaneously. A shorted 5U4GB can spike B+ and stress the output tubes; if output tubes fail mysteriously, check the rectifiers."
  },
  {
    id: "p064",
    name: "VTL5C1 Vactrol Opto-Isolator (Mesa Boogie Channel Switching)",
    category: "Mesa Boogie",
    partType: "IC / Opto-Isolator",
    specs: "VTL5C1 (Vactec/PerkinElmer Vactrol) — LED + CdS photoresistor in one package, through-hole, 2-terminal LED + 2-terminal LDR. Rise time ~5ms, fall time ~50ms. Used as a single-throw analog switch for channel selection.",
    application: "Channel switching in Mesa Boogie Dual Rectifier, Triple Rectifier, Lonestar, Mark series, and many Fender amps. The VTL5C1 is the FX loop opto-isolator as well as the channel switching element. When channel switching becomes erratic, delayed, or fails in one direction, the VTL5C1 is the primary suspect.",
    tags: ["opto-isolator", "vactrol", "vtl5c1", "mesa boogie", "channel switching", "fx loop", "fender", "photoresistor"],
    vendors: [
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com/products/optocoupler-xvive-vtl5c1-vactrol-channel-switching", partNumber: "VTL5C1", price: null, notes: "Xvive reproduction — most available current source" },
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/mesaparts.htm", partNumber: "VTL5C1", price: 4.95, notes: "Revisit/Xvive brand" },
      { name: "eBay / Reverb", url: "https://reverb.com", partNumber: "VTL5C1", price: null, notes: "NOS PerkinElmer originals occasionally available — command a premium" }
    ],
    notes: "Original PerkinElmer/Vactec VTL5C1 production has largely ceased. The Xvive reproduction is the standard replacement and is RoHS-compliant. Fall-time (~50ms) is slightly faster on some reproductions — usually unnoticeable in switching duty. Keep 3-5 on hand. Also used in Fender amps with opto channel switching. If purchasing for Mesa, confirm the specific model — some later Rectifier revisions use relays instead of Vactrols for primary switching. Check the schematic."
  },
  {
    id: "p065",
    name: "Mesa Boogie Tube Retainer Clips",
    category: "Mesa Boogie",
    partType: "Hardware",
    specs: "Spring steel clip, mounts to tube socket or chassis near tube. Multiple types: octal-base clip (for 6L6/EL34/5U4GB) and noval clip (for EL84 in TransAtlantic/Mini Rectifier). Also: KT88-specific clip for amps using KT88s.",
    application: "Retains power tubes against vibration in Mesa Boogie combo amps and heads. Mesa combo amps are particularly prone to tube rattle and intermittent contact from amp body vibration during live use. The clips prevent tubes from walking out of their sockets.",
    tags: ["mesa boogie", "tube retainer", "tube clip", "spring clip", "octal", "el84", "kt88", "hardware"],
    vendors: [
      { name: "Mesa Boogie Store (octal)", url: "https://store.mesaboogie.com/categories/shop/hardware/tube-retainers-shields.html", partNumber: "", price: null, notes: "Genuine OEM clips; order by tube type" },
      { name: "Mesa Boogie Store (EL84)", url: "https://store.mesaboogie.com/products/tube-retainer-clip-for-el84-power-tubes-for-transatlantic-ta-15-mini-rectifier-25.html", partNumber: "", price: null, notes: "Specific to TransAtlantic TA-15 and Mini Rectifier 25" },
      { name: "Tube Amp Doctor", url: "https://www.tubeampdoctor.com/en/tube-clamp/retainer-for-octal-base-tubes-6l6gc/el34", partNumber: "TC", price: null, notes: "Generic octal retainer; also fits Fender and Laney" }
    ],
    notes: "Mesa OEM clips are the correct choice for warranty or premium service. The generic Tube Amp Doctor octal clip (part TC) fits most Mesa octal sockets and is a cheaper alternative for customer-pay repairs. When a Mesa combo amp exhibits intermittent crackling or dropout that gets worse when the amp vibrates (thump the cabinet), check tube seating and retainer clip integrity before doing any other diagnosis."
  },
  {
    id: "p066",
    name: "Accutronics 4AB3C1B Reverb Tank (Mesa Boogie)",
    category: "Mesa Boogie",
    partType: "Reverb Tank",
    specs: "Long (16-3/4\") 2-spring tank. Input impedance: 8Ω. Output impedance: 2250Ω. Decay: long (2.75–4.0 sec). Connectors: opposite ends. Input: insulated. Mount: horizontal, open side down. Accutronics type code: 4=long 2-spring, A=8Ω input, B=2250Ω output, 3=long decay, C=opposite-end connectors, 1=insulated input, B=horizontal mount.",
    application: "Reverb tank in Mesa Boogie Mark IIC+, Mark III, Mark IV, and related models. Also fits Fender Princeton Reverb, Deluxe Reverb, Vibrolux Reverb, Super Reverb, and Twin Reverb (where input/output impedances match). Verify the label on the original tank before ordering — decode the part number to confirm impedance match.",
    tags: ["reverb tank", "accutronics", "4ab3c1b", "spring reverb", "mesa boogie", "mark series", "fender", "2-spring"],
    vendors: [
      { name: "Amplified Parts", url: "https://www.amplifiedparts.com/products/reverb-tank-accutronics-4ab3c1b-long-decay-2-spring", partNumber: "4AB3C1B", price: null, notes: "Genuine Accutronics/Belton" },
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/mesaparts.htm", partNumber: "4AB3C1B", price: 46.95, notes: "Revisit brand (Accutronics equivalent)" },
      { name: "StewMac", url: "https://www.stewmac.com/electronics/amps/components-and-parts/reverb-tanks-and-parts/accutronics-reverb-tank/", partNumber: "4AB3C1B", price: null, notes: "" },
      { name: "Antique Electronic Supply", url: "https://www.tubesandmore.com", partNumber: "", price: null, notes: "" }
    ],
    notes: "ALWAYS read the part number off the original tank label before ordering. The Accutronics number encodes every critical spec — wrong impedance tank produces weak, shrill, or no reverb. The 4AB3C1B is the most common Mesa Mark-series tank. Smaller Mesa combos (Mark V:25, Mini Rectifier) use shorter tanks — confirm with a ruler. Reverb tank connectors use RCA phono plugs; carry a few RCA cables and plugs to test tanks on the bench with a signal source before installing."
  },
  {
    id: "p067",
    name: "Mesa Boogie Potentiometers — OEM Replacements",
    category: "Mesa Boogie",
    partType: "Potentiometer",
    specs: "Mesa uses custom-taper CTS-based pots with a 1/4\" D-shaft. Available in: A25K, B25K, A100K, B100K, A250K (5% and 20%), B250K, A1M (10% and 20%), B1M. Also: CTS with push-pull switch (A1M), and 3/8\" bushing variants for chassis-mount applications.",
    application: "Replacement tone, volume, and presence controls for all Mesa Boogie amplifiers. Mesa uses custom audio tapers — standard CTS pots from guitar parts suppliers may not match the curve. Order Mesa-specific pots for best results on customer amps.",
    tags: ["potentiometer", "pot", "mesa boogie", "cts", "d-shaft", "audio taper", "volume", "tone", "oem"],
    vendors: [
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/mesaparts.htm", partNumber: "P-MB-A250K (etc.)", price: 8.95, notes: "Full range of Mesa-spec pots; see P-MB-xxxx series" },
      { name: "Mesa Boogie Store", url: "https://store.mesaboogie.com", partNumber: "", price: null, notes: "Factory OEM — most expensive but exact spec" }
    ],
    notes: "Mesa's custom taper pots (e.g., 5% audio taper A250K or 10% audio taper A1M) produce a response curve that differs from a standard CTS A250K. Using a standard pot in a Mesa presence or gain position will feel and track differently than original. For warranty or premium service, use Mesa OEM or Amp Repair Parts Mesa-spec units (P-MB-xxxx series). For budget repairs, a standard CTS A250K or B250K is functionally acceptable but will change the control feel. Push-pull pot (P-MBLS-A1M, $14.95) used in some Mark series wattage switches."
  },
  {
    id: "p068",
    name: "Mesa Boogie — Bias System Reference",
    category: "Mesa Boogie",
    partType: "Repair Note",
    specs: "ALL production Mesa Boogie amplifiers use FIXED BIAS (grid bias via resistor divider, not cathode bias). No adjustment pot is present from the factory. The Mark V 10W mode is an exception — that mode runs the two center tubes in cathode bias as a Class A sub-circuit; the outer pair remain on the fixed grid bias supply as dummy loads.",
    application: "Understanding which Mesa amps require a bias probe and which don't — the answer is: NONE from the factory. However, some techs add a bias mod (trim pot) for more flexibility. The Lonestar has a BIAS SELECT switch that changes the bias resistor values to accommodate 6L6 vs EL34 tube types — not a bias adjustment, just a type-selection switch.",
    tags: ["mesa boogie", "bias", "fixed bias", "cathode bias", "mark v", "lonestar", "dual rectifier", "adjustment", "repair note"],
    vendors: [],
    notes: "Mesa's design philosophy: factory resistors are matched to the specific tube type and operating point. No pot means no drift, no user error. When tubes are replaced, no biasing is required — plug in new tubes and play. However, tube-to-tube variation in the same production batch can mean some tubes run slightly hotter or cooler than ideal within Mesa's hard-wired bias point. For techs wanting more control: an adjustable bias mod exists for most models (trim pot replacing a fixed resistor). Document any such modification for the customer. DO NOT use a bias probe that routes cathode current to ground through a test resistor — on Mesa's PCB layout, the cathode point may not be accessible via probe; use the recommended measurement technique in the service manual."
  },
  {
    id: "p069",
    name: "Mesa Boogie — Fuse Values Reference",
    category: "Mesa Boogie",
    partType: "Repair Note",
    specs: "Fuse type for all models: AGC (3AG) Slo-Blo type, 1/4\" x 1-1/4\". Values by model: Dual Rectifier (100W) — 4A Slo-Blo. Triple Rectifier (150W) — 4A or 5A Slo-Blo (verify on chassis label). Mark IV — 3A Slo-Blo. Lonestar (full) — 4A Slo-Blo. Lonestar Special — 2A Slo-Blo. All domestic US 120V mains.",
    application: "Mains AC fuse replacement for Mesa Boogie amplifiers. Fuse is typically in a chassis-accessible holder on the rear panel. A blown fuse on a Mesa is almost always caused by a power tube failure — replace fuse only after identifying and replacing the failed tube.",
    tags: ["mesa boogie", "fuse", "slo-blo", "dual rectifier", "mark iv", "lonestar", "4A", "3A", "2A", "mains", "AGC"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "534-0312004.MXP (4A) / 534-0312003.MXP (3A) / 534-0312002.MXP (2A)", price: null, notes: "Littelfuse 3AG Slo-Blo series; specify value by model" },
      { name: "DigiKey", url: "https://www.digikey.com", partNumber: "", price: null, notes: "Littelfuse or Bel Fuse 3AG Slo-Blo" },
      { name: "Mesa Boogie Store", url: "https://store.mesaboogie.com/categories/shop/hardware/fuses-fuse-caps-holders.html", partNumber: "", price: null, notes: "Genuine Mesa fuses and fuse caps" }
    ],
    notes: "Always match Slo-Blo type — a Fast-Blow fuse of the same amperage will blow on startup inrush. ALWAYS diagnose why the fuse blew before simply replacing it. On Mesa amps, a blown main fuse without an obvious cause (lightning, accidental short) almost always means a shorted output tube or rectifier tube. Pull all power tubes and rectifiers, replace the fuse, and power up briefly to confirm the fuse holds — then reinstall tubes one at a time to identify the failed device."
  },
  {
    id: "p070",
    name: "Mesa Boogie Mark V — Simul-Class Tube Configuration",
    category: "Mesa Boogie",
    partType: "Repair Note",
    specs: "4x 6L6GC (stock) or EL34 switchable via rear BIAS SELECT. Power modes: 90W (all four tubes, true Simul-Class AB), 45W (inner pair only, extended Class A region), 10W (cathode-biased pair, Class A). Simul-Class: the two inner and two outer tube pairs run at different bias points simultaneously — one pair in deeper Class AB, one in more Class A-like territory.",
    application: "Understanding Simul-Class for service and retubing. When running EL34s in the Mark V, MUST use VARIAC (Spongy) power mode — the EL34s run too hot in Bold mode. The 45W mode runs only the inner pair; if an inner-pair tube fails, the amp drops to 45W asymmetrically. The 10W cathode-bias mode only engages the inner pair in a self-biasing configuration.",
    tags: ["mesa boogie", "mark v", "mark series", "simul-class", "6l6gc", "el34", "90w", "45w", "10w", "cathode bias", "class a"],
    vendors: [
      { name: "Tube Depot", url: "https://www.tubedepot.com", partNumber: "", price: null, notes: "Eurotubes and Tube Depot offer Mark V-specific matched sets" },
      { name: "Eurotubes", url: "https://www.eurotubes.com/product/mesa-boogie-mark-v-simul-class-full-retube-kits/", partNumber: "", price: null, notes: "Mark V Simul-Class full retube kits" }
    ],
    notes: "The most common Mark V failure: a shorted coupling capacitor (.1µF 600V, orange drop-type) on one channel will remove bias from that side's tube pair and cause red-plating. Replace the two coupling caps as a MATCHED PAIR (both at once) — they are located on the main PCB and accessed by lifting the board. If one tube is visibly red-plating, pull power immediately and check the coupling cap for the corresponding channel before powering back up. The 45W mode leaves the outer pair with no signal but still powered — a shorted outer tube in 45W mode is not immediately obvious from listening. Visually inspect all four tubes in darkness for any glow at the plate seams."
  },
  {
    id: "p071",
    name: "Mercury Magnetics Transformers — Mesa Boogie",
    category: "Mesa Boogie",
    partType: "Transformer",
    specs: "Drop-in replacement output and power transformers for select Mesa Boogie models. Output transformers: MESAB-DC5-O (DC-5, $227), MESA-NOMAD45-O (Nomad 45, $201), MBRK-O (Road King, $371), MESA-2:100-OT (2:100 power amp, $303), MESA-2:100R-O (2:100 Recto, $366), MESAB-F30-O (F30). Power transformers: MESAB-DC5-P (DC-5, $296), MESAB-DUALR-P (Dual Rectifier, $352), MESA-LONES-P-E (Lonestar, $396), MESA-TRIPLE-REC-P (Triple Rectifier, $377), MBRK-P / MBRKII-P (Road King I/II, $377/$390), MESAB-STUDIO22-P (Studio 22, $208).",
    application: "Output transformer failure (DC resistance increase, shorted turns, failed primary) or power transformer failure in Mesa Boogie amplifiers. Mercury Magnetics transformers are marketed as sonic upgrades as well as replacements — they use vintage-spec core materials and are hand-wound in the USA.",
    tags: ["transformer", "output transformer", "power transformer", "mercury magnetics", "mesa boogie", "dual rectifier", "road king", "dc-5", "nomad"],
    vendors: [
      { name: "Mercury Magnetics", url: "https://www.mercurymagnetics.com/make/mesa-boogie/", partNumber: "See MESAB-DC5-O, MBRK-O, etc.", price: null, notes: "Call 818-998-7791 for current availability; catalog constantly updated" }
    ],
    notes: "Mercury Magnetics does NOT catalog every Mesa model — the Mark II, Mark III, Mark IV, and Mark V output transformers are notably absent from the publicly listed catalog (as of research date). For those models, Mesa OEM is the primary replacement source (available through Mesa Boogie's service network) or Heyboer Transformers (custom wind). Call MM before ordering — they may wind custom units for models not in the public catalog. The Dual Rectifier power transformer (MESAB-DUALR-P, $352) is a flat-mount 120V design and a direct drop-in. Significant price point — confirm the OT is actually failed (not just a tube or filter cap issue) before committing."
  },
  {
    id: "p072",
    name: "Mesa Boogie OEM Parts — Sourcing Reference",
    category: "Mesa Boogie",
    partType: "Sourcing Note",
    specs: "Mesa Boogie maintains an online factory store (store.mesaboogie.com) with genuine OEM parts: tubes, fuses, knobs, handles, switches, jacks, potentiometers, reverb tanks, tube retainers, and chassis hardware.",
    application: "Sourcing Mesa-specific components unavailable from general amp parts suppliers. Particularly: Mesa-branded tubes (factory matched), custom taper pots, chassis-specific hardware, and cosmetic parts (knobs, handles).",
    tags: ["mesa boogie", "oem", "parts", "sourcing", "factory store", "tubes", "knobs", "fuse", "support"],
    vendors: [
      { name: "Mesa Boogie Factory Store", url: "https://store.mesaboogie.com", partNumber: "", price: null, notes: "Official store; OEM parts and accessories" },
      { name: "Mesa Boogie Support/Parts", url: "https://mesaboogie.zendesk.com/hc/en-us/categories/202707417-Parts", partNumber: "", price: null, notes: "Parts support portal for warranty and service questions" },
      { name: "Amp Repair Parts", url: "https://www.amprepairparts.com/mesaparts.htm", partNumber: "", price: null, notes: "Third-party; Mesa-spec pots, knobs, reverb tanks, VTL5C1, relays" },
      { name: "Full Compass", url: "https://www.fullcompass.com/brand/pve-peavey/replacement-parts/", partNumber: "", price: null, notes: "Authorized service distributor" }
    ],
    notes: "Mesa's proprietary components that are NOT standard off-the-shelf: (1) Custom-taper potentiometers (P-MB-xxxx series) — unique taper curves, not standard CTS. (2) VTL5C1 Vactrol — now reproduction-only from Xvive; Mesa OEM-branded units are the same Xvive production. (3) Multi-Watt / Dyna-Watt power switching relay (12V DPDT, part MB-RLY-12, $9.95) — used in all multi-watt amps for wattage selection. (4) CL-60 NTC thermistor ($3.99) — soft-start current limiting on AC mains, commonly fails and causes blown fuses or slow startup issues. (5) Mesa tube retainer clips — proprietary spring-clip design unique to their chassis geometry. (6) Mesa schematic access: service schematics are NOT freely available for most current models — Mesa provides them to authorized service centers only. For vintage models, schematics are widely shared on forum databases (Schematic Heaven, el34world.com)."
  },

  {
    id: "p020",
    name: "Hex Nut 1/4\"-32 (Small Barrel Jack)",
    category: "Hardware",
    partType: "Nut",
    specs: "1/4\"-32 thread, nickel plated",
    application: "Less common smaller barrel 1/4\" jacks. Occasionally found on older or specialty equipment.",
    tags: ["jack", "nut", "small barrel", "1/4-32"],
    vendors: [
      { name: "Mouser", url: "https://www.mouser.com", partNumber: "502-P11501 (Switchcraft)", price: null, notes: "" },
      { name: "Jameco", url: "https://www.jameco.com/z/P-11501-Switchcraft-1-4-32-UNS-Hex-Nut-Mounting-Hardware_2183331.html", partNumber: "P-11501", price: null, notes: "9.6mm diameter, 1.6mm thick" }
    ],
    notes: "Uncommon. Only stock a few."
  }
];
