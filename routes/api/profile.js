const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
// const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Get current user's profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error in /api/profile/me');
  }
});

// @route  POST api/profile/me
// @desc   Create or update current user's profile
// @access Private
router.post('/', auth, async (req, res) => {
  const profileFields = {
    user: req.user.id,
  };
  try {
    let profile = Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);
    await Profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error at POST /api/profile');
  }
});

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error at /user/:user_id');
  }
});

module.exports = router;
