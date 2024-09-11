import { useDispatch, useSelector } from "react-redux";
import {
  COUNTER_ACTION_ADD_NUMBER,
  COUNTER_ACTION_DECREASEMENT,
  COUNTER_ACTION_INCREMENT,
} from "../store/counter/counter-type";
import { useState } from "react";

const ReduxExample = () => {
  /** Để lấy được state trong reducer của redux, mình sẽ sử dụng hook useSelector :
   * useSelector này sẽ nhận vào 1 callback với tham số là state
   * Sau đó mình sẽ sử dụng state . tới cái reducer mà mình muốn lấy tham số
   * Ví dụ: useSelector(callback) trong này callback là hàm trả về giá trị trong reducer
   * => const callback = (state: any) => {   => state chỗ này là mặc định có , mình ko cần truyền vào
   *  // Trả về dữ liệu ứng với reducer của mình muốn
   *  // Ví dụ reducer của mình tên là todoState, và mình muốn lấy cái page
   *  // cách return thì mình sẽ return state . reducer mà mình muốn . biến nằm trong reducer
   * 
   *  return state.todoState.page
   * }
   * 
   * useSelector(callback);
   */

  const count = useSelector((state: any) => {
    return state.counterState.count;
  });

  const [inputValue, setInputValue] = useState(0);

  /**
   * Để tương tác với store thì mình phải sử dụng action ( action mà mình đã tạo trong file counter-action)
   * Thêm vào đó mình sẽ phải sử dụng dispatch làm cầu nối giữa UI và store
   * Cách sử dụng:
   * Bước 1: Đầu tiên mình phải gọi useDispatch từ redux,
   * Bước 2: Xác định action mà mình muốn gởi lên gồm type và payload
   * trong đó type là kiểu mà mình muốn gởi đến reducer và payload là dữ liệu muốn gởi lên reducer
   * Bước 3: Sử dụng dispatch(action) và action nó là 1 object gồm type và payload
   * type: để phân biệt được mình đang đưa dữ liệu vào reducer nào
   * payload: dữ liệu e sẽ gởi lên reducer
   *        ví dụ action: {
   *                          type: ví dụ acion type
   *                          payload: ví dụ action data
   *                      }
   * => dispatch({
   *    type: '...', ( cái này bắt buộc )
   *    payload: (cái này ko bắt buộc)
   * })
   */
  const dispatch = useDispatch();

  const add = () => {
    dispatch({
      type: COUNTER_ACTION_INCREMENT,
    });
  };

  const minus = () => {
    dispatch({
      type: COUNTER_ACTION_DECREASEMENT,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputValue(value);
  };

  const addToReducer = () => {
    dispatch({
      type: COUNTER_ACTION_ADD_NUMBER,
      payload: inputValue,
    });
  };

  return (
    <div>
      <button onClick={add}>Tăng</button>
      <p>Số count hiện tại: {count}</p>
      <input type="number" value={inputValue} onChange={onChange} />
      <button onClick={addToReducer}>Thêm vào reducer</button>
      <button onClick={minus}>Giảm</button>
    </div>
  );
};

export default ReduxExample;
