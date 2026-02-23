import React, { useEffect, useState } from "react";
import { courses, slugify } from "@/lib/courses";
import { Link } from "react-router-dom";

export default function FrontendDevelopment() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const course = courses.find((c) => slugify(c.title) === "frontend-development")!;

  return (
    <main className={`container mx-auto px-4 py-12 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
      <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-lg border border-border">
        <header className="flex items-center gap-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color}`}>FE</div>
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-muted-foreground mt-2">{course.overview}</p>
          </div>
        </header>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-muted-foreground">{course.description}</p>

            <h3 className="text-lg font-semibold mt-6">Syllabus</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {course.syllabus?.map((s) => (
                <li key={s} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-blue mt-2"/> {s}</li>
              ))}
            </ul>
          </div>

          <aside className="p-4 bg-muted rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Course Fee</div>
              <div className="text-xl font-bold mt-1">{course.fee}</div>
              <button className="mt-5 w-full px-3 py-2 rounded-md gradient-brand text-white">Enroll</button>
            </div>
            <div className="mt-5 text-muted-foreground text-sm">
              <div><strong>Duration:</strong> {course.duration}</div>
              <div className="mt-1"><strong>Level:</strong> {course.level}</div>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-muted-foreground mt-2">Build 3 real-world projects including a responsive portfolio and a small SPA.</p>
        </div>
      </div>
      <div className="mt-6 text-center"><Link to="/" className="text-sm text-muted-foreground">Back to Home</Link></div>
    </main>
  );
}
