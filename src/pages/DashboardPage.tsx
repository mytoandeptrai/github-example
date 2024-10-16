import moment from "moment";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

type Props = {};

const DashboardPage = (props: Props) => {
   const navigate = useNavigate();
   const onClickNavigate = () => {
      navigate("/orders");
   };
   const variable = new Date().getTime();
   return (
      <div>
         <Helmet>
            <title>My Dashboard Page</title>
            <link
               rel="canonical"
               href="http://mysite.com/example"
            />
         </Helmet>
         <p>{moment(new Date(variable)).format("DD-MM-YYYY HH:mm:ss")}</p>
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
         {/* <RegisterForm /> */}
         <button onClick={onClickNavigate}>Click</button>
      </div>
   );
};

export default DashboardPage;
