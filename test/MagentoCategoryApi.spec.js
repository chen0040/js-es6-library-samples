import {MagentoCategoryApi} from 'js-magento-client';
import expect from 'expect';

describe('Magento Category Api', () => {
   it('can load the root category of the magento site', (done) => {
       MagentoCategoryApi.loadRootCategory("http://j-clef-web-01.japaneast.cloudapp.azure.com").then(response => {
           let rootCategory = response.data;
           expect(rootCategory.children_data.length).toBeGreaterThan(0);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
    
   it('can load the products in category 19', (done) => {
       let categoryId = 19;
       MagentoCategoryApi.loadProducts("http://j-clef-web-01.japaneast.cloudapp.azure.com", categoryId).then(response => {
           //console.log(response.data);
           expect(response.data.length).toBeGreaterThan(0);
           done();
       }).catch(reason => {
           console.log(reason);
           done(new Error(reason));
       })
   }); 
});