class Meal {
  constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegatarian, isLoctoseFrees) {
    (this.id = id),
      (this.categoryIds = categoryIds),
      (this.title = title),
      (this.affordability = affordability),
      (this.complexity = complexity),
      (this.imageUrl = imageUrl),
      (this.duration = duration),
      (this.ingredients = ingredients),
      (this.steps = steps),
      (this.isGlutenFree = isGlutenFree),
      (this.isVegan = isVegan),
      (this.isVegatarian = isVegatarian),
      (this.isLoctoseFrees = isLoctoseFrees);
  }
}

export default Meal;
