import {ISPList} from "./Spfx2019WebPart";

export default class MockHttpClient{

    private static _items : ISPList[] = [{Title : 'Mock List 1', id : '1'},
                                         {Title : 'Mock List 2', id : '2'},
                                         {Title : 'Mock List 3', id : '3'}];


    public static get(): Promise<ISPList[]> {
        return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items) 
        });
    }

}