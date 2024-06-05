 
export type SiteLanguage = 'MK' | 'EN' | 'SQ' ;

export enum LanguageEnum  { 
  MK = 'MK',
  EN = 'EN'
}

export type SiteRole = 'Task Manager' | 'Recruiter' | 'Super Admin' ;

export enum SiteRoleEnum  {
  TaskManager = 'Task Manager',
  Recruiter = 'Recruiter',
  SuperAdmin = 'Super Admin'
}

export  const roleOptions: SiteRole[] = [
  'Task Manager',
  'Recruiter',
  'Super Admin'
];

