import  { useState } from "react";
const Info = () => {

 const [name] = useState(
          {
            name: 'Pali',
            age: 31,
          }
        );
        const changeAge = () => {
          // eslint-disable-next-line no-undef
          setInfo({name, age: 31})

          return <div onClick={() => changeAge()}>Edad de la persona {Info.age}</div>;
        }
        };
export default Info;