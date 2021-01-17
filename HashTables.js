let user = {	//Save the type as a String
	age: 54,
	name: "Kylie",
	magic: true,
	scream: function() {
		// console.log('aaaaaaaaahhh!');
	}
}

user.age;  // O(1)
user.spell='abra kadabra';  // O(1)
user.scream();  // O(1)

const a = new Map();	//Map let you save the same data type as a key
						//Mentain insertion order

const b = new Set();	//Similar to Map, only store the keys, no value


//Building a HashTable

class HashTable {
	constructor(size){
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i =0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key,value){
		let address  = this._hash(key);
		if(!this.data[address]){
			this.data[address] = [];	
		} 
		this.data[address].push([key,value]);
		return this.data
	}

	get(key){
		let address  = this._hash(key);
		const currentBucket = this.data[address];
		if(currentBucket) {
			for(let i = 0; i < currentBucket.length; i++){
				if (currentBucket[i][0] === key){
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys(){
		const keysArray = [];
		for(let i = 0; i < this.data.length; i++){
			if(this.data[i]){
				keysArray.push(this.data[i][0][0])
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.set('apples',54);
myHashTable.set('oranges',2);
myHashTable.get('grapes');
myHashTable.keys();


// Google question
// Find the recuring number
// Given array = [2,5,1,2,3,5,1,2,4] should return 2
// Given array = [2,1,1,2,3,5,1,2,4] should return 1
// Given array = [2,3,4,5] should return undefined



