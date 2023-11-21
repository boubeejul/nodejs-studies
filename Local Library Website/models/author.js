const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Create a Schema
// Schema -> JSON object that defines the structure and contents of the data
const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

// Verify if the author has family name or first name, if don't, returns ""
// Virtual -> a property that is not stored in MongoDB
    // get -> useful for formatting or combining fields
    // set -> useful for de-composing a single value into multiple values for storage
AuthorSchema.virtual("name").get(function () {
    let fullname = ""

    if (this.first_name && this.family_name)
        fullname = `${this.family_name}, ${this.first_name}`

    return fullname
})


AuthorSchema.virtual("url").get(function () {
    return `/catalog/author/${this._id}`
})

module.exports = mongoose.model("Author", AuthorSchema)