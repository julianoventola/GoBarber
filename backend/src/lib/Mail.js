import nodemailer from 'nodemailer';
import { resolve } from 'path';
// Handlebars to send email using HTML templates
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';

import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    // Connection to external services
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      // Some strategies do not use authentication
      auth: auth.user ? auth : null,
    });

    // Email template configuration
    this.configureTemplates();
  }

  configureTemplates() {
    // Find templates
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');
    // Use templates
    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
