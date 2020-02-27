import * as React from 'react';
import {DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';


export interface IButtonRowCompProps {
    disabled?:boolean;
    checked?:boolean;
}


export class ButtonRowComp extends React.Component<IButtonRowCompProps,{}>{
 
    render(){
        return(

            <div>

                <PrimaryButton text="Apply" onClick={this._alertClicked} disabled={this.props.disabled} checked={this.props.disabled} />      
                
                
                <PrimaryButton text="Discard" onClick={this._alertClicked} disabled={this.props.disabled} checked={this.props.disabled} />
                
            </div>

        ); 
    };
    
    
    private _alertClicked(): void {
        alert('Clicked');
    }

} 