# AI CareerPath — Smart Career Guidance System
**Introduction to Prompt Engineering (IPE) College Academic Project**

A complete, responsive, client-side web application designed to guide undergraduate and technical students through tech career exploration using transparent rule-based heuristics, skill gap analysis, interactive career roadmaps, and prompt engineering tutorials.

Built purely with **HTML5, Vanilla CSS3, and Vanilla JavaScript (ES6+)**. No build tools, zero npm runtime dependencies, and no black-box API dependencies.

---

## 📌 Project Overview & College Brief

This application was developed for the **Introduction to Prompt Engineering (IPE)** academic project requirement. It solves the real-world challenge faced by engineering students who feel overwhelmed by ambiguous tech career choices and vague advice.

### Key Objectives
1. **Algorithmic Transparency**: Eliminate "black-box" generative hallucinations by using deterministic, inspectable matching rules that students can verify.
2. **Actionable Skill Gap Diagnostics**: Show students exactly which prerequisite skills they already possess and which critical competencies they are missing.
3. **Structured Learning Roadmaps**: Provide step-by-step 4-phase curricula for in-demand tech roles with milestone checkboxes saved directly in browser storage.
4. **IPE Prompt Engineering Pedagogy**: Provide side-by-side comparisons of novice vs. optimized prompts and an interactive, real-time prompt quality scoring sandbox.
5. **Privacy-Preserving & Offline-Ready**: Store all student profiles and roadmap progress directly in the user's browser using `localStorage`.

---

## 🛠️ Technology Stack & Zero-Dependency Architecture

| Layer | Implementation | Details |
|---|---|---|
| **Structure** | Semantic HTML5 (`index.html`) | Accessible landmarks (`header`, `main`, `section`, `nav`, `footer`), ARIA labels, zero CDN links |
| **Styling** | Custom Vanilla CSS3 (`style.css`) | 60-30-10 color budget, CSS custom properties, CSS Grid & Flexbox, mobile navigation drawer, `@media print` export styles |
| **Logic & State** | Pure Vanilla JavaScript (`script.js`) | ES6+ modules, deterministic scoring engine, prompt evaluator parser, quiz state machine, `localStorage` manager |
| **Build Step** | **None** | Runs directly in any web browser without Node.js, Vite, Webpack, or npm commands |

---

## 📐 Mathematical Rule-Based Scoring Engine

Unlike generative AI wrappers that generate inconsistent career advice, **AI CareerPath** computes career affinities using a transparent, deterministic heuristic formula (Max **100 Points**):

$$\text{Final Match Score} = \min\left(100, \text{Core} + \text{Secondary} + \text{Interests} + \text{Domain}\right)$$

### Point Allocation Breakdown

1. **Core Skills Match (Weight: 50% / Max 50 pts)**
   $$\text{Core} = \left(\frac{\text{Number of Matched Core Prerequisites}}{\text{Total Core Skills Required by Career Track}}\right) \times 50$$

2. **Secondary Skills Match (Weight: 20% / Max 20 pts)**
   $$\text{Secondary} = \left(\frac{\text{Number of Matched Secondary Skills}}{\text{Total Secondary Skills for Career Track}}\right) \times 20$$

3. **Engineering Interests Match (Weight: 20% / Max 20 pts)**
   $$\text{Interests} = \left(\frac{\text{Number of Matched Interests}}{\text{Total Matching Interests Defined for Track}}\right) \times 20$$

4. **Domain Preference Alignment (Weight: 10% / Max 10 pts)**
   $$\text{Domain} = \begin{cases} 10 & \text{if Student's Preferred Domain matches the Career Track Domain or "All Fields"} \\ 0 & \text{otherwise} \end{cases}$$

Every career suggestion in the interface reveals this exact mathematical breakdown so students and faculty evaluators can audit the scoring pipeline.

---

## 💡 IPE Prompt Engineering Learning Lab Features

The application includes an educational section dedicated to prompt engineering competencies:

### 1. Six Foundational Prompt Frameworks
- **RTF**: Role - Task - Format
- **TAG**: Task - Action - Goal
- **CREATE**: Character - Request - Examples - Adjustments - Type - Extras
- **CoT**: Chain-of-Thought step-by-step reasoning
- **Few-Shot**: In-context demonstration exemplars
- **Delimiters**: Boundary tags (`<context>`, `<constraints>`, `<output_format>`) to prevent prompt injection and separate instructions from input data

### 2. Side-by-Side Prompt Case Studies
Interactive comparisons showcasing why basic prompts fail and how structured IPE prompts produce reliable outputs:
1. Resume Bullet Point Optimization (Google XYZ Formula)
2. Technical Mock Interview Simulator (conversational step protocol)
3. Algorithm Explanation via Feynman Technique (intuitive analogy to proof)
4. Code Refactoring & Security Audit (CWE classification & test suites)
5. RAG Architecture Planning (trade-off analysis & retrieval parameters)

### 3. Live Rule-Based Prompt Quality Evaluator
A real-time prompt analysis sandbox that evaluates user-written prompts across 5 key dimensions:
- Role & Persona Identification (+20 pts)
- Actionable Task Verb (+20 pts)
- Context & Background Data (+20 pts)
- Explicit Output Formatting (+20 pts)
- Negative Constraints & Guardrails (+20 pts)

---

## 🚀 How to Deploy to Vercel (Zero Build Step & Zero npm Install)

Because this project is built entirely with pure HTML, CSS, and vanilla JavaScript, it can be deployed to Vercel as a **100% static site** with zero build configuration and zero npm dependencies:

### Step-by-Step Instructions

1. **Push your code to GitHub / GitLab / Bitbucket**:
   Ensure the root of your repository contains:
   ```
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```

2. **Log into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** → **"Project"**.

3. **Import your repository**:
   - Select the repository containing your AI CareerPath code.

4. **Configure Project Settings (CRITICAL)**:
   - **Framework Preset**: Select **"Other"** (do NOT select Next.js, Vite, or React).
   - **Root Directory**: Leave as `./` (default).
   - **Build and Output Settings**:
     - **Build Command**: Toggle the **OVERRIDE** switch to **ON**, and leave the input field **COMPLETELY EMPTY** (or enter `echo "Static Site"`).
     - **Output Directory**: Toggle the **OVERRIDE** switch to **ON**, and leave the input field **COMPLETELY EMPTY** (or enter `./`).
     - **Install Command**: Toggle the **OVERRIDE** switch to **ON**, and leave the input field **COMPLETELY EMPTY** (do not run `npm install`).

5. **Click "Deploy"**:
   - Vercel will deploy the static files within 2–5 seconds.
   - Your site will be live at `https://your-project.vercel.app`.

---

## 💻 Local Testing & Development

To test the application locally without any node packages:

### Option 1: Direct File Open
Double-click `index.html` in your file explorer to open it directly in Google Chrome, Firefox, Safari, or Microsoft Edge.

### Option 2: Python Simple HTTP Server
If you have Python installed:
```bash
# In the project directory:
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 3: VS Code Live Server Extension
Open the folder in Visual Studio Code, right-click `index.html`, and click **"Open with Live Server"**.

---

## 📂 File Structure

```
├── index.html       # Complete semantic HTML5 structure with dashboard, quiz, roadmaps & IPE lab
├── style.css        # Pure responsive CSS3 styling (60-30-10 palette, zero external frameworks)
├── script.js        # Deterministic rule engine, skill database, quiz engine & localStorage manager
├── metadata.json    # Application metadata configuration
└── README.md        # Academic documentation & deployment guide
```

---

## ⚖️ Academic Integrity & Disclosure

This project strictly adheres to academic honesty guidelines:
- **No Hallucinated AI Claims**: The system openly describes itself as a deterministic rule-based guidance engine.
- **Privacy Guarantee**: No student data is transmitted to external servers. All information remains on the student's device via browser `localStorage`.
- **Educational Scope**: Career matches and readiness percentages reflect curricular alignment heuristics for undergraduate study planning.
