import * as React from 'react';
import {Placeholder} from '@pnp/spfx-controls-react';
import { IPlaceholderCompProps } from './IPlaceholderCompProps';

export class PlaceholderComp extends React.Component <IPlaceholderCompProps,{} >{
    
    constructor(props) {
        super(props);
        this._onConfigure = this._onConfigure.bind(this);
    }
    
    render() {
        return (
        <div>
            <Placeholder iconName='Edit'
                   iconText='Configure your Web Part'
                   description = 'Please configure the web Part'
                   buttonLabel = 'Configure'
                   onConfigure={this._onConfigure}/>
        </div>
        )
    }

    private _onConfigure(){
        this.props.context.propertyPane.open();
    }
}