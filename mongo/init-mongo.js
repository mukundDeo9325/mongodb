db = db.getSiblingDB("mydatabase");
db.createCollection("users");
db.users.insert({ name: "Mukund", email: "mukund@example.com" });
