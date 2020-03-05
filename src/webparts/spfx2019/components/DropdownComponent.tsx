import * as React from  'react';
import {Dropdown, IDropdownOption,DropdownMenuItemType, } from 'office-ui-fabric-react/lib/Dropdown';
import styles from '../../../../lib/webparts/spfx2019/components/Spfx2019.module.scss';

export interface IDropdownComponentProps{

}


const options : IDropdownOption[]=[
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange' },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' }
];

export class DropdownComponent extends React.Component<IDropdownComponentProps,{}>{

    render(){
        return(
            <div>
                <Dropdown placeHolder='Verfügbare Gruppen'  options = {options}  /> 
            </div>
        )
    };
};


