const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Triceratops', 'herbivore', 15)
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 10)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dino_collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add_dino(dinosaur);
    const actual = park.dino_collection;
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add_dino(dinosaur);
    park.add_dino(dinosaur2);
    park.add_dino(dinosaur3);
    const actual = park.dino_collection;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2, dinosaur3]);
    park.remove_dino(dinosaur2);
    const next_actual = park.dino_collection;
    assert.deepStrictEqual(next_actual, [dinosaur, dinosaur3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add_dino(dinosaur);
    park.add_dino(dinosaur2);
    park.add_dino(dinosaur3);
    
    const actual = park.most_popular_dino()
    assert.deepStrictEqual(actual, dinosaur)
    
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    const actual = park.find_dino_by_species("t-rex");
    assert.deepStrictEqual(actual, [dinosaur, dinosaur])
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    const actual = park.total_visitors_per_day()
    assert.strictEqual(actual, 75)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    const actual = park.total_visitors_per_year()
    assert.strictEqual(actual, 27375)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    const actual = park.total_yearly_revenue()
    assert.strictEqual(actual, 273750)
  });

  // EXTENSION 1

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    park.remove_all_of_species("t-rex")
    const actual = park.dino_collection
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  })

  it('should be able to provide number of dinos for each diet type', function () {
    park.add_dino(dinosaur)
    park.add_dino(dinosaur)
    park.add_dino(dinosaur2)
    park.add_dino(dinosaur3)

    const actual = park.find_diet_types()
    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 1, 'omnivore': 1})
  })

});
