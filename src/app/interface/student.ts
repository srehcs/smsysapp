import { Status } from "../enum/status.enum";

export interface Student {
    id: number;
    ipAddress: string;
    name: string;
    grade: string;
    classes: string;
    imageUrl: string;
    status: Status;
}