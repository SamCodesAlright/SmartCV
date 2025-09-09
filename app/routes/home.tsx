import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "../components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

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

export default function home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResume, setLoadingResume] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResume(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      console.log(parsedResumes);
      setResumes(parsedResumes || []);
      setLoadingResume(false);
    };
    loadResumes();
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications and Resume Ratings</h1>
          {!loadingResume && resumes.length === 0 ? (
            <h2>
              No resumes found. Upload a resume to start tracking your job
              applications.
            </h2>
          ) : (
            <h2>Review you submissions and check AI-Powered Feedback</h2>
          )}
        </div>

        {loadingResume && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
        )}

        {!loadingResume && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResume && resumes.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-xl font-semibold"
            >
              Upload Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
