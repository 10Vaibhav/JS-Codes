type Employer = {
    name: string;
    startDate: Date;
}

type BManager = {
    name: string;
    department: string;
}

type TeamLead = Employer & BManager;

const teamLead: TeamLead = {
    name: "Vaibhav",
    startDate: new Date(),
    department: "Software Developer",
}

type TeamLead2 = Employer | BManager;

const teamLead2: TeamLead2 ={
    name:"Vaibhav",
    department:"MLOps",
}

