# Recipe finder app 
React application built with my classmate Jomari Camangon, consuming the [RESTFUL MealDB API](https://www.themealdb.com/api.php), which has the functionality to search for recipes and filter by category. It has been deployed on Netlify [here](https://restipe-app.netlify.app/)

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648129768/Habit_tracker_app/Screenshot_2022-03-24_at_13.48.35_o2t0e3.png "Homepage")

Brief
----
* 2 day-project
* App must consume a public API
* Must have several components
* Should have multiple pages

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
* Figma
* Visual Studio Live Share

App walkthrough
----
### Homepage
The homepage consists of a container with a carousel that displays two random recipes, and about me text, and a series of cards (with links) showing different recipe categories

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648129768/Habit_tracker_app/Screenshot_2022-03-24_at_13.48.35_o2t0e3.png "Homepage")

The layout is responsive:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648134289/Habit_tracker_app/Screenshot_2022-03-24_at_15.04.14_gzlfhw.png "Responsive Homepage")

### Searching/filtering
Clicking the "Start your search" button on the homepage or "Browse all recipes" in the top navbar, will take the user to a page where they can search for a specific recipe or filter by category:

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
    if (!category || category === 'All') {
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
    if (!searchResult) {
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


How we worked & what I got from the project
----
### Planning
We began the process by exploring and testing the API endpoints using Insomnia, which enabled us to map out what data we would have access to and how to dig down into it. We then wireframed our UIs using Figma so we had a good picture of what we were trying to build and how it would function.

### Coding
#### General points
This was my first ever experience of coding collaboratively, and was an initially challenging but ultimately very positive experience. Until this point I was only accustomed to individual problem solving and project visioning, but this project showed me the value of doing these things collaboratively. When coding with JS, there are often multiple different ways to achieve something and this project helped me develop a more open mindset about coding approaches. Together, we were able to improve upon our individual outputs and enhance overall efficiency by discussing ideas and solving problems together.

With two people, we needed to avoid duplication and code conflicts. Therefore, we coded together using Visual Studio Live Share. I found this to be an ideal way to work at this stage, as it gave both of us an opportunity to think about and understand all features of the app. Even when you are working on separate files/bits of code, you are able to watch how the other person is approaching something, which I found helped me in my own thinking sometimes. In order to improve efficiency and speed, we then identified specific tasks and features that we could work on separately in the evenings.


The features that I focused on in my own invidual coding sessions were:

* Combined search and filter functionality
* API error handling
* Styling using Bootstrap

#### Technical points
*Axios and API calls* - This was a major feature of this project. Exploring the API endpoints using Insomnia was a particularly useful exercise as all APIs are different and it helps you get to grips with the structure of the data. And when working with the data in React, and having to extract data in a prescribed structure, I learned a lot about what can be good about APIs and what is less ideal, which got me thinking about how I would design my own.

*React* - This was my first significant project built with React, so it took a little while to adapt my mindset from where I was thinking of things in terms of Vanilla JavaScript DOM manipulation. However, I really enjoyed using the framework and I felt comfortable building components and passing props. I strived to keep my code DRY and so I was constantly thinking about where I could componentize, and make the components clear and useable. My main areas of progress were developing my understanding of the useState and useEffect hooks to trigger the API requests and to (re)-render components with data from the API, and using react router to create multiple pages in the app, enable navigation, and utilise data from a specific route (e.g. useParams).

*React Bootstrap* - I had only briefly experienced the Bootstrap framework before, so this was fairly new to me. I mostly used it for layout purposes, but I did explore more specific styling too. It took some reading and experimentation to get to grips with the different class names, and I did struggle at times to override unwanted styles, but ultimately I gained a good grasp of the grid system containers, and breakpoints for responsive design.

*Vanilla JavaScript* - As mentioned before, you have no real control in how the data in a 3rd party API is structured when you first access the endpoint. This particular API required some 'digging' into nested data and then dealing with that data using appropriate methods in order to use/display it in React. This enabled me to practise my JavaScript skills as there were a number of occasions where I needed to map and filter data, as well as use object methods to access the data I needed.

Future features
----
Given the timeframe, this project was very limited in scope. Given that the key user stories for this app involve finding a suitable recipe, I would like to make the search and filtering more advanced. For example, I would be keen to add the ability to search/filter by ingredients, which would involve filtering the data based on matching ingredient data with the search term. I would also like to integrate another 3rd party API that provides nutritional information for a given recipe, which would require ensuring that different API requests can work in concert. Although it was beyond the scope of this project, building a backend for this app would allow account creation where authorised users can comment on, rate, and save specific recipes for further use. This would allow the serving of recommended recipes based on like and rating history.

