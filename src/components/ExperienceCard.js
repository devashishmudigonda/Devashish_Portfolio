'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceCard({ company, logo, title, date, tenure, description, responsibilities = [], tech = [], roles }) {
  const isGrouped = Array.isArray(roles) && roles.length > 0;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative flex-shrink-0">
          <Image src={logo} alt={company} fill className="object-contain" sizes="56px" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {isGrouped ? company : title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isGrouped ? tenure : `${company} • ${date}`}
          </p>
        </div>
      </div>

      {description && <p className="text-gray-700 dark:text-gray-300">{description}</p>}

      {isGrouped ? (
        <div className="space-y-4 border-l-2 border-blue-100 dark:border-gray-700 pl-4">
          {roles.map((role, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">{role.title}</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{role.date}</span>
              </div>
              {role.responsibilities?.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {role.responsibilities.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        responsibilities.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
