module.exports = (mongoose,mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: String,
      lastname: String,
      note: String,
      grade : Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Student = mongoose.model("student", schema);
  return Student;
};