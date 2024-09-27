import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { auth, requiresAuth } from "express-openid-connect";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3001",
  clientID: "Y7I0pDWD3N6dhq2AKLlR8cJApFDxPZIg",
  issuerBaseURL: "https://dev-abxb67rnhbgf2y3e.us.auth0.com",
};

const app = express();

dotenv.config();
const port = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/status", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
