export const convertToLocalDate = (date: any) => {
    const d = new Date(date);
    if(isNaN(d.getTime())){
        return "--/--/---"
    }   
    const dd = `0${d.getDate()}`.slice(-2);
    const MM = `0${d.getMonth() + 1}`.slice(-2);
    const YYYY = `${d.getFullYear()}`;
    return `${dd}/${MM}/${YYYY}`
}