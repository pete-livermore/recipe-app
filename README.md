# Recipe finder app 
Application built with React, consuming the [RESTFUL MealDB API](https://www.themealdb.com/api.php), which has the functionality to search for recipes and filter by category. It has been deployed on Netlify [here](https://restipe-app.netlify.app/)

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648129768/Habit_tracker_app/Screenshot_2022-03-24_at_13.48.35_o2t0e3.png "Homepage")

Technologies used
----
* React.js
* Javascript (ES6)
* HTML5
* SCSS
* Bootstrap
* MealDB API
* Axios
* Insomnia REST Client
* Yarn
* react-router-dom

App walkthrough
----
### Homepage
The homepage consists of a container with a carousel
![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648129768/Habit_tracker_app/Screenshot_2022-03-24_at_13.48.35_o2t0e3.png "Homepage")

### Searching/filtering
Clicking the "Start your search" button on the homepage or "Browse all recipes in the top navbar", will take the user to a page where they can search for a specific recipe or filter by category:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1647454416/Screenshot_2022-03-16_at_18.11.05_abysvi.png "Search page")

Searching a specific recipe:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131295/Habit_tracker_app/Screenshot_2022-03-24_at_14.14.34_vxfgvp.png "Search functionality")

Filtering by category:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131397/Habit_tracker_app/Screenshot_2022-03-24_at_14.16.02_t9b75n.png "Filter functionality")

Searching and filtering together:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131301/Habit_tracker_app/Screenshot_2022-03-24_at_14.14.02_fwavvd.png "Search and filter")

### Browsing by category

On the homepage is a list of categories. Clicking a specific category will take the user to all recipes that are tagged with that particular category:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131464/Habit_tracker_app/Screenshot_2022-03-24_at_14.17.16_rijsuy.png "Browse by category")

### Recipe page

When the user clicks a specific recipe card, they are naviagted to the recipe detail page.

At the top of the page is a list of ingredients and an image:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131605/Habit_tracker_app/Screenshot_2022-03-24_at_14.19.29_lesvlc.png "Recipe page 1")

Below that, are the instructions and an embedded YouTube video tutorial:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648131606/Habit_tracker_app/Screenshot_2022-03-24_at_14.19.35_awkwc4.png "Recipe page 2")

Code examples
----
Generating list of categories:
```javascript
  useEffect(() => {
    if (recipes.length) {
      const categoryListItems = []
      recipes.forEach(meal => {
        categoryListItems.indexOf(meal.strCategory) === -1 && categoryListItems.push(meal.strCategory)
      })
      setCategoryList(categoryListItems)
    }
  }, [recipes])
```
Search and filtering together:
```javascript
  const categoryFilter = () => {
    if (category === false || category === 'All') {
      return recipes
    }
    return recipes.filter(recipe => {
      return recipe.strCategory.includes(category)
    }
    )
  }
```
```javascript
  const searchFilter = () => {
    if (searchResult === false) {
      return categoryFilter()
    }
    return categoryFilter().filter(recipe => {
      return recipe.strMeal.toLowerCase().includes(searchResult.toLowerCase())
    })
  }
```
API error handling:
```javascript
  } catch (err) {
    setHasError({ error: true, message: err.message })
  }
```

```javascript
  : hasError.error ?
     <h4 className='text-danger text-center'>{hasError.message}</h4>
       : <Container className='d-flex justify-content-center'>
          <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
          </Spinner>
         </Container>
```


How I worked
----
What I got from the project
----
### General points
### Technical points
