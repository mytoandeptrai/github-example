import React, { memo } from "react";

type Props = {
   count: number;
   object: Record<string, string>;
   onHandleChange: () => void;
};

const ChildComponent = (props: Props) => {
   console.log("re-render");
   return <div>ChildComponent</div>;
};

export default memo(ChildComponent);

/** memo: Báo với react chỉ re-render cho ta nếu như props của ta thay đổi
 * Cách dùng : memo(Component)
 */
