function extractMetadata(transcript) {
  const metadata = {
    location: "",
    propertyType: "",
    purpose: "",
    budget: "",
    timeline: ""
  };

  for (const msg of transcript) {
    if (msg.user) {
      const text = msg.user.toLowerCase();
      if (!metadata.location && text.includes("pune")) metadata.location = "Pune";
      if (!metadata.propertyType && text.includes("2bhk")) metadata.propertyType = "2BHK";
      if (!metadata.purpose && text.includes("personal")) metadata.purpose = "personal";
      if (!metadata.budget && text.includes("75")) metadata.budget = "75L";
      if (!metadata.timeline && text.includes("3 months")) metadata.timeline = "3 months";
    }
  }

  return metadata;
}

module.exports = { extractMetadata };
