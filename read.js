exports.readAsync = async(userId) => {
  return userId.findOne({userid: userId}).exec();
};