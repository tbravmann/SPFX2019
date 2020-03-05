import * as React from 'react';
import styles from './Spfx2019.module.scss';
import { ISpfx2019Props } from './ISpfx2019Props';
import { escape } from '@microsoft/sp-lodash-subset';
import {PeoplePicker, PrincipalType} from '@pnp/spfx-controls-react/lib/PeoplePicker';
import {IPlaceholderCompProps} from './IPlaceholderCompProps';
import {PlaceholderComp} from './PlaceholderComponent';
import { PeoplePickerComp } from './PeoplePickerComp';
import { ButtonRowComp } from '../../../../lib/webparts/spfx2019/components/ButtonRowComp';
import {DropdownComponent} from './DropdownComponent';

export default class Spfx2019 extends React.Component < ISpfx2019Props, {} > {
  
    
  
  public render(): React.ReactElement<ISpfx2019Props> {
    return(
      <div className = { styles.spfx2019 } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>User Management WebPart</span>
   
   
    {/*     
        <p className={styles.description}>Loading from : {escape(this.props.context.pageContext.web.title)}</p>
    */}
   
   
        <div className="ms-Grid">
        <p>Bitte wählen Sie eine Gruppe aus : </p>
        <DropdownComponent/>
        </div>
        <p>User : </p>
        
        <PeoplePickerComp context={this.props.context}/>
        <br></br>
        <ButtonRowComp />
        {/* <PlaceholderComp context ={this.props.context}/> */}
      </div>
    </div>
     {/* <div id="spListContainer" />  */}
  </div>
      </div >
    );
 
      
  }

}
