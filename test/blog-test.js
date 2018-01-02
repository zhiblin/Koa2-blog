var expect = require('chai').expect;
var apiModel = require('../lib/mysql.js')

describe('add User', function() {
	// 创建一个用户
	before(function(done) {
		apiModel.insertData(['wclimb','123456']).then(()=>{
			done()
		});
	});
	// 删除一个用户
	after(function(done) {
		apiModel.deleteUserData('wclimb').then(()=>{
			done()
		});
	})
	// 查找用户
	it('should return an Array contain {} when find by name="wclimb"', function(done) {
		apiModel.findUserData('wclimb').then(function(user) {
		  	var data = JSON.parse(JSON.stringify(user));
		  	console.log(data)
		  	expect(data).to.have.lengthOf(1);
		  	done();
		}).catch((err)=>{
			if (err) {
		       return done(err);
		    }
		})
	});
});