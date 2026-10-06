import ReactArchitecture from "../assets/images/blogs/ReactArchitecture.jpg";
import ReactComponentArchitecture from "../assets/images/blogs/react-component-architecture.webp";
import TailwindDarkMode from "../assets/images/blogs/TailwindDarkMode.png";
import ReactRouter from "../assets/images/blogs/ReactRouter.jpg";
import ES2026 from "../assets/images/blogs/ES2026.jpg";
import ResponsiveDesign from "../assets/images/blogs/ResponsiveDesign.png";
import ReduxToolkit from "../assets/images/blogs/ReduxToolkit.jpg";
import NextJS from "../assets/images/blogs/NextJS.png";
import TypeScript from "../assets/images/blogs/TypeScript.webp";
import GraphQL from "../assets/images/blogs/GraphQL.png";
import MongoDB from "../assets/images/blogs/MongoDB.webp";
import Docker from "../assets/images/blogs/Docker.jpg";
import Jest from "../assets/images/blogs/Jest.png";
import Webpack from "../assets/images/blogs/Webpack.webp";
import NodeJS from "../assets/images/blogs/NodeJS.png";
import ExpressJS from "../assets/images/blogs/ExpressJS.png";
import PostgreSQL from "../assets/images/blogs/PostgreSQL.png";
import Firebase from "../assets/images/blogs/Firebase.webp";
import AWS from "../assets/images/blogs/AWS.jpg";
import Python from "../assets/images/blogs/Python.png";
import Django from "../assets/images/blogs/Django.jpg";
import Flutter from "../assets/images/blogs/Flutter.jpg";


const blogs = [
  {
    categoryId: 1,
    slug: "react-component-architecture",
    title: "React Component Architecture",
    excerpt:
      "Learn how to build scalable React applications with reusable components.",
    category: "react",
    authorId: 1,
    readTime: "8",
    publishedDate: "19-Jul-2026",
    featured: true,
    image: ReactArchitecture,
    content: [
      {
        type: "paragraph",
        text: "React applications are built using reusable components.",
      },
      {
        type: "heading",
        text: "Why Component Architecture Matters",
      },
      {
        type: "paragraph",
        text: "A good component architecture makes an application easier to maintain, test, and scale.",
      },
      {
        type: "list",
        items: [
          "Reusable components",
          "Easy maintenance",
          "Better testing",
          "Better scalability"
        ]
      },
      {
        type: "code",
        language: "javascript",
        code: `const App = () => {
        return <h1>Hello React</h1>;
      };`
      },
      {
        type: "code",
        language: "javascript",
        code: `const Button = ({ children }) => {
        return <button>{children}</button>;
      };`
      },
      {
        type: "quote",
        text: "Good component architecture makes complex applications easier to build and maintain."
      },
      {
        type: "image",
        src: ReactComponentArchitecture,
        alt: "React component architecture"
      },
      {
        type: "link",
        text: "Learn more about React",
        url: "https://react.dev/"
      }
    ],
  },
  {
    categoryId: 2,
    slug: "tailwind-css-dark-mode",
    title: "Tailwind CSS Dark Mode Setup",
    excerpt:
      "Step-by-step guide to implement dark mode in your React app using Tailwind CSS.",
    category: "css",
    authorId: 2,
    readTime: "6",
    publishedDate: "20-Jul-2026",
    featured: false,
    image: TailwindDarkMode,
    content: [
      {
        type: "paragraph",
        text: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      },
      {
        type: "heading",
        text: "Why Tailwind CSS Matters",
      },
      {
        type: "paragraph",
        text: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      },
      
    ],
    
  },
  {
    categoryId: 3,
    slug: "react-router-v6-tutorial",
    title: "React Router v6: Complete Guide",
    excerpt:
      "Master React Router v6 with nested routes, dynamic routing, and protected routes.",
    category: "react",
    authorId: 1,
    readTime: "12",
    publishedDate: "21-Jul-2026",
    featured: true,
    image: ReactRouter,
    content: [
      {
        type: "paragraph",
        text: "A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.",
      },
      {
        type: "heading",
        text: "React Router is developed via an Open Governance model.",
      },
      {
        type: "paragraph",
        text: "A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.",
      },
    ],
  },
  {
    categoryId: 4,
    slug: "javascript-es2026-features",
    title: "Top JavaScript ES2026 Features Every Developer Must Know",
    excerpt:
      "Explore the latest JavaScript features introduced in ES2026 with practical examples.",
    category: "javascript",
    authorId: 3,
    readTime: "7",
    publishedDate: "22-Jul-2026",
    featured: false,
    image: ES2026,
    content: [
      {
        type: "paragraph",
        text: "Main course contains 2 parts which cover JavaScript as a programming language and working with a browser.",
      },
      {
        type: "heading",
        text: "The Modern JavaScript Tutorial",
      },
      {
        type: "paragraph",
        text: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
      },
    ],
  },
  {
    categoryId: 5,
    slug: "responsive-design-best-practices",
    title: "CSS Responsive Design Best Practices",
    excerpt:
      "Create pixel-perfect responsive layouts using Flexbox, Grid, and modern CSS techniques.",
    category: "css",
    authorId: 2,
    readTime: "10",
    publishedDate: "23-Jul-2026",
    featured: false,
    image: ResponsiveDesign,
    content: [
      {
        type: "paragraph",
        text: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language.",
      },
      {
        type: "heading",
        text: "Learn CSS",
      },
      {
        type: "paragraph",
        text: "CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.",
      },
    ],
  },
  {
    categoryId: 6,
    slug: "redux-toolkit-state-management",
    title: "React-Redux Toolkit for State Management",
    excerpt:
      "Simplify state management in React using Redux Toolkit with slices and thunks.",
    category: "react",
    authorId: 1,
    readTime: "15",
    publishedDate: "24-Jul-2026",
    featured: true,
    image: ReduxToolkit,
    content: [
      {
        type: "paragraph",
        text: "Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.",
      },
      {
        type: "heading",
        text: "Learn Redux Toolkit",
      },
      {
        type: "paragraph",
        text: "The Redux Toolkit package is intended to be the standard way to write Redux logic.",
      },
    ],
  },
  {
    categoryId: 7,
    slug: "nextjs-15-whats-new",
    title: "Next.js 15: What's New and Why You Should Upgrade",
    excerpt:
      "Discover the latest features in Next.js 15 including Turbopack, Server Components, and improved performance.",
    category: "react",
    authorId: 1,
    readTime: "9",
    publishedDate: "25-Jul-2026",
    featured: false,
    image: NextJS,
    content: [
      {
        type: "paragraph",
        text: "Next.js 15 brings significant improvements in performance and developer experience with Turbopack and React Server Components.",
      },
      {
        type: "heading",
        text: "Key Features of Next.js 15",
      },
      {
        type: "paragraph",
        text: "The new version includes optimized server-side rendering, improved static site generation, and better image optimization.",
      },
    ],
  },
  {
    categoryId: 8,
    slug: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns for Scalable Applications",
    excerpt:
      "Master advanced TypeScript patterns like conditional types, mapped types, and utility types.",
    category: "typescript",
    authorId: 3,
    readTime: "11",
    publishedDate: "26-Jul-2026",
    featured: false,
    image: TypeScript,
    content: [
      {
        type: "paragraph",
        text: "TypeScript adds static typing to JavaScript, making your code more robust and easier to maintain.",
      },
      {
        type: "heading",
        text: "Why TypeScript Matters",
      },
      {
        type: "paragraph",
        text: "Advanced patterns like conditional and mapped types allow you to build more flexible and reusable type definitions.",
      },
    ],
  },
  {
    categoryId: 9,
    slug: "graphql-api-design",
    title: "GraphQL API Design Best Practices",
    excerpt:
      "Learn how to design efficient GraphQL APIs with proper schema design, pagination, and error handling.",
    category: "api",
    authorId: 4,
    readTime: "14",
    publishedDate: "27-Jul-2026",
    featured: false,
    image: GraphQL,
    content: [
      {
        type: "paragraph",
        text: "GraphQL is a query language and runtime for APIs that gives clients the power to request exactly what they need.",
      },
      {
        type: "heading",
        text: "GraphQL Schema Design",
      },
      {
        type: "paragraph",
        text: "Designing a well-structured GraphQL schema is key to creating an efficient and scalable API.",
      },
    ],
  },
  {
    categoryId: 10,
    slug: "mongodb-indexing-optimization",
    title: "MongoDB Indexing and Query Optimization",
    excerpt:
      "Boost MongoDB performance with proper indexing, query optimization, and aggregation pipeline best practices.",
    category: "database",
    authorId: 4,
    readTime: "13",
    publishedDate: "28-Jul-2026",
    featured: false,
    image: MongoDB,
    content: [
      {
        type: "paragraph",
        text: "MongoDB is a NoSQL document database that provides high performance, high availability, and automatic scaling.",
      },
      {
        type: "heading",
        text: "Query Optimization in MongoDB",
      },
      {
        type: "paragraph",
        text: "Proper indexing and query structure can significantly improve your MongoDB application's performance.",
      },
    ],
  },
  {
    categoryId: 11,
    slug: "docker-containerization-guide",
    title: "Docker: Complete Guide to Containerization",
    excerpt:
      "Master Docker containers, images, volumes, networking, and orchestration with this comprehensive guide.",
    category: "devops",
    authorId: 5,
    readTime: "18",
    publishedDate: "29-Jul-2026",
    featured: false,
    image: Docker,
    content: [
      {
        type: "paragraph",
        text: "Docker helps developers build, share, and run applications anywhere without worrying about environment inconsistencies.",
      },
      {
        type: "heading",
        text: "Why Docker Matters",
      },
      {
        type: "paragraph",
        text: "Containerization with Docker ensures that your applications run seamlessly across all environments.",
      },
    ],
  },
  {
    categoryId: 12,
    slug: "jest-unit-testing-react",
    title: "Jest Unit Testing for React Applications",
    excerpt:
      "Write comprehensive unit tests for your React components using Jest and React Testing Library.",
    category: "testing",
    authorId: 2,
    readTime: "9",
    publishedDate: "30-Jul-2026",
    featured: false,
    image: Jest,
    content: [
      {
        type: "paragraph",
        text: "Jest is a delightful JavaScript testing framework with a focus on simplicity.",
      },
      {
        type: "heading",
        text: "Testing React Components",
      },
      {
        type: "paragraph",
        text: "Unit testing ensures your components work correctly and makes your codebase more robust.",
      },
    ],
  },
  {
    categoryId: 13,
    slug: "webpack-module-bundling",
    title: "Webpack: Master Module Bundling",
    excerpt:
      "Learn Webpack configuration, code splitting, and optimization techniques for modern web applications.",
    category: "javascript",
    authorId: 3,
    readTime: "16",
    publishedDate: "31-Jul-2026",
    featured: false,
    image: Webpack,
    content: [
      {
        type: "paragraph",
        text: "Webpack is a static module bundler for modern JavaScript applications.",
      },
      {
        type: "heading",
        text: "Why Use Webpack",
      },
      {
        type: "paragraph",
        text: "Webpack bundles your code, images, CSS, and other assets efficiently for production.",
      },
    ],
  },
  {
    categoryId: 14,
    slug: "nodejs-rest-api-building",
    title: "Node.js REST API Building Guide",
    excerpt:
      "Build production-ready REST APIs with Node.js, Express, and MongoDB from scratch.",
    category: "backend",
    authorId: 4,
    readTime: "14",
    publishedDate: "01-Aug-2026",
    featured: false,
    image: NodeJS,
    content: [
      {
        type: "paragraph",
        text: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        type: "heading",
        text: "Building REST APIs",
      },
      {
        type: "paragraph",
        text: "Learn to build robust REST APIs with proper authentication, validation, and error handling.",
      },
    ],
  },
  {
    categoryId: 15,
    slug: "expressjs-middleware-guide",
    title: "Express.js Middleware: The Complete Guide",
    excerpt:
      "Understand Express.js middleware, how they work, and how to create custom middleware for your APIs.",
    category: "backend",
    authorId: 4,
    readTime: "10",
    publishedDate: "02-Aug-2026",
    featured: false,
    image: ExpressJS,
    content: [
      {
        type: "paragraph",
        text: "Express.js is a minimal and flexible Node.js web application framework.",
      },
      {
        type: "heading",
        text: "Understanding Middleware",
      },
      {
        type: "paragraph",
        text: "Middleware functions have access to the request and response objects and can modify them.",
      },
    ],
  },
  {
    categoryId: 16,
    slug: "postgresql-advanced-queries",
    title: "PostgreSQL Advanced Query Optimization",
    excerpt:
      "Deep dive into PostgreSQL query optimization, indexing, window functions, and advanced SQL features.",
    category: "database",
    authorId: 5,
    readTime: "17",
    publishedDate: "03-Aug-2026",
    featured: false,
    image: PostgreSQL,
    content: [
      {
        type: "paragraph",
        text: "PostgreSQL is a powerful, open-source object-relational database system.",
      },
      {
        type: "heading",
        text: "Advanced SQL Techniques",
      },
      {
        type: "paragraph",
        text: "Master window functions, CTEs, and complex query optimization in PostgreSQL.",
      },
    ],
  },
  {
    categoryId: 17,
    slug: "firebase-firestore-tutorial",
    title: "Firebase Firestore: Complete Tutorial",
    excerpt:
      "Master Firebase Firestore database with real-time updates, complex queries, and security rules.",
    category: "database",
    authorId: 2,
    readTime: "11",
    publishedDate: "04-Aug-2026",
    featured: false,
    image: Firebase,
    content: [
      {
        type: "paragraph",
        text: "Firebase Firestore is a flexible, scalable NoSQL database for mobile and web apps.",
      },
      {
        type: "heading",
        text: "Firestore Features",
      },
      {
        type: "paragraph",
        text: "Real-time listeners, offline support, and powerful querying make Firestore a great choice.",
      },
    ],
  },
  {
    categoryId: 18,
    slug: "aws-cloud-computing-basics",
    title: "AWS Cloud Computing: A Beginner's Guide",
    excerpt:
      "Get started with AWS cloud computing with EC2, S3, Lambda, and other essential services.",
    category: "devops",
    authorId: 5,
    readTime: "13",
    publishedDate: "05-Aug-2026",
    featured: false,
    image: AWS,
    content: [
      {
        type: "paragraph",
        text: "Amazon Web Services (AWS) is the world's most comprehensive cloud computing platform.",
      },
      {
        type: "heading",
        text: "Core AWS Services",
      },
      {
        type: "paragraph",
        text: "Learn the fundamentals of EC2, S3, Lambda, and other key AWS services.",
      },
    ],
  },
  {
    categoryId: 19,
    slug: "python-best-practices",
    title: "Python Best Practices for Clean Code",
    excerpt:
      "Write cleaner, more maintainable Python code with best practices, PEP 8, and design patterns.",
    category: "python",
    authorId: 6,
    readTime: "9",
    publishedDate: "06-Aug-2026",
    featured: false,
    image: Python,
    content: [
      {
        type: "paragraph",
        text: "Python is a high-level, interpreted programming language with dynamic semantics.",
      },
      {
        type: "heading",
        text: "Writing Clean Python Code",
      },
      {
        type: "paragraph",
        text: "Following PEP 8 guidelines and using design patterns makes your Python code more maintainable.",
      },
    ],
  },
  {
    categoryId: 20,
    slug: "django-rest-api-building",
    title: "Django REST API Development Guide",
    excerpt:
      "Build robust REST APIs with Django REST Framework including authentication, permissions, and serializers.",
    category: "python",
    authorId: 6,
    readTime: "15",
    publishedDate: "07-Aug-2026",
    featured: false,
    image: Django,
    content: [
      {
        type: "paragraph",
        text: "Django is a high-level Python web framework that enables rapid development.",
      },
      {
        type: "heading",
        text: "Django REST Framework",
      },
      {
        type: "paragraph",
        text: "DRF provides powerful tools for building Web APIs with features like authentication and serialization.",
      },
    ],
  },
  {
    categoryId: 21,
    slug: "flutter-cross-platform-development",
    title: "Flutter: Cross-Platform App Development",
    excerpt:
      "Build beautiful, natively compiled apps for iOS and Android from a single Flutter codebase.",
    category: "mobile",
    authorId: 7,
    readTime: "12",
    publishedDate: "08-Aug-2026",
    featured: false,
    image: Flutter,
    content: [
      {
        type: "paragraph",
        text: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop.",
      },
      {
        type: "heading",
        text: "Why Flutter Matters",
      },
      {
        type: "paragraph",
        text: "Single codebase, expressive UI, and fast development make Flutter a popular choice.",
      },
    ],
  },
];

export default blogs;