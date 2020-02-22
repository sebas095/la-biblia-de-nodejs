// Classes

class Pizza {
  public tomate: boolean = false;
  public cheese: string = "";
  public bacon: boolean = false;
  public otherIngredients: Array<string> = [];

  setTomate(): Pizza {
    this.tomate = true;
    return this;
  }

  setCheese(cheese: string): Pizza {
    this.cheese = cheese;
    return this;
  }

  setBacon(): Pizza {
    this.bacon = true;
    return this;
  }

  setOtherIngredients(ingredients: Array<string>): Pizza {
    this.otherIngredients = ingredients;
    return this;
  }

  build() {
    return this;
  }
}

const pepperoniPizza = new Pizza();
pepperoniPizza
  .setTomate()
  .setBacon()
  .setCheese("Mozzarella")
  .setOtherIngredients(["Jamon", "Maiz"])
  .build();

  console.log(pepperoniPizza);