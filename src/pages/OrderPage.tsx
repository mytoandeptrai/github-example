import React from "react";
import WithAuth from "../hocs/WithAuth";
import { Helmet } from "react-helmet";

type Props = {};

const OrderPage = (props: Props) => {
   return (
      <React.Fragment>
         <link>1234</link>
         <div>OrderPage</div>
         <div>OrderPage2</div>
         <div>OrderPage3</div>
      </React.Fragment>
   );
};

export default WithAuth(OrderPage);
