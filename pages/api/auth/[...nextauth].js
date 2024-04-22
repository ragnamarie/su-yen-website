import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";

// Define the allowed email addresses
const allowedEmails = [
  "ragna.steinboemer@gmail.com",
  // Add more email addresses here
];

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

      // Check if the email matches any of the allowed email addresses
      if (!allowedEmails.includes(user.user.email)) {
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

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       profile(profile) {
//         return {
//           id: profile.sub, // 'sub' is the unique identifier in Google profile
//           email: profile.email,
//           name: profile.name,
//           userName: profile.email.split("@")[0], // Using the email as a username (modify as needed)
//           googleId: profile.sub, // Assuming Google provides a unique ID
//           admin: false,
//         };
//       },
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
