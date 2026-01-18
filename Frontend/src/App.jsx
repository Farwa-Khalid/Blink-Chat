import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import FriendsPage from "./pages/FriendPage.jsx"
import { Toaster } from "react-hot-toast";

import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";

const App = () => {
  const { isLoading, authUser } = useAuthUser();
  const { theme } = useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        {/* <Route
          path="/login"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
  path="/friends"
  element={
    isAuthenticated && isOnboarded ? (
      <Layout showSidebar={true}>
        <FriendsPage />
      </Layout>
    ) : (
      <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
    )
  }
/>
        <Route
          path="/call/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <CallPage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />

        <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={false}>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />

        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        <Route
    path="/"
    element={
      !isAuthenticated ? (
        <SignUpPage />
      ) : (
        <Navigate to={isOnboarded ? "/home" : "/onboarding"} />
      )
    }
  />

  {/* Login route → goes to /home if authenticated */}
  <Route
    path="/login"
    element={
      !isAuthenticated ? (
        <LoginPage />
      ) : (
        <Navigate to={isOnboarded ? "/home" : "/onboarding"} />
      )
    }
  />

  {/* Home route */}
  <Route
    path="/home"
    element={
      isAuthenticated && isOnboarded ? (
        <Layout showSidebar={true}>
          <HomePage />
        </Layout>
      ) : (
        <Navigate to={!isAuthenticated ? "/" : "/onboarding"} />
      )
    }
  />

  {/* Notifications route */}
  <Route
    path="/notifications"
    element={
      isAuthenticated && isOnboarded ? (
        <Layout showSidebar={true}>
          <NotificationsPage />
        </Layout>
      ) : (
        <Navigate to={!isAuthenticated ? "/" : "/onboarding"} />
      )
    }
  />

  {/* Friends route */}
  <Route
    path="/friends"
    element={
      isAuthenticated && isOnboarded ? (
        <Layout showSidebar={true}>
          <FriendsPage />
        </Layout>
      ) : (
        <Navigate to={!isAuthenticated ? "/" : "/onboarding"} />
      )
    }
  />

  {/* Call route */}
  <Route
    path="/call/:id"
    element={
      isAuthenticated && isOnboarded ? (
        <CallPage />
      ) : (
        <Navigate to={!isAuthenticated ? "/" : "/onboarding"} />
      )
    }
  />

  {/* Chat route */}
  <Route
    path="/chat/:id"
    element={
      isAuthenticated && isOnboarded ? (
        <Layout showSidebar={false}>
          <ChatPage />
        </Layout>
      ) : (
        <Navigate to={!isAuthenticated ? "/" : "/onboarding"} />
      )
    }
  />

  {/* Onboarding route */}
  <Route
    path="/onboarding"
    element={
      isAuthenticated ? (
        !isOnboarded ? (
          <OnboardingPage />
        ) : (
          <Navigate to="/home" />
        )
      ) : (
        <Navigate to="/" />
      )
    }
  />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;