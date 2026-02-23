import React, { useEffect, useState } from "react";
import { courses, slugify } from "@/lib/courses";
import { Link } from "react-router-dom";

export default function DatabaseManagement() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const course = courses.find((c) => slugify(c.title) === "database-management")!;

  return (
    <main className={`container mx-auto px-4 py-12 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
      <div className="max-w-3xl mx-auto bg-card rounded-3xl p-8 shadow-lg border border-border">
        <header>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground mt-2">{course.overview}</p>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Syllabus</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {course.syllabus?.map((s) => (
              <li key={s} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-blue mt-2"/> {s}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold">Who should attend</h4>
            <p className="text-muted-foreground mt-2">Beginners and engineers wanting to level up database skills.</p>
          </div>
          <aside className="p-4 bg-muted rounded-lg text-center">
            <div className="text-sm text-muted-foreground">Fee</div>
            <div className="text-lg font-bold">{course.fee}</div>
            <button className="mt-4 px-3 py-2 rounded-md gradient-brand text-white">Enroll</button>
          </aside>
        </div>
      </div>
      <div className="mt-6 text-center"><Link to="/" className="text-sm text-muted-foreground">Back to Home</Link></div>
    </main>
  );
}
