# Like-Or-Hate
**[Live Link](https://like-or-hate.herokuapp.com/)**

Like-Or-Hate is an Instagram clone created by Benjamin Ash, Ananya Hans, Nathan Mount, and Christian Pettet.

All users can browse a selection of user posts, comment on posts, and up/downvote posts. In Like-Or-Hate, voting has consequences, and if more users hate a post than like it, the post will be deleted!

Any user can create a post, and upload any image to the website which will in-turn be hosted on an AWS (Amazon Web Services) S3 (Simple Storage Solution) bucket to offload server load.

## Database Diagram
![like-or-hate](./assets/images/Like-Or-Hate.png)

## Technologies and Packages Used
### Backend
* Amazon Web Services (AWS) Simple Storage Solution (S3)
* Python
* Flask
* WTForms
* SQLAlchemy
* Alembic
* PostgreSQL
* Heroku

### Frontend
* HTML5
* CSS3
* JavaScript
* React
* Redux

## Future Features
* Implement web sockets to chat with other users
* Personalized views for posts based on user and post locations

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/composerben/flask-group-project.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your the app.

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   ```

6. To run the React App in development, start a new terminal instance, navigate to the correct directory, install all dependencies, and start react.
```bash
cd react-app/
npm install
npm start
```

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploying to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Run

   ```bash
   heroku login
   ```

4. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

5. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
6. [NON-M1 USERS] If not using an M1 Mac, continue with this step otherwise, skip ahead to the next step. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```
6. [M1 USERS] If using an M1 Mac, continue with this step, otherwise, skip to the next step. Build image with linux platform for heroku servers. Tag your app with the url for your apps registry. Use docker to push the image to the Heroku container registry.
```bash
docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
```

7. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

8. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

9. Under Settings find "Config Vars" and add any additional/secret .env variables.
