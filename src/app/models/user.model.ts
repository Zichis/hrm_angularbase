import { Role } from './role.model';

export interface User {
    id: string;
    email: string;
    department_id: number;
    personal : {
      first_name: string;
      last_name: string;
    },
    roles : Role[]
}
