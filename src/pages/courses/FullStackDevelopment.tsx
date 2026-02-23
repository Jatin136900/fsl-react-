import React, { useEffect, useState } from "react";
import { courses, slugify } from "@/lib/courses";
import { Link } from "react-router-dom";

export default function FullStackDevelopment() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const course = courses.find((c) => slugify(c.title) === "full-stack-development")!;

  return (
    <main className={`container mx-auto px-4 py-12 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
      <div className="max-w-5xl mx-auto bg-card rounded-3xl p-8 shadow-xl border border-border">
        <header className="flex items-start gap-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}> 
            <div className="text-white font-bold text-xl">FS</div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">{course.title}</h1>
            <p className="text-muted-foreground mt-2">{course.overview}</p>
            <div className="mt-3 flex gap-3 items-center text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">{course.level}</span>
              <span className="px-3 py-1 bg-muted rounded-full">{course.duration}</span>
              <span className="px-3 py-1 bg-muted rounded-full">{course.students}</span>
            </div>
          </div>
        </header>

        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground">What you'll learn</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {course.syllabus?.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-blue mt-2" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8">Course Highlights</h3>
            <div className="mt-3 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>Live mentorship sessions</li>
                <li>Capstone project and portfolio review</li>
                <li>Interview preparation & career support</li>
              </ul>
            </div>
          </div>

          <aside className="p-6 bg-muted rounded-2xl">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Fee</div>
              <div className="text-2xl font-bold text-foreground mt-1">{course.fee}</div>
              <button className="mt-6 w-full px-4 py-3 rounded-lg gradient-brand text-white font-semibold">Enroll Now</button>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold">Starts</h4>
              <p className="text-sm text-muted-foreground mt-1">Rolling admissions — new batches every month</p>
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <h3 className="text-2xl font-semibold">Syllabus (detailed)</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-muted-foreground">
            {course.syllabus?.map((s, i) => (
              <div key={s} className="p-4 bg-muted/40 rounded-lg">{i + 1}. {s}</div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-sm text-muted-foreground">Back to Home</Link>
      </div>
    </main>
  );
}
