import Error from "@/pages/error";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import CodeSnipAi from "@/pages/ProjectsPages/CodeSnipAI/CodeSnipAi";
import CodeSnipAIDoc from "@/pages/ProjectsPages/CodeSnipAI/CodeSnipAIDoc";
import CodeSnipAIDownload, { LoadCodeSnipAIDownload } from "@/pages/ProjectsPages/CodeSnipAI/CodeSnipAIDownload";
import CodeSnipAILanding from "@/pages/ProjectsPages/CodeSnipAI/CodeSnipAILanding";
import React from "react";

import {
   createBrowserRouter,
} from "react-router";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Home,
      errorElement:React.createElement(Error)
      
   },
   {
      path:"projects",
      Component:Projects,

   },
   {
      path:"projects/code-snip-ai",
      Component:CodeSnipAi,

      children:[
         {
            path:"landing",
            Component:CodeSnipAILanding,
            
            

         },
         {
            path:"download",
            Component:CodeSnipAIDownload,
            loader:LoadCodeSnipAIDownload
         },
         {
            path:"docs",
            Component:CodeSnipAIDoc
         }
      ]

   }
]);
