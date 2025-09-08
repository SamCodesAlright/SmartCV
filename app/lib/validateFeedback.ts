// helper to sanitize tips
const sanitizeTips = (tips: any): Tip[] => {
  if (!Array.isArray(tips)) return [];
  return tips.map((tip: any) => ({
    type: tip?.type === "good" ? "good" : "improve",
    tip: typeof tip?.tip === "string" ? tip.tip : "",
    explanation: typeof tip?.explanation === "string" ? tip.explanation : undefined,
  }));
};

// main normalizer
export function validateFeedback(raw: any): Feedback {
  return {
    overallScore: typeof raw?.overallScore === "number" ? raw.overallScore : 0,
    ATS: {
      score: typeof raw?.ATS?.score === "number" ? raw.ATS.score : 0,
      tips: sanitizeTips(raw?.ATS?.tips),
    },
    toneAndStyle: {
      score: typeof raw?.toneAndStyle?.score === "number" ? raw.toneAndStyle.score : 0,
      tips: sanitizeTips(raw?.toneAndStyle?.tips),
    },
    content: {
      score: typeof raw?.content?.score === "number" ? raw.content.score : 0,
      tips: sanitizeTips(raw?.content?.tips),
    },
    structure: {
      score: typeof raw?.structure?.score === "number" ? raw.structure.score : 0,
      tips: sanitizeTips(raw?.structure?.tips),
    },
    skills: {
      score: typeof raw?.skills?.score === "number" ? raw.skills.score : 0,
      tips: sanitizeTips(raw?.skills?.tips),
    },
  };
}
