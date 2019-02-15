function Clown (name, shoeSize, laughingStyle){
  this.name = name;
  this.shoeSize = shoeSize;
  this.laughingStyle = laughingStyle;
}

Clown.prototype.laugh = function(){
  console.log(`Hoi ik ben $(this.name), mijn schoenmaat is $(this.shoeSize), $(this.laughingStyle)`);
}

const bassie = new Clown('Bassie', '80', 'Woehahaha');

bassie();
