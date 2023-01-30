import express from 'express';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// Get All Post
router.route('/').get(async (req, res) => {
  try {
    const posts = await post.find({});
    res.sendStatus(200).json({ success: true, data: posts });
  } catch (error) {
    res.sendStatus(500).json({ success: false, message: error });
  }
});

// Create Post
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await post.create({
      name: name,
      prompt: prompt,
      photo: photoUrl.url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
