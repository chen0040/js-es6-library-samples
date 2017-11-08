import {MagentoAccountApi} from 'js-magento-client';
import expect from 'expect';


describe('Magento Account Api', () => {
  it('should return a valid token if given a valid client username and password', function(done) {
      MagentoAccountApi.loginAsClient(
          "http://j-clef-web-01.japaneast.cloudapp.azure.com", 
          "xs0040@gmail.com",
          "chen@0040")
          .then((response) => {
            let token = response.data;
            expect(response.status).toEqual(200);
            expect(token.length).toBeGreaterThan(0);
            done();
          }).catch(reason => {
            console.log(reason);
            done(new Error(reason));
          });
    
  });
});