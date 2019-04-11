export default class Gate {
	constructor(user) {
		this.user = user;
 	}

 	hasPermission(permission) {
 		//check trong day neu user co role la super admin => return true
 		for(var a in this.user) {
 			if(this.user[a].name == 'Super Admin') {
 				return true;
 			}
 			else {
			    for(var b in this.user[a].permissions) {
			   		if (permission == (this.user[a].permissions)[b].name) {
			   			return true;
			   			break;
			   		}
			   }
 			}
		}
		return false;
 	}
}