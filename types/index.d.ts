interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}

interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation?: string; 
}

interface SectionFeedback {
  score: number;
  tips: Tip[];
}

interface Feedback {
  overallScore: number;
  ATS: SectionFeedback;
  toneAndStyle: SectionFeedback;
  content: SectionFeedback;
  structure: SectionFeedback;
  skills: SectionFeedback;
}

// interface Feedback {
//   overallScore: number;
//   ATS: {
//     score: number;
//     tips: {
//       type: "good" | "improve";
//       tip: string;
//     }[];
//   };
//   toneAndStyle: {
//     score: number;
//     tips: {
//       type: "good" | "improve";
//       tip: string;
//       explanation: string;
//     }[];
//   };
//   content: {
//     score: number;
//     tips: {
//       type: "good" | "improve";
//       tip: string;
//       explanation: string;
//     }[];
//   };
//   structure: {
//     score: number;
//     tips: {
//       type: "good" | "improve";
//       tip: string;
//       explanation: string;
//     }[];
//   };
//   skills: {
//     score: number;
//     tips: {
//       type: "good" | "improve";
//       tip: string;
//       explanation: string;
//     }[];
//   };
// }