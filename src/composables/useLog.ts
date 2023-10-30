import { useEffect } from 'react'

const useLog = (value: unknown) => {

  return useEffect(() => {
    if(value === '') return
    console.log("log =>" ,value)
  }, [value]);

}
export default useLog
