import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Cloud } from 'lucide-react';
import { services } from '../data/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import './Services.css';

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <h2 className="services-title">Services</h2>
          <p className="services-description">
            What I offer to help bring your ideas to life
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card">
                  <CardHeader>
                    <div className="service-icon-wrapper">
                      <Icon className="service-icon" />
                    </div>
                    <CardTitle className="service-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="service-description">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;