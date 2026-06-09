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
    posicion: "🥇 1er Lugar",
    descripcion: "El que más puntos acumule",
    premio: "60% del total recaudado",
    color: "#FFD700",
  },
  {
    posicion: "🥈 2do Lugar",
    descripcion: "El segundo con más puntos",
    premio: "30% del total recaudado",
    color: "#C0C0C0",
  },
  {
    posicion: "🥉 3er Lugar",
    descripcion: "El tercer clasificado",
    premio: "10% del total recaudado",
    color: "#CD7F32",
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
//   top1, top2, top3, top4: nombre del equipo
// =============================================
const PARTICIPANTES = [
  {
    nombre: "Carlos Rodríguez",
    emoji: "👨",
    pagado: true,
    top1: "Brasil",
    top2: "Argentina",
    top3: "Francia",
    top4: "Alemania",
  },
  {
    nombre: "María González",
    emoji: "👩",
    pagado: true,
    top1: "Argentina",
    top2: "Francia",
    top3: "Brasil",
    top4: "España",
  },
  {
    nombre: "Andrés Martínez",
    emoji: "🧔",
    pagado: true,
    top1: "Francia",
    top2: "Brasil",
    top3: "Inglaterra",
    top4: "Portugal",
  },
  {
    nombre: "Sofía López",
    emoji: "👧",
    pagado: false,
    top1: "España",
    top2: "Alemania",
    top3: "Argentina",
    top4: "México",
  },
  {
    nombre: "Luis Hernández",
    emoji: "🧑",
    pagado: true,
    top1: "Alemania",
    top2: "España",
    top3: "Croacia",
    top4: "Colombia",
  },
  {
    nombre: "Valentina Torres",
    emoji: "👱‍♀️",
    pagado: false,
    top1: "Colombia",
    top2: "Argentina",
    top3: "Brasil",
    top4: "Uruguay",
  },
  {
    nombre: "Diego Ramírez",
    emoji: "🧒",
    pagado: true,
    top1: "Portugal",
    top2: "Inglaterra",
    top3: "España",
    top4: "Alemania",
  },
  {
    nombre: "Isabella Flores",
    emoji: "👩‍🦱",
    pagado: true,
    top1: "Argentina",
    top2: "Brasil",
    top3: "Francia",
    top4: "Uruguay",
  },
  {
    nombre: "Sebastián Castro",
    emoji: "👨‍🦰",
    pagado: false,
    top1: "México",
    top2: "Brasil",
    top3: "Argentina",
    top4: "Colombia",
  },
  {
    nombre: "Camila Vargas",
    emoji: "👩‍🦳",
    pagado: true,
    top1: "Brasil",
    top2: "Colombia",
    top3: "Alemania",
    top4: "Francia",
  },
  {
    nombre: "Miguel Suárez",
    emoji: "🧓",
    pagado: false,
    top1: "Uruguay",
    top2: "Argentina",
    top3: "Brasil",
    top4: "Ecuador",
  },
  {
    nombre: "Daniela Morales",
    emoji: "👩‍🦰",
    pagado: true,
    top1: "Inglaterra",
    top2: "Francia",
    top3: "Portugal",
    top4: "Brasil",
  },
];
