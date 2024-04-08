const express = require('express');
const app = express();

pets = [
  {name: `Jerry`,
   type: `Bunny`,
   owner: `John`
  },
  {name: `Pinchy`,
  type: `Lobster`,
  owner: `Suze`
 },
 {name: `Pollen Degeneres`,
 type: `Bumble Bee`,
 owner: `Steadman`
},
{name: `JFKFC`,
type: `Chicken`,
owner: `Mary`
},
{name: `J.K. Slowling`,
type: `Sloth`,
owner: `Martin Roscoe`
},
{name: `Milky Roberts`,
type: `Cow`,
owner: `Lance Birkenstock`
},
{name: `Nichole Halbert`,
type: `Baby Goat`,
owner: `Capricia Malta`
}
]

app.get('/api/v1/pets', (req, res) => {
  res.send(pets)
})

app.get(`/api/v1/pets/owner`, (req, res) => {
  let foundPets = pets;
  console.log(`REQ QUERY`, req.query);
  if(req.query.owner) {
    foundPets = pets.filter((pet) => {
      return pet.owner === req.query.owner
    })
    res.send(foundPets)
  }
})

app.get(`/api/v1/pets/:name`, (req, res) => {
  const { name } = req.params;
  const singlePet = pets.find((pet) => {
    return pet.name === name;
  })
  res.send(singlePet)
  })

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});