export interface TeamMember {
  name: string;
  role: string;
  description: string;
  email: string;
  image: string;
}

export interface Course {
  title: string;
  description: string;
  lessons: number;
  students: number;
  teachers: string;
  image: string;
  badge: string;
  badgeColor?: string;
}

export interface BlogPost {
  date: string;
  title: string;
  description: string;
  image: string;
  author: string;
}

export interface Activity {
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  path: string;
  label: string;
}
