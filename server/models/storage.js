var mongoose = require('mongoose');
 
var storageschema=new mongoose.Schema(
                              {
                              quote_unit: String,
                              last: Number,
                              buy: Number,
                              sell: Number,
                              volume: Number,
                              base_unit: String,
                              low: Number,
                              high: Number,
                              type: String,
                              open: Number,
                              at: Number,
                              name: String
});
var storageModel=mongoose.model('data',storageschema);
module.exports=storageModel;