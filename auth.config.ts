import type { NextAuthConfig } from 'next-auth';
import { Routes } from './app/types/routes';

export const authConfig = {
  pages: {
    signIn: Routes.LOGIN,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(Routes.DASHBOARD);
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(Routes.DASHBOARD, nextUrl));
      }
      return true;
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
