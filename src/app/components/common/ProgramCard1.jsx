import React from 'react'
import "../../styles/program-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ProgramCard1=()=> {
    return (
        <div className={ProgramCard1.styles.mainContainer}>
            <p style={{float:'right'}}>Expandir Todo</p>
            <div className={ProgramCard1.styles.file}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <div className={ProgramCard1.styles.file}>
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.XM1} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
            </div>
            <div className={ProgramCard1.styles.file}>
                <a data-toggle="modal" href="#myModal">
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.VIDEO} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
                </a>
                <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
       
        <div class="modal-header">
          <h4 class="modal-title">
              <div className={ProgramCard1.styles.modalCard}>
                  <div style={{color:'white',display:'flex',flexDirection:'row'}}>
               <img src={ICONS.VIDEO} className={ProgramCard1.styles.image}></img>
               <p style={{marginLeft:'2%'}}>Que es el arte</p>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
               <p>error</p>
               </div>
              </div>
          </h4>
        
        </div>
        
      
        <div class="modal-body">
          <img src={ICONS.IMAGEN} style={{width: '776px'}}/>
        </div>
        
       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
            </div>
            <div className={ProgramCard1.styles.file}>
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.XM1} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard1.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard1.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            
        </div>
    )
}
ProgramCard1.styles = {
    mainContainer: "nos-online__program-card-container-program-container",
    file: "nos-online__program-card-container-file",
    file1: "nos-online__program-card-container-file1",
    xm: "nos-online__program-card-container-xm",
    modalCard: "nos-online__program-card-container-modal-card",
    image: "nos-online__program-card-container-image",
}
export default ProgramCard1
