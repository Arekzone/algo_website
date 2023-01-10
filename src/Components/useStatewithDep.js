import {useEffect, useState} from 'react';

    export default function useStateWithDep(defaultValue) {
      const [value, setValue] = useState(defaultValue);
    
      useEffect(() => {
        setValue(defaultValue);
      }, []);
      return [value, setValue];
    }