import React from "react"
import styled from "styled-components"
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "gatsby"
const SNavFooter=styled.section`

    background:rgb(235, 230, 221);
    .section-nav-projects__heading{
    opacity:0;
    transition:0.5s ease;
    }
    .section-nav-projects__arrow{
        transform:translateX(0)
        opacity:1;
        transition:0.2s ease;
    }
    .section-nav-projects__inner_prev{
        .section-nav-projects__heading{
            transform:translateX(30px)
        }
       
      &:hover{
            .section-nav-projects__heading{
                opacity:1;
                transform:translateX(0);
            }
            .section-nav-projects__arrow{
                opacity:0;
                transform:translate(-10px,-50%);
                @media screen and (max-width:768px){
                    transform:translate(-10px,0%);
                }
            }
      } 
      
    }
    .section-nav-projects__inner_next{
        .section-nav-projects__heading{
            transform:translateX(-30px);
        }
       
      &:hover{
            .section-nav-projects__heading{
                opacity:1;
                transform:translateX(0);
            }
            .section-nav-projects__arrow{
                opacity:0;
                transform:translate(10px,-50%);
                @media screen and (max-width:768px){
                    transform:translate(10px,0%);
                }
            }
      } 
     


`
const NavFooter=({nextProject,prevProject})=>{
    return(
        <SNavFooter className="section-nav-projects bg-accent-primary-2">
        <div className="row no-gutters">
            <Link className="col-md-5 section-nav-projects__inner section-nav-projects__inner_prev" to={`/project/${prevProject.categories[0].slug}/${prevProject.slug}`} data-pjax-link="flyingHeading">
                <div className="section-nav-projects__wrapper-heading section-nav-projects__wrapper-heading_prev">
                     <div className="section-nav-projects__heading section-nav-projects__heading_prev split-text js-text-to-fly js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">
                         {prevProject.title}
                     </div>
                </div>
                <div className="section-nav-projects__arrow section-nav-projects__arrow_prev material-icons">
                    <FontAwesomeIcon icon={faAngleLeft}  />
                </div>
            </Link>
            <Link className="col-md-2 section-nav-projects__inner section-nav-projects__inner_all" to="/project">
                <div className="button-circles">
                <div className="button-circles__circle">
                    <svg viewBox="0 0 152 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-134.000000, -98.000000)">
                        <path className="circle" d="M135,174a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"></path>
                        </g>
                    </g>
                    </svg>
                </div>
                <div className="button-circles__circle">
                    <svg viewBox="0 0 152 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-134.000000, -98.000000)">
                        <path className="circle" d="M135,174a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"></path>
                        </g>
                    </g>
                    </svg>
                </div>
                <div className="button-circles__circle">
                    <svg viewBox="0 0 152 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-134.000000, -98.000000)">
                        <path className="circle" d="M135,174a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"></path>
                        </g>
                    </g>
                    </svg>
                </div>
                <div className="button-circles__circle">
                    <svg viewBox="0 0 152 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-134.000000, -98.000000)">
                        <path className="circle" d="M135,174a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"></path>
                        </g>
                    </g>
                    </svg>
                </div>
                </div>
            </Link>
            <Link className="col-md-5 section-nav-projects__inner section-nav-projects__inner_next" to={`/project/${nextProject.categories[0].slug}/${nextProject.slug}`} data-pjax-link="flyingHeading">
                <div className="section-nav-projects__wrapper-heading section-nav-projects__wrapper-heading_next">
                    <div className="section-nav-projects__heading section-nav-projects__heading_next split-text js-text-to-fly js-split-text">
                        {nextProject.title}
                    </div>
                </div>
                <div className="section-nav-projects__arrow section-nav-projects__arrow_next material-icons">
                    <FontAwesomeIcon icon={faAngleRight}  />
                </div>
            </Link>
            </div>
      </SNavFooter>
    )
}

export default NavFooter