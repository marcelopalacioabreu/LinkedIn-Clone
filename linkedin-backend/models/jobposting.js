var mongoose = require('mongoose');
var jobpostings = mongoose.model('jobpostings',{
    companyName :{type : String, required: true},
    Email :{type : String, required: true},
    companyLogo :{type : String, required: false},
    jobTitle :{type : String, required: true},
    jobFunction :{type : String, required: true},
    location :{type : String, required: true},
    numberofApplicants :{type : Number, required: false}, //number of applicants applied for this job
    seniorityLevel : {type : String, required: true},
    description :{type : String, required: true}, 
    postingDate : {type : Date, required: true}, 
    employmentType : {type : String, required: true}, 
    industryType : {type : String, required: true}, 
    experience : {type : Number, required: true}, 
    budget : {type : Number, required: true}, 
    easyApply : {type : Boolean, default : false, required : true}
});

module.exports = {jobpostings};