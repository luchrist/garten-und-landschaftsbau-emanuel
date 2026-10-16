export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
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
    title: "Nadelbaum zwischen Wohnhäusern abgetragen",
    ort: "Raum Wiesloch",
    leistung: "Baumpflege & Baumfällung",
    text: "Der Baum stand mitten im Garten zwischen Nachbarhäusern, für eine Fällung am Stück fehlte der Platz. Der Stamm wurde zuerst entastet und dann am Seil von oben Stück für Stück gekürzt.",
    afterImage: "/assets/acquisition/projekte/api-07-01.jpg",
    alt: "Baumkletterer mit Helm am entasteten Stamm eines Nadelbaums, darunter ein Garten zwischen Wohnhäusern",
    imagePosition: "50% 22%"
  },
  {
    id: "baum-am-wohnhaus",
    title: "Baum direkt am Wohnhaus gekürzt",
    ort: "Raum Wiesloch",
    leistung: "Baumpflege & Baumfällung",
    text: "Der efeubewachsene Stamm stand unmittelbar neben der Hauswand. Gearbeitet wurde in Seilklettertechnik mit der Motorsäge in kurzen Abschnitten, damit nichts auf Dach oder Fassade fällt.",
    afterImage: "/assets/acquisition/projekte/api-02-01.jpg",
    alt: "Baumkletterer mit Motorsäge kürzt einen efeubewachsenen Stamm direkt neben einem Wohnhaus",
    imagePosition: "50% 28%"
  },
  {
    id: "thujahecke-hofeinfahrt",
    title: "Thujahecke in Form geschnitten",
    ort: "Raum Wiesloch",
    leistung: "Gartenpflege",
    text: "Lange Thujahecke an einer gepflasterten Hofeinfahrt: Flanken und Krone gerade geschnitten, die geschwungene Rundung am Haus mitgenommen. Das Schnittgut ist von der Einfahrt abgeräumt.",
    afterImage: "/assets/acquisition/projekte/api-08-01.jpg",
    alt: "Frisch geschnittene, geschwungene Thujahecke entlang einer gepflasterten Hofeinfahrt vor einem Wohnhaus",
    imagePosition: "50% 62%"
  }
];
