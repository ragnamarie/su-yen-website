import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn(user, account, profile) {
      console.log("Google Profile:", profile);
      console.log("acc:", account);
      console.log("user:", user.user.email);

      // Check if the email matches the specific email address you want to allow
      // for now I can only set this one email because of how I select the user property in the database.
      // This only works if there is only one object in the array.
      const allowedEmail = "ragna.steinboemer@gmail.com"; // Change this to your specific email address. Database needs update too then./
      if (user.user.email !== allowedEmail) {
        // If the email doesn't match, return false to prevent sign-in
        return false;
      }
      return true;
    },
    async session({ session, user, token }) {
      if (session?.user) {
        session.user.id = user.id;
        session.user.email = user.email;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});

// ________ //
// change to this in order to allow login for everyone so that new user can be created.
// alternatively I can create a new user manually in the database

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   adapter: MongoDBAdapter(clientPromise),

//   callbacks: {
//     async session({ session, user, token }) {
//       if (session?.user) {
//         session.user.id = user.id;
//         session.user.googleId = user.googleId;
//         session.user.email = user.email;
//         session.user.admin = user.admin;
//       }
//       return session;
//     },
//   },

//   secret: process.env.JWT_SECRET,
// });
