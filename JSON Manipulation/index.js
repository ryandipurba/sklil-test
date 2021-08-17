var data = require('./data.json');



findItemInMeetingRoom = () => {
  data.filter(item => {
    if (item.placement["name"] == "Meeting Room") {
      console.log(item.name);
    }
  });
}

findAllElectronic = () => {
  data.filter(item => {
    if (item.type == "electronic") {
      console.log(item.name);
    }
  });
}

findAllFurniture = () => {
  data.filter(item => {
    if (item.type == "furniture") {
      console.log(item.name);
    }
  });
}

findItemPurchasedOn = () => {
  data.filter(item => {
    if (item.purchased_at == 1578672242) {
      console.log(item.name);
    }
  })
}

findItemWithBrownColor = () => {
  data.filter(item => {
    item.tags.forEach(element => {
      if (element == "brown") {
        console.log(item.name);
      }
    });
  });
}

console.log("1. Find items in the Meeting Room.");
findItemInMeetingRoom()

console.log("2. Find all electronic devices.");
findAllElectronic()

console.log("3. Find all the furniture.");
findAllFurniture()

console.log("4. Find all items were purchased on 16 Januari 2020.");
findItemPurchasedOn

console.log("5. Find all items with brown color.");
findItemWithBrownColor()

