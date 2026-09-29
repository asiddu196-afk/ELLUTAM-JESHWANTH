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
  { step: '03', label: 'BUILDER', detail: 'Turning Ideas into Working Projects' },
  { step: '04', label: 'AI ENTHUSIAST', detail: 'Exploring Generative AI, LLMs & RAG' },
  { step: '05', label: 'ASPIRING AI ENGINEER', detail: 'Building Practical AI Applications' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core language used for programming logic and building projects.',
    items: [
      { name: 'Python' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Foundational web technologies for structuring and styling interfaces.',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Basic Web Development' },
    ],
  },
  {
    id: 'ai-generative-ai',
    title: 'AI & Generative AI',
    description: 'Exploring modern artificial intelligence concepts step by step.',
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
    description: 'Problem-solving habits, collaborative events, and continuous growth.',
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
    summary: 'Engage with structured educational content and lessons.',
    detail: 'Students begin by watching or reading educational content at their own pace.',
  },
  {
    number: '02',
    step: 'CAPTURE',
    summary: 'Capture questions and key points while studying.',
    detail: 'While learning from content, students capture questions and important points immediately.',
  },
  {
    number: '03',
    step: 'ASK',
    summary: 'Ask AI-powered doubts for clear explanations.',
    detail: 'Students ask AI-powered doubts to get immediate help on concepts they find difficult.',
  },
  {
    number: '04',
    step: 'UNDERSTAND',
    summary: 'Build clear conceptual understanding.',
    detail: 'Guided explanations help students truly understand the topic before moving ahead.',
  },
  {
    number: '05',
    step: 'NOTE',
    summary: 'Convert learning material into structured, understandable notes.',
    detail: 'Generate understandable notes and flashcards from the study session for revision.',
  },
  {
    number: '06',
    step: 'PRACTICE',
    summary: 'Practice concepts through flashcards and guided exercises.',
    detail: 'Reinforce understanding with active recall and practice sessions.',
  },
  {
    number: '07',
    step: 'TEST',
    summary: 'Take AI quizzes for assessment and self-evaluation.',
    detail: 'Practice through quizzes designed to test comprehension and retention.',
  },
  {
    number: '08',
    step: 'ANALYZE',
    summary: 'Identify weak areas and track learning performance.',
    detail: 'Learning analytics help students understand strengths, weaknesses, and improvement areas.',
  },
  {
    number: '09',
    step: 'IMPROVE',
    summary: 'Continuously improve based on personalized insights.',
    detail: 'Focus revision on identified weak areas and track ongoing learning progress.',
  },
];

export const LEARNLOOP_FEATURES: LearnLoopFeature[] = [
  {
    title: 'AI Tutor',
    description: 'AI-powered assistance for student doubts and explanations.',
    category: 'Feature 01',
  },
  {
    title: 'AI Notes',
    description: 'Convert learning material into structured notes.',
    category: 'Feature 02',
  },
  {
    title: 'Flashcards',
    description: 'Generate revision-friendly flashcards.',
    category: 'Feature 03',
  },
  {
    title: 'AI Quiz',
    description: 'Create quizzes for practice and assessment.',
    category: 'Feature 04',
  },
  {
    title: 'Progress Tracking',
    description: 'Track performance and identify weak areas.',
    category: 'Feature 05',
  },
  {
    title: 'Personalized Learning',
    description: 'Explore adaptive learning based on student performance.',
    category: 'Feature 06',
  },
  {
    title: 'Gamification',
    description: 'XP, achievements, streaks, and challenges to make learning engaging.',
    category: 'Feature 07',
  },
  {
    title: 'Voice Doubt',
    description: 'Future concept for asking doubts using voice.',
    category: 'Feature 08',
  },
  {
    title: 'Learning Analytics',
    description: 'Understand strengths, weaknesses, and improvement areas.',
    category: 'Feature 09',
  },
];

export const LEARNLOOP_TECH_DIRECTION = [
  { name: 'Python', status: '' },
  { name: 'Web Development', status: '' },
  { name: 'Generative AI', status: '' },
  { name: 'LLMs', status: '' },
  { name: 'Prompt Engineering', status: '' },
  { name: 'RAG', status: 'Exploring' },
  { name: 'AI APIs', status: '' },
  { name: 'Database', status: 'Learning' },
];

export const OTHER_PROJECTS: BeginnerProject[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Calculator',
    description:
      'A beginner Python project that checks voting eligibility based on age and demonstrates conditional logic and user input.',
    technology: 'Python',
    concepts: ['User Input', 'Conditional Logic (if/else)', 'Basic Validation'],
    sampleLogic: `# Voter Eligibility Calculator
age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote.")
else:
    years_remaining = 18 - age
    print(f"You are not eligible yet. Wait {years_remaining} more year(s).")`,
    sampleOutput: 'Enter your age: 19\nYou are eligible to vote.',
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    description:
      'A Python-based beginner project that simulates basic ATM operations and demonstrates programming logic, conditions, functions, and user interaction.',
    technology: 'Python',
    concepts: ['Functions', 'Conditions', 'Programming Logic', 'User Interaction'],
    sampleLogic: `# ATM Management System
def check_balance(balance):
    print(f"Current Balance: Rs. {balance}")

def withdraw(balance, amount):
    if amount <= 0:
        print("Enter a valid amount.")
    elif amount > balance:
        print("Insufficient balance.")
    else:
        balance -= amount
        print(f"Withdrawal successful. Remaining Balance: Rs. {balance}")
    return balance

balance = 5000
balance = withdraw(balance, 1500)`,
    sampleOutput: 'Withdrawal successful. Remaining Balance: Rs. 3500',
  },
  {
    id: 'student-grade',
    title: 'Student Grade Calculator',
    description:
      'A Python project that calculates student grades based on marks and demonstrates conditional logic and basic programming concepts.',
    technology: 'Python',
    concepts: ['Conditional Logic', 'Marks Calculation', 'Basic Programming Concepts'],
    sampleLogic: `# Student Grade Calculator
marks = [85, 90, 78, 88, 92]
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

print(f"Average Marks: {average:.1f} | Grade: {grade}")`,
    sampleOutput: 'Average Marks: 86.6 | Grade: A',
  },
];

export const HACKATHON_PLACEHOLDERS: HackathonPlaceholder[] = [
  {
    id: 'slot-1',
    slotLabel: 'Hackathon Entry Placeholder 01',
    eventName: 'Event Name (Placeholder)',
    year: 'Year (Placeholder)',
    role: 'Role (Placeholder)',
    project: 'Project (Placeholder)',
    achievement: 'Achievement (Placeholder)',
  },
  {
    id: 'slot-2',
    slotLabel: 'Ideathon Entry Placeholder 02',
    eventName: 'Event Name (Placeholder)',
    year: 'Year (Placeholder)',
    role: 'Role (Placeholder)',
    project: 'Project (Placeholder)',
    achievement: 'Achievement (Placeholder)',
  },
  {
    id: 'slot-3',
    slotLabel: 'Future Event Placeholder 03',
    eventName: 'Event Name (Placeholder)',
    year: 'Year (Placeholder)',
    role: 'Role (Placeholder)',
    project: 'Project (Placeholder)',
    achievement: 'Achievement (Placeholder)',
  },
];

export const LEARNING_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Python',
    description: 'Building core programming logic, conditions, functions, and problem-solving skills.',
  },
  {
    step: '02',
    title: 'Web Development',
    description: 'Learning HTML, CSS, JavaScript, and basic web development to build clean interfaces.',
  },
  {
    step: '03',
    title: 'Generative AI',
    description: 'Exploring beginner Generative AI concepts and prompt engineering.',
  },
  {
    step: '04',
    title: 'AI Engineering',
    description: 'Learning how LLMs, RAG concepts, and AI APIs work together.',
  },
  {
    step: '05',
    title: 'AI-Powered Applications',
    description: 'Combining software development and AI into student-focused concepts like LEARNLOOP.',
  },
  {
    step: '06',
    title: 'Building Real-World AI Products',
    description: 'Long-term goal of building practical AI products that solve real-world problems.',
  },
];

export const CURRENTLY_LEARNING_ITEMS = [
  { title: 'Python', status: 'Currently Learning' },
  { title: 'Web Development', status: 'Currently Learning' },
  { title: 'Generative AI', status: 'Currently Learning' },
  { title: 'Prompt Engineering', status: 'Currently Learning' },
  { title: 'AI Fundamentals', status: 'Currently Learning' },
  { title: 'LLMs', status: 'Currently Learning' },
  { title: 'RAG', status: 'Currently Learning' },
  { title: 'AI Application Development', status: 'Currently Learning' },
];

export const BUILD_PHILOSOPHY_STEPS = [
  {
    step: '01',
    name: 'IDEA',
    summary: 'Start with a practical problem or project concept.',
  },
  {
    step: '02',
    name: 'LEARN',
    summary: 'Learn the required programming and AI concepts step by step.',
  },
  {
    step: '03',
    name: 'BUILD',
    summary: 'Turn the concept into a working project through experimentation.',
  },
  {
    step: '04',
    name: 'IMPROVE',
    summary: 'Learn from mistakes, refine the solution, and keep improving.',
  },
];
