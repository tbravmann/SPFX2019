import * as React from 'react';
import styles from './Spfx2019.module.scss';
import { ISpfx2019Props } from './ISpfx2019Props';
import { escape } from '@microsoft/sp-lodash-subset';
import {PeoplePicker, PrincipalType} from '@pnp/spfx-controls-react/lib/PeoplePicker';
import { Placeholder } from '@pnp/spfx-controls-react';


export default class Spfx2019 extends React.Component < ISpfx2019Props, {} > {
  
    constructor(props){
      super(props);
      this._onConfigure = this._onConfigure.bind(this);
    }

  
  
  public render(): React.ReactElement<ISpfx2019Props> {
    return(
      <div className = { styles.spfx2019 } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Das ist ein WebPart mit zwei Custom Werten!</span>
        <p className={styles.subTitle}>gerne eingesetzt zu Demozwecken ! </p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <p className={styles.description}>{escape(this.props.test1)}</p>
        <p className={styles.description}>Loading from : {escape(this.props.context.pageContext.web.title)}</p>

                
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
        <Placeholder iconName='Edit'
                   iconText='Configure your Web Part'
                   description = 'Please configure the web Part'
                   buttonLabel = 'Configure'
                   onConfigure={this._onConfigure}/>
      </div>
    </div>
     <div id="spListContainer" /> 
  </div>
      </div >
    );
 
      
  }

  private _onConfigure(){

    this.props.context.propertyPane.open();
  }
}
