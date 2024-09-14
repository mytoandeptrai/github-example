import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
/** Formik: Dùng để khởi tạo form:, nhận vào là 1 object {}
 * trong object:
 * + initialValues => Giá trị khởi tạo ban đầu cho các giá trị state / input của mình
 * + validationSchema => Cái mà mình dùng để validate input đầu vào ( ví dụ như là username chỉ cho nhập 2 - 10 kí tự,...)
 * => nhận vào là 1 Yup.object({ ở trong này sẽ là các fields mà mình validate })
 * + onSubmit => Cái mà khi ấn nút register nó sẽ chạy vào
 *
 * Lưu ý => Các giá trị trong initialValues phải bằng với thuộc tính name của input
 */
const RegisterForm = () => {
   const form = useFormik({
      initialValues: {
         username: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema: Yup.object({
         username: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(10, "Must be 10 characters or less")
            .required("Required"),
         email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
         password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
         confirmPassword: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords must match"
         ),
      }),
      onSubmit: (values) => {
         /** values chỗ này chính là value sau khi người dùng đã nhập vào
          * => Hàm này chỉ chạy khi thoả tất cả validation
          */
         console.log("🚀 ~ RegisterForm ~ values:", values);
      },
   });

   const onReset = () => {
      form.resetForm();
   };

   return (
      <div>
         <h1>Register page</h1>
         <form
            onSubmit={form.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
         >
            <div>
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.values.username}
                  onChange={form.handleChange}
               />
            </div>
            {form.errors.username && form.touched.username && (
               <div style={{ color: "red" }}>{form.errors.username}</div>
            )}
            <div>
               <label htmlFor="email">Email</label>
               <input
                  type="text"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
               />
            </div>
            {form.errors.email && form.touched.email && (
               <div style={{ color: "red" }}>{form.errors.email}</div>
            )}
            <div>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.values.password}
                  onChange={form.handleChange}
               />
            </div>
            {form.errors.password && form.touched.password && (
               <div style={{ color: "red" }}>{form.errors.password}</div>
            )}
            <div>
               <label htmlFor="confirmPassword">Confirm Password</label>
               <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.values.confirmPassword}
                  onChange={form.handleChange}
               />
            </div>
            {form.errors.confirmPassword && form.touched.confirmPassword && (
               <div style={{ color: "red" }}>{form.errors.confirmPassword}</div>
            )}
            <button type="submit">Register</button>
            <button
               type="button"
               onClick={onReset}
            >
               Reset
            </button>
         </form>
      </div>
   );
};

export default RegisterForm;
