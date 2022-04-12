First thing to clone the repository, and make sure the most recent versions of Angular CLI, python, and node are installed.
Next, in a terminal, navigate to the project directory. 

First thing to do is start the api, the following series of commands will be used to get the API running properly.

We start by running a virtual environment with the command:

myenv\Scripts\activate

Then navigate to the SlapStatAPI directory

Install django version 3.2.12 with the command

pip install django==3.2.12

Then run the command

 pip install django-cors-headers

Next run the command

pip install djangorestframework

Then run the API with the command 

python manage.py runserver

Now the API should be installed and running.

Second we want to run the website. This can be done by navigating back to the project directory and then navigating to the slap-stat directory.

Here angular materials needs to be installed with the command

ng add @angular/material

This will prompt for a couple inputs, select yes for all y/n prompts and choose the indigo/pink color option.

The website can now be run with the command 

ng serve

Now the website and the API should be running and the user can use the website on localhost:4200

