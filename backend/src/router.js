import express from "express";

const router = express.Router();

router.get("/hi", (req, res) => {
  res.json({ msg : "HI THERE!!!" });
});

export default router;