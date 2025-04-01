import { HelmetProvider } from "react-helmet-async"


const SeoWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <HelmetProvider>
         {children}
      </HelmetProvider>
   )
}

export default SeoWrapper