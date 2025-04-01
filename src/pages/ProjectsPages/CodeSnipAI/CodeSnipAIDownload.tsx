import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import AppleOriginal from "devicons-react/lib/icons/AppleOriginal";
import LinuxOriginal from "devicons-react/lib/icons/LinuxOriginal";
import Windows11Original from "devicons-react/lib/icons/Windows11Original";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";




type RealeaseType = {
   version: string
   notes: string
   pub_date: string
   platforms: {
      [key: string]: { url: string }
   }
}
export const LoadCodeSnipAIDownload = async () => {
   const res = await fetch('https://raw.githubusercontent.com/ofcode96/code-snip-ai-release/refs/heads/main/releases/latest/download/latest.json')
   const release = await res.json()
   return release as RealeaseType
}


const CodeSnipAIDownload = () => {

   const { version, platforms } = useLoaderData<RealeaseType>()

   const linux = Object.keys(platforms).includes("linux-x86_64") ? platforms["linux-x86_64"] : null
   const windows = Object.keys(platforms).includes("windows-x86_64") ? platforms["windows-x86_64"] : null
   const macos = Object.keys(platforms).includes("darwin-x86_64") ? platforms["darwin-x86_64"] : null

   return (
      <section className="grid place-items-center h-screen w-screen">
         <Helmet>
            <meta charSet="utf-8" />
            <title>Code Snip AI | Download</title>

         </Helmet>
         <Card className="w-11/12 md:w-5xl h-auto md:h-[250px] mx-auto p-4">
            <CardTitle children={<h1 className="text-center mt-4 !text-lg md:!text-2xl">Download Code Snip AI <Badge className="md:!text-lg">v{version}</Badge></h1>} />
            <CardContent className="w-full flex justify-center">
               <div className='flex flex-col md:flex-row md:justify-center items-center relative gap-4 mt-4 w-11/12 md:w-[250px] '>
                  <Button
                     disabled={!windows}
                     onClick={() => window.open(windows?.url)}
                     variant={"default"} className='!bg-indigo-600 text-white w-full hover:!bg-indigo-600 focus-visible:!border-none aria-invalid:!outline-none focus-visible:!ring-0 !outline-0'>
                     <Windows11Original className='me-1' /> Windows
                  </Button>
                  <Button
                     disabled={!macos}
                     onClick={() => window.open(macos?.url, "_blank")}
                     className='!bg-indigo-600 text-white w-full'><AppleOriginal className='me-1' /> MacOs</Button>
                  <Button
                     disabled={!linux}
                     onClick={() => window.open(linux?.url, "_blank")}
                     className='!bg-indigo-600 text-white w-full'><LinuxOriginal className='me-1' /> Linux</Button>
               </div>
            </CardContent>
         </Card>
      </section>
   )
}

export default CodeSnipAIDownload