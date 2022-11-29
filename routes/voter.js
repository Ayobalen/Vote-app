const Voter = require("../model/voter");
const Candidate = require("../model/candidate");
const voter = require("../model/voter");
const router = require('express').Router();
// create a voter
router.post("/newVoter", async (req, res) => {
        const voterExist = await Voter.findOne({ voter_id: req.body.voter_id }).lean();
        if(voterExist)
           return res.status(400).json({
            message: "Voter already exist",
            data: [],
           })
           try{
        const newVoter = await Voter.create({
            voter_id: req.body.voter_id,
            voted: req.body.voted
        });
        return res.status(201).json({
            message: "Sign up successful",
            data: newVoter
        })
    }catch(err){
        console.log(err)
    }
});

router.post("/voter/:voter_Id", async (req, res) =>{
    try{
       // const { candidate_id, voter_id } = req.body
        const candidateVote = await voter.findById({ voter_id }).lean()
        if(!candidateVote){
          return res.status(500).json({
                message: "Voter with this id does not exist",
                data: []
            })
        }
        let allVote = []
       await Candidate.create({
            candidate_id : req.body.candidate_id,
            voter_id: req.body.voter_id
           })
       for (let i = 0; i < candidateVote.length; i++){
        let voted = candidateVote[i].voted
        if(voted)
        return res.status(500).json({
              message: "fraud suspected"
          })
     voted = true;
     candidateVote.save();
     return res.status(500).json({
        message: "You are not allowed to vote twice"
    })
}
          allVote.push({
            candidate_id
          })
       return res.status(201).json({
        message: "You have successfully casted your vote",
        data: []
    })
    } catch(err){
        return console.log("err")
    }
})

module.exports = router;


