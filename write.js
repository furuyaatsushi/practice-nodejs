exports.writeAsync = async(userId) => {
  return userId.create({userid: userId});
}