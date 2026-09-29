/**
 * Portfolio Data for Ellutam Jeshwanth
 * Kept in a single structured file so it is easy for a first-year B.Tech student
 * to read, maintain, and update as new projects and hackathons are completed.
 */

export interface SkillItem {
  name: string;
  stage?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface LearnLoopStep {
  number: string;
  step: string;
  summary: string;
  detail: string;
}

export interface LearnLoopFeature {
  title: string;
  description: string;
  category: string;
}

export interface BeginnerProject {
  id: string;
  title: string;
  description: string;
  technology: string;
  concepts: string[];
  sampleLogic: string;
  sampleOutput: string;
}

export interface HackathonPlaceholder {
  id: string;
  slotLabel: string;
  eventName: string;
  year: string;
  role: string;
  project: string;
  achievement: string;
}

export const PROGRESSION_PATH = [
  { step: '01', label: 'STUDENT', detail: 'First-Year B.Tech Foundation' },
  { step: '02', label: 'LEARNER', detail: 'Python & Web Fundamentals' },
  { step: '03', label: 'BUILDER', detail: 'Turning Ideas into Working Code' },
  { step: '04', label: 'AI ENTHUSIAST', detail: 'Exploring LLMs, Prompting & RAG' },
  { step: '05', label: 'ASPIRING AI ENGINEER', detail: 'Building Practical AI Applications' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core language used for logic, scripting, and problem solving.',
    items: [
      { name: 'Python', stage: 'Learner / Developer' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Foundational web technologies for building clean interfaces.',
    items: [
      { name: 'HTML', stage: 'Foundational' },
      { name: 'CSS', stage: 'Foundational' },
      { name: 'JavaScript', stage: 'Beginner' },
      { name: 'Basic Web Development', stage: 'Building Interfaces' },
    ],
  },
  {
    id: 'ai-generative-ai',
    title: 'AI & Generative AI',
    description: 'Exploring modern artificial intelligence concepts and workflows.',
    items: [
      { name: 'Generative AI', stage: 'Beginner' },
      { name: 'AI Engineering', stage: 'Currently Learning' },
      { name: 'Prompt Engineering', stage: 'Beginner' },
      { name: 'LLM Concepts', stage: 'Exploring' },
      { name: 'RAG Concepts', stage: 'Exploring' },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    description: 'Mindset, collaboration, and iterative product building.',
    items: [
      { name: 'Problem Solving' },
      { name: 'Hackathons' },
      { name: 'Ideathons' },
      { name: 'Project Building' },
      { name: 'Product Ideation' },
      { name: 'Continuous Learning' },
    ],
  },
];

export const LEARNLOOP_STEPS: LearnLoopStep[] = [
  {
    number: '01',
    step: 'WATCH',
    summary: 'Engage with structured educational content and lectures.',
    detail: 'Students start by studying curated lessons, video lectures, or reading material at their own pace.',
  },
  {
    number: '02',
    step: 'CAPTURE',
    summary: 'Log key timestamps, unfamiliar terms, and immediate questions.',
    detail: 'While learning, students capture points of confusion immediately so no question is lost.',
  },
  {
    number: '03',
    step: 'ASK',
    summary: 'Query the AI Tutor for contextual explanations.',
    detail: 'Students ask targeted doubts in natural language and receive step-by-step explanations tailored to their level.',
  },
  {
    number: '04',
    step: 'UNDERSTAND',
    summary: 'Break down complex topics into clear mental models.',
    detail: 'Interactive follow-ups and simplified analogies help bridge the gap between memorization and true comprehension.',
  },
  {
    number: '05',
    step: 'NOTE',
    summary: 'Generate structured, revision-ready AI notes and flashcards.',
    detail: 'Convert raw learning sessions and resolved doubts into clean summaries and flashcards for quick review.',
  },
  {
    number: '06',
    step: 'PRACTICE',
    summary: 'Reinforce concepts with guided exercises and flashcards.',
    detail: 'Active recall sessions help cement newly learned material before moving to formal testing.',
  },
  {
    number: '07',
    step: 'TEST',
    summary: 'Take AI-generated quizzes to evaluate retention.',
    detail: 'Topic-specific quizzes check understanding across conceptual and applied problem types.',
  },
  {
    number: '08',
    step: 'ANALYZE',
    summary: 'Review learning analytics to spot knowledge gaps.',
    detail: 'Performance tracking highlights accuracy trends, time spent, and specific sub-topics needing extra attention.',
  },
  {
    number: '09',
    step: 'IMPROVE',
    summary: 'Close the loop with personalized revision recommendations.',
    detail: 'The platform adapts the next study cycle based on identified weak areas, turning every test into measurable progress.',
  },
];

export const LEARNLOOP_FEATURES: LearnLoopFeature[] = [
  {
    title: 'AI Tutor',
    description: 'AI-powered assistance for student doubts and explanations.',
    category: 'Core Assistance',
  },
  {
    title: 'AI Notes',
    description: 'Convert learning material into structured notes.',
    category: 'Knowledge Capture',
  },
  {
    title: 'Flashcards',
    description: 'Generate revision-friendly flashcards.',
    category: 'Active Recall',
  },
  {
    title: 'AI Quiz',
    description: 'Create quizzes for practice and assessment.',
    category: 'Assessment',
  },
  {
    title: 'Progress Tracking',
    description: 'Track performance and identify weak areas.',
    category: 'Analytics',
  },
  {
    title: 'Personalized Learning',
    description: 'Explore adaptive learning based on student performance.',
    category: 'Adaptive Flow',
  },
  {
    title: 'Gamification',
    description: 'XP, achievements, streaks, and challenges to make learning engaging.',
    category: 'Engagement',
  },
  {
    title: 'Voice Doubt',
    description: 'Future concept for asking doubts using voice.',
    category: 'Future Concept',
  },
  {
    title: 'Learning Analytics',
    description: 'Understand strengths, weaknesses, and improvement areas.',
    category: 'Insights',
  },
];

export const LEARNLOOP_TECH_DIRECTION = [
  { name: 'Python', note: 'Core Backend & Logic' },
  { name: 'Web Development', note: 'Frontend Interface' },
  { name: 'Generative AI', note: 'Content & Explanation Synthesis' },
  { name: 'LLMs', note: 'Language Understanding' },
  { name: 'Prompt Engineering', note: 'Structured Pedagogical Prompts' },
  { name: 'RAG', note: 'Exploring' },
  { name: 'AI APIs', note: 'Model Integration' },
  { name: 'Database', note: 'Learning' },
];

export const OTHER_PROJECTS: BeginnerProject[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Calculator',
    description:
      'A beginner Python project that checks voting eligibility based on age and demonstrates conditional logic and user input.',
    technology: 'Python',
    concepts: ['User Input Handling', 'Conditional Statements (if/else)', 'Input Validation'],
    sampleLogic: `# Voter Eligibility Calculator
def check_voter_eligibility(name: str, age: int) -> str:
    if age < 0:
        return "Invalid age entered. Please enter a positive number."
    elif age >= 18:
        return f"Hello {name}, at age {age} you are eligible to vote."
    else:
        years_left = 18 - age
        return f"Hello {name}, you will be eligible to vote in {years_left} year(s)."

# Example Execution
print(check_voter_eligibility("Aarav", 19))`,
    sampleOutput: 'Hello Aarav, at age 19 you are eligible to vote.',
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    description:
      'A Python-based beginner project that simulates basic ATM operations and demonstrates programming logic, conditions, functions, and user interaction.',
    technology: 'Python',
    concepts: ['Modular Functions', 'Control Flow Loops', 'State & Balance Tracking', 'CLI Menu Design'],
    sampleLogic: `# ATM Management System Simulation
def process_withdrawal(balance: float, amount: float) -> tuple[float, str]:
    if amount <= 0:
        return balance, "Withdrawal amount must be greater than zero."
    if amount > balance:
        return balance, "Insufficient balance for this transaction."
    new_balance = balance - amount
    return new_balance, f"Dispensed Rs. {amount:.2f}. Remaining balance: Rs. {new_balance:.2f}"

# Example Execution
balance, message = process_withdrawal(5000.0, 1200.0)
print(message)`,
    sampleOutput: 'Dispensed Rs. 1200.00. Remaining balance: Rs. 3800.00',
  },
  {
    id: 'student-grade',
    title: 'Student Grade Calculator',
    description:
      'A Python project that calculates student grades based on marks and demonstrates conditional logic and basic programming concepts.',
    technology: 'Python',
    concepts: ['Arithmetic Averages', 'Multi-Branch Conditionals (if/elif/else)', 'Formatted Output'],
    sampleLogic: `# Student Grade Calculator
def calculate_grade(marks: list[float]) -> dict:
    average = sum(marks) / len(marks)
    if average >= 90:
        grade = "A+"
    elif average >= 80:
        grade = "A"
    elif average >= 70:
        grade = "B"
    elif average >= 60:
        grade = "C"
    else:
        grade = "D"
    return {"average": round(average, 2), "grade": grade}

# Example Execution
print(calculate_grade([88, 92, 79, 85, 90]))`,
    sampleOutput: "{'average': 86.8, 'grade': 'A'}",
  },
];

export const HACKATHON_PLACEHOLDERS: HackathonPlaceholder[] = [
  {
    id: 'slot-1',
    slotLabel: 'Entry 01 · Hackathon Record',
    eventName: 'Event Name (Placeholder — To Be Updated)',
    year: 'Year (e.g., 2026)',
    role: 'Role (e.g., Team Member / Builder / Ideator)',
    project: 'Project (Problem Statement & Prototype Concept)',
    achievement: 'Achievement / Outcome (Participation & Key Learnings)',
  },
  {
    id: 'slot-2',
    slotLabel: 'Entry 02 · Ideathon Record',
    eventName: 'Event Name (Placeholder — To Be Updated)',
    year: 'Year (e.g., 2026)',
    role: 'Role (e.g., Product Ideation & Pitch)',
    project: 'Project (AI / Software Solution Concept)',
    achievement: 'Achievement / Outcome (Feedback & Iteration Notes)',
  },
  {
    id: 'slot-3',
    slotLabel: 'Entry 03 · Future Event Slot',
    eventName: 'Event Name (Placeholder — Upcoming)',
    year: 'Year (Upcoming)',
    role: 'Role (Developer / Collaborator)',
    project: 'Project (To Be Documented)',
    achievement: 'Achievement / Outcome (To Be Documented)',
  },
];

export const LEARNING_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Python',
    phase: 'Current Foundation',
    description: 'Building core programming logic, problem-solving habits, functions, and data handling through hands-on scripts.',
  },
  {
    step: '02',
    title: 'Web Development',
    phase: 'Current Foundation',
    description: 'Learning HTML, CSS, JavaScript, and basic web development to turn backend logic into usable interfaces.',
  },
  {
    step: '03',
    title: 'Generative AI',
    phase: 'Active Exploration',
    description: 'Understanding how modern generative models work, experimenting with prompts, and testing practical use cases.',
  },
  {
    step: '04',
    title: 'AI Engineering',
    phase: 'Developing Direction',
    description: 'Studying how LLMs, APIs, retrieval concepts (RAG), and structured workflows come together in software systems.',
  },
  {
    step: '05',
    title: 'AI-Powered Applications',
    phase: 'Project Stage',
    description: 'Designing and prototyping student-focused concepts like LEARNLOOP that combine web interfaces with AI capabilities.',
  },
  {
    step: '06',
    title: 'Building Real-World AI Products',
    phase: 'Long-Term Goal',
    description: 'Growing into an AI Engineer capable of architecting reliable, helpful AI products that solve real-world problems.',
  },
];

export const CURRENTLY_LEARNING_ITEMS = [
  { title: 'Python', focus: 'Core programming logic, functions, and scripting' },
  { title: 'Web Development', focus: 'HTML, CSS, JavaScript, and clean web interfaces' },
  { title: 'Generative AI', focus: 'Foundational concepts and generative workflows' },
  { title: 'Prompt Engineering', focus: 'Structuring clear, reliable instructions for AI models' },
  { title: 'AI Fundamentals', focus: 'Core concepts behind modern artificial intelligence' },
  { title: 'LLMs', focus: 'Exploring Large Language Model capabilities and behavior' },
  { title: 'RAG', focus: 'Exploring Retrieval-Augmented Generation for grounded answers' },
  { title: 'AI Application Development', focus: 'Connecting Python, web interfaces, and AI APIs' },
];

export const BUILD_PHILOSOPHY_STEPS = [
  {
    step: '01',
    name: 'IDEA',
    summary: 'Spot a practical student or everyday problem worth solving.',
  },
  {
    step: '02',
    name: 'LEARN',
    summary: 'Study the required concepts, syntax, and tools step by step.',
  },
  {
    step: '03',
    name: 'BUILD',
    summary: 'Create a working prototype or script to test the concept in practice.',
  },
  {
    step: '04',
    name: 'IMPROVE',
    summary: 'Learn from mistakes, refine the logic, and iterate continuously.',
  },
];
