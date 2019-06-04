This project is for an interview test with Super Formula. 

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
..*  React
..*  Babel, webpack
..*  material-ui (Select component)
..*  google-map-react (Google Map)
..*  yelp-fusion (Fetch Yelp API)

# Screenshots

![Screenshot: Restaurant List](https://github.com/bdbox/superformula/blob/master/src/images/map-marker.png)


![Screenshot: Restaurant Detail](https://github.com/bdbox/superformula/blob/master/src/images/map-marker.png)

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
