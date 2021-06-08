module.exports = (mongoose,mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      year: Number,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Course = mongoose.model("course", schema);
  return Course;
};