import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Helmet } from "react-helmet-async"
import {NavLink} from "react-router"
const CodeSnipAIDoc = () => {
  return (
    <section className="grid place-items-center h-screen w-screen mb-[100vh] md:mb-[20%]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Snip AI | Docs</title>

      </Helmet>

      <main className="grid place-items-center w-full h-full ">
        <Card className="w-11/12 md:w-5xl h-full mt-[35%] md:mt-[10%]  mx-auto p-4">
          <CardHeader>
            <CardTitle className="text-start text-4xl my-4">✨Code Snip AI Docs</CardTitle>
            <CardDescription>
              Code Snip AI is a specialized application designed for Create Code Screen Shots with AI. It operates exclusively on 64-bit  systems with offline functionality and zero data collection.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">

            <div className="bg-card-foreground/20 p-4 rounded-2xl">
              <h2 className="font-poppins text-xl mb-4">
                System Requirements :
              </h2>
              <ul className="list-disc list-inside">
                <li>OS 64-bit.</li>
                <li>1GB RAM minimum.</li>
                <li>500MB free disk space.</li>
                <li>Internet And Google Account Required for AI .</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl">
              <h2 className="font-poppins text-xl mb-4">
                Installation Instructions:
              </h2>
              <ul className="list-decimal list-inside">
                <li>Disable Antivirus Temporarily.</li>
                <li>Download and install the app.</li>
                <li>
                  For AI Features to work Properly, Make sure to generate Gemini API Key <NavLink to ="https://youtu.be/6BRyynZkvf0?si=k9lV6MnwvMU9VA10" target="_blank" className="text-primary underline">Click Here</NavLink>
                </li>
                <li>Enjoy Code Snip AI!😎</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  Why Antivirus Must Be Temporarily Disabled
                </AlertTitle>
                <AlertDescription >
                  Security Status Explanation🔐 
                </AlertDescription>
              </Alert>

              <div className="bg-red-400/20 p-4 rounded-2xl">
              <h2 className="font-poppins text-xl mb-4">
              Our software is currently unsigned due to:


              </h2>
              <ul className="list-disc list-inside">
                <li>
                We haven't yet obtained the $300/year Extended Validation (EV) Certificate required for Windows recognition
                </li>
                <li>
                Without this, Windows Defender/SmartScreen flags all unsigned apps as "Unknown Publisher"
                </li>
                <li>
                72% of unsigned apps get falsely flagged as malware
                </li>
                
              </ul>
            </div>
            </div>
          </CardContent>
          <CardFooter>
            <p>
              For more information, please check out our GitHub repository   
              <NavLink  to="https://github.com/ofcode96/code-snip-ai-release" target="_blank" rel="noopener noreferrer" className="ms-2 text-blue-500 hover:underline">
               Code Snip AI on GitHub
              </NavLink>
            </p>
          </CardFooter>
        </Card>

      </main>


    </section>
  )
}

export default CodeSnipAIDoc