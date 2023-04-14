<img src="./logo.png" alt="Logo" width="100"/>

# Vietnamese News API

![JavaScript](https://img.shields.io/badge/-f0db4f?style=for-the-badge&lableColor=323330&logo=javascript&logoColor=323330)
![MongoDB](https://img.shields.io/badge/-3fa037?style=for-the-badge&logo=mongodb&logoColor=white)
![ExpressJS](https://img.shields.io/badge/4.18.2-white?style=for-the-badge&logo=express&logoColor=black)
![Mongoose](https://img.shields.io/badge/7.0.2-880000?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAABHNCSVQICAgIfAhkiAAABYhJREFUWIXtmG1oZHcVxn/PnUxmku3GGN3sbjC648wwSbptWbuiFmqxUhC0tiyK+IJIq1AsfhPfEXyhIIK0WAtSEHxDQVxpd4Ua2kKh1QWh3a6amezNbtC4TZpaN5vN5m3u3McPMwmTdJLMppkUZH9wP8yd8z/nPOf+X869cI1rXOMa/4fojU7AdvLChQtd5XI5CZBMJsu25/v7+xdaGXfXhI+Ojn42juO7bQeSpmyfAU5Juhn4HNABREAZmAcuS3rV9r8lnQNKXV1dI319ffM7kU9LhI+Ojg7Y7pPUFcdxBXgV+CFwS53Zcu2ak3TK9ruAtzdwV6FajDLVwrws6WngT6lUajiTySxuJ8fXJXxiYqJjcXHxuiiK3gscs/1BSf0NTH9vez/QI+lXku61/TYgVWcTA8E20igBx4HjnZ2d5+M4XmimGNsSHoZhNo7jW+I4vgv4CGsFNOJxQLZzQ0NDQwDFYvEYcB9wxxZjDfzH9iuS9gNv2cR20vZTQRA8bftMOp3+x0ZFuCrhY2Njh6Mo+qLt24FCs+MknQaGbX/F9ieHhoZ+C2A7USqVfgR8BujZYLiBGeCxIAgeieN4v6Sc7SO2j0oa2mDcpKQRqkvil5lMZmpNTs0kHoZhVxRFDwLHgK5mx60JJN1j+7tAe3t7+7uz2ey/isXiMUlDcRx/XVLnVj5s/wz4STKZHGtvb08sLCz0AgXbDwKZDcZEkmaBJ9Lp9L0rM2BTAePj4+nl5eW74jh+FNh7tWLXUQK+B/wa+PPevXs/Ojc312X7NNVitpoLtmcllQcGBo4kNrI6e/bse8rl8k9tf42t13AzvFXSvKQTwKeXl5ePBkHwvO0MkNsB/1sxIykHBDMzMw81FF4sFr9t+8fADTsc/CZg1vZjkj4F3Eb1zD60w3EasbJEHyoUCsNrpvrU1NSeixcvDgPvo7XNTQn4DXA/0NvCOOtZHBgY2CMpXn3iYRgemZ+f/wvwTklXgCvAy8BLtpckrTQSMdBGg8LYjmr/r16SGp3NPcDttv8AjAdBcABIN5t9bcNaqsWYproUG87eWk6LkiZsf6i3t/clVpIPwzAbRdFXJYW2/5pMJs/lcrmJdQ6C8+fP58rl8o223w98ADhcZxJLesD2akspKbL9BSBfZ/ci8ItasinblSAIUsD9tru30PwKcK4m+LLtPZKOsrZol4HJlUvSaUnPFQqFZ+sdCWB6evq6ffv2zUuKtwi8ytjYWH+5XL4b+A7wZttRT09P94EDB67U242MjNwhabju1o2Dg4N/q7cpFos3AE8AfZuEfBKYoLrv5IE31e5PA89LehH4e623n0wkEpP5fH52I2dtAL29vXNNqa0jl8tN2H64WCw+LumkpMNRFKWpLpFVuru7n7t06dIJ4E7g0fWia7RvEW7W9guS7qHauT0DnEwkEk8mEonxjo6O8sGDB5clRc3m39asYSMkGfjn6OjoxyuVyvFGNn19ffOlUukR4Na2trZvbTNUF3A90A18c3Bw8IFt+lllOy8Fr6FQKJQSicSX6td3PalU6pSkO7PZ7H+3G0PSrVTf1HbkiH1dT7yeQqHwVKP74+Pj6UwmMwOsbi5hGKby+fzSJu7OACclFSVdieM4CoKgUqlUypKWdyLfHRO+EUtLSw8Dn1/5XSqVvl+pVH4ArBcuwJI+kUqlThw6dCi6mjV7tezIVN8M2x8ulUofAygWi7fZ/nKhUFjzWUmSgHJbW9vNAwMDv8tkMoutFA27IFxS2vY3wjC8Hvg51V1/TfOTTCYvBUFwXz6ff6HV+azQ8qluOwZuiqLoj1Q/Lb1mg8tmsyEQtjqXelouvEYAvGOXYjXFbgivAHHtyVPr+b0LcTel5cJr/XtnrdlB0jzVYryh/A9mmEqbF3ek9gAAAABJRU5ErkJggg==)
![jsdom](https://img.shields.io/badge/21.1.1-dbc01d?style=for-the-badge&logo=data:image/png;base64,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&logoColor=black)



**Crawl, scrape, store and serve news articles from 3 of the most popular Vietnamese news websites: _[VnExpress](https://vnexpress.net/)_, _[Tuoi Tre](https://tuoitre.vn/)_ and _[Thanh Nien](https://thanhnien.vn/)_.**

> _**Disclaimer:**_ The main purpose of this project is to help me learn more about web scraping, data engineering and REST API. According to the Terms of Services of most news websites, redistributing articles' content is prohibited. I am not responsible for and do not endorse any misuse of the tool or data retrieved using it. The RapidAPI endpoint only serves the metadata of the articles, not their content.

## Table of Contents

- [API Documentation](#api-documentation)
- [Run locally](#run-locally)
    - [Set up](#set-up)
    - [Usage](#usage)
        - [Run the API server](#run-the-api-server)
        - [Crawl and scrape articles](#crawl-and-scrape-articles)
        - [Query the database](#query-the-database)


## API Documentation

Visit [RapidAPI Hub Listing](https://rapidapi.com/itsdmd/api/vietnamese-news) of this API for usage and demo of the endpoint.

The API provide the following metadata:

- URL
- Title
- Description
- Category
- Topic tags\*
    - Title
    - URL
- Authors’ detail
    - Name
    - Profile URL\*
- Publish date
    - Day, month, year, hour, minute as padded string (“01”, “10”, etc.)
    - ISO Date (yyyy-mm-ddThh:mm:00Z)\*\*

> \*: Can be empty due to website's structure.<br/>
> \*\*: The ISO time will be in UTC+0 timezone. This means that it will be 7 hours behind the timestamp saved in other fields.

The news served by the API are mostly related to politic, business and civic events. Database will be updated hourly.

## Run locally

### Set up

1. This project use [MongoDB](https://www.mongodb.com/) as the database engine. You can either install it [locally](https://www.mongodb.com/docs/manual/installation/) or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Log in and create a new database.

2. **Node.js v18.7.0** & **npm v9.6.2** or higher must be installed on your machine.
    - [Windows](https://nodejs.org/en/download/package-manager#windows-1)
    - [macOS](https://nodejs.org/en/download/package-manager#macos)
    - [Other](https://nodejs.org/en/download/package-manager)

3. Clone this repository and install the dependencies

    ```bash
    git clone https://github.com/itsdmd/VietnameseNewsAPI.git
    cd ./VietnameseNewsAPI/news-api
    npm install
    ```

4. Create `.env` file inside `news-api` directory and add the following environment variables

    ```bash
    # ./news-api/.env

    # MongoDB connection string
    DATABASE_URL="mongodb://<username>:<password>@<host>/<databaseName>?authSource=admin"

    # Default port for the API server
    PORT=3000
    ```

### Usage

#### Run the API server

```bash
npm run start
```

#### Crawl and scrape articles

1. Open [refetch.js](./news-api/src/scripts/refetch.js).
2. Scroll to the bottom of the file.
3. Change the value of the last argument of the functions.
    - The value is the number of pages to crawl to get the articles' URL. Each page contains 15-20 URLs.
    - In the example below, the script will crawl first 7 pages of the latest articles from [tuoitre.vn](https://tuoitre.vn/) (which is around 140 articles) and save them to the database.

    ```javascript
    // ./news-api/src/scripts/refetch.js
    
    await scrape("tt-vn", "https://tuoitre.vn/timeline/3/", "https://tuoitre.vn/timeline/3/trang-1.htm", 7);
    ```

    > :warning: **Warning:** Please do not use a large number. It can cause the website to block your IP address. You can alter the third argument of the function to start from a specific page.

4. Run the script

    ```bash
    npm run refetch
    ```

_**Notice:**_ Older articles might not follow the same structure as the latest ones. The scripts can still scrape most of the metadata fields, but the content might not. You can try uncommenting code blocks supporting legacy structure in [parser.js](./news-api/src/scripts/scraper/parser.js) (find _"legacy"_).

#### Query the database

You can see the schema of the collections in [`models`](./news-api/src/models) directory. To query the database, you can use [mongosh](https://docs.mongodb.com/mongodb-shell/) or any other MongoDB client.

To increase the query and/or sorting speed, you can create an [index](https://www.mongodb.com/docs/v5.0/indexes/) for the fields that you will query regularly. See [documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.createIndex/).

```bash
# mongosh - Create ascending index for the publish date
db.collection.createIndex( { "metadata.pubdate.isodate": 1 } )
```