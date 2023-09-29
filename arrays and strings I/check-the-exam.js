function checkExam(array1, array2) {
  return Math.max(
    0,
    array1
      .map((answer, index) => {
        const given = array2[index];
        if (given === "") {
          return 0;
        } else if (given === answer) {
          return 4;
        } else {
          return -1;
        }
      })
      .reduce((acc, n) => acc + n)
  );
}
