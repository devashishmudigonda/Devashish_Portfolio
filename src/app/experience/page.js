'use client';

import AnimatedSection from '@/components/animations/AnimatedSection';
import ExperienceCard from '@/components/ExperienceCard';

const experiences = [
  {
    company: "HSBC",
    logo: "/logos/hsbc.png",
    tenure: "Jul 2025 – Present",
    description: "Joined as an intern in Jan 2025, converted to full-time in Jul 2025, and was promoted to Software Engineer in Jan 2026 — building reactive Java microservices on the Nova credit platform.",
    roles: [
      {
        title: "Software Engineer",
        date: "Jan 2026 – Present",
        responsibilities: [
          "Own deployment activities — release coordination, environment promotions, and post-deploy validation — across multiple parallel projects.",
          "Cut payload generation latency by ~80% (100s → 20s) by refactoring reactive data flows and transformation logic.",
          "Authored a custom Java-annotation validation framework (reusable constraints + validators) for Dataverse-backed microservices and forms.",
          "Drove API standardization across the Nova central API repository and partner with senior engineers on design decisions and code review."
        ]
      },
      {
        title: "Trainee Software Engineer",
        date: "Jul 2025 – Jan 2026",
        responsibilities: [
          "Wrote custom validators and business-rule validations across backend services.",
          "Implemented logical code changes tied to evolving user requirements.",
          "Owned a steady stream of bug fixes and maintenance work."
        ]
      },
      {
        title: "SDE Intern",
        date: "Jan 2025 – Mar 2025",
        responsibilities: [
          "Designed frontend interfaces using Microsoft PowerApps.",
          "Integrated backend services using SpringBoot for secure data flow.",
          "Handled automation for fetching and displaying Moody’s credit data."
        ]
      }
    ],
    tech: ["Java", "Spring Boot", "Reactive Java", "Microsoft Dataverse", "OData", "Jenkins", "JUnit", "PowerApps"]
  },
  {
    company: "Providence India",
    logo: "/logos/providence.png",
    title: "Software Development Intern",
    date: "Jun 2024 – Aug 2024",
    description: "Optimized network device management via backend automation.",
    responsibilities: [
      "Wrote Python scripts for pre/post-check automation of routers and firewalls.",
      "Built a Django dashboard to manage and review automated outputs.",
      "Reduced manual network operations workload by over 40%."
    ],
    tech: ["Python", "Django", "Networking"]
  },
  {
    company: "ACIC Rural Internship",
    logo: "/logos/acic.png",
    title: "Software + Field Intern",
    date: "Nov 2023 – Dec 2023",
    description: "Built a community skilling platform targeting rural construction workers.",
    responsibilities: [
      "Conducted ground surveys to identify digital skilling gaps.",
      "Built a React-based frontend to display tutorials dynamically.",
      "Integrated WhatsApp API to auto-enroll users into topic groups."
    ],
    tech: ["React", "WhatsApp API", "Community UX"]
  },
  {
    company: "SmartKnower",
    logo: "/logos/smartknower.png",
    title: "ML Research Intern",
    date: "May 2022 – Jul 2022",
    description: "Explored voice recognition-based income prediction models.",
    responsibilities: [
      "Compared various ML classifiers on a voice dataset.",
      "Achieved a best-case accuracy of 98.47% using tuned SVMs.",
      "Published internal findings and presented at team demo."
    ],
    tech: ["Python", "Sklearn", "SVM", "Data Science"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-10">
      <AnimatedSection animation="fadeInUp">
        <h1 className="text-4xl font-bold mb-4 text-center">My Professional Experience</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here's a detailed timeline of my internships and professional growth.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="slideUp" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
