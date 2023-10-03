import {Container as Content} from "semantic-ui-react";

import './Container.scss';

export default function Container({children}){

  return(
    <div className = "container-bg">
      <Content>{children}</Content>
    </div>
  )

};