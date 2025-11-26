import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Backend', skills: skills.backend },
    { title: 'Databases', skills: skills.databases },
    { title: 'Tools & Others', skills: skills.tools }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">Skills</h2>
          <p className="skills-description">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="skills-category-title">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="skills-list">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="skill-item-labels">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="skill-progress" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;