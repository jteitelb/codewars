obfuscate = function (email) {
  return email.split("@").join(" [at] ").split(".").join(" [dot] ");
};
