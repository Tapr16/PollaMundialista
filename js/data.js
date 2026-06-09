// =============================================
//   ARCHIVO DE DATOS - POLLA MUNDIAL 2026
//   Edita este archivo para gestionar todo
// =============================================

// Equipos clasificados al Mundial 2026
const EQUIPOS = [
  "México",
  "Sudáfrica",
  "Corea del Sur",
  "República Checa",
  "Canadá",
  "Bosnia-Herzegovina",
  "Qatar",
  "Suiza",
  "Brasil",
  "Marruecos",
  "Haití",
  "Escocia",
  "Estados Unidos",
  "Paraguay",
  "Australia",
  "Turquía",
  "Alemania",
  "Curazao",
  "Costa de Marfil",
  "Ecuador",
  "Países Bajos",
  "Japón",
  "Suecia",
  "Túnez",
  "Bélgica",
  "Egipto",
  "Irán",
  "Nueva Zelanda",
  "España",
  "Cabo Verde",
  "Arabia Saudita",
  "Uruguay",
  "Francia",
  "Senegal",
  "Irak",
  "Noruega",
  "Argentina",
  "Argelia",
  "Austria",
  "Jordania",
  "Portugal",
  "RD Congo",
  "Uzbekistán",
  "Colombia",
  "Inglaterra",
  "Croacia",
  "Ghana",
  "Panamá",
];

// Información general de la polla
const INFO_POLLA = {
  nombre: "Polla Mundialista 2026",
  subtitulo: "¿Quién adivina el Top 4?",
  cuota: "$100.000 COP",
  fechaLimite: "11 de Junio, 2026",
  mundial: "Copa del Mundo 2026 · USA, Canadá & México",
  descripcion:
    "Participa en la polla familiar del Mundial 2026. Adivina los cuatro equipos que llegarán más lejos y llévate el premio mayor. ¡Hay gloria para los que saben de fútbol!",
};

// Sistema de puntos
const PUNTOS = {
  top1: 10,
  top2: 6,
  top3: 4,
  top4: 2,
};

// Premios
const PREMIOS = [
  {
    posicion: "🥇 Ganador",
    descripcion: "El que más puntos acumule",
    premio: "100% del bote acumulado",
    color: "#FFD700",
  },
];


// Reglas del juego
const REGLAS = [
  {
    icono: "⚽",
    titulo: "Elige tu Top 4",
    descripcion:
      "Cada participante debe elegir los 4 equipos que cree que llegarán a las semifinales del Mundial.",
  },
  {
    icono: "🏆",
    titulo: "Acierta el Campeón (Top 1)",
    descripcion:
      "Si adivinas el campeón exactamente, ganas 10 puntos. ¡El acierto más valioso!",
  },
  {
    icono: "🥈",
    titulo: "Acierta el Top 2",
    descripcion: "Si adivinas el subcampeón (finalista), ganas 6 puntos.",
  },
  {
    icono: "🥉",
    titulo: "Acierta el Top 3",
    descripcion:
      "Si adivinas el equipo ganador del partido por el tercer puesto, ganas 4 puntos.",
  },
  {
    icono: "4️⃣",
    titulo: "Acierta el Top 4",
    descripcion:
      "Si adivinas el perdedor del partido por el tercer puesto, ganas 2 puntos.",
  },
  {
    icono: "💰",
    titulo: "Cuota de Participación",
    descripcion:
      "Cada participante debe pagar su cuota antes del inicio del Mundial para que su pronóstico sea válido.",
  },
  {
    icono: "📅",
    titulo: "Fecha Límite",
    descripcion:
      "Los pronósticos y el pago deben completarse antes del inicio del primer partido del Mundial.",
  },
  {
    icono: "🤝",
    titulo: "En caso de empate",
    descripcion:
      "Si dos o más participantes tienen el mismo puntaje, el premio del lugar se divide en partes iguales entre ellos.",
  },
];

// =============================================
//   PARTICIPANTES
//   pagado: true/false
//   top1, top2, top3, top4: nombre del equipo o "" si no ha elegido
// =============================================
const PARTICIPANTES = [
  {
    nombre: "Helman Pérez Gallo",
    emoji: "👨",
    pagado: false,
    top1: "Inglaterra",
    top2: "Francia",
    top3: "Portugal",
    top4: "España",
  },
  {
    nombre: "Carlos Nelson Díaz",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Jorge Luis Cárdenas",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Giovanni Pérez V.",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Nelson Pérez Gallo",
    emoji: "👨",
    pagado: true,
    top1: "España",
    top2: "Inglaterra",
    top3: "Francia",
    top4: "Argentina",
  },
  {
    nombre: "Sebastian Fuentes Acuña",
    emoji: "👨",
    pagado: false,
    top1: "Francia",
    top2: "Argentina",
    top3: "España",
    top4: "Inglaterra",
  },
  {
    nombre: "Tía Kris y Pili",
    emoji: "👩",
    pagado: true,
    top1: "España",
    top2: "Francia",
    top3: "Argentina",
    top4: "Brasil",
  },
  {
    nombre: "Tía Mari y Angie",
    emoji: "👩",
    pagado: false,
    top1: "Portugal",
    top2: "Francia",
    top3: "España",
    top4: "Inglaterra",
  },
  {
    nombre: "Ricardo Pérez Velandia",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Sebastian Pérez",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Tío Libardo y Avila",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
  {
    nombre: "Jhon Pérez Avila",
    emoji: "👨",
    pagado: false,
    top1: "",
    top2: "",
    top3: "",
    top4: "",
  },
];
