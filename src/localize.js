const translations = {
  en: {
    today: "Today",
    tomorrow: "Tomorrow",
    vs: "vs",
    live: "LIVE",
    final: "FINAL",
    no_match: "No upcoming match",
    no_match_for_team: "No upcoming matches found for {team}"
  },
  pt: {
    today: "Hoje",
    tomorrow: "Amanhã", 
    vs: "vs",
    live: "AO VIVO",
    final: "FINAL",
    no_match: "Nenhum jogo próximo",
    no_match_for_team: "Nenhum jogo encontrado para {team}"
  }
};

export function localize(key, hass, params = {}) {
  const language = hass?.language || hass?.locale?.language || "en";
  const lang = language.split("-")[0]; // "pt-BR" -> "pt"
  
  let text = translations[lang]?.[key] || translations.en[key] || key;
  
  // Replace placeholders like {team}
  Object.keys(params).forEach(param => {
    text = text.replace(`{${param}}`, params[param]);
  });
  
  return text;
}

export function formatGameDate(date, hass) {
  if (!date) return null;
  
  try {
    const d = new Date(date);
    
    // Check if date is valid
    if (isNaN(d.getTime())) {
      console.error("Invalid date:", date);
      return null;
    }
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const isToday = d.toDateString() === today.toDateString();
    const isTomorrow = d.toDateString() === tomorrow.toDateString();
    
    const language = hass?.language || hass?.locale?.language || "pt-BR";
    
    if (isToday) {
      return {
        weekday: localize("today", hass),
        date: d.toLocaleDateString(language, { month: "short", day: "numeric" }),
        time: d.toLocaleTimeString(language, { hour: "2-digit", minute: "2-digit" })
      };
    } else if (isTomorrow) {
      return {
        weekday: localize("tomorrow", hass),
        date: d.toLocaleDateString(language, { month: "short", day: "numeric" }),
        time: d.toLocaleTimeString(language, { hour: "2-digit", minute: "2-digit" })
      };
    } else {
      return {
        weekday: d.toLocaleDateString(language, { weekday: "long" }),
        date: d.toLocaleDateString(language, { month: "short", day: "numeric" }),
        time: d.toLocaleTimeString(language, { hour: "2-digit", minute: "2-digit" })
      };
    }
  } catch (error) {
    console.warn("Error parsing date:", date, error);
    return null;
  }
}