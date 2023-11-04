# CineFilmLand

Cinefilmland is a website repository for movies and tv series information.

This is only a side project and not for offical use. The data of movies and tv series are coming from an API and not created within this project. Any information that are not correct are not controlled by this project.

<br>

Check the website: <br>
[cinefilmland.vercel.app](https://cinefilmland.vercel.app/)

## Features

**Movies**
- Trending
    - Trending List Homepage
    - Trending List Page
- Popular
    - Popular List Homepage
    - Popular List Page
- Upcoming
    - Upcoming List Homepage
    - Upcoming List Page
- Discover
    - Discover List Homepage
    - Discover List Page
- Movie Information
    - Movie Detail
    - Offical Movie Website link
    - IMDB Site Link
    - Top Cast List
    - Top 6 Video List
- People Information
    - Cast and Crew List
    - Cast or Crew Detail page
- Video Information
    - Video List of a movie
 
- Search
    - Movie Home Page

<br>

**TV**
- still in progress

<br>

**About**
- has default layout, temporary information yet

<br>

## Todo list
- add trending actors page(not priority)
- about page(still ongoing, need to add correct information)
- add loading page(trending, popular, discover and upcoming on development, other pages have not yet started)

<br>

## Requirements
- Node version 20.1.0

<br>

## Installation

1. Open terminal

2. Go to the directory you want to install the repo

3. Clone this repo
    ```
    git clone  https://github.com/derrekdev/cinefilmland.git
    ```
4. Visit https://developer.themoviedb.org/docs and follow the instructions to get the API token
   
5. Open your code editor and create a file .env.local
   
6. Add the code below for the API
    ```
    API_URL="https://api.themoviedb.org/3/"
    API_TOKEN=<tmdb_api_token>
    ```
    > [!IMPORTANT]
    > change the **<tmdb_api_token>** to the correct API Token, you can find your own api here https://www.themoviedb.org/settings/api
<br>
<br>

## Other Information

Frameworks and libraries used on this project:
- NextJs 13
- ReactJs
- Typescript
- Tailwind
- Shadcn/ui
- Tanstack React Query
- Axios
- Sass

<br>

**API used for the movies and tv series data**

The Movie DB <br>
https://developer.themoviedb.org/docs
> [!NOTE]
> This is a free API but you need to register to get the API Token
