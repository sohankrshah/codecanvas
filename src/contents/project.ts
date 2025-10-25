import { Project } from "@/types";
import {
  Code,
  Activity,
  Database,
  MessageSquare,
  ShoppingBag,
  UserX,
  LineChart,
  BarChart2,
  Users,
  Plane,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Travel Agent",
    description:
      "Developed an AI trip planner using the OpenAI API via Crew Agent, streamlining itinerary generation.",
    technologies: ["Python", "Streamlit", "Crew Agent", "OpenAI"],
    githubUrl: "https://github.com/sohankrshah/AI-AGENT",
    demoUrl: "https://ai-travel-agent-demo.vercel.app",
    icon: Plane,
    category: "AI",
    slug: "ai-travel-agent",
  },
  {
    id: 2,
    title: "AI Coding Assistant with Integrated Compiler",
    description:
      "Developed an AI coding assistant using LLaMA via Groq API with memory and context persistence. Integrated a multi-language compiler with real-time syntax highlighting and error detection.",
    technologies: ["Python", "React", "LLaMA", "Groq API", "TensorFlow"],
    githubUrl: "https://github.com/yourusername/ai-coding-assistant",
    icon: Code,
    category: "AI",
    slug: "ai-coding-assistant",
  },
  {
    id: 3,
    title: "Computer Vision-Based Safety Compliance System",
    description:
      "Built a real-time helmet detection system using CNNs to improve workplace safety monitoring. Optimized the model for edge deployment using TensorFlow Lite for low-latency inference.",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNNs", "Edge Computing"],
    githubUrl: "https://github.com/yourusername/cv-safety-system",
    icon: Activity,
    category: "Computer Vision",
    slug: "cv-safety-system",
  },
  {
    id: 4,
    title: "E-commerce Analytics Dashboard",
    description:
      "Built a comprehensive analytics platform for tracking sales, inventory, and customer behavior with real-time data visualization.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-analytics",
    icon: ShoppingBag,
    category: "Full Stack",
    slug: "ecommerce-analytics",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "Developed a scalable real-time messaging platform with end-to-end encryption, file sharing, and group chat capabilities.",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/chat-app",
    icon: MessageSquare,
    category: "Full Stack",
    slug: "chat-application",
  },
  {
    id: 6,
    title: "Stock Market Prediction Model",
    description:
      "Implemented LSTM neural networks for time-series forecasting of stock prices with 78% accuracy on historical data.",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
    githubUrl: "https://github.com/yourusername/stock-prediction",
    icon: LineChart,
    category: "Machine Learning",
    slug: "stock-prediction",
  },
  {
    id: 7,
    title: "Customer Segmentation System",
    description:
      "Applied K-means clustering and RFM analysis to segment customers for targeted marketing campaigns, improving conversion by 35%.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "SQL"],
    githubUrl: "https://github.com/yourusername/customer-segmentation",
    icon: Users,
    category: "Data Science",
    slug: "customer-segmentation",
  },
  {
    id: 8,
    title: "Sales Forecasting Dashboard",
    description:
      "Created an interactive dashboard for sales forecasting using time-series analysis and machine learning algorithms.",
    technologies: ["Python", "Plotly", "Prophet", "Streamlit", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/sales-forecasting",
    icon: BarChart2,
    category: "Data Science",
    slug: "sales-forecasting",
  },
];