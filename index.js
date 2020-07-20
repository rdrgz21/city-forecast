const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require ('path');

// Installed and imported for use with APIs
const request = require('request'); 

// Finding the views folder directory
const viewsPath = path.join(__dirname, '/views/');

// Setting Nodejs View Engine to use Handlebars files
app.set('view engine', 'hbs');

// Setting the Views from HBS to come from our views path
app.set('views', viewsPath);

// Parse URL-encoded bodies (as sent by HTML form)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static(path.join(__dirname, '/views')));

app.get("/", (req, res) => {
    res.render("search");
})

app.get("/search", (req, res) => {
    res.render("search");
})

app.get("/searchmobile", (req, res) => {
    res.render("search-mobile");
})

app.get("/london", (req, res) => {
    const weatherApiKey = APIKEY;
    const lat = 51.51;
    const lon = -0.13;
    const cityUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`;
    
    // Dates
    const currentDate = new Date();
    const currentDay = currentDate.getDay()
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate()+1);
    const day3 = new Date(currentDate);
    day3.setDate(day3.getDate()+2);
    const day4 = new Date(currentDate);
    day4.setDate(day4.getDate()+3);
    const day5 = new Date(currentDate);
    day5.setDate(day5.getDate()+4);
    const day6 = new Date(currentDate);
    day6.setDate(day6.getDate()+5);
    const day7 = new Date(currentDate);
    day7.setDate(day7.getDate()+6);
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const getDayName = (day) => {
        return days[day.getDay()]
    }
    console.log(day3);
    console.log(getDayName(day3));

    const getDdMm = (day) => {
        return `${day.getDate()} ${months[day.getMonth()]}`
    }

    request( { url: cityUrl, json: true }, (error, response) => {
        console.log(currentDay);
        if(response.body.cod == "404") {
            res.render('london', {
                message: "Sorry, that city could not be found."
            })
        } else {
            res.render('london', {
                // Current / Day 1
                currentTemp: response.body.current.temp,
                currentIcon: response.body.current.weather[0].icon,
                currentDesc: response.body.current.weather[0].description,
                currentDay: getDayName(currentDate),
                // Day 2
                day2temp: response.body.daily[1].temp.day,
                day2icon: response.body.daily[1].weather[0].icon,
                day2desc: response.body.daily[1].weather[0].description,
                day2: getDayName(tomorrow),
                day2date: getDdMm(tomorrow),
                // Day 3
                day3temp: response.body.daily[2].temp.day,
                day3icon: response.body.daily[2].weather[0].icon,
                day3desc: response.body.daily[2].weather[0].description,
                day3: getDayName(day3),
                day3date: getDdMm(day3),
                // Day 4
                day4temp: response.body.daily[3].temp.day,
                day4icon: response.body.daily[3].weather[0].icon,
                day4desc: response.body.daily[3].weather[0].description,
                day4: getDayName(day4),
                day4date: getDdMm(day4),
                // Day 5
                day5temp: response.body.daily[4].temp.day,
                day5icon: response.body.daily[4].weather[0].icon,
                day5desc: response.body.daily[4].weather[0].description,
                day5: getDayName(day5),
                day5date: getDdMm(day5),
                // Day 6
                day6temp: response.body.daily[5].temp.day,
                day6icon: response.body.daily[5].weather[0].icon,
                day6desc: response.body.daily[5].weather[0].description,
                day6: getDayName(day6),
                day6date: getDdMm(day6),
                // Day 7
                day7temp: response.body.daily[6].temp.day,
                day7icon: response.body.daily[6].weather[0].icon,
                day7desc: response.body.daily[6].weather[0].description,
                day7: getDayName(day7),
                day7date: getDdMm(day7),
            })
        }
    });
})

app.get("/manchester", (req, res) => {
    const weatherApiKey = APIKEY;
    const lat = 53.48;
    const lon = -2.24;
    const cityUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`;
    
    // Dates
    const currentDate = new Date();
    const currentDay = currentDate.getDay()
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate()+1);
    const day3 = new Date(currentDate);
    day3.setDate(day3.getDate()+2);
    const day4 = new Date(currentDate);
    day4.setDate(day4.getDate()+3);
    const day5 = new Date(currentDate);
    day5.setDate(day5.getDate()+4);
    const day6 = new Date(currentDate);
    day6.setDate(day6.getDate()+5);
    const day7 = new Date(currentDate);
    day7.setDate(day7.getDate()+6);
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const getDayName = (day) => {
        return days[day.getDay()]
    }
    console.log(day3);
    console.log(getDayName(day3));

    const getDdMm = (day) => {
        return `${day.getDate()} ${months[day.getMonth()]}`
    }

    request( { url: cityUrl, json: true }, (error, response) => {
        console.log(currentDay);
        if(response.body.cod == "404") {
            res.render('manchester', {
                message: "Sorry, that city could not be found."
            })
        } else {
            res.render('manchester', {
                // Current / Day 1
                currentTemp: response.body.current.temp,
                currentIcon: response.body.current.weather[0].icon,
                currentDesc: response.body.current.weather[0].description,
                currentDay: getDayName(currentDate),
                // Day 2
                day2temp: response.body.daily[1].temp.day,
                day2icon: response.body.daily[1].weather[0].icon,
                day2desc: response.body.daily[1].weather[0].description,
                day2: getDayName(tomorrow),
                day2date: getDdMm(tomorrow),
                // Day 3
                day3temp: response.body.daily[2].temp.day,
                day3icon: response.body.daily[2].weather[0].icon,
                day3desc: response.body.daily[2].weather[0].description,
                day3: getDayName(day3),
                day3date: getDdMm(day3),
                // Day 4
                day4temp: response.body.daily[3].temp.day,
                day4icon: response.body.daily[3].weather[0].icon,
                day4desc: response.body.daily[3].weather[0].description,
                day4: getDayName(day4),
                day4date: getDdMm(day4),
                // Day 5
                day5temp: response.body.daily[4].temp.day,
                day5icon: response.body.daily[4].weather[0].icon,
                day5desc: response.body.daily[4].weather[0].description,
                day5: getDayName(day5),
                day5date: getDdMm(day5),
                // Day 6
                day6temp: response.body.daily[5].temp.day,
                day6icon: response.body.daily[5].weather[0].icon,
                day6desc: response.body.daily[5].weather[0].description,
                day6: getDayName(day6),
                day6date: getDdMm(day6),
                // Day 7
                day7temp: response.body.daily[6].temp.day,
                day7icon: response.body.daily[6].weather[0].icon,
                day7desc: response.body.daily[6].weather[0].description,
                day7: getDayName(day7),
                day7date: getDdMm(day7),
            })
        }
    });
})

app.get("/showCity", (req, res) => {
    const city = req.query.theCity;
    const cityCapitalised = city.charAt(0).toUpperCase() + city.slice(1);
    const country = req.query.theCountry;
    const weatherApiKey = APIKEY;
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityCapitalised},${country}&units=metric&appid=${weatherApiKey}`;

    request( { url: cityUrl, json: true }, (error, response) => {
        console.log(response.body);
        if(response.body.cod == "404") {
            res.render('index', {
                message: "Sorry, that city could not be found."
            })
        } else {
            res.render('index', {
                forecast: response.body.main.temp,
                city: response.body.name,
                icon: response.body.weather[0].icon,
                description: response.body.weather[0].description
            })
        }
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})