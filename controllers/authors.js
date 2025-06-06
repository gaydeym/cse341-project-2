const { author: AuthorModel } = require('../models');

// Fetch all authors
async function fetchAuthors(req, res) {
  try {
    const authors = await AuthorModel.find();
    res.json(authors);
  } catch (error) {
    console.error('Error fetching authors:', error);
    res.status(500).json({
      error: error.message || 'Could not retrieve authors.'
    });
  }
}

module.exports = {
  fetchAuthors
};
