import * as dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/../.env` })

export const {
  PORT,
  MONGO_CONNECTION_STRING,
  CHESS_API_ROOT
} = process.env
