import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SmartCV - AI Resume Analyzer & ATS Score Checker" },
    {
      name: "description",
      content:
        "SmartCV analyzes your resume, provides an ATS score, and gives actionable feedback to improve your chances of landing interviews.",
    },
    {
      name: "keywords",
      content:
        "ATS resume checker, resume analyzer, AI feedback on resume, SmartCV, job application optimizer",
    },
    {
      name: "author",
      content: "Sameer Shaikh",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications and Resume Ratings</h1>
          <h2>Review you submissions and check AI-Powered Feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
