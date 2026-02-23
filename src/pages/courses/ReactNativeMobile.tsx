import React, { useEffect, useState } from "react";
import { courses, slugify } from "@/lib/courses";
import { Link } from "react-router-dom";

export default function ReactNativeMobile() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const course = courses.find((c) => slugify(c.title) === "react-native-mobile")!;

  return (
    <main className={`container mx-auto px-4 py-12 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
      <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-lg border border-border">
        <header className="flex items-center gap-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color}`}>RN</div>
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-muted-foreground mt-2">{course.overview}</p>
          </div>
        </header>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">What you'll build</h2>
            <p className="text-muted-foreground mt-3">Hands-on mobile apps, integrations and publishing to app stores.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {course.syllabus?.map((s) => (
                <li key={s} className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange mt-2"/> {s}</li>
              ))}
            </ul>
          </div>
          <aside className="p-4 bg-muted rounded-2xl text-center">
            <div className="text-sm text-muted-foreground">Fee</div>
            <div className="text-xl font-bold">{course.fee}</div>
            <button className="mt-4 px-4 py-2 rounded-md gradient-brand text-white">Enroll</button>
          </aside>
        </div>
      </div>
      <div className="mt-6 text-center"><Link to="/" className="text-sm text-muted-foreground">Back to Home</Link></div>
    </main>
  );
}
