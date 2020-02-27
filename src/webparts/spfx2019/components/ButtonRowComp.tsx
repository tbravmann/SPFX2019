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
                <DefaultButton text="Apply" onClick={this._alertClicked} allowDisabledFocus disabled={this.props.disabled} checked={this.props.checked} />
                <PrimaryButton text="Discard" onClick={this._alertClicked} allowDisabledFocus disabled={this.props.disabled} checked={this.props.disabled} />
                
            </div>

        ); 
    };
    
    
    private _alertClicked(): void {
        alert('Clicked');
    }

} 