function findMagic(arr) {
  const magic = arr.filter((val, index) => val === index);
  return magic.length > 0 ? magic[0] : -1;
}
