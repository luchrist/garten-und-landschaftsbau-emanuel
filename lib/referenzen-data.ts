export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
  /**
   * Optional CSS object-position for the single-image card, so portrait photos
   * keep their subject in frame when cropped to 4:3. Defaults to centre.
   */
  imagePosition?: string;
}

export const referenzen: Referenz[] = [
  {
    id: "nadelbaum-zwischen-wohnhaeusern",
    title: "Heckenschnitt",
    ort: "Raum Wiesloch",
    leistung: "Baumpflege & Baumfällung",
    afterImage: "/assets/acquisition/projekte/api-01-01.jpg",
    alt: "Frisch geschnittene Kirschlorbeerhecke mit Heckenschere, davor ein sauber abgestochenes Beet und Rasen"
  },
  {
    id: "baum-am-wohnhaus",
    title: "Baum direkt am Wohnhaus gekürzt",
    ort: "Raum Wiesloch",
    leistung: "Baumpflege & Baumfällung",
    afterImage: "/assets/acquisition/projekte/api-02-01.jpg",
    alt: "Baumkletterer mit Motorsäge kürzt einen efeubewachsenen Stamm direkt neben einem Wohnhaus",
    imagePosition: "50% 28%"
  },
  {
    id: "thujahecke-hofeinfahrt",
    title: "Thujahecke in Form geschnitten",
    ort: "Raum Wiesloch",
    leistung: "Gartenpflege",
    afterImage: "/assets/acquisition/projekte/api-08-01.jpg",
    alt: "Frisch geschnittene, geschwungene Thujahecke entlang einer gepflasterten Hofeinfahrt vor einem Wohnhaus",
    imagePosition: "50% 62%"
  }
];
