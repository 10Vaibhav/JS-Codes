// Union
type SumInput = string | number;

function sum2(a: SumInput, b: SumInput){
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return String(a) + String(b);
}

// Intersection

interface Employee  {
    name: string;
    startDate: Date;
}

interface Manager  {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Vaibhav",
    startDate: new Date(),
    department: "Software Developer"
}