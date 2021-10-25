const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { avatarUser } = require('../../model/users')

const subscription = async (req, res, next) => {
  //*  Pull the path of the file, cut out it's extension and create a file with the name of the user
  const { _id } = req.user
  const { path: tempDir, originalname } = req.file
  const [extension] = originalname.split('.').reverse()
  const filename = `${_id}.${extension}`
  const uploadDir = path.join(__dirname, '../../', 'public/avatars', filename)

  //* Reducing the resolution of the avatar
  await Jimp.read(tempDir)
    .then(avatar => {
      return avatar.resize(250, 250).write(tempDir)
    })
    .catch(err => {
      console.error(err)
    })

  //* Change the location of the avatar and update it's path in the database
  try {
    await fs.rename(tempDir, uploadDir)
    const user = await avatarUser(_id, uploadDir)

    res.status(200).json({
      message: 'Avatar update',
      user: {
        avatarURL: user.avatarURL,
      },
    })
  } catch (error) {
    //* If an error occurs, delete the avatar from the temporary folder
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = subscription
