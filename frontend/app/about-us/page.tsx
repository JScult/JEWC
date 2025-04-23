import Navbar from "../components/navBar"
import WhoAreWeSection from "../components/about/whoAreWeSection"
import AboutJewc from "../components/about/aboutJewc"
import JegSection from "../components/about/jegSection"
import JetSection from "../components/about/jetSection"





export default function aboutUs(){
    return( 
      <div>
<Navbar></Navbar>

<WhoAreWeSection></WhoAreWeSection>
<AboutJewc></AboutJewc>
<div className="space-y-10">
<JegSection></JegSection>
<JetSection></JetSection>
</div>


      </div>
    )
}