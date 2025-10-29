"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import styles from '@/styles/Contact.module.css';

// Import types
import type { 
  ContactFormData, 
  SubmitStatus, 
  ContactInfo, 
  SocialLink 
} from '@/types';

// Import constants
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  INITIAL_FORM_DATA,
  FORM_MESSAGES
} from '@/contents/contact';

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      // Make actual API call to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const renderContactItem = ({ icon: Icon, label, value, href, type }: ContactInfo) => (
    <div key={label} className={styles.contactItem}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} aria-hidden="true" />
      </div>
      <div>
        <h3 className={styles.contactLabel}>{label}</h3>
        {href ? (
          <a 
            href={href} 
            className={styles.contactValue}
            aria-label={`${type}: ${value}`}
          >
            {value}
          </a>
        ) : (
          <p className={styles.contactValue}>{value}</p>
        )}
      </div>
    </div>
  );

  const renderSocialLink = ({ icon: Icon, title, href, className }: SocialLink) => (
    <a
      key={title}
      href={href}
      title={title}
      className={styles.socialIcon}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      <Icon className={className ? styles[className] : undefined} />
    </a>
  );

  const isSubmitting = submitStatus === 'submitting';

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Get In Touch</h1>

        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <aside className={styles.infoSection}>
            <div>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <div className={styles.contactItems}>
                {CONTACT_INFO.map(renderContactItem)}
              </div>
            </div>

            <div>
              <h2 className={styles.sectionTitle}>Social Media</h2>
              <div className={styles.socialLinks}>
                {SOCIAL_LINKS.map(renderSocialLink)}
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Send Me a Message</h2>

            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  aria-required="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="mail@gmail.com"
                  required
                  disabled={isSubmitting}
                  aria-required="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Project Inquiry"
                  required
                  disabled={isSubmitting}
                  aria-required="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={styles.formTextarea}
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                  disabled={isSubmitting}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} aria-hidden="true" />
                    <span>{FORM_MESSAGES.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className={styles.sendIcon} aria-hidden="true" />
                    <span>{FORM_MESSAGES.submit}</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div 
                  className={styles.successMessage} 
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>{FORM_MESSAGES.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div 
                  className={styles.errorMessage} 
                  role="alert"
                  aria-live="polite"
                >
                  <span>{FORM_MESSAGES.error}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;