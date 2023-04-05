import express, { Application } from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'

class Server {
  constructor(
    private app: Application = express(),
    private port: string = process.env.PORT || '3000'
  ) {
    this.middleware()
  }

  // Middleware
  private middleware() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(express.static(path.join(__dirname, '../public')))
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`✔ server on port: ${this.port}`)
    )
  }
}

export default Server
