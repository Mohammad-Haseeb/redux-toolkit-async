import { createServer} from "miragejs"
import book from './book.json';

export function makeServer() {
  let server = createServer({

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return book;
      })
    },
  })

  return server
}