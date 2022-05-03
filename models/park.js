const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dino_collection = []
}

Park.prototype.add_dino = function (dinosaur) {
    this.dino_collection.push(dinosaur)
}

Park.prototype.remove_dino = function (dinosaur) {
    let dino_list = [];
    for (const dino of this.dino_collection) {
        if (dino.species !== dinosaur.species) {
            dino_list.push(dino)
        }
    }
    this.dino_collection = dino_list;
}

Park.prototype.most_popular_dino = function () {
    this.dino_collection.sort(function(a, b){return a.guestsAttractedPerDay - b.guestsAttractedPerDay});
    
    return this.dino_collection[this.dino_collection.length - 1] ;
}

Park.prototype.find_dino_by_species = function (species) {
    dino_list = [];
    for (const dino of this.dino_collection) {
        if (dino.species == species) {
            dino_list.push(dino)
        }
    }
    return dino_list;
}

Park.prototype.total_visitors_per_day = function () {
    total_visitors = 0;
    for (const dino of this.dino_collection) {
        total_visitors += dino.guestsAttractedPerDay
    }
    return total_visitors
}

Park.prototype.total_visitors_per_year = function () {
    per_year = this.total_visitors_per_day() * 365;
    return per_year;
}

Park.prototype.total_yearly_revenue = function () {
    revenue = this.total_visitors_per_year() * this.ticket_price;
    return revenue;
}

Park.prototype.remove_all_of_species = function (species) {
    dino_list = []

    for (const dino of this.dino_collection){
        if (dino.species !== species){
            dino_list.push(dino)
        }
    }
    this.dino_collection = dino_list
}

module.exports = Park;