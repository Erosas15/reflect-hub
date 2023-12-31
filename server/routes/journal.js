// @routes/journal.js

const express = require("express");
const {
  addJournalEntry,
  getJournalEntries,
} = require("@src/journal/journalService");

const router = express.Router();

// Router for adding journal entry
router.post("/api/add-entries", async (req, res) => {
  const { userID, time, entry, title} = req.body;
  try {
    const entryID = await addJournalEntry(userID, time, entry, title);
    if (entryID) {
      res.json({ success: true, entryID });
    } else {
      res
        .status(500)
        .json({ success: false, error: "Failed to add journal entry" });
    }
  } catch (error) {
    console.error("Error while adding journal entries. ", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Router for fetching journal entries
router.post("/api/get-entries", async (req, res) => {
  const { userID } = req.body;
  try {
    const journalEntries = await getJournalEntries(userID);
    if (journalEntries) {
      res.json(journalEntries);
    } else {
      res.status(500).json({ error: "Failed to fetch journal entries" });
    }
  } catch (error) {
    console.error("Error while fetching journal entries. ", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
