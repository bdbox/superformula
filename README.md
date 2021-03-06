This project is for an interview test with Super Formula. 
(But the company looks like a cheater, don't waste your time to apply the fake job.)

# Live Demo

[http://ec2-3-87-185-232.compute-1.amazonaws.com/](http://ec2-3-87-185-232.compute-1.amazonaws.com/)

Note:
Since I spent several hours in working on server side CORS proxy, but was unsuccessful finally, in order to view the fully functional demo, you may need to use browser side CORS disabled solution. 

Here is one: 
```
in windows CMD console
run 
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

# Technologies

Technologies and  libraries used:
*  React
*  Babel, webpack
*  material-ui (Select component)
*  google-map-react (Google Map)
*  yelp-fusion (Fetch Yelp API)

# Screenshots

![Screenshot: Restaurant List](https://github.com/bdbox/superformula/blob/master/src/images/screenshot-list-small.jpg)


![Screenshot: Restaurant Detail](https://github.com/bdbox/superformula/blob/master/src/images/screenshot-detail-small.jpg)

# Source file list
	
	new file:   src/App.js

	new file:   src/detail-view/DetailView.js
	new file:   src/detail-view/map/ImageRoll.js
	new file:   src/detail-view/map/Map.js
	new file:   src/detail-view/section/Section.js
	new file:   src/detail-view/section/review-item/ReviewItem.js

	new file:   src/images/Superformula-FE-test-264388d-sketch.psd
	new file:   src/images/Superformula-FE-test-264388d.sketch
	new file:   src/images/map-marker.png
	new file:   src/images/mockup.png
	new file:   src/images/rating-sprites.png
	new file:   src/images/rating-sprites.psd

	new file:   src/index.js
	new file:   src/main/Main.js

	new file:   src/main/filter-navigation/Categories.js
	new file:   src/main/filter-navigation/FilterNavigation.js
	new file:   src/main/filter-navigation/OpenNow.js
	new file:   src/main/filter-navigation/Price.js

	new file:   src/main/section/Section.js
	new file:   src/main/section/restaurant-item/Cuisine.js
	new file:   src/main/section/restaurant-item/Image.js
	new file:   src/main/section/restaurant-item/LearnMore.js
	new file:   src/main/section/restaurant-item/OpenClosed.js
	new file:   src/main/section/restaurant-item/PriceRange.js
	new file:   src/main/section/restaurant-item/Rating.js
	new file:   src/main/section/restaurant-item/RestaurantItem.js
	new file:   src/main/section/restaurant-item/RestaurantName.js

	new file:   src/styles/custom.css

	new file:   src/utils/applyFilters.js
	new file:   src/utils/client.js

# Some thoughts

* It needs extra long time (much more than 4-8 hours) to wrap everything up and make them into a functional coding project.
* Overall the project brings me lots of fun.
* Another fun part is GraphQL that I didn't complete yet. But plan to do it some time later.
* My focus is on how to create reusable and functional components.
* I didn't use state management software like Redux, and believe React alone will handle the complexity of this job.
* Prop drilling may look noisy, it is how React is designed. I can use Redux or Context to improve, but it sujects to reuseability and overall complexity.
* I made a change of original design because I think a checkbox (Open now filter) is better than a radio button here.
* I also think all appearance of checkboxes should be squared with/without round corners. Circle/disk is for radio button.
* I didn't find a close match of Select Dropdown and has no time to customize it, then I introduced Material-UI for this reason.
* I knew some font size and positioning are not perfect yet, but time is tight, I felt. I want to appologize.
* Responsive and mobile site are not challenging for me, but they're time consuming job.
