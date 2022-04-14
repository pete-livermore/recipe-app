# Recipe finder app 
React application built with my classmate Jomari Camangon, consuming the [RESTFUL MealDB API](https://www.themealdb.com/api.php), which has the functionality to search for recipes and filter by category. It has been deployed on Netlify [here](https://restipe-app.netlify.app/)

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648129768/Habit_tracker_app/Screenshot_2022-03-24_at_13.48.35_o2t0e3.png "Homepage")

Brief
----
* Timeframe of 2 days
* Pair project
* Build a React application that consumes any public API 


Technologies used
----
* React
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
https://user-images.githubusercontent.com/96052888/162754183-0e587a53-b9ed-4257-9319-c4ad8542731b.mp4

The layout is also responsive:

![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1648134289/Habit_tracker_app/Screenshot_2022-03-24_at_15.04.14_gzlfhw.png "Responsive Homepage")

Process
----
### Planning
After prospecting various free RESTful APIs on the Internet, we decided that a recipe-based API would give us plenty of interesting and differently structured data to explore and use on the front-end. We began by exploring some options - specifically, testing the APIs using Insomnia to ensure there were no CORS issues. We decided on the TheMealDB API because it was clearly structured and access was stable.

We then explored and tested TheMealDB API endpoints with Insomnia, which enabled us to map out what data we would have access to and how to dig down into it.
Once we were happy with our understanding of the API, we then identified a list of features that would constitute an MVP, and also brain-stormed some ‘nice-to-have’ features.

So we had a good picture of what our MVP would look like and how it would function, we wireframed our UIs using Figma.
![alt text](https://res.cloudinary.com/di7ndofao/image/upload/v1649688471/Habit_tracker_app/Screenshot_2022-04-11_154730_gu9jku.png "Miro wireframe")

We decided that we would have daily stand-up meetings via Zoom each morning to discuss our progress and the tasks for the day ahead (including work allocation), and then communicate via Slack as required. With two people, we needed to avoid duplication and code conflicts. Therefore, we decided we would initially code together using Visual Studio Live Share. We felt this would give both of us an opportunity to think about and understand all features of the app, as well as solve issues more efficiently. However, in order to improve overall efficiency and speed, we identified specific tasks and features that we could work on separately.

### Building
We began development by setting up the page architecture, which we did by building a router with react-router-dom. We then defined individual components we would need to build and then started with the homepage. Our approach to this was to first identify any reusable components (such as inputs and cards) and build them first. Then we built layout components like the navbar and homepage, and then focussed on more specific components (such as the recipe detail component) afterwards. I strived to keep my code DRY and so I was constantly thinking about where I could componentize, and make the components clear and usable.

Everywhere we had an API request, we set this up using Axios and then captured the data in state using hooks. We then explored the data using React Developer Tools to ensure it was the correct data and that we understood its structure. Once we were happy with that, we then focussed on the rendering of the components using the requisite data.

Once we had implemented the core functionality of the app, we then turned our attention to styling the app using React Bootstrap and Sass. We used some pre-built React Bootstrap components such as the navbar, cards, and a spinner to speed up the process, customising where appropriate. An important focus was ensuring that our UIs were responsive so we used the Bootstrap grid system to ensure that the layout worked in different viewport sizes.

The final main part of the build process was ensuring error handling for the API requests. We stored an error object in state that was updated with the error message upon failure of the API request, which we could use to trigger an error message to the user.

While we were both involved in all areas of the app development, the specific features that I took the lead on were:
* Combined search and filter functionality
* API error handling
* Styling using Bootstrap

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

Key learnings
----
This was my first ever experience of coding collaboratively, and was an initially challenging but ultimately very positive experience. Until this point I was only accustomed to individual problem solving and project visioning, but this project showed me the value of doing these things collaboratively. When coding with JS, there are often multiple different ways to achieve something and this project helped me develop a more open mindset about coding approaches. Together, we were able to improve upon our individual outputs and enhance overall efficiency by discussing ideas and solving problems together.

#### Axios and API calls
This was a major feature of this project. Exploring the API endpoints using Insomnia was a particularly useful exercise as all APIs are different and it helps you get to grips with the structure of the data. And when working with the data in React, and having to extract data in a prescribed structure, I learned a lot about what can be good about APIs and what is less ideal, which got me thinking about how I would design my own.

#### React 
This was my first significant project built with React, so it took a little while to adapt my mindset from where I was thinking of things in terms of Vanilla JavaScript DOM manipulation. However, I really enjoyed using the framework and I felt comfortable building components and passing props. My main areas of progress were developing my understanding of the useState and useEffect hooks to trigger the API requests and to (re)-render components with data from the API, and using react router to create multiple pages in the app, enable navigation, and utilise data from a specific route (e.g. useParams).

#### React Bootstrap
I had only briefly experienced the Bootstrap framework before, so this was fairly new to me. I mostly used it for layout purposes, but I did explore more specific styling too. It took some reading and experimentation to get to grips with the different class names, and I did struggle at times to override unwanted styles, but ultimately I gained a good grasp of the grid system containers, and breakpoints for responsive design.

#### Vanilla JavaScript
As mentioned before, you have no real control in how the data in a 3rd party API is structured when you first access the endpoint. This particular API required some 'digging' into nested data and then dealing with that data using appropriate methods in order to use/display it in React. This enabled me to practise my JavaScript skills as there were a number of occasions where I needed to map and filter data, as well as use object methods to access the data I needed.

Challenges
------
For me, the challenges of this project lay in ensuring a harmony between the API requests and displaying the UI with React. It took me some time to understand exactly what data I had to work with at any given point, and what React was trying to do with it. Once I began to understand this, the whole project became a lot clearer to me.

In addition, ensuring robust API error handling was difficult in the available timeframe. I realised how much testing is required to be confident of functionality, even for a small application.

Wins
------
I was very pleased with how quickly I was able to get up to speed with React Bootstrap to quickly generate layouts. Interestingly, it actually seemed to help and reinforce my understanding of pure CSS, and I felt that my ability and confidence in styling generally took a significant leap with this project.

Future features
------
Given the timeframe, this project was very limited in scope. Given that the key user stories for this app involve finding a suitable recipe, I would like to make the search and filtering more advanced. For example, I would be keen to add the ability to search/filter by ingredients, which would involve filtering the data based on matching ingredient data with the search term. I would also like to integrate another 3rd party API that provides nutritional information for a given recipe, which would require ensuring that different API requests can work in concert. Although it was beyond the scope of this project, building a back-end for this app would allow account creation where authorised users can comment on, rate, and save specific recipes for further use. This would allow the serving of recommended recipes based on like and rating history.
