# CineFilmLand

Cinefilmland is a website repository for movies and tv series information.

This is only a side project and not for offical use. The data of movies and tv series are coming from an API and not created within this project. Any information that are not correct are not controlled by this project.

<br>

## Features

**Movies**
- Trending Movies List
- Popular Movies List
- Upcoming Movies List
- Discover Movies List
- Search Specific Movies

**TV**
- still in progress

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
