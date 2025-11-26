import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education, experience } from '../data/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import './Education.css';

const Education = () => {
  return (
    <section id="experience" className="education-section">
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="education-header"
        >
          <h2 className="education-title">Education & Experience</h2>
          <p className="education-description">
            My academic and professional journey
          </p>
        </motion.div>

        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="education-column-title">
              <GraduationCap className="education-icon" />
              Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="education-card">
                    <CardHeader>
                      <CardTitle className="education-card-title">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="education-date">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="education-status">{edu.status}</span>
                        {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="education-column-title">
              <GraduationCap className="education-icon" />
              Experience
            </h3>
            <div className="education-list">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="education-card">
                    <CardHeader>
                      <CardTitle className="education-card-title">{exp.position}</CardTitle>
                      <CardDescription>{exp.company} • {exp.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="education-date">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <ul className="experience-responsibilities">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="experience-responsibility-item">
                            <span className="experience-bullet"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;