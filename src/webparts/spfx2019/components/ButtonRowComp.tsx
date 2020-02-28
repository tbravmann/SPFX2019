import * as React from 'react';
import {DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import styles from '../../../../lib/webparts/spfx2019/components/Spfx2019.module.scss';


export interface IButtonRowCompProps {
    disabled?:boolean;
    checked?:boolean;
}

const ButtonRowStyles =  {
  root : { 
      margin:'2%' ,
         
            }
    
  }

export class ButtonRowComp extends React.Component<IButtonRowCompProps,{}>{
 
    render(){
        return(

            <div className = {styles.buttonbox}>
                   
                <PrimaryButton styles={ButtonRowStyles} className={styles.button} text="Apply" onClick={this._alertClicked} disabled={this.props.disabled} checked={this.props.disabled} />      
               
                
                <PrimaryButton styles={ButtonRowStyles} className={styles.button} text="Discard" onClick={this._alertClicked} disabled={this.props.disabled} checked={this.props.disabled} />
               
                
                
            </div>

        ); 
    };
    
    
    private _alertClicked(): void {
        alert('Clicked');
    }

} 

