// Handle multipartformdata / files
import multer from 'multer';
import crypto from 'crypto';
// Access to file extension and default path
import { extname, resolve } from 'path';

export default {
  // Local to save the file, can be local or internet
  storage: multer.diskStorage({
    // Where to save
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    // How file will be formated
    filename: (req, file, cb) => {
      // Use random caract to create a unique name
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        // Return file named: hexadecimal + original file extension
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
