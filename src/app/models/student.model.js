module.exports = (mongoose,mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: String,
      lastname: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Tutorial = mongoose.model("students", schema);
  return Tutorial;
};