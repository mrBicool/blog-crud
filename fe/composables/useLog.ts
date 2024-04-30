export function useLog(data:any, type = 'log'){
    if(type === 'log'){
        console.log(data)
    }
  
    if(type === 'error'){
        console.error(data)
    }
  
    if (type === 'info') {
        console.info(data)
    }
}
