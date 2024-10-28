// import axios from "./components/configs/Axiosinstance";

import Home from "./components/Home/Home";
import Affiliate from "./components/PathComponents/Affiliate";
import TestimonialsPath from "./components/PathComponents/TestemonialsPath";
import FaqBefore from "./components/PathComponents/FaqBefore";
import FaqAfter from "./components/PathComponents/FaqAfter";
import BlogPosts from "./components/PathComponents/BlogPosts";
import BeforeAndAfter from "./components/PathComponents/BeforeAndAfter";
// import SignUp from "./Components/Home/SignUp";
// import SignIn from "./Components/Home/SignIn";
// import ForgotPassword from "./Components/Home/ForgotPassword";
// import PasswordResetForm from "./Components/Home/PasswordResetForm";
// import EnterPin from "./Components/Home/EnterPin";
// import BlogPosts from "./Components/PortfolioWork/BlogPosts";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PlasticSurgeonsComponent from "./components/PathComponents/PlasticSurgeonsComponent";
import PlasticSurgeonsIntro from "./components/PathComponents/PlasticSurgeonsIntro";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route
        path="reset-password/:uidb64/:token"
        element={<PasswordResetForm />}
      />
      <Route path="confirming-email" element={<EnterPin />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route path="home" element={<Home />} />
      <Route path="blogs/:any-blog" element={<BlogPosts />} /> */}
      <Route path="/affiliate-program" element={<Affiliate />} />
      <Route path="/testimonials" element={<TestimonialsPath />} />
      <Route path="/faq-before" element={<FaqBefore />} />
      <Route path="/faq-after" element={<FaqAfter />} />
      <Route path="/blogs" element={<BlogPosts />} />
      <Route path="/blogs/:blogTitle" element={<BlogPosts />} />
      <Route path="/gallery" element={<BeforeAndAfter />} />
      <Route
        path="/plastic-surgeons"
        element={<PlasticSurgeonsComponent />}
      ></Route>
      <Route
        path="/plastic-surgeons/:doctorName"
        element={<PlasticSurgeonsIntro />}
      />
      {/* Dynamic route for individual posts */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
