import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});

// Protect these routes — redirect to signin if unauthenticated
export const config = {
  matcher: ["/dashboard/:path*", "/upload/:path*", "/settings/:path*"],
};
