const addMemo = (a, b) => {
   // Init cache
   if (!addMemo.cache) {
      addMemo.cache = {};
   }
   // Return cache if found
   const key = `${a}_${b}`;
   const synmetricKey = `${b}_${a}`;
   if (addMemo.cache[key]) return addMemo.cache[key];
   if (addMemo.cache[synmetricKey]) return addMemo.cache[synmetricKey];
   // Calculate and save to cache
   const sum = a + b;
   addMemo.cache[key] = sum;
   addMemo.cache[synmetricKey] = sum;
   return sum;
};

console.log(addMemo(1, 2));


/** Thêm 1 thuộc tính tên là age và giá trị của nó là 30
 * Có 2 cách để thêm:
 * Cách 1: sử dụng object . thuộc tính mình muốn thêm và gán bằng 30;
 * Cách 2: sử dụng object[trong đây là thuộc tính mình muốn thêm và gán bằng 30]
 */
