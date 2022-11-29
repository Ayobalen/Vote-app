const Candidate = require("../model/candidate");
const router = require('express').Router();
// create a voter
router.post("/newCandidate", async (req, res) => {
    try{
       let { candidate_list } = req.body;

       let candidate= candidate_list;
       const uniqueCandidate = [
        ...new Map(candidate.map((item) => [item["candidate_id"], items])).values(),
       ];
    await Candidate.insertMany(uniqueCandidate);
           return res.status(200).json({
            message: "Candidate list has been saved successfully"
           })
    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;


