const mongoose = require("mongoose")

replaced - by - strict
mongoose.set("strictQuery", false)

// MongoDB URL
const mongoDB = "mongodb+srv://jcardozo:Zvac46bjrIu0eVXv@locallibrary.8inixsy.mongodb.net/local_library?retryWrites=true&w=majority"

// Log an error if there is a problem conecting
main().catch((err) => console.log(err))
async function main() {
    await mongoose.connect(mongoDB)
}