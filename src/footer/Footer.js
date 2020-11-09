import React from 'react';
import './Footer.css';
import {ReactComponent as SvgFooter} from "../assets/footer.svg";
import {FooterItems, FooterItemLast} from './RenderFooter';

export const Footer = () => {
    return(
        <>
        <hr/>
        <div id="footer">
        <div id="f1">
        <a>
        <SvgFooter style={{maxWidth: "5%", fill: "#1fa637", position: "absolute", top: "23%"}}/>
      </a>
      </div>
       <div id="f2">
           <ul>
          { FooterItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url} to={item.url} >{item.title}</a>
                    </li>
                )
           })}
           </ul>
           
       </div>
       <div id="f3">
       <ul>
       { FooterItemLast.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.url} to={item.url} >{item.title}</a>
                    </li>
                )
           })}
           </ul>
       </div>
       <div id="f4">
    <ul id="fk">
    <li>
        <a  id="ffb"><i class="fa fa-facebook-square" aria-hidden="true">Fb</i>
        </a>
    </li>
    <li>
        <a  id="fli"><i class="fa fa-facebook-square" aria-hidden="true">LinkedIn</i>
        </a>
    </li>
    </ul>
       </div>
            </div>
            <hr/>
        </>
    )
}