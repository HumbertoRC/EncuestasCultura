export interface User {
  password: string;
  id: string;
  name: string;
  email: string;
  roleId: number;
  department?: string;
  area?: string;
  project?: string;
  managerId?: string;
  isActive: boolean;
  createdAt: string;
}
