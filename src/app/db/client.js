import { createClient } from "@libsql/client";

export const client = createClient({
  url: "libsql://scrap-facundojoaquin.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUwOTc4ODMsImlkIjoiMTJkZjhlZmYtOWRlNi00ZGZkLTk4OTAtOTVhOTBjYjhjMTI5In0.8sXa-k2NCNYkhk1qVNcmI52u5rAk8D4qTbsvEFlzEWRb2TzedQqZRqoXgTlP-MlneTBkpfrCeW4LMuC766rKAQ",
});
