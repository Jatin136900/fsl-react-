import { useRef, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    company: "TCS",
    image: student1,
    rating: 5,
    text: "FSL completely transformed my career. The hands-on projects and expert mentorship helped me land a job at TCS within 2 months of completing the Full Stack course. Best investment I ever made!",
  },
  {
    name: "Priya Patel",
    role: "Frontend Engineer",
    company: "Infosys",
    image: student2,
    rating: 5,
    text: "I had zero coding knowledge before joining FSL. The structured curriculum and supportive instructors made learning easy and fun. I'm now working as a Frontend Engineer at Infosys!",
  },
  {
    name: "Amit Verma",
    role: "Backend Developer",
    company: "Wipro",
    image: student3,
    rating: 5,
    text: "The backend development course was incredibly detailed. Real-world projects prepared me for actual industry challenges. Got placed at Wipro with a 40% salary hike. Highly recommend FSL!",
  },
  {
    name: "Sneha Joshi",
    role: "Software Engineer",
    company: "Capgemini",
    image: student2,
    rating: 5,
    text: "FSL's placement assistance is exceptional. They prepare you not just technically but also for interviews. Cleared my Capgemini interview in the first attempt thanks to mock sessions!",
  },
  {
    name: "Vikram Singh",
    role: "React Developer",
    company: "HCL Technologies",
    image: student3,
    rating: 5,
    text: "Amazing learning environment with industry-standard tools. The React course taught me everything from basics to advanced state management. Now working at HCL with a great package!",
  },
  {
    name: "Kavya Reddy",
    role: "Full Stack Engineer",
    company: "Tech Mahindra",
    image: student1,
    rating: 5,
    text: "Joining FSL was the best decision of my life. The curriculum is up-to-date with current industry needs. Got a full-stack role at Tech Mahindra. Forever grateful to the FSL team!",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-card rounded-2xl p-6 border border-border shadow-md card-hover transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="text-brand-orange mb-4 opacity-60" size={32} />
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">{`"${t.text}"`}</p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand-orange/30 group-hover:ring-brand-orange transition-all duration-300">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-xs text-brand-blue">{t.role} <span className="text-muted-foreground">@ {t.company}</span></p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange-light text-brand-orange text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-brand">Students Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with FSL
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-1 w-12 rounded-full bg-brand-orange" />
            <div className="h-1 w-4 rounded-full bg-brand-blue" />
            <div className="h-1 w-2 rounded-full bg-brand-blue/50" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name + i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
