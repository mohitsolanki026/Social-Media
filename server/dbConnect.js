const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
    "mongodb+srv://mohit1:unX3QocgvTaW45hj@cluster0.yjyl9fq.mongodb.net/?retryWrites=true&w=majority";
    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    // mongoose.connect(mongoUri, { useUnifiedTopology: true }).then(() => {
    //     console.log('success');
    // }).catch(e => {
    //     console.error(e);
    //     process.exit(1);
    // });
};
// "mongodb+srv://mohit2340:HywcBxTJ79Pz9v3s@cluster1.baq2vvx.mongodb.net/?retryWrites=true&w=majority";
      // "mongodb+srv://mohit2340:HywcBxTJ79Pz9v3s@cluster0.pnpylei.mongodb.net/?retryWrites=true&w=munX3QocgvTaW45hjajority";
     
