const getStoredApplication=()=>{
    const storedApplication=localStorage.getItem('job-application');
    if(storedApplication)
        {
            return JSON.parse(storedApplication);
        }
        else
        {
            return [];
        }
}
const SaveApplication=(id)=>{
    const save=getStoredApplication();
    const exist=save.find(jobId=>jobId.id===id);
    if(!exist)
        {
            save.push(id)
            localStorage.setItem('job-application',JSON.stringify(save));
        }
}
export {getStoredApplication,SaveApplication};