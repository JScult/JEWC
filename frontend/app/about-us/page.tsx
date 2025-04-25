import WhoAreWeSection from "../../components/about/whoAreWeSection"
import AboutJewc from "../../components/about/aboutJewc"
import JegSection from "../../components/about/jegSection"
import JetSection from "../../components/about/jetSection"





export default function aboutUs(){
    return( 
      <div>


<WhoAreWeSection/>
<AboutJewc/>
<div className="space-y-10">
<JegSection/>
<JetSection/>
</div>


      </div>
    )
}