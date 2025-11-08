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
    demoUrl: "https://tripplannerai.streamlit.app",
    icon: Plane,
    category: "AI",
    slug: "ai-travel-agent",
  },
];
