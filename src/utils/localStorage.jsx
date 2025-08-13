localStorage.clear(); // Clear local storage before setting new data


const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue with incorrect login redirection",
        date: "2024-04-01",
        category: "Bug",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update dashboard UI",
        description: "Redesign dashboard components for responsiveness",
        date: "2024-04-10",
        category: "Improvement",
        active: true,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        title: "Email notification setup",
        description: "Integrate email alerts for failed tasks",
        date: "2024-04-15",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
        failed: true
       
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Create task form",
        description: "Build UI for adding new tasks",
        date: "2024-04-02",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar issue",
        description: "Navbar breaks on small screen",
        date: "2024-04-03",
        category: "Bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "API error handling",
        description: "Improve frontend error display for APIs",
        date: "2024-04-05",
        category: "Improvement",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Profile page cleanup",
        description: "Remove deprecated code in profile component",
        date: "2024-04-08",
        category: "Improvement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Broken image fix",
        description: "Fix broken image links on homepage",
        date: "2024-04-10",
        category: "Bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write unit tests",
        description: "Write unit tests for login component",
        date: "2024-04-12",
        category: "Task",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Mobile UI issues",
        description: "Fix responsiveness in task cards",
        date: "2024-04-06",
        category: "Bug",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Add user roles",
        description: "Introduce role-based access for users",
        date: "2024-04-01",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Dark mode toggle",
        description: "Allow users to switch themes",
        date: "2024-04-04",
        category: "Improvement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UI glitch on scroll",
        description: "Fix glitch happening when scrolling fast",
        date: "2024-04-07",
        category: "Bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

// Admin user data
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
   
    return { employees, admin };

  }