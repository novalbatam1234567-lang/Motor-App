export type Brand = 'Honda' | 'Yamaha';
export type BikeType = 'Matic';

export interface BikeProfile {
  brand: Brand;
  model: string;
  type: BikeType;
  year: number;
}

export const BIKE_MODELS = {
  Honda: [
    'Beat',
    'Beat Street',
    'Vario 125',
    'Vario 150',
    'Vario 160',
    'Scoopy',
    'PCX 150',
    'PCX 160',
    'ADV 150',
    'ADV 160',
    'Genio',
    'Spacy',
    'Stylo 160',
    'Dio',
    'Forza',
  ],
  Yamaha: [
    'Mio M3',
    'Mio S',
    'Mio Soul GT',
    'Mio Z',
    'NMAX 155',
    'NMAX Turbo',
    'Aerox 155',
    'Aerox Alpha',
    'Lexi LX 125',
    'Fazzio',
    'Grand Filano',
    'X-Ride 125',
    'Gear 125',
    'Xmax 250',
    'Tricity 155',
  ],
};

export const AVAILABLE_YEARS = Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i); // 25 years back

export type Category = 'Mesin' | 'CVT' | 'Kelistrikan' | 'Injeksi';

export interface Symptom {
  id: string;
  category: Category;
  label: string;
}

export const SYMPTOMS: Symptom[] = [
  // Mesin
  { id: 'm1', category: 'Mesin', label: 'Suara mesin kasar / ngelitik' },
  { id: 'm2', category: 'Mesin', label: 'Mesin cepat panas (Overheat)' },
  { id: 'm3', category: 'Mesin', label: 'Oli mesin cepat habis / bocor' },
  { id: 'm4', category: 'Mesin', label: 'Tenaga mesin ngempos di tanjakan' },
  { id: 'm5', category: 'Mesin', label: 'Knalpot ngebul asap putih' },
  { id: 'm6', category: 'Mesin', label: 'Knalpot nembak-nembak saat deselerasi' },
  { id: 'm7', category: 'Mesin', label: 'Mesin bergetar keras saat stasioner (idle)' },

  // CVT
  { id: 'c1', category: 'CVT', label: 'Tarikan awal gredek / bergetar' },
  { id: 'c2', category: 'CVT', label: 'Suara dengung (ngiung) dari area CVT' },
  { id: 'c3', category: 'CVT', label: 'V-belt terasa selip saat akselerasi' },
  { id: 'c4', category: 'CVT', label: 'Top speed menurun drastis' },
  { id: 'c5', category: 'CVT', label: 'Ada suara klotok-klotok di CVT saat stasioner' },
  { id: 'c6', category: 'CVT', label: 'Tarikan berat dan bensin terasa boros' },

  // Kelistrikan
  { id: 'k1', category: 'Kelistrikan', label: 'Starter elektrik mati / berat' },
  { id: 'k2', category: 'Kelistrikan', label: 'Lampu utama sering putus / redup' },
  { id: 'k3', category: 'Kelistrikan', label: 'Klakson tidak bunyi atau suaranya sember' },
  { id: 'k4', category: 'Kelistrikan', label: 'Speedometer digital mati / error / berkedip' },
  { id: 'k5', category: 'Kelistrikan', label: 'Lampu sein berkedip terlalu cepat atau tidak berkedip' },
  { id: 'k6', category: 'Kelistrikan', label: 'Aki sering tekor meski baru diganti' },

  // Injeksi
  { id: 'i1', category: 'Injeksi', label: 'Lampu indikator MIL menyala / berkedip' },
  { id: 'i2', category: 'Injeksi', label: 'Mesin brebet di putaran tertentu' },
  { id: 'i3', category: 'Injeksi', label: 'Bahan bakar terasa sangat boros' },
  { id: 'i4', category: 'Injeksi', label: 'Mesin susah dihidupkan saat pagi hari atau mesin dingin' },
  { id: 'i5', category: 'Injeksi', label: 'Gas tertahan / tidak merespon spontan (delay)' },
  { id: 'i6', category: 'Injeksi', label: 'Mesin sering mati mendadak saat berjalan atau berhenti' },
];

export interface DiagnosticRule {
  id: string;
  symptoms: string[];
  diagnosis: string;
  action: string;
}

export const DIAGNOSTIC_RULES: DiagnosticRule[] = [
  {
    id: 'R_CVT_GREDEK',
    symptoms: ['c1', 'c5'],
    diagnosis: 'Kotoran menumpuk pada mangkok ganda CVT, keausan pada kampas ganda, atau roller peyang.',
    action: 'Lakukan servis CVT. Bersihkan debu pada mangkok ganda, dan ganti roller atau kampas ganda jika sudah aus.'
  },
  {
    id: 'R_CVT_DENGUNG',
    symptoms: ['c2'],
    diagnosis: 'Kerusakan pada bearing gearbox CVT atau keausan gigi rasio.',
    action: 'Segera periksa dan ganti bearing gearbox untuk mencegah kerusakan lebih parah pada gigi rasio.'
  },
  {
    id: 'R_CVT_VMBELT',
    symptoms: ['c3', 'c4', 'c6'],
    diagnosis: 'V-belt sudah aus, melar, atau retak. Bisa juga grease pully bocor mengenai v-belt.',
    action: 'Ganti V-belt secara berkala (umumnya 20.000 - 24.000 km) dan periksa seal pully CVT.'
  },
  {
    id: 'R_MESIN_NGEBUL',
    symptoms: ['m3', 'm5'],
    diagnosis: 'Oli mesin ikut terbakar akibat keausan ring piston, baret pada blok silinder, atau seal klep bocor.',
    action: 'Perlu pengecekan ruang bakar (turun mesin). Ganti ring piston, blok silinder, atau seal klep.'
  },
  {
    id: 'R_MESIN_KASAR',
    symptoms: ['m1', 'm7'],
    diagnosis: 'Kekurangan oli mesin, setelan klep longgar, atau tensioner keteng aus.',
    action: 'Periksa kapasitas oli mesin. Jika normal, lakukan penyetelan celah klep dan periksa kondisi rantai keteng (timing chain).'
  },
  {
    id: 'R_INJEKSI_BREBET',
    symptoms: ['i2', 'i4', 'i5'],
    diagnosis: 'Tekanan fuel pump lemah, filter injeksi (fuel pump) kotor, atau injektor tersumbat.',
    action: 'Cek tekanan fuel pump, bersihkan filter bensin (pampers), dan lakukan kalibrasi/pembersihan injektor.'
  },
  {
    id: 'R_INJEKSI_MATI',
    symptoms: ['i1', 'i6'],
    diagnosis: 'Sensor-sensor injeksi (seperti TPS atau sensor suhu) kotor atau malfungsi.',
    action: 'Lakukan reset ECU dan scanning menggunakan alat OBD. Bersihkan Throttle Body (TB) dan cek kabel sensor.'
  },
  {
    id: 'R_KELISTRIKAN_AKi',
    symptoms: ['k1', 'k4', 'k6'],
    diagnosis: 'Kondisi aki sudah drop, spul mati, atau kiprok (regulator) tidak mengisi arus dengan baik.',
    action: 'Cek voltase aki (normalnya 12.4V+). Periksa tegangan pengisian kiprok saat mesin hidup. Ganti komponen yang rusak.'
  },
  {
    id: 'R_KELISTRIKAN_LAMPU',
    symptoms: ['k2'],
    diagnosis: 'Kiprok rusak (overcharge) menyebabkan lampu sering putus, atau bohlam tidak sesuai standar.',
    action: 'Ukur tegangan pada fiting lampu. Ganti kiprok jika tegangan melebihi standar maksimal.'
  },
  {
    id: 'R_OVERHEAT',
    symptoms: ['m2', 'm4'],
    diagnosis: 'Sistem pendingin tidak berfungsi optimal (air radiator habis, kipas radiator macet, atau thermostat rusak).',
    action: 'Kuras dan ganti air radiator coolant. Periksa kebocoran selang, water pump, dan fungsi thermostat.'
  },
  {
    id: 'R_KNALPOT_NEMBAK',
    symptoms: ['m6'],
    diagnosis: 'Kerusakan atau kotor pada sistem AIS/SASS (Air Injection), atau knalpot bocor.',
    action: 'Periksa paking knalpot dan bersihkan atau tutup sementara saluran AIS/SASS untuk memastikan.'
  }
];

export function diagnoseSymptoms(selectedSymptoms: string[]): DiagnosticRule[] {
  if (selectedSymptoms.length === 0) return [];
  
  // Find rules where AT LEAST ONE symptom matches, but sort by most matches
  const matchedRules = DIAGNOSTIC_RULES.filter(rule => 
    rule.symptoms.some(s => selectedSymptoms.includes(s))
  ).map(rule => {
    const matchCount = rule.symptoms.filter(s => selectedSymptoms.includes(s)).length;
    return { ...rule, matchCount };
  }).sort((a, b) => b.matchCount - a.matchCount);

  // Fallback if no specific rule matches but symptoms exist
  if (matchedRules.length === 0) {
    return [{
      id: 'R_GENERIC',
      symptoms: selectedSymptoms,
      diagnosis: 'Terdapat anomali pada sistem yang tidak terdeteksi oleh aturan spesifik kami.',
      action: 'Disarankan untuk membawa motor ke bengkel resmi terdekat untuk dilakukan scan menggunakan alat diagnostik khusus.'
    }];
  }

  // Return the rule without the extra matchCount property to match the type
  return matchedRules.map(({ matchCount, ...rule }) => rule);
}
