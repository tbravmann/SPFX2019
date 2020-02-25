import * as React from 'react';
import {IPeoplePickerCompProps} from './IPeoplePickerCompProps';
import {PeoplePicker, PrincipalType} from '@pnp/spfx-controls-react/lib/PeoplePicker';

export class PeoplePickerComp extends React.Component<IPeoplePickerCompProps,{}>{

    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
               <PeoplePicker context={this.props.context}
                             titleText=''
                             personSelectionLimit={1}
                             groupName={''}
                             showtooltip={false}
                             isRequired={true}
                             disabled={false}
                             selectedItems={this._getPeoplePickerItems}
                             showHiddenInUI={false}
                             principalTypes={[PrincipalType.User]}
                             resolveDelay={0} />
            </div>
        )
    }

    private _getPeoplePickerItems(items: any[]) {
        console.log('Items:' , items);
    }

}