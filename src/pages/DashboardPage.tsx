import React, {
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from "react";
import RegisterForm from "../components/RegisterForm";

type Props = {};

/** useMemo:  */

/** Batching: Gom các việc update state nhiều lần thành update 1 lần.
 *
 * useState => hàm setState là hàm bất đồng bồ.
 *
 */

const DashboardPage = (props: Props) => {
   const [count, setCount] = useState(0);
   const [name, setName] = useState("");

   const onClick = () => {
      setCount((previousCount) => previousCount + 1);

      // if(number > 10){
      //    setCount((previousCount) => {
      //       /** Đoạn return nó là đoạn logic tính toán dự trên condition của mình */
      //       return previousCount + 3
      //    })
      // }
      // setCount((previousState) => {
      //    return previousState + 1;
      // });
      // setCount((previousState) => {
      //    return previousState + 1;
      // });
      // setCount((previousState) => {
      //    return previousState + 1;
      // });
      // setCount((previousState) => {
      //    return previousState + 1;
      // });
   };

   const onChangeName = () => {
      const random = Math.random() * 10000;
      setName(`Huy + ${random}`);
   };

   const object = useMemo(() => {
      /** Cái đoạn tính toán logic của mình */
      return {};
   }, []);

   const onHandleChange = useCallback(() => {
      /** Cái đoạn xử lý logic của hàm mình */
      return count;
   }, [count]);

   /** useRef: trả về cho chúng ta một cái object trong đó có thuộc tính current
    *  values = {
    *     current: 0
    *  }
    * => Để mà lấy được giá trị useRef => values.current.
    * Khác nhau giữa useRef và useState.
    *
    * + useRef truy cập được cái DOM, useState thì không được.
    * + useRef thay đổi sẽ ko làm component re-render, useState thì làm component re-render
    * + component bị re-render thì useRef ko thay đổi
    *
    * Khi nào dùng useRef và useState:
    * + Cái nào dùng để hiển thị UI thì dùng useState => tại vì component re-render mình mới thấy UI được
    * + Cái nào dùng để khiến component re-render => dùng useState ( ví dụ như chứa data backend, chứa data logic, ...)
    * + Cái nào mà truy cập DOM thì dùng useRef
    * + Cái nào mà dùng để lưu lại giá trị trước đó của state thì dùng useRef ( nâng cao )
    * + Dùng để debounce
    */

   const values = useRef(0);
   const inputRef = useRef<HTMLInputElement>(null);

   const onClickRef = () => {
      values.current = values.current + 1;
   };

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);

   return (
      <div>
         {/* <input
            type="text"
            ref={inputRef}
         />
         <p>{count}</p>
         <p>{name}</p>
         <button onClick={onClick}>Click Parent</button>
         <button
            style={{ marginLeft: "10px" }}
            onClick={onClickRef}
         >
            Click To Ref
         </button>
         <button
            style={{ marginLeft: "10px" }}
            onClick={onChangeName}
         >
            Click To Change Name
         </button>

         <ChildComponent
            count={count}
            object={object}
            onHandleChange={onHandleChange}
         /> */}
         <RegisterForm />
      </div>
   );
};

export default DashboardPage;
