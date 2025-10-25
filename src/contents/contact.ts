import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { ContactInfo, SocialLink, ContactFormData } from '@/types';

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mail.sohankrshah@gmail.com',
    href: 'mailto:mail.sohankrshah@gmail.com',
    type: 'email'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7870440716',
    href: 'tel:+917870440716',
    type: 'phone'
  },
  {
    icon: Phone,
    label: 'Alternate Phone',
    value: '+977 9800918785',
    href: 'tel:+9779800918785',
    type: 'phone'
  },
  {
    icon: MapPin,
    label: 'Current Address',
    value: 'KIIT, Bhubaneswar, India',
    type: 'location'
  },
  {
    icon: MapPin,
    label: 'Permanent Address',
    value: 'Biratnagar, Nepal',
    type: 'location'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    title: 'GitHub',
    href: 'https://github.com/sohankrshah'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sohankrshah'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    href: 'https://www.instagram.com/code_me17'
  },
  {
    icon: Facebook,
    title: 'Facebook',
    href: 'https://www.facebook.com/shahkrsohan'
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    href: 'https://t.me/thisaibot17',
    className: 'telegramIcon'
  }
];

export const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

// Form validation messages
export const FORM_VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (field: string, length: number) => 
    `${field} must be at least ${length} characters`,
  maxLength: (field: string, length: number) => 
    `${field} must not exceed ${length} characters`
};

// Success/Error messages
export const FORM_MESSAGES = {
  success: "Your message has been sent successfully! I'll get back to you soon.",
  error: 'Failed to send message. Please try again or contact me directly via email.',
  sending: 'Sending...',
  submit: 'Send Message'
};