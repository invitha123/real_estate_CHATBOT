function classifyLead(metadata, rules) {
  const { budget, timeline, purpose } = metadata;

  if (!budget || !timeline) return "Cold";

  const months = parseInt(timeline);
  if (!isNaN(months) && months <= 3 && purpose === rules.hot.intent) {
    return "Hot";
  }

  return "Cold";
}

module.exports = { classifyLead };
