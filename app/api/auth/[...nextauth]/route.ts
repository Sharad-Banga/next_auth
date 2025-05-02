
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({

  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "sharad" },
        password: { label: "Password", type: "password",placeholder: "--------" }
      },
      async authorize(credentials, req) {

        const username = credentials?.username;
        const password = credentials?.password;

          console.log(username);
          
        //these username and password are send to db , 
        const user = { 
          id: "1", 
          name: "J Smith", 
          email: "jsmith@example.com" 
        }
  
        if (user) {
          return user
        } else {
          return null
        }
      } 
    }) ,


    GoogleProvider({
      clientId: "asd",
      clientSecret: "asd"
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]


})

export { handler as GET , handler as POST }