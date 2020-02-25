import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  WebPartContext
} from '@microsoft/sp-webpart-base';

import  {Environment,EnvironmentType} from '@microsoft/sp-core-library';
import * as strings from 'Spfx2019WebPartStrings';
import MockHttpClient from './MockHttpClient';
import {SPHttpClient,SPHttpClientResponse} from '@microsoft/sp-http';
import Spfx2019 from './components/Spfx2019';
import { ISpfx2019Props } from './components/ISpfx2019Props';
import styles from '../../../lib/webparts/spfx2019/components/Spfx2019.module.scss';

import { Placeholder } from '@pnp/spfx-controls-react';


export interface ISpfx2019WebPartProps {
  description: string;
  test1:string;
  context: WebPartContext;
}

export interface ISPLists {
  value : ISPList[];
}

export interface ISPList{

  Title:string;
  id:string;
}

export default class Spfx2019WebPart extends BaseClientSideWebPart<ISpfx2019WebPartProps> {

  public render(): void {
    
    const element: React.ReactElement<ISpfx2019Props > = React.createElement(
      Spfx2019,
      {
        description: this.properties.description,
        test1 : this.properties.test1,
        context : this.context
      },
 
    )

    


    this._renderListAsync();
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  private _getMockListData():Promise<ISPLists> {
    return MockHttpClient.get().then((data: ISPList[])=>{
      var listData : ISPLists = {value : data};
      return listData;
    }) as Promise<ISPLists>;
  }

  private _getListData(): Promise<ISPLists>{
    console.log(this.context.pageContext.web.absoluteUrl);
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+`/_api/web/lists?$filter=Hidden eq false`,SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      return response.json();
    });
  }

  private _renderList(items: ISPList[]):void{
    let html:string = '';
    items.forEach((item:ISPList)=> {
      html += `<ul class='${styles.list}'>
                  <li class='${styles.listItem}'>
                    <span class="ms-font-l">${item.Title}</span>
                  </li>
                </ul>`;
        
    });

    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;
  }

  private _renderListAsync():void{
    //Local Environment
    if(Environment.type === EnvironmentType.Local){
      this._getMockListData().then((response) =>{
        this._renderList(response.value);
      });
    }
    //SharePoint Workbench
    else if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint ){
      this._getListData().then((response)=>{
        
        this._renderList(response.value);
      });
    }
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('test1',{
                  label: 'Hier bitte XXX eingeben : '
                })


              ]
            }
          ]
        }
      ]
    };
  }
}
