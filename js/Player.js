class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.horizontalDistance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  initialUpdate(){
    console.log("initialUpdate Function");
    var playerIndex = "players/player" + this.index;
    if(this.index === 1 && this.distance <= 40){
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        horizontalDistance: 375
      });
    }
    if(this.index === 2 && this.distance <= 40){
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        horizontalDistance: 575
      });
    }
  }

  update(){
    console.log("Update Function");
    var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        horizontalDistance: this.horizontalDistance
      });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}
