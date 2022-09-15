export interface  Ichild{ 
    name: string;
    age: number;
};


export interface Ipassenger{
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null,
    children: Ichild[] | null,
  };
  
  


