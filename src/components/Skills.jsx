import './Skills.css'

const techIcons = {
  JavaScript: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.75 19.5c.9 1.48 2.25 2.1 4.2 2.1 2.5 0 4.15-1.28 4.15-3.15 0-2.18-1.58-2.9-3.95-3.7-2.02-.7-2.73-1.12-2.73-2.18 0-.92.83-1.6 2.28-1.6 1.42 0 2.33.6 3.03 1.8l2.02-1.25C14.55 9.7 13.08 8.7 10.7 8.7c-2.8 0-4.6 1.6-4.6 3.75 0 2.22 1.5 3 3.82 3.78 2.1.75 2.85 1.18 2.85 2.28 0 1.05-1.02 1.7-2.6 1.7-1.85 0-3.05-.88-3.75-2.22l-1.67 1.31zm10.7-1.18c.55.95 1.4 1.58 2.58 1.58 1.1 0 1.72-.48 1.72-1.18 0-.82-.62-1.15-1.92-1.62l-.7-.25c-1.98-.7-3.28-1.58-3.28-3.68 0-2.1 1.68-3.6 4.38-3.6 2.05 0 3.32.78 4.18 2.22l-1.8 1.18c-.45-.75-1.12-1.15-2.25-1.15-1 0-1.6.45-1.6 1.05 0 .7.52 1.02 1.75 1.48l.7.25c2.32.85 3.5 1.72 3.5 3.85 0 2.45-1.88 3.82-4.65 3.82-2.45 0-4.08-.98-4.9-2.58l1.8-1.18z" fill="#000" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.625 13.875h-2.25v6h-2.25v-6h-2.25v-1.875h6.75v1.875zm9.375 2.25c0 2.25-1.875 3.75-4.5 3.75-2.25 0-3.75-1.125-4.5-2.625l1.688-1.125c.563 1.031 1.406 1.688 2.719 1.688.938 0 1.781-.469 1.781-1.219 0-.75-.563-1.031-1.875-1.5l-.656-.234c-1.969-.703-3.281-1.594-3.281-3.656 0-2.109 1.688-3.609 4.219-3.609 2.063 0 3.328.797 4.172 2.25l-1.688 1.125c-.469-.75-1.125-1.219-2.25-1.219-.984 0-1.594.469-1.594 1.125 0 .656.516.984 1.734 1.453l.656.234c2.25.797 3.516 1.641 3.516 3.844z" fill="#FFF" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M11.873 0c-5.59 0-5.222 2.427-5.222 2.427l.006 2.512h5.304v.756H4.492S0 5.166 0 10.778c0 5.613 3.916 5.415 3.916 5.415l2.339-.001v-3.3c0-3.756 3.253-3.642 3.253-3.642h5.509s3.14.053 3.14-3.085V3.14S18.423 0 11.873 0zm-2.91 1.488a.961.961 0 110 1.922.961.961 0 010-1.922z" fill="#3776AB" />
      <path d="M12.127 24c5.59 0 5.222-2.427 5.222-2.427l-.006-2.512h-5.304v-.756h7.469S24 18.834 24 13.222c0-5.613-3.916-5.415-3.916-5.415l-2.339.001v3.3c0 3.756-3.253 3.642-3.253 3.642H8.983s-3.14-.053-3.14 3.085v3.085S5.577 24 12.127 24zm2.91-1.488a.961.961 0 110-1.922.961.961 0 010 1.922z" fill="#FFD43B" />
    </svg>
  ),
  'React.js': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4.2" ry="10" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M12 0L1.75 3.6l1.55 13.43L12 24l8.7-6.97L22.25 3.6z" fill="#DD0031" />
      <path d="M12 0v24l8.7-6.97L22.25 3.6z" fill="#C3002F" />
      <path d="M12 3.48L6.42 16.03h2.38l1.13-2.82h4.14l1.13 2.82h2.38zM12 7.74l1.49 3.73h-2.98z" fill="#FFF" />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M1.5 0h21l-1.91 21.563L11.99 24l-8.58-2.437z" fill="#E34F26" />
      <path d="M12 2.182v19.61l6.906-1.959L20.472 2.182z" fill="#EF652A" />
      <path d="M12 7.766H7.312l.334 3.75H12v3.75H8.046l.334 3.75 3.62 1.004V22.5l-6.844-1.914-.72-8.086h11.56z" fill="#FFF" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M1.5 0h21l-1.91 21.563L11.99 24l-8.58-2.437z" fill="#1572B6" />
      <path d="M12 2.182v19.61l6.906-1.959L20.472 2.182z" fill="#33A9DC" />
      <path d="M12 7.766H7.312l.334 3.75H12v3.75H8.046l.334 3.75 3.62 1.004V22.5l-6.844-1.914-.72-8.086h11.56z" fill="#FFF" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M12 0L1.6 6v12L12 24l10.4-6V6zm0 2.4l8.3 4.8v9.6L12 21.6l-8.3-4.8V7.2z" fill="#339933" />
      <path d="M12 5.5l5 2.9v5.8l-5 2.9-5-2.9V8.4z" fill="#339933" />
    </svg>
  ),
  'Express.js': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-12 9a9 9 0 110-18 9 9 0 010 18z" />
      <path d="M13.5 16.5l3-4.5-3-4.5h-2l3 4.5-3 4.5h2zm-5 0l3-4.5-3-4.5h-2l3 4.5-3 4.5h2z" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <circle cx="12" cy="12" r="12" fill="#009688" />
      <path d="M12 2.5L5.5 13.5h5L9.5 21.5l8-11h-5L13.5 2.5z" fill="#FFF" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M12 0s-5.7 6.4-5.7 12.8c0 3.7 2.2 7 5.7 11.2 3.5-4.2 5.7-7.5 5.7-11.2C17.7 6.4 12 0 12 0zm0 21.7c-2.4-3.1-3.8-5.6-3.8-8.9 0-4.8 3.8-9.8 3.8-9.8s3.8 5 3.8 9.8c0 3.3-1.4 5.8-3.8 8.9z" fill="#47A248" />
      <path d="M12 1.3v21.2c.2 0 .3-.1.5-.2 2.3-3 3.6-5.5 3.6-8.5 0-4.6-3.6-9.4-3.6-9.4s-.3-2.1-.5-3.1z" fill="#47A248" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm0 6c4.42 0 8-1.34 8-2v3c0 .66-3.58 2-8 2s-8-1.34-8-2V8c0 .66 3.58 2 8 2zm0 6c4.42 0 8-1.34 8-2v3c0 .66-3.58 2-8 2s-8-1.34-8-2v-3c0 .66 3.58 2 8 2z" />
    </svg>
  ),
  'AWS (ECS, S3)': (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M6.7 13.8c-.8.6-1.9 1-3.1 1-2.4 0-4.3-1.5-4.3-4.1 0-2.8 2.1-4.2 4.6-4.2 1.1 0 2 .2 2.8.6v-.4c0-1.4-.8-2.1-2.2-2.1-1.1 0-2.1.4-2.8.9l-.7-1.3c.9-.7 2.3-1.1 3.8-1.1 2.5 0 4 1.3 4 3.7v6.6c0 1.2.1 2.2.4 3h-1.8c-.2-.6-.4-1.4-.4-2.1zm-.3-1.6V10c-.6-.4-1.3-.6-2.1-.6-1.5 0-2.6.8-2.6 2.3 0 1.4 1 2.2 2.3 2.2 1 0 1.8-.4 2.4-1.1zM11.6 15.6l-2.4-9.8h2l1.6 7.1 1.7-7.1h1.9l1.7 7.1 1.6-7.1h2l-2.4 9.8h-1.9l-1.7-6.9-1.7 6.9h-1.8zM24 13.4c-.6.6-1.6 1-2.6 1-1.3 0-2.1-.6-2.1-1.7 0-1.5 1.3-2 3.1-2.2l1.6-.2v-.2c0-.9-.5-1.3-1.5-1.3-.9 0-1.8.3-2.3.7l-.6-1.3c.8-.6 2-1 3.2-1 2.1 0 3.2.9 3.2 2.7v5.6h-1.7v-.3zm-.3-1.7v-.9l-1.3.2c-1.1.1-1.8.4-1.8 1.2 0 .6.4 1 1.2 1 .8 0 1.5-.4 1.9-1.5z" fill="#FF9900" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.76 11.393c-.636-.42-1.848-.54-2.823-.277a4.9 4.9 0 00-1.785-2.09c-.218-.148-.48-.094-.636.108-.163.208-.118.5.087.66.804.636 1.34 1.488 1.488 2.457-.69.213-2.146.438-3.076.438H.822a.412.412 0 00-.412.412c0 2.227.653 4.417 1.886 6.326 1.706 2.64 4.382 4.137 7.534 4.22 5.093.13 9.774-2.823 11.66-7.36 1.493.072 2.766-.547 3.328-1.572.164-.298.053-.668-.246-.832" fill="#2496ED" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.661 1.258.436 1.904l2.66 2.66c.646-.225 1.389-.08 1.904.435.699.7.699 1.834 0 2.534-.699.7-1.833.7-2.533 0-.528-.528-.669-1.289-.422-1.942l-2.474-2.475v6.732c.215.111.414.262.576.424.699.7.699 1.834 0 2.534-.7.7-1.834.7-2.534 0-.7-.7-.7-1.834 0-2.534.17-.17.378-.327.6-.44v-6.84c-.222-.112-.43-.269-.6-.44-.528-.528-.669-1.289-.422-1.942L6.183 5.152.454 10.881c-.604.604-.604 1.582 0 2.188l10.48 10.478c.603.604 1.581.604 2.186 0l10.426-10.425c.604-.603.604-1.581 0-2.187" fill="#F05032" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <circle cx="12" cy="12" r="12" fill="#FF6C37" />
      <path d="M17.5 12.5a5 5 0 11-10 0 5 5 0 0110 0z" fill="#FFF" />
    </svg>
  ),
  Jira: (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M11.571 11.429h11.429L11.571 0v11.429z" fill="#0052CC" />
      <path d="M0 11.571h11.429L0 23V11.571z" fill="#0052CC" />
      <path d="M11.571 11.571h11.429L11.571 23V11.571z" fill="#2684FF" />
    </svg>
  ),
  'LLM App Development': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(220, 38, 38, 0.15)" stroke="var(--accent, #dc2626)" />
    </svg>
  ),
  'Prompt Engineering': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4 17 10 11 4 5" stroke="var(--accent, #dc2626)" />
      <line x1="12" y1="19" x2="20" y2="19" stroke="var(--accent, #dc2626)" />
    </svg>
  ),
  'RAG & Semantic Search': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" stroke="var(--accent, #dc2626)" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="var(--accent, #dc2626)" />
    </svg>
  ),
  'OCR / Document Extraction': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="var(--accent, #dc2626)" />
      <polyline points="14 2 14 8 20 8" stroke="var(--accent, #dc2626)" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="var(--accent, #dc2626)" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="var(--accent, #dc2626)" />
    </svg>
  ),
  'MCP & Agent Fundamentals': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="10" rx="2" stroke="var(--accent, #dc2626)" />
      <circle cx="12" cy="5" r="2" stroke="var(--accent, #dc2626)" />
      <path d="M12 7v4" stroke="var(--accent, #dc2626)" />
      <line x1="8" y1="16" x2="8.01" y2="16" stroke="var(--accent, #dc2626)" />
      <line x1="16" y1="16" x2="16.01" y2="16" stroke="var(--accent, #dc2626)" />
    </svg>
  ),
  'REST APIs': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" stroke="#009688" />
      <rect x="2" y="14" width="20" height="8" rx="2" stroke="#009688" />
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="#009688" />
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="#009688" />
    </svg>
  ),
  WebSockets: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(255, 152, 0, 0.2)" stroke="#FF9800" />
    </svg>
  ),
  'Authentication & RBAC': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(76, 175, 80, 0.15)" stroke="#4CAF50" />
    </svg>
  ),
  'Schema Design': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#47A248" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="#47A248" />
      <line x1="9" y1="21" x2="9" y2="9" stroke="#47A248" />
    </svg>
  ),
  'Query Optimization': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" stroke="#47A248" />
      <polyline points="12 7 12 12 15 15" stroke="#47A248" />
    </svg>
  ),
  'CI/CD': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 12c2-2.5 5-4 8-4s4 1.5 4 4-2 4-4 4-6-1.5-8-4zm0 0c-2 2.5-5 4-8 4s-4-1.5-4-4 2-4 4-4 6 1.5 8 4z" stroke="#2496ED" />
    </svg>
  ),
  'Agile/Scrum': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 4 23 10 17 10" stroke="#FF6C37" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="#FF6C37" />
    </svg>
  ),
  'Code Review': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" stroke="#0052CC" />
      <polyline points="8 6 2 12 8 18" stroke="#0052CC" />
    </svg>
  ),
  'Data Structures': (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2" stroke="#0052CC" />
      <circle cx="6" cy="19" r="2" stroke="#0052CC" />
      <circle cx="18" cy="19" r="2" stroke="#0052CC" />
      <line x1="12" y1="7" x2="6" y2="17" stroke="#0052CC" />
      <line x1="12" y1="7" x2="18" y2="17" stroke="#0052CC" />
    </svg>
  ),
}

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Angular', 'HTML', 'CSS'],
  },
  {
    category: 'AI / LLM',
    skills: [
      'LLM App Development',
      'Prompt Engineering',
      'RAG & Semantic Search',
      'OCR / Document Extraction',
      'MCP & Agent Fundamentals',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'Authentication & RBAC',
    ],
  },
  {
    category: 'Data',
    skills: ['MongoDB', 'SQL', 'Schema Design', 'Query Optimization'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (ECS, S3)', 'Docker', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Postman', 'Jira', 'Agile/Scrum', 'Code Review', 'Data Structures'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills and technologies">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Skills &amp; <span className="accent">Technologies</span></h2>
          <p className="section-subtitle">
            Languages, frameworks, and tools I work with across the full stack.
          </p>
        </div>

        <div className="skills__table fade-in">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="skills__row"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="skills__row-label">{group.category}</span>
              <div className="skills__row-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__chip">
                    {techIcons[skill] && (
                      <span className="skills__chip-icon" aria-hidden="true">
                        {techIcons[skill]}
                      </span>
                    )}
                    <span className="skills__chip-name">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
