// Task1 from Samat
/* вывести все value в консоль, 
задача на 5-10мин, попалась Дену на собесе */
const obj = {
  value: 5,
  next: {
    value: 10,
    next: {
      value: 100,
      next: {
        value: 10000,
        next: {
          value: 20000,
          next: {
            value: 50000,
            next: {
              value: 10000000,
              next: {
                value: 20000000,
                next: {
                  value: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

const objFunc = (obj) => {
  let objCopy = { ...obj };
  // ? если objCopy существует
  while (objCopy?.next !== undefined) {
    console.log(objCopy.value);
    objCopy = objCopy.next;
  }
};
objFunc(obj);
