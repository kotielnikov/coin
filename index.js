import bittrex from 'node-bittrex-api'
import util from 'util'



bittrex.getorderbook({ market : 'BTC-XVG', type : 'both' }, function( data, err ) {
  console.log(util.inspect( data, false, null ))
});

