import React from 'react'
import "../../styles/left-menu.scss"
import { ICONS} from "../../utils/enums/Index";

const LeftMenuBar=()=> {
   
    return (
        <div className={LeftMenuBar.styles.mainContainer} >
           <i class="fa fa-arrow-left" aria-hidden="true"></i> 
           <img 
           className={LeftMenuBar.styles.imageBg}
           src={ICONS.BGBIG}
           />
            <div>
                    <h6 style={{marginRight:'60%', marginTop:'5%',color:'white'}}>Plastic Arts</h6>
                     <p style={{color:'white'}}>plastic arts of the second semester of preparatory</p>
                      <p style={{color:'white', marginRight:'36%'}}>By: Juan Gabriel Torrez</p>
                    </div>
                    <hr style={{color:'white'}}></hr>

                    <div className={LeftMenuBar.styles.imageDisplay}>
                        <img src={ICONS.HOME}/>
                        <label>Home</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px'}}>
                        <img src={ICONS.GROUPS}/>
                        <label>Groups</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px' , marginLeft:'10%'}}>
                        <img src={ICONS.COLABORATION}/>
                        <label>Collaborations</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px' , marginLeft: '8%' }}>
                        <img src={ICONS.VIDEO}/>
                        <label>Conferences</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px' , marginLeft: '4%'}}>
                        <img src={ICONS.RATING}/>
                        <label>Ratings</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px' ,  marginLeft: '4%'}}>
                        <img src={ICONS.PROGRAM}/>
                        <label>Program</label>
                    </div>
                    <div className={LeftMenuBar.styles.imageDisplay} style={{marginTop:'10px' ,  marginLeft: '1%'}}>
                        <img src={ICONS.CHAT}/>
                        <label>Chat</label>
                    </div>
        </div>
    )
}
LeftMenuBar.styles = {
    mainContainer: "nos-online__leftmenu-container-root-container",
    imageBg: "nos-online__leftmenu-container-imageBg",
    imageDisplay: "nos-online__leftmenu-container-image-display"

}
export default LeftMenuBar
