export interface Project {
  name: string;
  description: string;
  url?: string;
  git_link?: string;
  tags: string[];
}

export interface Contribution {
  repo_name: string;
  created_date: string;
  merged_date: string;
  pr_id: string;
  pr_url: string;
  repo_url: string;
  issue?: string;
  description: string;
}


export const AgenticProjects: Project[] = [
  {
    name: "nexusGPT",
    description:
      "A ChatGPT-like agentic platform featuring Graph RAG capabilities over codebases. Extracts AST node relationships using SCIP with Tree-sitter fallback to conduct semantic code inference. Supports MCP (Model Context Protocol) and configurable LLM providers, deployed on AWS EC2.",
    tags: ["MCP", "Graph RAG", "SCIP", "Tree-sitter", "AWS EC2", "LLMs"],
    git_link: "https://github.com/DineshThumma9/nexusGPT",
    url: "https://centralgpt.app/",
  },
  {
    name: "ResumeReworker",
    description:
      "Intelligent resume engineering platform that dynamically tailors reusable LaTeX/PDF resumes to specific Job Descriptions. Integrates the Monaco editor for live fine-tuning, cloud persistence, and section-level privacy masking for community feedback on Reddit.",
    tags: ["AI Agents", "Monaco Editor", "LaTeX", "Cloud Storage", "Privacy"],
    git_link: "https://github.com/DineshThumma9/ResumeReworker",
    url: "https://resume-reworker.vercel.app/",
  },
  {
    name: "Renvue",
    description:
      "Event-driven agentic recovery system that listens to subscription and payment failure webhooks and autonomously orchestrates multi-channel recovery workflows based on user behavior and channel availability.",
    tags: ["Event-Driven", "Autonomous Agents", "Razorpay", "Fintech", "Webhooks"],
    git_link: "https://github.com/DineshThumma9/Renvue" ,
    url: "https://razor-renvue.vercel.app/",
  },
  {
    name: "Unihack",
    description:
      "Autonomous workflow pipeline that ingests CSVs of product catalogs and brand descriptions, crawls web documents and specs, outputs enriched product data catalogs, and groups pipeline failures for targeted retry and investigation.",
    tags: ["Agentic Workflows", "Data Enrichment", "Python", "ETL", "Cataloging"],
    git_link: "https://github.com/DineshThumma9/UniHack",
    url: "https://unihack-enrich.vercel.app/",
  },
];

export const FrontendBackend: Project[] = [
  {
    name: "Devconnect",
    description:
      "Developer matchmaking and social platform built with Spring Boot. Uses Neo4j graph algorithms for interest-based friend recommendations and team matchmaking, featuring post caching, background polling, and intelligent cold-start mitigation via tag affinities.",
    tags: ["Spring Boot", "Neo4j", "Graph Database", "Java", "Recommendation Engine"],
    git_link: "https://github.com/DineshThumma9/devconnect-backend",
    url: "",
  },
  {
    name: "Algo ameba",
    description:
      "Interactive DSA visualizer built with TypeScript and GSAP animations. Allows developers to play, pause, step through algorithms with side-by-side synchronized code execution without switching contexts.",
    tags: ["TypeScript", "GSAP", "DSA", "Interactive UI", "Algorithms"],
    git_link: "https://github.com/DineshThumma9/algo-ameba",
    url: "https://algo-ameba.vercel.app",
  }
];

export const MiscProjects: Project[] = [
  
  {
    name: "Medium Freedium",
    description:
      "Automated email delivery pipeline with scheduled daily cron jobs that parses digest subscriptions, cleans and reformats article feeds, and delivers a distraction-free reading digest.",
    tags: ["Cron Jobs", "Automation", "Email Service", "TypeScript"],
    git_link: "https://github.com/DineshThumma9/Medium-Freedium",
    url: "",
  },
  {
    name: "RedHideit",
    description:
      "Productivity Chrome extension that transforms Reddit feeds into a Kaggle / Jupyter Notebook style interface, enabling stealthy reading in university labs or open workspaces.",
    tags: ["Chrome Extension", "TypeScript", "DOM Manipulation", "UI Themes"],
    git_link: "https://github.com/DineshThumma9/RedHideit",
    url: "",
  },
];

export const openSourceContributions: Contribution[] = [
  {
    repo_name: "zauberzeug/nicegui",
    created_date: "2026-08-15",
    merged_date: "2026-08-27",
    pr_id: "#6288",
    pr_url: "https://github.com/zauberzeug/nicegui/pull/6288",
    repo_url: "https://github.com/zauberzeug/nicegui",
    issue: "Fixes #6281",
    description:
      "Fixed ui.sub_pages incorrectly treating registered FastAPI routes as internal SPA pages due to trailing-slash mismatches.",
  },
  {
    repo_name: "google/adk-python",
    created_date: "2026-01-26",
    merged_date: "2026-07-06",
    pr_id: "#4271",
    pr_url: "https://github.com/google/adk-python/pull/4271",
    repo_url: "https://github.com/google/adk-python",
    issue: "Fixes #4270",
    description:
      "Exposed configurable parameter as a public property in McpToolset for flexible runtime configuration.",
  },
  {
    repo_name: "google/adk-python",
    created_date: "2026-01-23",
    merged_date: "2026-06-30",
    pr_id: "#4248",
    pr_url: "https://github.com/google/adk-python/pull/4248",
    repo_url: "https://github.com/google/adk-python",
    issue: "Fixes #4244",
    description:
      "Added detailed error messages on SSE streams specifying stacktrace and error type on client-side for better debugging.",
  },
  {
    repo_name: "indictechcom/wikifile-transfer",
    created_date: "2026-03-10",
    merged_date: "2026-06-22",
    pr_id: "#49",
    pr_url: "https://github.com/indictechcom/wikifile-transfer/pull/49",
    repo_url: "https://github.com/indictechcom/wikifile-transfer",
    issue: "Fixes #48",
    description:
      "Built a responsive mobile navigation header with a collapsible hamburger menu for small screen viewports.",
  },
  {
    repo_name: "django/django",
    created_date: "2026-03-21",
    merged_date: "2026-04-22",
    pr_id: "#20962",
    pr_url: "https://github.com/django/django/pull/20962",
    repo_url: "https://github.com/django/django",
    issue: "Fixed Trac #36991",
    description:
      "Raised BadRequest for malformed/invalid encodings in Content-Type request headers to prevent 500 server crashes.",
  },
  {
    repo_name: "mesa/mesa-llm",
    created_date: "2026-03-31",
    merged_date: "2026-04-13",
    pr_id: "#285",
    pr_url: "https://github.com/mesa/mesa-llm/pull/285",
    repo_url: "https://github.com/mesa/mesa-llm",
    issue: "Fixes #284",
    description:
      "Improved error handling to raise an explicit ValueError with descriptive guidance when an invalid model name is passed.",
  },
  {
    repo_name: "mesa/mesa-llm",
    created_date: "2026-03-30",
    merged_date: "2026-04-11",
    pr_id: "#280",
    pr_url: "https://github.com/mesa/mesa-llm/pull/280",
    repo_url: "https://github.com/mesa/mesa-llm",
    issue: "Fixes #279",
    description:
      "Prevented internal KeyError leaks in ToolManager by raising a clean ValueError listing all available registered tools.",
  },
  {
    repo_name: "google/adk-python",
    created_date: "2026-01-30",
    merged_date: "2026-02-09",
    pr_id: "#4324",
    pr_url: "https://github.com/google/adk-python/pull/4324",
    repo_url: "https://github.com/google/adk-python",
    issue: "Fixes #4320",
    description:
      "Refactored MCP toolset to use standard logger instead of raw print calls and updated corresponding unit tests.",
  },
  {
    repo_name: "run-llama/llama_index",
    created_date: "2026-01-26",
    merged_date: "2026-01-28",
    pr_id: "#20553",
    pr_url: "https://github.com/run-llama/llama_index/pull/20553",
    repo_url: "https://github.com/run-llama/llama_index",
    issue: "Fixes #20540",
    description:
      "Fixed core thread types to gracefully allow target=None without crashing on thread start, matching standard library behavior.",
  },
  {
    repo_name: "run-llama/llama_index",
    created_date: "2026-01-26",
    merged_date: "2026-01-27",
    pr_id: "#20551",
    pr_url: "https://github.com/run-llama/llama_index/pull/20551",
    repo_url: "https://github.com/run-llama/llama_index",
    issue: "Fixes #20539",
    description:
      "Handled edge case in truncate_text where small max_length limits produced output unexpectedly exceeding the limit.",
  },
  {
    repo_name: "run-llama/llama_index",
    created_date: "2026-01-07",
    merged_date: "2026-01-13",
    pr_id: "#20466",
    pr_url: "https://github.com/run-llama/llama_index/pull/20466",
    repo_url: "https://github.com/run-llama/llama_index",
    issue: "Fixes #20461",
    description:
      "Fixed mean_agg to validate against empty embedding lists and raise ValueError instead of returning nan float.",
  },
  {
    repo_name: "google/adk-docs",
    created_date: "2026-01-11",
    merged_date: "2026-01-12",
    pr_id: "#1131",
    pr_url: "https://github.com/google/adk-docs/pull/1131",
    repo_url: "https://github.com/google/adk-docs",
    description:
      "Updated Google ADK tutorials and documentation to migrate deprecated MODEL_2_0_FLASH references to MODEL_2_5_FLASH.",
  },
  {
    repo_name: "google/adk-python",
    created_date: "2026-01-09",
    merged_date: "2026-01-10",
    pr_id: "#4106",
    pr_url: "https://github.com/google/adk-python/pull/4106",
    repo_url: "https://github.com/google/adk-python",
    description:
      "Escaped MySQL reserved keyword 'key' using backticks in SQL queries to prevent schema version check syntax errors.",
  },
];
