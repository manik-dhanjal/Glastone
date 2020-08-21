import React from 'react'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SplitText from 'react-pose-text';
import posed from 'react-pose';


const SectionServices=()=>{
  const Sidebar = posed.div({
    exit: {
      x: '-100%'
    },
    enter: {
      x: '0%',
      beforeChildren: true,
      staggerChildren: 50
    }
  });
  
  const charPoses = {
    exit: { opacity: 0 },
    enter: { opacity: 1 }
  };
    return(
        <section className="section section-services section_minus-mt-large bg-dark-3 section_z-100" style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container section-services__inner">
          <div className="row">
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Quality</SplitText>  </Sidebar>
</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>State-of-the -art
                 products</SplitText>  </Sidebar></h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></a></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Durability</SplitText>  </Sidebar>
</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Use of high calibre materials</SplitText></Sidebar></h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></a></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Punctuality</SplitText>  </Sidebar>
</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>On time delivery</SplitText>  </Sidebar>
</h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></a></div>
              <div className="section-services__border-line" />
            </div>
            
            
          </div>
        </div>
        <div className="section-services__bg bg-dark-3" />
      </section>
    )
}

export default SectionServices