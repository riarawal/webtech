var animals=['Hen','Elephant','Tiger','Dog','Cat'];

function ani(animals)
{
    return animals[0];
}

const saa=animals.map(ani);
console.log(saa.join(""));

