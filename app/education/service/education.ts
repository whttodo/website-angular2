export interface Details {
    qualification: string;
    year: string;
    cgpa: string;
    from: string;
    location: string;
}
export interface Education {
    title: string;
    education: Details[];
}