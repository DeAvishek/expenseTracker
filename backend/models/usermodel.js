const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    });
    
    // Password hashing before saving
    // userschema.pre("save", async function (next) {
    //   if (!this.isModified("password")) return next();
    //   this.password = await bcrypt.hash(this.password, 10);
    //   next();
    // });
    
    module.exports = mongoose.model("User", userSchema);
