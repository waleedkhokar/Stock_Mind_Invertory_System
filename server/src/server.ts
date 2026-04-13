import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

let server: Server;

async function main() {
  try {
    await mongoose
      .connect(config.database_url as string)
      .then(() => console.log("✅ MongoDB Atlas Connected Successfully!"))
      .catch((err) =>
        console.error("❌ MongoDB Atlas Connection Failed:", err)
      );

    server = app.listen(config.port, () => {
      console.log(`🚀 App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', (err) => {
  console.log(`😈 unhandledRejection detected, shutting down...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException detected, shutting down...`);
  process.exit(1);
});
